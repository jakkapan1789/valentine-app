import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

interface Props {
  onNext: () => void;
}

const TEXT = "Happy Valentine Day 💖";

const ValentineIntro = ({ onNext }: Props) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setDisplayedText(TEXT.slice(0, index));

      if (index === TEXT.length) {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 800);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-rose-100">
      <FloatingHearts count={30} />

      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="mb-10 whitespace-pre-wrap leading-relaxed"
          style={{
            fontSize: "62px",
            color: "#ff2e88",
            textShadow:
              "0 0 8px rgba(255, 46, 136, 0.7), 0 0 16px rgba(255, 0, 102, 0.4)",
            lineHeight: "1.8",
            minHeight: "120px",
          }}
        >
          {displayedText}

          {/* Cursor ไม่ดัน layout */}
          <motion.span
            style={{ marginLeft: 6 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        </motion.h1>

        <AnimatePresence>
          {showButton && (
            <motion.button
              onClick={onNext}
              className="rounded-md font-bold text-white shadow-xl"
              style={{
                // fontFamily: "'Press Start 2P', cursive",
                background: "linear-gradient(135deg, #ff2e88, #ff5ca8)",
                padding: "16px 36px",
                fontSize: "14px",
                letterSpacing: "2px",
                boxShadow: "0 0 12px rgba(255, 46, 136, 0.6)",
              }}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ▶ START
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ValentineIntro;
