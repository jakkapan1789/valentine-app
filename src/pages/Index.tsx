// import { useState, useCallback, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import FloatingHearts from "@/components/FloatingHearts";
// import Celebration from "@/components/Celebration";

// const Index = () => {
//   const [accepted, setAccepted] = useState(false);
//   const [noCount, setNoCount] = useState(0);
//   const [noPos, setNoPos] = useState<{ x?: number; y?: number }>({});
//   const [yesScale, setYesScale] = useState(1);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const noMessages = ["", "Are you sure? 🥺", "Please think again... 💔"];

//   const escaping = noCount >= 2;

//   const moveNoButton = useCallback(() => {
//     const pad = 80;
//     const x = pad + Math.random() * (window.innerWidth - pad * 2);
//     const y = pad + Math.random() * (window.innerHeight - pad * 2);
//     setNoPos({ x, y });
//   }, []);

//   const handleNo = () => {
//     const next = noCount + 1;
//     setNoCount(next);
//     setYesScale((s) => Math.min(s + 0.15, 2));
//     if (next >= 2) moveNoButton();
//   };

//   const handleNoHover = () => {
//     if (escaping) moveNoButton();
//   };

//   if (accepted) {
//     return <Celebration />;
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       <FloatingHearts count={25} />

//       <motion.div
//         className="relative z-10 bg-card rounded-3xl shadow-2xl p-8 sm:p-12 mx-4 max-w-md w-full text-center"
//         initial={{ scale: 0.8, opacity: 0, y: 30 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 180, damping: 18 }}
//         style={{
//           boxShadow:
//             "0 20px 60px -15px hsl(340 80% 60% / 0.25), 0 0 0 1px hsl(340 80% 60% / 0.08)",
//         }}
//       >
//         {/* Envelope / heart topper */}
//         <motion.div
//           className="text-6xl sm:text-7xl mb-4"
//           animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         >
//           💌
//         </motion.div>

//         <h1
//           className="text-2xl sm:text-3xl font-bold mb-2 leading-snug"
//           style={{
//             fontFamily: "var(--font-display)",
//             color: "hsl(340 80% 45%)",
//           }}
//         >
//           Will you be my Valentine?
//         </h1>
//         <p className="text-3xl mb-8">💖</p>

//         {/* Subtext from "No" attempts */}
//         <AnimatePresence mode="wait">
//           {noCount > 0 && noCount <= 2 && (
//             <motion.p
//               key={noCount}
//               className="text-muted-foreground font-semibold mb-4 text-lg"
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//             >
//               {noMessages[Math.min(noCount, 2)]}
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* Buttons */}
//         <div className="flex items-center justify-center gap-4 flex-wrap">
//           <motion.button
//             onClick={() => setAccepted(true)}
//             className="rounded-full font-bold text-primary-foreground shadow-lg cursor-pointer"
//             style={{
//               background:
//                 "linear-gradient(135deg, hsl(340 80% 60%), hsl(350 90% 65%))",
//               padding: "14px 36px",
//               fontSize: `${1 + (yesScale - 1) * 0.5}rem`,
//             }}
//             animate={{ scale: yesScale }}
//             whileHover={{
//               scale: yesScale * 1.08,
//               boxShadow: "0 8px 30px hsl(340 80% 60% / 0.4)",
//             }}
//             whileTap={{ scale: yesScale * 0.95 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             Yes 💕
//           </motion.button>

//           {!escaping && (
//             <motion.button
//               onClick={handleNo}
//               className="rounded-full font-bold bg-secondary text-secondary-foreground shadow-md cursor-pointer"
//               style={{ padding: "14px 36px" }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               No 😢
//             </motion.button>
//           )}
//         </div>
//       </motion.div>

//       {/* Escaping No button */}
//       <AnimatePresence>
//         {escaping && (
//           <motion.button
//             key="escaping-no"
//             className="fixed z-50 rounded-full font-bold bg-secondary text-secondary-foreground shadow-md cursor-pointer"
//             style={{ padding: "12px 28px", fontSize: "0.85rem" }}
//             initial={{ opacity: 1 }}
//             animate={{
//               left: noPos.x ?? window.innerWidth / 2,
//               top: noPos.y ?? window.innerHeight - 100,
//             }}
//             transition={{ type: "spring", stiffness: 500, damping: 25 }}
//             onClick={handleNo}
//             onMouseEnter={handleNoHover}
//             onTouchStart={handleNoHover}
//           >
//             No 😢
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Index;
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import ScratchCard from "@/components/ScratchCard";
import ValentineMessage from "@/components/ValentineMessage";
import valentineImage from "@/assets/valentine-reveal.jpg";

const Index = () => {
  const [page, setPage] = useState<"scratch" | "message">("scratch");
  const [showNext, setShowNext] = useState(false);

  const handleReveal = useCallback(() => {
    setShowNext(true);
  }, []);

  if (page === "message") {
    return <ValentineMessage />;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingHearts count={20} />

      <motion.div
        className="relative z-10 bg-card rounded-3xl shadow-2xl p-8 sm:p-12 mx-4 max-w-md w-full text-center"
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{
          boxShadow:
            "0 20px 60px -15px hsl(340 80% 60% / 0.25), 0 0 0 1px hsl(340 80% 60% / 0.08)",
        }}
      >
        <motion.div
          className="text-5xl sm:text-6xl mb-4"
          animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          💌
        </motion.div>

        <h1
          className="text-xl sm:text-2xl font-bold mb-6 leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            color: "hsl(340, 80%, 45%)",
          }}
        >
          I have something special for you... 💖
        </h1>

        <ScratchCard
          imageSrc={valentineImage}
          width={400}
          height={400}
          onReveal={handleReveal}
        />

        <AnimatePresence>
          {showNext && (
            <motion.button
              className="mt-6 rounded-full font-bold text-primary-foreground shadow-lg cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, hsl(340, 80%, 60%), hsl(350, 90%, 65%))",
                padding: "14px 40px",
                fontSize: "1.1rem",
              }}
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 30px hsl(340, 80%, 60%, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage("message")}
            >
              Next 💕
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Index;
