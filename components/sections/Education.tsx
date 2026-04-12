"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { LucideIcon } from "@/components/ui/lucide-icon";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <BlurFade>
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">education</h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
      </BlurFade>

      <BlurFade delay={0.1}>
        <div className="relative rounded-2xl border border-[var(--accent-secondary)]/30 bg-[var(--surface)] p-8 overflow-hidden max-w-2xl">
          <BorderBeam colorFrom="var(--accent-secondary)" colorTo="var(--accent-primary)" duration={12} />

          {/* School */}
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 flex items-center justify-center shrink-0 text-[var(--accent-secondary)]">
              <LucideIcon name="GraduationCap" size={26} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">{education.school}</h3>
              <p className="text-[var(--accent-secondary)] font-medium">{education.degree}</p>
              <p className="text-sm text-[var(--muted)]">{education.minor}</p>
              <p className="text-xs text-[var(--muted)] mt-1 font-mono">
                {education.start} - {education.end}
              </p>
            </div>
          </div>

          {/* GPA */}
          <div className="flex items-center gap-2 mb-6 p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
            <span className="text-sm text-[var(--muted)]">GPA</span>
            <span className="font-mono text-3xl font-bold text-[var(--accent-secondary)]">
              <NumberTicker value={education.gpa} decimalPlaces={2} delay={0.3} />
            </span>
            <span className="text-sm text-[var(--muted)]">/ 4.0</span>
          </div>

          {/* Honors */}
          <div className="flex flex-wrap gap-2 mb-6">
            {education.honors.map((honor) => (
              <span
                key={honor.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 text-sm font-medium text-[var(--foreground)]"
              >
                <span className="text-[var(--accent-secondary)]">
                  <LucideIcon name={honor.icon} size={13} strokeWidth={2} />
                </span>
                {honor.label}
              </span>
            ))}
          </div>

          {/* Coursework */}
          <div>
            <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-1.5">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 rounded-lg bg-[var(--background)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
