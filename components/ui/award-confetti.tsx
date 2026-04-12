"use client";
import { useCallback, useRef } from "react";
import confetti from "canvas-confetti";

interface AwardConfettiProps {
  children: React.ReactNode;
  className?: string;
}

export function AwardConfetti({ children, className }: AwardConfettiProps) {
  const firedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fire = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (firedRef.current) return;
    firedRef.current = true;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 3) / window.innerHeight;

    // Gold burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ["#fbbf24", "#f59e0b", "#fcd34d", "#f97316", "#ffffff"],
      scalar: 0.9,
      ticks: 120,
      gravity: 1.2,
      startVelocity: 28,
    });

    // Subtle second pop
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { x, y },
        colors: ["#fbbf24", "#8b5cf6", "#f97316"],
        scalar: 0.7,
        ticks: 80,
        startVelocity: 18,
      });
    }, 150);

    // Reset so it can fire again after 3s
    timeoutRef.current = setTimeout(() => {
      firedRef.current = false;
    }, 3000);
  }, []);

  return (
    <div
      className={className}
      onMouseEnter={fire}
    >
      {children}
    </div>
  );
}
