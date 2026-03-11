import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Blue Orange | Blue Orange Digital × Databricks",
  description:
    "Why Databricks AEs choose Blue Orange Digital — Oliver Wyman backed, PE DNA, Databricks-first, executive accessibility.",
};

/* ── Headshot Placeholder ──────────────────────────────────────── */
function HeadshotPlaceholder({ initials, large }: { initials: string; large?: boolean }) {
  const size = large ? "w-28 h-28" : "w-20 h-20";
  const text = large ? "text-2xl" : "text-lg";
  return (
    <div
      className={`${size} rounded-full bg-gradient-to-br from-orange/80 to-dbricks/80 flex items-center justify-center ring-4 ring-white shadow-lg`}
    >
      <span className={`text-white font-bold ${text}`}>{initials}</span>
    </div>
  );
}

/* ── Differentiator Icon helpers ───────────────────────────────── */
function DiffIcon({ children, color = "orange" }: { children: React.ReactNode; color?: string }) {
  const bg = color === "dbricks" ? "bg-dbricks/10" : color === "navy" ? "bg-navy/10" : "bg-orange/10";
  const tc = color === "dbricks" ? "text-dbricks" : color === "navy" ? "text-navy-300" : "text-orange";
  return (
    <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center shrink-0`}>
      <svg className={`w-7 h-7 ${tc}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {children}
      </svg>
    </div>
  );
}

/* ── Exec data ────────────────────────────────────────────────── */
const executives = [
  {
    name: "Josh Miramant",
    title: "CEO & Founder",
    initials: "JM",
    bio: "Josh founded Blue Orange Digital with a vision to bring enterprise-grade data and AI capabilities to mid-market companies at the speed they actually need. With deep roots in the NYC tech ecosystem and a track record of scaling data consultancies, Josh is the executive sponsor on every strategic engagement. He personally meets with clients, co-sponsors partner events, and ensures Blue Orange operates as a true extension of the Databricks sales motion. Josh is hands-on, accessible, and obsessed with helping Databricks reps win.",
    calendly: "#",
    linkedin: "#",
  },
  {
    name: "Colin Van Dyke",
    title: "CTO",
    initials: "CV",
    bio: "Colin leads Blue Orange's technical vision and architecture practice. With extensive experience across cloud platforms, data engineering, and AI systems, Colin translates complex customer requirements into Databricks-native architectures. He's a committed advocate for Lakebase, Unity Catalog, and Mosaic AI, and brings deep credibility in technical conversations with customer CTOs and engineering leaders. Colin is available for joint technical deep-dives and architecture reviews.",
    calendly: "#",
    linkedin: "#",
  },
  {
    name: "Rizwan Yousef",
    title: "VP of Data & AI",
    initials: "RY",
    bio: "Rizwan runs the data and AI practice at Blue Orange and is the technical heartbeat of every Databricks engagement. He leads Lakehouse design, ML architecture, and AI/BI strategy for clients ranging from PE portfolio companies to large enterprises. Rizwan is hands-on — he reviews architectures, mentors delivery teams, and joins customer meetings to provide real-time technical advisory. When a Databricks AE needs a credible technical voice in the room, Rizwan is the call.",
    calendly: "#",
    linkedin: "#",
  },
  {
    name: "Dean Cirielli",
    title: "VP of Engineering",
    initials: "DC",
    bio: "Dean owns engineering execution and delivery assurance across Blue Orange's Databricks engagements. He ensures that projects move from strategy to production without delays, scope creep, or quality issues. Dean's background in engineering leadership means he speaks the language of customer engineering teams and can de-risk complex migrations and platform builds. He's the person who makes sure what gets sold actually gets delivered.",
    calendly: "#",
    linkedin: "#",
  },
];

