"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        // Inner dot: instant, no transition
        dot.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
        // Outer ring: CSS transition handles the slight trail
        ring.style.transform = `translate(${x - 18}px, ${y - 18}px)`;
      });
    };

    const onDown = () => {
      dot.style.width = "7px";
      dot.style.height = "7px";
      ring.style.width = "24px";
      ring.style.height = "24px";
      ring.style.opacity = "0.8";
    };

    const onUp = () => {
      dot.style.width = "6px";
      dot.style.height = "6px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "1";
    };

    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* Outer ring — CSS transition gives it the subtle trail */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full opacity-0"
        style={{
          width: 36,
          height: 36,
          border: "1px solid rgba(249,115,22,0.45)",
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          transition: "transform 0.08s linear, width 0.1s ease, height 0.1s ease, opacity 0.2s ease",
          willChange: "transform",
        }}
      />
      {/* Inner dot — no transition, perfectly instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full opacity-0"
        style={{
          width: 6,
          height: 6,
          background: "var(--accent-primary)",
          transition: "width 0.1s ease, height 0.1s ease, opacity 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
