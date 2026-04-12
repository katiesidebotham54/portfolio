"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { LucideIcon } from "@/components/ui/lucide-icon";
import { interests } from "@/lib/data";

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
    <div className="flex gap-1 mt-4">
      {Object.keys(NOTES).map((_, i) => (
        <button
          key={i}
          onMouseDown={() => handleKey(i)}
          onTouchStart={(e) => { e.preventDefault(); handleKey(i); }}
          className="w-10 h-20 rounded-b-lg border border-white/20 text-xs font-mono flex items-end justify-center pb-2 transition-all duration-75 select-none"
          style={{
            background: pressed === i ? "var(--accent-primary)" : "rgba(255,255,255,0.12)",
            color: pressed === i ? "white" : "rgba(255,255,255,0.6)",
            transform: pressed === i ? "scaleY(0.95)" : "scaleY(1)",
          }}
        >
          {["C","D","E","F","G","A","B","C"][i]}
        </button>
      ))}
    </div>
  );
}

// ---- Slide variants ----
const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export function Interests() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, direction: number) => {
    setDir(direction);
    setIndex((((next) % interests.length) + interests.length) % interests.length);
  }, []);

  const prev = () => go(index - 1, -1);
  const next = () => go(index + 1, 1);

  // Auto-advance every 4s
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1, 1), 4000);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const item = interests[index];

  return (
    <section id="interests" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <BlurFade>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">interests</h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
        <p className="text-sm text-[var(--muted)] mb-10">Drag or use arrows to explore</p>
      </BlurFade>

      <BlurFade delay={0.1}>
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main carousel card */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <AnimatePresence custom={dir} mode="popLayout">
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
                className="absolute inset-0 select-none"
                style={{ cursor: "grab" }}
              >
                {/* Background: photo if available, else gradient placeholder */}
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 30% 40%, ${item.accent}30 0%, transparent 60%),
                                   radial-gradient(ellipse at 70% 70%, ${item.accent}18 0%, transparent 50%),
                                   var(--surface)`,
                    }}
                  />
                )}

                {/* Overlay gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div
                    className="mb-3 drop-shadow-lg"
                    style={{ color: item.accent, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
                  >
                    <LucideIcon name={item.icon} size={52} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-1">
                    {item.label}
                  </h3>
                  {!item.image && (
                    <p className="text-sm text-white/50 italic">Photo coming soon</p>
                  )}

                  {/* Piano keys overlay */}
                  {item.type === "piano" && <PianoKeys />}
                </div>

                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: item.accent }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrow buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {interests.map((interest, i) => (
              <button
                key={interest.type}
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={interest.label}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  background: i === index ? item.accent : "var(--border)",
                }}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide">
            {interests.map((interest, i) => (
              <button
                key={interest.type}
                onClick={() => go(i, i > index ? 1 : -1)}
                className="shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200"
                style={{
                  borderColor: i === index ? interest.accent : "transparent",
                  opacity: i === index ? 1 : 0.5,
                }}
                aria-label={interest.label}
              >
                {interest.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={interest.image}
                    alt={interest.label}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: `${interest.accent}20`, color: interest.accent }}
                  >
                    <LucideIcon name={interest.icon} size={24} strokeWidth={1.5} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
