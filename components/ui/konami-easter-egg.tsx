"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function KonamiEasterEgg() {
  const [keys, setKeys] = useState<string[]>([]);
  const [active, setActive] = useState(false);
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (JSON.stringify(next) === JSON.stringify(KONAMI)) {
          setActive(true);
          return [];
        }
        return next;
      });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 100;
    const interval = setInterval(() => {
      frame++;
      setScanLine((frame / total) * 100);
      if (frame >= total) {
        clearInterval(interval);
        setTimeout(() => {
          setActive(false);
          setScanLine(0);
        }, 1000);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] pointer-events-none"
        >
          {/* Overlay tint */}
          <div className="absolute inset-0 bg-red-900/10" />

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-1 bg-red-500/80"
            style={{ top: `${scanLine}%` }}
          />

          {/* Pokéball icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 0.6 }}
              className="text-[120px]"
            >
              ⚡
            </motion.div>
          </div>

          {/* Message */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-3 rounded-full bg-red-500/90 text-white font-bold font-mono text-sm"
            >
              POKEPRICE SCAN ACTIVATED - A wild Katie appeared!
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
