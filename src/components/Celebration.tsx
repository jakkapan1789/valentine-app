import { motion } from "framer-motion";
import { useMemo } from "react";

const confettiColors = [
  "hsl(340 80% 60%)",
  "hsl(350 90% 65%)",
  "hsl(0 75% 55%)",
  "hsl(30 90% 70%)",
  "hsl(50 90% 70%)",
  "hsl(340 60% 80%)",
];

const Celebration = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.8,
        color: confettiColors[i % confettiColors.length],
        size: 6 + Math.random() * 10,
        rotation: Math.random() * 360,
        duration: 2 + Math.random() * 2,
      })),
    [],
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        background:
          "linear-gradient(135deg, hsl(340 60% 92%), hsl(350 80% 88%), hsl(340 80% 94%))",
      }}
    >
      {/* Confetti */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed rounded-full"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 40,
            rotate: p.rotation + 720,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}

      {/* Message */}
      <motion.div
        className="text-center z-10 px-6"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <motion.div
          className="text-6xl sm:text-8xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️✨
        </motion.div>
        <h1
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{
            fontFamily: "var(--font-display)",
            color: "hsl(340 80% 45%)",
          }}
        >
          Yayyyyy!!
        </h1>
        <p className="text-xl sm:text-2xl text-foreground/80 font-semibold">
          I love you so much ❤️✨
        </p>
        <motion.div
          className="mt-8 flex justify-center gap-3 text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {["💖", "💕", "💗", "💘", "💝"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Celebration;
