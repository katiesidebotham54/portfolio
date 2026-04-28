"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ChevronUp, Trophy } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { AwardConfetti } from "@/components/ui/award-confetti";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  const card = (
    <div
      className={cn(
        "relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 overflow-hidden group",
        "hover:border-[var(--accent-primary)]/40 transition-colors duration-300",
        exp.featured && "border-[var(--accent-primary)]/30"
      )}
    >
      {exp.featured && <BorderBeam duration={8} colorFrom="var(--accent-primary)" colorTo="var(--accent-tertiary)" />}

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="w-10 h-10 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center shrink-0 overflow-hidden">
          {exp.logoUrl ? (
            <Image src={exp.logoUrl} alt={exp.company} width={28} height={28} className="object-contain" />
          ) : (
            <span className="font-bold text-[var(--accent-primary)] text-sm">{exp.logo}</span>
          )}
        </div>

        {/* Info — grows to fill space */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-[var(--foreground)] text-base">{exp.role}</h3>
            {exp.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-500 text-xs font-semibold">
                <Trophy size={10} />
                {exp.award}
              </span>
            )}
          </div>
          <p className="text-sm text-[var(--accent-primary)] font-medium">{exp.company}</p>
          <p className="text-xs text-[var(--muted)] mt-0.5">
            {exp.location} · {exp.type}
            {/* Date inline when photo takes the right column */}
            {exp.photo ? ` · ${exp.start} – ${exp.end}` : ""}
          </p>
        </div>

        {/* Right column: award photo OR date */}
        {exp.photo ? (
          <motion.div
            className="shrink-0 relative w-20 h-28 rounded-xl overflow-hidden shadow-lg"
            style={{ rotate: "2deg", border: "2px solid rgba(255,255,255,0.15)" }}
            whileHover={{ scale: 1.06, rotate: 0, transition: { duration: 0.2 } }}
          >
            <Image
              src={exp.photo}
              alt={exp.photoAlt ?? ""}
              fill
              className="object-cover"
            />
          </motion.div>
        ) : (
          <div className="shrink-0 text-xs text-[var(--muted)] font-mono whitespace-nowrap">
            {exp.start} - {exp.end}
          </div>
        )}
      </div>

      {/* Bullets */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          expanded ? "max-h-[800px]" : "max-h-[4.5rem]"
        )}
      >
        <ul className="space-y-1.5">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center gap-1 text-xs text-[var(--accent-primary)] hover:brightness-110 transition-all"
      >
        {expanded ? (
          <>
            <ChevronUp size={12} /> Less
          </>
        ) : (
          <>
            <ChevronDown size={12} /> More
          </>
        )}
      </button>
    </div>
  );

  return (
    <BlurFade
      delay={index * 0.1}
      yOffset={isLeft ? -20 : 20}
      className="relative"
    >
      {exp.featured ? (
        <AwardConfetti>{card}</AwardConfetti>
      ) : (
        card
      )}
    </BlurFade>
  );
}

function TimelineLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
      <motion.div
        className="w-full origin-top timeline-line rounded-full"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <BlurFade>
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">experience</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
        </BlurFade>

        <div className="relative">
          <TimelineLine />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
