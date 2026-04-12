"use client";
import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { HeroParticles } from "@/components/ui/hero-particles";
import { heroRotatingTitles, heroStats, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero">
    <AuroraBackground className="min-h-screen pt-20">
      <HeroParticles />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-sm font-medium text-[var(--accent-primary)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-secondary)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-secondary)]" />
          </span>
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <AnimatedGradientText>katherine (katie)</AnimatedGradientText>
            <br />
            <span className="text-[var(--foreground)]">sidebotham</span>
          </h1>
        </motion.div>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-8 h-8 flex items-center"
        >
          <p className="text-lg sm:text-xl text-[var(--muted)] font-medium">
            <WordRotate words={heroRotatingTitles} />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="max-w-2xl text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-10"
        >
          full-stack engineer at{" "}
          <span className="text-[var(--foreground)] font-semibold">ridgeline</span>,
          building with ai every day. climate-tech co-founder, innovation award winner, and chronic over-shipper.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 w-full max-w-xl"
        >
          {heroStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="font-mono text-3xl font-bold text-[var(--foreground)] flex items-baseline gap-0.5">
                <NumberTicker
                  value={stat.value}
                  delay={0.6 + i * 0.1}
                  decimalPlaces={stat.value % 1 !== 0 ? 2 : 0}
                  className="text-[var(--accent-primary)]"
                />
                <span className="text-[var(--accent-primary)]">{stat.suffix}</span>
              </div>
              <div className="text-xs text-[var(--muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-primary)] text-white font-semibold hover:brightness-110 transition-all duration-200 shadow-lg shadow-[var(--accent-primary)]/25"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={siteConfig.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold hover:bg-[var(--border)] transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--muted)] animate-bounce-gentle"
        >
          <span className="text-xs">scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </div>
    </AuroraBackground>
    </section>
  );
}
