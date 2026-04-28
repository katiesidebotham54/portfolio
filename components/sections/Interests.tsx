"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { LucideIcon } from "@/components/ui/lucide-icon";
import { interests } from "@/lib/data";
import { cn } from "@/lib/utils";

// ---- Web Audio piano ----
const NOTES: Record<number, number> = {
  0: 261.63, 1: 293.66, 2: 329.63, 3: 349.23,
  4: 392.0,  5: 440.0,  6: 493.88, 7: 523.25,
};

function playNote(frequency: number) {
  try {
    const ctx = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = frequency;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.8);
  } catch { /* unsupported */ }
}

function PianoKeys() {
  const [pressed, setPressed] = useState<number | null>(null);
  const handleKey = (i: number) => {
    setPressed(i);
    playNote(NOTES[i]);
    setTimeout(() => setPressed(null), 200);
  };
  return (
    <div className="flex gap-1.5 mt-4">
      {Object.keys(NOTES).map((_, i) => (
        <button
          key={i}
          onMouseDown={() => handleKey(i)}
          onTouchStart={(e) => { e.preventDefault(); handleKey(i); }}
          className="flex-1 h-14 rounded-b-lg border border-white/20 text-xs font-mono flex items-end justify-center pb-1.5 transition-all duration-75 select-none"
          style={{
            background: pressed === i ? "var(--accent-primary)" : "rgba(255,255,255,0.12)",
            color: pressed === i ? "white" : "rgba(255,255,255,0.5)",
            transform: pressed === i ? "scaleY(0.95)" : "scaleY(1)",
          }}
        >
          {["C","D","E","F","G","A","B","C"][i]}
        </button>
      ))}
    </div>
  );
}

// Bento layout — ordered render list with col/row spans
// Desktop (4-col):
//   Row 1-2: [hike 2×2]  [camera 1×2]   [foodie 1×2]
//   Row 3-4: [piano 2×2] [icecream 1×2] [baking 1×2]
//   Row 5:   [pickle 1×1] [weights 1×1] [sudoku 1×1] [puzzle 1×1]
const bentoLayout: Array<{ type: string; col: 1 | 2; row: 1 | 2 }> = [
  { type: "hike",       col: 2, row: 2 },
  { type: "camera",     col: 1, row: 2 },
  { type: "foodie",     col: 1, row: 2 },
  { type: "piano",      col: 2, row: 2 },
  { type: "icecream",   col: 1, row: 2 },
  { type: "baking",     col: 1, row: 2 },
  { type: "pickleball", col: 1, row: 1 },
  { type: "weights",    col: 1, row: 1 },
  { type: "sudoku",     col: 1, row: 1 },
  { type: "puzzle",     col: 1, row: 1 },
];

const interestMap = Object.fromEntries(interests.map((item) => [item.type, item]));

type InterestItem = (typeof interests)[number];

export function Interests() {
  return (
    <section id="interests" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <BlurFade>
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">interests</h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
      </BlurFade>

      <BlurFade delay={0.1}>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          style={{ gridAutoRows: "170px" }}
        >
          {bentoLayout.map(({ type, col, row }, i) => {
            const item = interestMap[type];
            if (!item) return null;
            return <BentoTile key={type} item={item} col={col} row={row} index={i} />;
          })}
        </div>
      </BlurFade>
    </section>
  );
}

function BentoTile({
  item,
  col,
  row,
  index,
}: {
  item: InterestItem;
  col: 1 | 2;
  row: 1 | 2;
  index: number;
}) {
  const isPiano = item.type === "piano";
  const isLarge = row === 2;

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        col === 2 ? "col-span-2" : "col-span-1",
        // Piano is always 2 rows so keys fit; other tall items only on md+
        isPiano ? "row-span-2" : isLarge ? "row-span-1 md:row-span-2" : "row-span-1"
      )}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.025, zIndex: 10, transition: { duration: 0.18 } }}
    >
      {/* Background */}
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={item.label}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 25% 35%, ${item.accent}40 0%, transparent 60%),
                         radial-gradient(ellipse at 78% 75%, ${item.accent}22 0%, transparent 50%),
                         var(--surface)`,
          }}
        />
      )}

      {/* Dark overlay for readability on photo tiles */}
      {item.image && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5" />
      )}

      {/* Accent top line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 z-10"
        style={{ background: item.accent }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4">
        <div className="mb-2" style={{ color: item.image ? "white" : item.accent }}>
          <LucideIcon name={item.icon} size={isLarge ? 32 : 22} strokeWidth={1.5} />
        </div>

        <p
          className={cn(
            "font-semibold leading-tight",
            isLarge ? "text-xl" : "text-sm",
            item.image ? "text-white" : "text-[var(--foreground)]"
          )}
        >
          {item.label}
        </p>

        {isPiano && <PianoKeys />}
      </div>
    </motion.div>
  );
}
