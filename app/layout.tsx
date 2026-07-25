import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Katie Sidebotham | Product Engineer",
  description:
    "Full-stack product engineer, climate-tech co-founder, and Innovation Award winner. Building agentic AI workflows and shipping across the full stack at Ridgeline Apps.",
  keywords: [
    "Katie Sidebotham",
    "product engineer",
    "software engineer",
    "React",
    "TypeScript",
    "AI",
    "agentic workflows",
    "Claude AI",
    "MCP",
    "Kotlin",
    "full-stack",
    "portfolio",
  ],
  openGraph: {
    title: "Katie Sidebotham | Product Engineer",
    description:
      "Full-stack product engineer, climate-tech co-founder, and Innovation Award winner. Building agentic AI workflows and shipping across the full stack at Ridgeline Apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katie Sidebotham | Product Engineer",
    description:
      "Full-stack product engineer, climate-tech co-founder, and Innovation Award winner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <CursorGlow />
        </ThemeProvider>
      </body>
    </html>
  );
}
