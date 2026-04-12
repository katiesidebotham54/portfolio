"use client";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { siteConfig } from "@/lib/data";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

type IconComponent = () => React.JSX.Element;
type LucideComponent = React.ComponentType<{ size?: number }>;

const contacts: {
  Icon: IconComponent | LucideComponent;
  label: string;
  value: string;
  href: string;
  color: string;
}[] = [
  {
    Icon: Mail as LucideComponent,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "var(--accent-primary)",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "katie-sidebotham",
    href: siteConfig.linkedin,
    color: "#0077b5",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: "katiesidebotham54",
    href: siteConfig.github,
    color: "var(--accent-tertiary)",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <BlurFade>
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">contact</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Copy */}
          <BlurFade delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                Let&apos;s build something{" "}
                <span className="gradient-text">cool</span>.
              </h3>
              <p className="text-base text-[var(--muted)] leading-relaxed">
                Whether it&apos;s a new role, a side project, or just a chat about tech,
                climate, or ice cream, I&apos;d love to hear from you.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-primary)] text-white font-semibold hover:brightness-110 transition-all duration-200 shadow-lg shadow-[var(--accent-primary)]/25 mt-2"
              >
                <Mail size={16} />
                Send a Message
                <motion.div
                  className="ml-1"
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={14} />
                </motion.div>
              </a>
            </div>
          </BlurFade>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contacts.map((contact, i) => (
              <BlurFade key={contact.label} delay={0.2 + i * 0.08}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent-primary)]/40 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: `${contact.color}20`, color: contact.color }}
                  >
                    <contact.Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[var(--muted)]">{contact.label}</div>
                    <div className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                      {contact.value}
                    </div>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
