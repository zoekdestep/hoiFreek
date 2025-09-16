import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  gravity: number;
}

const colors = [
  'hsl(320, 75%, 65%)', // pink
  'hsl(200, 85%, 60%)', // blue
  'hsl(280, 70%, 65%)', // purple
  'hsl(35, 85%, 55%)',  // orange
  'hsl(142, 69%, 45%)', // green
  'hsl(60, 85%, 60%)',  // yellow
  'hsl(15, 85%, 60%)',  // red
];

const shapes = ['circle', 'square', 'triangle'] as const;

interface ConfettiExplosionProps {
  active: boolean;
}

export default function ConfettiExplosion({ active }: ConfettiExplosionProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) {
      setConfetti([]);
      return;
    }

    // Create MASSIVE amount of confetti (500 pieces!)
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 500; i++) {
      pieces.push({
        id: i,
        x: 50 + (Math.random() - 0.5) * 20, // Center with slight spread
        y: 50 + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 15, // High velocity spread
        vy: (Math.random() - 0.5) * 15,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        size: Math.random() * 12 + 8, // Bigger pieces
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        gravity: Math.random() * 0.3 + 0.2,
      });
    }
    setConfetti(pieces);

    // Animate confetti
    const animate = () => {
      setConfetti(prevConfetti => 
        prevConfetti.map(piece => ({
          ...piece,
          x: piece.x + piece.vx,
          y: piece.y + piece.vy,
          vx: piece.vx * 0.99, // Air resistance
          vy: piece.vy + piece.gravity, // Gravity
          rotation: piece.rotation + piece.rotationSpeed,
        })).filter(piece => 
          piece.x > -10 && piece.x < 110 && piece.y < 120 // Keep on screen longer
        )
      );
    };

    const interval = setInterval(animate, 16); // 60fps
    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute transition-all duration-75"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            transform: `rotate(${piece.rotation}deg)`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.shape === 'circle' ? piece.color : piece.shape === 'square' ? piece.color : 'transparent',
            borderRadius: piece.shape === 'circle' ? '50%' : '0',
            clipPath: piece.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            borderLeft: piece.shape === 'triangle' ? `${piece.size / 2}px solid transparent` : 'none',
            borderRight: piece.shape === 'triangle' ? `${piece.size / 2}px solid transparent` : 'none',
            borderBottom: piece.shape === 'triangle' ? `${piece.size}px solid ${piece.color}` : 'none',
          }}
        />
      ))}
    </div>
  );
}