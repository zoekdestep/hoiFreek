import ConfettiBackground from '../ConfettiBackground';

export default function ConfettiBackgroundExample() {
  return (
    <div className="relative h-screen w-full bg-background">
      <ConfettiBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-foreground text-2xl font-bold">Confetti Background Test</div>
      </div>
    </div>
  );
}