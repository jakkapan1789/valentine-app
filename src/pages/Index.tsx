// import { useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import FloatingHearts from "@/components/FloatingHearts";
// import ScratchCard from "@/components/ScratchCard";
// import ValentineMessage from "@/components/ValentineMessage";
// import valentineImage from "@/assets/valentine-reveal.jpg";
// import ValentineIntro from "@/components/ValentineIntro";

// const Index = () => {
//   //   const [page, setPage] = useState<"scratch" | "message">("scratch");
//   const [page, setPage] = useState<"intro" | "scratch" | "message">("intro");

//   const [showNext, setShowNext] = useState(false);

//   const handleReveal = useCallback(() => {
//     setShowNext(true);
//   }, []);
//   if (page === "intro") {
//     return <ValentineIntro onNext={() => setPage("scratch")} />;
//   }
//   if (page === "message") {
//     return <ValentineMessage />;
//   }

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <FloatingHearts count={20} />

//       <motion.div className="relative z-10  rounded-3xl p-8 sm:p-12 mx-4 max-w-md w-full text-center ">
//         <motion.div
//           className="text-5xl sm:text-6xl mb-4"
//           animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         >
//           💌
//         </motion.div>

//         <h1
//           className="text-xl sm:text-2xl font-bold mb-6 leading-snug"
//           style={{
//             fontSize: "42px",
//             color: "#ff2e88",
//             textShadow:
//               "0 0 8px rgba(255, 46, 136, 0.7), 0 0 16px rgba(255, 0, 102, 0.4)",
//             lineHeight: "1.8",
//           }}
//         >
//           You are my Valentine.
//         </h1>

//         <ScratchCard
//           imageSrc={valentineImage}
//           width={400}
//           height={400}
//           onReveal={handleReveal}
//         />

//         <AnimatePresence>
//           {showNext && (
//             <motion.button
//               className="mt-6 rounded-full font-bold text-primary-foreground shadow-lg cursor-pointer"
//               style={{
//                 background:
//                   "linear-gradient(135deg, hsl(340, 80%, 60%), hsl(350, 90%, 65%))",
//                 padding: "14px 40px",
//                 fontSize: "1.1rem",
//               }}
//               initial={{ opacity: 0, scale: 0.5, y: 10 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 15 }}
//               whileHover={{
//                 scale: 1.08,
//                 boxShadow: "0 8px 30px hsl(340, 80%, 60%, 0.4)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setPage("message")}
//             >
//               Next 💕
//             </motion.button>
//           )}
//         </AnimatePresence>
//       </motion.div>
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
import ValentineIntro from "@/components/ValentineIntro";

const Index = () => {
  const [page, setPage] = useState<"intro" | "scratch" | "message">("intro");
  const [showNext, setShowNext] = useState(false);

  const handleReveal = useCallback(() => {
    setShowNext(true);
  }, []);

  // ❌ หน้าแรกไม่ใช้ slide
  if (page === "intro") {
    return <ValentineIntro onNext={() => setPage("scratch")} />;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingHearts count={20} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="absolute w-full h-full flex items-center justify-center"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {page === "scratch" && (
            <div className="relative z-10 rounded-3xl p-8 sm:p-12 mx-4 max-w-md w-full text-center">
              <motion.div
                className="text-5xl sm:text-6xl mb-4"
                animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💌
              </motion.div>

              <h1
                className="text-xl sm:text-2xl font-bold mb-6 leading-snug"
                style={{
                  fontSize: "42px",
                  color: "#ff2e88",
                  textShadow:
                    "0 0 8px rgba(255, 46, 136, 0.7), 0 0 16px rgba(255, 0, 102, 0.4)",
                  lineHeight: "1.8",
                }}
              >
                You are my Valentine.
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
            </div>
          )}

          {page === "message" && <ValentineMessage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
