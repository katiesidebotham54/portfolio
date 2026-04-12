"use client";
import { useState, useEffect } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const [cookieCount] = useState(426);

  return (
    <footer className="border-t border-[var(--border)] py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <span>🍪 Ridgeline cookies baked:</span>
            <span className="font-mono font-bold text-[var(--accent-primary)]">
              <NumberTicker value={cookieCount} />
            </span>
            <span className="text-xs">(approximately)</span>
          </div>
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
