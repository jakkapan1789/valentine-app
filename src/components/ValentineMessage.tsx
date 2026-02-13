// import { motion } from "framer-motion";
// import { useMemo } from "react";
// // import FloatingHearts from "./FloatingHearts";

// const confettiColors = [
//   "hsl(340, 80%, 60%)",
//   "hsl(350, 90%, 65%)",
//   "hsl(0, 75%, 55%)",
//   "hsl(30, 90%, 70%)",
//   "hsl(50, 90%, 70%)",
//   "hsl(340, 60%, 80%)",
// ];

// const ValentineMessage = () => {
//   const particles = useMemo(
//     () =>
//       Array.from({ length: 50 }, (_, i) => ({
//         id: i,
//         x: Math.random() * 100,
//         delay: Math.random() * 1,
//         color: confettiColors[i % confettiColors.length],
//         size: 5 + Math.random() * 8,
//         duration: 2.5 + Math.random() * 2,
//       })),
//     [],
//   );

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       style={{
//         background:
//           "linear-gradient(135deg, hsl(340, 60%, 92%), hsl(350, 80%, 88%), hsl(340, 80%, 94%))",
//       }}
//     >
//       {/* <FloatingHearts count={30} /> */}

//       {/* Confetti */}
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="fixed rounded-full"
//           style={{
//             left: `${p.x}%`,
//             top: -20,
//             width: p.size,
//             height: p.size,
//             backgroundColor: p.color,
//           }}
//           animate={{
//             y: [0, window.innerHeight + 40],
//             rotate: [0, 720],
//             opacity: [1, 1, 0],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             ease: "easeIn",
//             repeat: Infinity,
//             repeatDelay: 1.5,
//           }}
//         />
//       ))}

//       {/* Message */}
//       <motion.div
//         className="text-center z-10 px-6 max-w-lg"
//         initial={{ scale: 0, rotate: -5 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.3 }}
//       >
//         <h1
//           className="text-3xl sm:text-5xl font-bold mb-6"
//           style={{
//             fontFamily: "var(--font-display)",
//             color: "hsl(340, 80%, 45%)",
//           }}
//         >
//           Happy Valentine's Day
//         </h1>

//         <motion.div
//           className="space-y-3 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <p className="text-lg sm:text-xl text-foreground/80 font-semibold">
//             Thank you for being in my life.
//           </p>
//           <p className="text-lg sm:text-xl text-foreground/80 font-semibold">
//             You make every day brighter 🌸✨
//           </p>
//         </motion.div>

//         <motion.div
//           className="flex justify-center gap-3 text-4xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
//         >
//           {["💖", "💕", "💗", "💘", "💝"].map((e, i) => (
//             <motion.span
//               key={i}
//               animate={{ y: [0, -12, 0] }}
//               transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
//             >
//               {e}
//             </motion.span>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ValentineMessage;

// import { motion } from "framer-motion";
// import { useMemo } from "react";

// const confettiColors = [
//   "hsl(340, 80%, 60%)",
//   "hsl(350, 90%, 65%)",
//   "hsl(0, 75%, 55%)",
//   "hsl(30, 90%, 70%)",
//   "hsl(50, 90%, 70%)",
//   "hsl(340, 60%, 80%)",
// ];

// const ValentineMessage = () => {
//   const particles = useMemo(
//     () =>
//       Array.from({ length: 50 }, (_, i) => ({
//         id: i,
//         x: Math.random() * 100,
//         delay: Math.random() * 1,
//         color: confettiColors[i % confettiColors.length],
//         size: 5 + Math.random() * 8,
//         duration: 2.5 + Math.random() * 2,
//       })),
//     [],
//   );

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       style={{
//         background:
//           "linear-gradient(135deg, hsl(340, 60%, 92%), hsl(350, 80%, 88%), hsl(340, 80%, 94%))",
//       }}
//     >
//       {/* Confetti */}
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="fixed rounded-full"
//           style={{
//             left: `${p.x}%`,
//             top: -20,
//             width: p.size,
//             height: p.size,
//             backgroundColor: p.color,
//           }}
//           animate={{
//             y: [0, window.innerHeight + 40],
//             rotate: [0, 720],
//             opacity: [1, 1, 0],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             ease: "easeIn",
//             repeat: Infinity,
//             repeatDelay: 1.5,
//           }}
//         />
//       ))}

//       {/* Message */}
//       <motion.div
//         className="text-center z-10 px-6 max-w-lg"
//         initial={{ scale: 0, rotate: -5 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.3 }}
//       >
//         <h1
//           className="text-3xl sm:text-5xl font-bold mb-6"
//           style={{
//             fontFamily: "var(--font-display)",
//             color: "hsl(340, 80%, 45%)",
//           }}
//         >
//           Happy Valentine's Day 💖
//         </h1>

//         <motion.div
//           className="space-y-3 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <p className="text-lg sm:text-xl text-foreground/80 font-semibold">
//             From the moment you walked into my life, everything became brighter.
//           </p>
//           <p className="text-lg sm:text-xl text-foreground/80 font-semibold">
//             You are my peace, my happiness, and the most beautiful part of my
//             every day.
//           </p>
//           <p className="text-lg sm:text-xl text-foreground/80 font-semibold">
//             No matter where life takes us, we will walk side by side, always. 💕
//           </p>
//         </motion.div>

//         <motion.div
//           className="flex justify-center gap-3 text-4xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
//         >
//           {["💖", "💕", "💗", "💘", "💝"].map((e, i) => (
//             <motion.span
//               key={i}
//               animate={{ y: [0, -12, 0] }}
//               transition={{
//                 duration: 1.2,
//                 delay: i * 0.15,
//                 repeat: Infinity,
//               }}
//             >
//               {e}
//             </motion.span>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ValentineMessage;

import { motion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

const confettiColors = [
  "hsl(340, 80%, 60%)",
  "hsl(350, 90%, 65%)",
  "hsl(0, 75%, 55%)",
  "hsl(30, 90%, 70%)",
  "hsl(50, 90%, 70%)",
  "hsl(340, 60%, 80%)",
];

const FULL_TEXT = `From the moment you walked into my life,
everything became brighter.

You are my peace, my happiness,
and the most beautiful part of my every day.

No matter where life takes us,
we will walk side by side, always. 💕`;

const ValentineMessage = () => {
  const [displayedText, setDisplayedText] = useState("");

  // ✨ Typewriter effect
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setDisplayedText(FULL_TEXT.slice(0, index));

      if (index === FULL_TEXT.length) {
        clearInterval(interval);
      }
    }, 100); // ความเร็วพิมพ์

    return () => clearInterval(interval);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 1,
        color: confettiColors[i % confettiColors.length],
        size: 5 + Math.random() * 8,
        duration: 2.5 + Math.random() * 2,
      })),
    [],
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background:
          "linear-gradient(135deg, hsl(340, 60%, 92%), hsl(350, 80%, 88%), hsl(340, 80%, 94%))",
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
          animate={{
            y: [0, window.innerHeight + 40],
            rotate: [0, 720],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
      ))}

      {/* Message */}
      <motion.div
        className="text-center z-10 px-6 max-w-2xl"
        initial={{ scale: 0, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.3 }}
      >
        <h1
          className="text-3xl sm:text-5xl font-bold mb-6"
          style={{
            fontFamily: "var(--font-display)",
            color: "hsl(340, 80%, 45%)",
          }}
        >
          Happy Valentine's Day 💖
        </h1>

        <div className="whitespace-pre-wrap text-lg sm:text-xl text-foreground/80 font-semibold leading-relaxed min-h-[220px]">
          {displayedText}
          {/* Cursor */}
          <motion.span
            style={{ marginLeft: 4 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        </div>

        <motion.div
          className="flex justify-center gap-3 text-4xl mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {["💖", "💕", "💗", "💘", "💝"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                repeat: Infinity,
              }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ValentineMessage;
