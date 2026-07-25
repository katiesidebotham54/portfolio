import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From 2 Sprints to 2 Days | MCP Agent Case Study — Katie Sidebotham",
  description:
    "How I built an agentic AI pipeline that cut direct connection delivery from 4 weeks to 2 days at Ridgeline Apps — unprompted. Claude + Atlassian MCP, GitHub Actions, Kotlin code generation.",
  openGraph: {
    title: "From 2 Sprints to 2 Days | MCP Agent Case Study",
    description:
      "An agentic AI pipeline that auto-generates Jira tickets, writes Kotlin code, and opens a draft PR — from a single connector spec.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "From 2 Sprints to 2 Days | MCP Agent Case Study",
    description:
      "An agentic AI pipeline that auto-generates Jira tickets, writes Kotlin code, and opens a draft PR — from a single connector spec.",
  },
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
