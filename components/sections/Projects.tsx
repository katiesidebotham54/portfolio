"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, Play, X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { LucideIcon } from "@/components/ui/lucide-icon";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentColors: Record<string, string> = {
  pokeprice: "var(--accent-primary)",
  faro: "#f59e0b",
  climit: "var(--accent-secondary)",
};

function DemoModal({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--background)]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)]">
            <span className="text-sm font-medium text-[var(--foreground)]">{title} — demo</span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <div className="aspect-video w-full">
            <iframe
              src={url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [activeDemo, setActiveDemo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="projects" className="py-24 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <BlurFade>
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">projects</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => {
            const color = accentColors[project.id] || "var(--accent-primary)";
            return (
              <BlurFade key={project.id} delay={i * 0.1} className={cn(project.featured && "md:col-span-2 md:row-span-1")}>
                <MagicCard
                  className={cn(
                    "h-full group border border-[var(--border)] bg-[var(--background)] p-6 relative overflow-hidden",
                    project.featured && "md:min-h-[280px]"
                  )}
                  gradientColor={color}
                  gradientOpacity={0.06}
                >
                  <BorderBeam
                    duration={10}
                    colorFrom={color}
                    colorTo="transparent"
                    delay={i * 3}
                  />

                  {/* Icon badge */}
                  <div className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}18`, color }}>
                    <LucideIcon name={project.icon} size={22} strokeWidth={1.75} />
                  </div>

                  {/* Date */}
                  <span className="text-xs font-mono text-[var(--muted)] mb-2 block">{project.date}</span>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color }}
                  >
                    {project.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-medium text-[var(--foreground)] mb-3">{project.tagline}</p>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{project.description}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      >
                        <GitBranch size={14} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm transition-colors"
                        style={{ color }}
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                    {project.demoVideo && (
                      <button
                        onClick={() => setActiveDemo({ url: project.demoVideo!, title: project.name })}
                        className="flex items-center gap-1.5 text-sm transition-colors"
                        style={{ color }}
                      >
                        <Play size={14} />
                        Demo
                      </button>
                    )}
                  </div>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>
      </div>

      {activeDemo && (
        <DemoModal
          url={activeDemo.url}
          title={activeDemo.title}
          onClose={() => setActiveDemo(null)}
        />
      )}
    </section>
  );
}
