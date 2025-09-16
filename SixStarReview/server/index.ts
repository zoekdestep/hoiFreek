import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  // attempt to listen with reusePort when supported; if the platform
  // doesn't support it we'll retry without reusePort to avoid crashing
  const listenWithFallback = () => {
    const onError = (err: any) => {
      // if reusePort isn't supported, retry without it
      if (err && err.code === "ENOTSUP") {
        log("reusePort not supported on this platform; retrying without reusePort");
        server.off("error", onError);
        server.listen(port, "0.0.0.0", () => {
          log(`serving on port ${port}`);
        });
      } else {
        // re-throw other errors so they surface
        throw err;
      }
    };

    server.on("error", onError);

    // first try: use reusePort for better load distribution where available
    server.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
      server.off("error", onError);
      log(`serving on port ${port}`);
    });
  };

  listenWithFallback();
})();