export default function WhyBlueOrange() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
        </div>
        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-4">
            Why Partner With Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            Why Databricks AEs Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Blue Orange
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            Boutique agility, big consulting credibility, and a relentless focus on helping you close faster.
          </p>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ──────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Oliver Wyman */}
            <div className="flex gap-5">
              <DiffIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </DiffIcon>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Backed by Oliver Wyman</h3>
                <p className="text-navy-200 leading-relaxed">
                  Boutique bones with big consulting credibility. We combine the agility and technical depth of a specialist firm with the strategic rigor and enterprise trust of a global management consultancy.
                </p>
              </div>
            </div>

            {/* PE DNA */}
            <div className="flex gap-5">
              <DiffIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </DiffIcon>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Private Equity DNA</h3>
                <p className="text-navy-200 leading-relaxed">
                  Deep experience with PE-backed mid-market growth companies. We understand the portfolio operating model, EBITDA-driven prioritization, and accelerated timelines PE firms demand.
                </p>
              </div>
            </div>

            {/* Databricks-First */}
            <div className="flex gap-5">
              <DiffIcon color="dbricks">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </DiffIcon>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Databricks-First Architecture</h3>
                <p className="text-navy-200 leading-relaxed">
                  We&apos;re committed advocates of Lakebase, AI/BI, and Mosaic AI. Not a Snowflake shop moonlighting on Databricks. We build on the Lakehouse — period.
                </p>
              </div>
            </div>

            {/* Executive Accessibility */}
            <div className="flex gap-5">
              <DiffIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </DiffIcon>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Executive Accessibility</h3>
                <p className="text-navy-200 leading-relaxed">
                  Our CEO, CTO, VP of Data & AI, and VP of Engineering personally attend client meetings, co-sponsor events, and are available for in-person relationship building.
                </p>
              </div>
            </div>

            {/* NYC & DC */}
            <div className="flex gap-5">
              <DiffIcon color="navy">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </DiffIcon>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">NYC & DC Presence</h3>
                <p className="text-navy-200 leading-relaxed">
                  Headquartered at 750 Lexington Avenue, New York with an office in Washington, DC. 150 team members, US-based teams with near-shore coverage.
                </p>
              </div>
            </div>

            {/* Strategy-to-Build */}
            <div className="flex gap-5">
              <DiffIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </DiffIcon>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Strategy-to-Build Pipeline</h3>
                <p className="text-navy-200 leading-relaxed">
                  95% of our strategy engagements convert to full builds. When you refer us, the deal doesn&apos;t stall in discovery — it moves to production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEED METRICS ────────────────────────────────────────── */}
      <section className="gradient-navy section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-3">By the Numbers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Speed & Delivery</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "95%", label: "Strategy-to-Build Rate" },
              { stat: "3–4×", label: "Faster Than Traditional Consulting" },
              { stat: "250+", label: "Production Deployments" },
              { stat: "150", label: "Team Members" },
            ].map((m) => (
              <div key={m.label} className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="text-3xl sm:text-4xl font-bold text-orange mb-2">{m.stat}</div>
                <div className="text-sm text-white/60">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP PROFILES ──────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-3">Your Direct Line</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Meet the Leadership</h2>
            <p className="text-navy-200 max-w-2xl mx-auto">
              Every executive is personally accessible — book time directly, no gatekeepers.
            </p>
          </div>

          <div className="space-y-12">
            {executives.map((exec, i) => (
              <div
                key={exec.initials}
                className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-navy/5 hover:shadow-lg transition-shadow duration-300 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex flex-col items-center shrink-0 md:w-48">
                  <HeadshotPlaceholder initials={exec.initials} large />
                  <h3 className="text-lg font-bold text-navy mt-4 text-center">{exec.name}</h3>
                  <p className="text-sm text-orange font-medium">{exec.title}</p>
                </div>
                <div className="flex-1">
                  <p className="text-navy-200 leading-relaxed mb-6">{exec.bio}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={exec.calendly}
                      className="btn-primary text-sm"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Time on Calendly
                    </a>
                    <a
                      href={exec.linkedin}
                      className="btn-outline text-sm"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Ready to Partner?</h2>
          <p className="text-navy-200 max-w-xl mx-auto mb-8">
            Book a joint call with our leadership team. We respond within 4 business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Call Now
            </Link>
            <Link href="/offers" className="btn-outline text-base px-8 py-4">
              Browse Our Offers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
