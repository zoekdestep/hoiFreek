import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
}

const colors = [
  'hsl(320, 75%, 65%)', // pink
  'hsl(200, 85%, 60%)', // blue
  'hsl(280, 70%, 65%)', // purple
  'hsl(35, 85%, 55%)',  // orange
  'hsl(142, 69%, 45%)', // green
];

const shapes = ['circle', 'square', 'triangle'] as const;

export default function ConfettiBackground() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 200; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute opacity-30"
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