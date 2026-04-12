import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Katie Sidebotham | Product Engineer",
  description:
    "Full-stack product engineer, climate-tech co-founder, and Innovation Award winner. Building things that matter at Ridgeline Apps.",
  keywords: ["Katie Sidebotham", "software engineer", "product engineer", "React", "TypeScript", "portfolio"],
  openGraph: {
    title: "Katie Sidebotham | Product Engineer",
    description: "Full-stack product engineer, climate-tech co-founder, and Innovation Award winner.",
    type: "website",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
