"use client";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { aboutBio } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <BlurFade>
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] lowercase">about</h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
      </BlurFade>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Bio */}
        <BlurFade delay={0.1}>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">{aboutBio}</p>
        </BlurFade>

        {/* Headshot */}
        <BlurFade delay={0.2} className="flex justify-center">
          <div className="relative">
            {/* Rotating accent ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                padding: "3px",
                background: "conic-gradient(from 0deg, var(--accent-primary), var(--accent-tertiary), var(--accent-secondary), var(--accent-primary))",
                borderRadius: "9999px",
                margin: "-3px",
              }}
            />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[var(--background)]">
              <Image
                src="/katie.jpg"
                alt="Katie Sidebotham"
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
                style={{ objectPosition: "50% 40%" }}
                priority
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
