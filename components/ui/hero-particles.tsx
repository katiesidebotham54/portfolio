"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particleOptions: ISourceOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 30,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ["#f97316", "#8b5cf6", "#10b981"] },
    links: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 0.4,
      straight: false,
    },
    number: { density: { enable: true }, value: 35 },
    opacity: { value: { min: 0.08, max: 0.35 } },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: false,
};

export function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 pointer-events-none"
      options={particleOptions}
    />
  );
}
