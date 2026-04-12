"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { skillCategories, allSkills } from "@/lib/data";

const tabColors = [
  "var(--accent-primary)",
  "var(--accent-secondary)",
  "var(--accent-tertiary)",
  "#f59e0b",
];

export function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <BlurFade>
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">skills</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
        </BlurFade>

        {/* Tabs */}
        <BlurFade delay={0.1}>
          <div className="flex gap-2 flex-wrap mb-8">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  activeTab === cat.id
                    ? { background: tabColors[i], color: "#fff" }
                    : { background: "var(--surface)", border: "1px solid var(--border)", color: "var(--muted)" }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                className="px-4 py-2 rounded-xl text-sm font-medium border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/5 transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Marquee ticker */}
        <BlurFade delay={0.3}>
          <div className="border-t border-b border-[var(--border)] py-4 overflow-hidden">
            <Marquee pauseOnHover repeat={2}>
              {allSkills.map((skill) => (
                <span
                  key={skill}
                  className="mx-4 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--muted)] whitespace-nowrap font-mono"
                >
                  {skill}
                </span>
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
