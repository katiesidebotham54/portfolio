"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { aboutBio } from "@/lib/data";

const photoStrip = [
  { src: "/interests/baking.jpg", alt: "Baking", rotate: -2, objectPosition: "50% 50%" },
  { src: "/interests/baking2.jpg", alt: "More baking", rotate: 1.5, objectPosition: "50% 50%" },
];

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
                src="/about-profile.jpg"
                alt="Katie Sidebotham"
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
                style={{ objectPosition: "50% 20%" }}
                priority
              />
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Photo strip */}
      <BlurFade delay={0.35}>
        <div className="flex justify-center gap-4 sm:gap-6 mt-16">
          {photoStrip.map((photo, i) => (
            <motion.div
              key={photo.src}
              className="relative w-28 h-36 sm:w-36 sm:h-48 rounded-xl overflow-hidden border-[3px] border-white shadow-xl bg-white shrink-0"
              style={{ rotate: photo.rotate }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2 },
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.45 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover"
                style={{ objectPosition: photo.objectPosition }}
              />
            </motion.div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
