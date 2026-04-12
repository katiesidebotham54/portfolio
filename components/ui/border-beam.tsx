"use client";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "var(--accent-primary)",
  colorTo = "var(--accent-tertiary)",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]",
        className
      )}
      style={
        {
          "--size": size,
          "--duration": duration,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
          mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          border: `${borderWidth}px solid transparent`,
          backgroundOrigin: "border-box",
          backgroundImage: `conic-gradient(from calc(360deg * (var(--time, 0) / var(--duration))), transparent 0%, var(--color-from) 10%, var(--color-to) 20%, transparent 30%)`,
          animation: `border-spin ${duration}s linear ${delay}s infinite`,
        } as React.CSSProperties
      }
    />
  );
}
