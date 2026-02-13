import { useMemo } from "react";

const hearts = ["💕", "💖", "💗", "💓", "🩷", "❤️", "💘"];

const FloatingHearts = ({ count = 20 }: { count?: number }) => {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        emoji: hearts[i % hearts.length],
        left: Math.random() * 100,
        size: 14 + Math.random() * 22,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    [count],
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
