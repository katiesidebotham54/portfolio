"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { LucideIcon } from "@/components/ui/lucide-icon";
import { leadership } from "@/lib/data";

const cardBorders: Record<string, string> = {
  "accent-primary": "border-[var(--accent-primary)]/30 hover:border-[var(--accent-primary)]/60",
  "accent-secondary": "border-[var(--accent-secondary)]/30 hover:border-[var(--accent-secondary)]/60",
  "accent-tertiary": "border-[var(--accent-tertiary)]/30 hover:border-[var(--accent-tertiary)]/60",
};
const cardBg: Record<string, string> = {
  "accent-primary": "bg-[var(--accent-primary)]/5",
  "accent-secondary": "bg-[var(--accent-secondary)]/5",
  "accent-tertiary": "bg-[var(--accent-tertiary)]/5",
};
const textColor: Record<string, string> = {
  "accent-primary": "text-[var(--accent-primary)]",
  "accent-secondary": "text-[var(--accent-secondary)]",
  "accent-tertiary": "text-[var(--accent-tertiary)]",
};

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <BlurFade>
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">leadership</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item, i) => (
            <BlurFade key={item.id} delay={i * 0.1}>
              <div
                className={`h-full rounded-2xl border ${cardBorders[item.color]} ${cardBg[item.color]} p-6 transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`mt-0.5 ${textColor[item.color]}`}>
                    <LucideIcon name={item.icon} size={24} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${textColor[item.color]}`}>{item.role}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.org}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">{item.description}</p>

                {/* Impact numbers */}
                <div className="flex gap-4 flex-wrap">
                  {item.impact.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <div className={`font-mono text-2xl font-bold ${textColor[item.color]} flex items-baseline gap-0.5`}>
                        <NumberTicker value={stat.value} delay={0.3 + i * 0.1} />
                        <span>{stat.suffix}</span>
                      </div>
                      <span className="text-xs text-[var(--muted)]">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
