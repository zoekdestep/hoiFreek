SixStarReview — quick run instructions

Prerequisites
- Node.js (v18+ recommended)
- npm

Install

1. Install dependencies:

   npm install

Build

1. Build the client and bundle the server (produces `dist/`):

   npm run build

Run (production)

1. Start the built server (default port 5000). If port 5000 is in use on your machine, specify PORT:

   PORT=5001 npm run start

Run (development)

1. Start dev server (uses tsx):

   npm run dev

Notes & Troubleshooting
- If you see errors binding to port 5000, macOS may reserve that port for system services; choose a different port via the PORT environment variable.
- Don't commit `node_modules` or `dist` — they're gitignored.
- If you get type errors, run `npm run check`.
