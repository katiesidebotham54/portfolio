"use client";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  return (
    <div className={cn("relative flex flex-col overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {/*
          No filter:blur() — replaced with large transparent radial gradients.
          These composite on the GPU and don't trigger expensive per-frame repaints.
        */}
        <div
          className="absolute -top-32 left-1/4 w-[900px] h-[700px] rounded-full opacity-[0.12] animate-aurora"
          style={{
            background:
              "radial-gradient(ellipse at center, #f97316 0%, #f9731640 40%, transparent 70%)",
            animationDelay: "0s",
            animationDuration: "10s",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute top-1/4 -right-32 w-[700px] h-[600px] rounded-full opacity-[0.10] animate-aurora"
          style={{
            background:
              "radial-gradient(ellipse at center, #8b5cf6 0%, #8b5cf640 40%, transparent 70%)",
            animationDelay: "-4s",
            animationDuration: "12s",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute -bottom-16 left-1/3 w-[800px] h-[500px] rounded-full opacity-[0.09] animate-aurora"
          style={{
            background:
              "radial-gradient(ellipse at center, #10b981 0%, #10b98140 40%, transparent 70%)",
            animationDelay: "-7s",
            animationDuration: "14s",
            transform: "translateZ(0)",
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Vignette fade to background at bottom */}
        {showRadialGradient && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 110%, transparent 30%, var(--background) 75%)",
            }}
          />
        )}
      </div>
      {children}
    </div>
  );
}
