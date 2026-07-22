"use client";

import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  Trophy,
  FileCode,
  GitBranch,
  Code,
  GitPullRequest,
  ChevronRight,
  List,
  Bot,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

function PipelineNode({
  icon,
  label,
  desc,
  badge,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  badge: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl border p-4 transition-colors",
        highlight
          ? "border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/5"
          : "border-[var(--border)] bg-[var(--surface)]"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm",
            highlight
              ? "bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]"
              : "bg-[var(--background)] text-[var(--muted)]"
          )}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-semibold text-sm text-[var(--foreground)]">{label}</span>
            <span
              className={cn(
                "px-1.5 py-0.5 rounded text-[10px] font-mono font-bold",
                highlight
                  ? "bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]"
                  : "bg-[var(--background)] text-[var(--muted)]"
              )}
            >
              {badge}
            </span>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PipelineArrow() {
  return (
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center">
        <div className="w-px h-5 bg-[var(--border)]" />
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "6px solid var(--border)",
          }}
        />
      </div>
    </div>
  );
}

export default function MCPAgentCaseStudy() {
  const outcomeRef = useRef<HTMLDivElement>(null);
  const outcomeInView = useInView(outcomeRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Back Nav */}
      <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Katie Sidebotham
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-4">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0800 0%, #0d0a1a 50%, #0a0014 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 50%, rgba(249,115,22,0.12) 0%, transparent 60%), radial-gradient(ellipse at 75% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <BlurFade>
            <span className="inline-block px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono mb-6 tracking-wider uppercase">
              case study · ridgeline apps · 2024
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
              From 2 Sprints to 2 Days
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              An agentic AI pipeline that auto-generates Jira tickets, writes
              Kotlin code, and opens a draft PR — from a connector spec.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold">
                2 weeks → 2 days
              </span>
              <span className="px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold">
                1 engineer
              </span>
              <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold">
                Innovation Award
              </span>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        {/* The Problem */}
        <BlurFade>
          <section className="py-16 border-b border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 lowercase">
              the problem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider mb-3">
                  what was taking so long
                </h3>
                <p className="text-[var(--muted)] leading-relaxed text-sm mb-4">
                  At Ridgeline, a{" "}
                  <strong className="text-[var(--foreground)]">
                    direct connection
                  </strong>{" "}
                  is a financial data integration — software that pipes data from
                  a custodian or counterparty into the platform. Building a new
                  one required two full sprint cycles (~4 weeks) and multiple
                  engineers across the org.
                </p>
                <p className="text-[var(--muted)] leading-relaxed text-sm">
                  Every new connection required manually creating dozens of Jira
                  tickets, writing scaffolded Kotlin, running the same linting
                  and test patterns, and opening PRs — all before real feature
                  work could begin.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[var(--accent-tertiary)] uppercase tracking-wider mb-3">
                  why it was so repetitive
                </h3>
                <p className="text-[var(--muted)] leading-relaxed text-sm mb-4">
                  The core issue: the work was{" "}
                  <strong className="text-[var(--foreground)]">
                    entirely predictable
                  </strong>
                  . Direct connections follow the same structural pattern every
                  time. The ticket taxonomy was identical. The Kotlin scaffolding
                  followed the same conventions. The PR structure was always the
                  same.
                </p>
                <p className="text-[var(--muted)] leading-relaxed text-sm">
                  This wasn&apos;t complex engineering judgment — it was
                  pattern-matching and template-filling, repeated sprint after
                  sprint.
                </p>
              </div>
            </div>
          </section>
        </BlurFade>

        {/* The Insight */}
        <BlurFade>
          <section className="py-16 border-b border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 lowercase">
              the insight
            </h2>
            <div className="relative rounded-2xl border border-[var(--accent-primary)]/20 bg-[var(--surface)] p-8 overflow-hidden">
              <BorderBeam
                duration={10}
                colorFrom="var(--accent-primary)"
                colorTo="var(--accent-tertiary)"
              />
              <div className="relative">
                <p className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-4">
                  unprompted observation
                </p>
                <blockquote className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] leading-relaxed mb-6">
                  &ldquo;If the work is predictable enough that I could describe it in
                  a template, it&apos;s predictable enough for an AI agent to do
                  it.&rdquo;
                </blockquote>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  I noticed this pattern without being asked to look for it. No
                  ticket, no manager request — just saw sprint after sprint of
                  the same setup work and asked why an engineer was doing it at
                  all. That framing shifted the question from &ldquo;how do we go
                  faster?&rdquo; to &ldquo;how do we remove this from the human&apos;s plate
                  entirely?&rdquo;
                </p>
              </div>
            </div>
          </section>
        </BlurFade>

        {/* The Pipeline */}
        <BlurFade>
          <section className="py-16 border-b border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 lowercase">
              the pipeline
            </h2>
            <p className="text-[var(--muted)] text-sm mb-8 leading-relaxed">
              Two agents, one workflow. The first auto-generates the full Jira
              ticket set. The second writes, validates, and submits the code.
            </p>
            <div className="max-w-lg mx-auto">
              <PipelineNode
                icon={<FileCode size={15} />}
                label="Connector Spec"
                desc="Engineer provides the spec file describing the new direct connection"
                badge="INPUT"
              />
              <PipelineArrow />
              <PipelineNode
                icon={<Bot size={15} />}
                label="Claude + Atlassian MCP Agent"
                desc="Reads the spec, queries Atlassian APIs, and generates the complete ticket structure"
                badge="AI AGENT"
                highlight
              />
              <PipelineArrow />
              <PipelineNode
                icon={<List size={15} />}
                label="Jira Ticket Set"
                desc="Full set of epics, stories, and subtasks auto-created — ready for the sprint"
                badge="OUTPUT"
              />
              <PipelineArrow />
              <PipelineNode
                icon={<GitBranch size={15} />}
                label="GitHub Actions Trigger"
                desc="Committing the spec automatically kicks off the code generation workflow"
                badge="CI/CD"
              />
              <PipelineArrow />
              <PipelineNode
                icon={<Code size={15} />}
                label="Claude Subagent: Write Kotlin"
                desc="Reads the spec and existing codebase patterns, then generates scaffolded Kotlin code"
                badge="AI SUBAGENT"
                highlight
              />
              <PipelineArrow />
              <PipelineNode
                icon={<GitPullRequest size={15} />}
                label="Lint + Test + Draft PR"
                desc="Code is linted, tests run, and a draft PR is opened — ready for engineer review"
                badge="DELIVERY"
              />
            </div>
          </section>
        </BlurFade>

        {/* How It Works */}
        <BlurFade>
          <section className="py-16 border-b border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 lowercase">
              how it works
            </h2>
            <ol className="space-y-6">
              {[
                {
                  n: 1,
                  title: "Engineer provides the connector spec",
                  body: "A single spec file describes the new direct connection — its data sources, field mappings, and integration endpoints. This is the only manual input required from the engineer.",
                },
                {
                  n: 2,
                  title: "MCP agent generates the Jira ticket set",
                  body: "The Claude + Atlassian MCP agent reads the spec, understands the connection structure, and creates the complete set of Jira epics, stories, and subtasks — matching the team's established ticket taxonomy and formatting conventions.",
                },
                {
                  n: 3,
                  title: "GitHub Actions triggers the code workflow",
                  body: "When the spec is committed to the repo, a GitHub Actions workflow automatically kicks off. No manual step required — the commit is the trigger.",
                },
                {
                  n: 4,
                  title: "Claude subagent writes the Kotlin scaffolding",
                  body: "A Claude subagent reads the spec alongside existing connector implementations in the codebase, then generates scaffolded Kotlin that follows the team's conventions — classes, interfaces, configuration, and boilerplate all included.",
                },
                {
                  n: 5,
                  title: "Lint, test, and draft PR",
                  body: "The generated code runs through linting and the test suite. If everything passes, a draft PR is opened with a structured description — ready for the engineer to review, tweak, and merge.",
                },
              ].map((step) => (
                <li key={step.n} className="flex gap-5">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--accent-primary)]">
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </BlurFade>

        {/* The Outcome */}
        <BlurFade>
          <section className="py-16 border-b border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 lowercase">
              the outcome
            </h2>

            {/* Before / After */}
            <div ref={outcomeRef} className="grid grid-cols-2 gap-4 mb-10">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
                <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-3">
                  before
                </p>
                <p className="text-4xl sm:text-5xl font-bold text-[var(--muted)]">
                  ~4
                </p>
                <p className="text-sm text-[var(--muted)] mt-2">
                  weeks · 2–3 engineers
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
                <p className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-3">
                  after
                </p>
                <p className="text-4xl sm:text-5xl font-bold text-emerald-500">
                  {outcomeInView ? <NumberTicker value={2} /> : "0"}
                </p>
                <p className="text-sm text-[var(--muted)] mt-2">
                  days · 1 engineer
                </p>
              </div>
            </div>

            {/* Secondary outcomes */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <Trophy
                  size={15}
                  className="text-yellow-500 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Won the Innovation Award
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Recognized company-wide for agentic AI workflow contributions
                    at Ridgeline
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <ChevronRight
                  size={15}
                  className="text-[var(--accent-primary)] shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Presented at Engineering Show &amp; Tell
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Co-presented the workflow to 130+ engineering attendees
                    across the org
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <ChevronRight
                  size={15}
                  className="text-[var(--accent-tertiary)] shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Became a team adoption template
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Authored a Confluence design doc that became the standard
                    template for other teams building agentic workflows
                  </p>
                </div>
              </div>
            </div>
          </section>
        </BlurFade>

        {/* Footer CTA */}
        <BlurFade>
          <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#experience"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Back to portfolio
            </Link>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--muted)] hover:text-[var(--accent-primary)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent-primary)] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
