import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offers & Accelerators | Blue Orange Digital × Databricks",
  description:
    "Ready-made packages Databricks AEs can pitch in 30 seconds — Scout, Blueprint, LakehouseIQ Assessment, Strategy Sprint, Migration, Mosaic AI.",
};

const offers = [
  {
    name: "Databricks Scout",
    badge: "PARTNER SOLUTION",
    badgeColor: "dbricks",
    highlight: true,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    description:
      "A read-only Databricks-native executable with 6 purpose-built accelerators that turn raw company data into ready intelligence. Identifies where customers are leaving value on the table — no data leaves the environment.",
    stat: "6 Accelerators",
    statDesc: "Data quality, pipeline health, cost optimization, AI readiness, governance, utilization",
    cta: "Request a Scout Demo",
    ctaHref: "#",
    submissionNote: "Databricks Partner Solution — Submittal in Progress",
    submissionLink: "https://www.databricks.com/partners/consulting-and-si/partner-solutions",
  },
  {
    name: "Value-Based Pricing",
    badge: "EXCLUSIVE OFFER",
    badgeColor: "orange",
    highlight: true,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    description:
      "Outcome-aligned pricing where our fees tie to measurable business outcomes. Removes budget risk for the customer and aligns Blue Orange incentives with Databricks consumption growth.",
    stat: "Pay for Outcomes",
    statDesc: "Not time-and-materials — we only win when your customer does",
    cta: "Talk to Josh",
    ctaHref: "/value-based-pricing",
  },
  {
    name: "Blueprint for Databricks",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
    description:
      "Databricks-branded data maturity scan that PE firms and mid-market companies use to quantify data infrastructure opportunities — specifically recommending Databricks products and services.",
    stat: "20–40%",
    statDesc: "Cloud cost inefficiency identified per assessment",
    cta: "Send to Your Customer",
    ctaHref: "#",
  },
  {
    name: "LakehouseIQ Assessment",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
    description:
      "A 2-minute Databricks optimization assessment for existing customers. Scores 5 dimensions: Architecture, Engineering, AI/ML, Performance, Governance. Average customer score: 35/100.",
    stat: "35/100",
    statDesc: "Average customer score — most use only 35% of capabilities",
    cta: "Share with Your Customer",
    ctaHref: "#",
  },
  {
    name: "Executive Strategy Sprint",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    description:
      "1–2 week intensive engagement where Blue Orange leadership works with the customer's C-suite to define a Databricks-powered data strategy. Includes executive workshop, architecture assessment, 90-day roadmap, and business case with ROI projections.",
    stat: "2 Weeks",
    statDesc: "Boardroom-ready strategy, not two quarters",
    cta: "Schedule a Sprint",
    ctaHref: "#",
  },
  {
    name: "Lakehouse Migration & Modernization",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7c0 2.21-3.582 4-8 4S4 9.21 4 7s3.582-4 8-4 8 1.79 8 4z" />
      </>
    ),
    description:
      "Full-service migration to Databricks Lakehouse — Unity Catalog, Delta Lake optimization, Photon, serverless. Covers legacy warehouse migration, multi-cloud consolidation, and cost optimization.",
    stat: "Full-Service",
    statDesc: "End-to-end migration and modernization",
    cta: "Scope a Migration",
    ctaHref: "#",
  },
  {
    name: "Mosaic AI & ML Production",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    description:
      "End-to-end ML engineering from model development through production deployment on Mosaic AI. Turn your customer's AI experiments into production systems that drive measurable business value.",
    stat: "Production AI",
    statDesc: "From experiments to deployed ML systems",
    cta: "Discuss a Use Case",
    ctaHref: "#",
  },
];

export default function Offers() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
        </div>
        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          <p className="section-label mb-4">
            Ready-Made Packages
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            Offers &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Accelerators
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            Packages you can pitch in 30 seconds. Each offer is designed to make your customer say yes faster.
          </p>
        </div>
      </section>

      {/* ── OFFERS GRID ──────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => {
              const isDbricks = offer.badgeColor === "dbricks";
              const isOrange = offer.badgeColor === "orange";
              const borderClass = offer.highlight
                ? isDbricks
                  ? "border-t-[3px] border-t-dbricks border border-dark/5 bg-gradient-to-br from-dbricks/[0.02] to-transparent"
                  : "border-t-[3px] border-t-orange border border-dark/5 bg-gradient-to-br from-orange/[0.03] to-transparent"
                : "border border-dark/5 bg-white";
              const iconBg = isDbricks ? "bg-dbricks/10" : isOrange ? "bg-orange/10" : "bg-dark/5";
              const iconColor = isDbricks ? "text-dbricks" : isOrange ? "text-orange" : "text-muted";
              const ctaColor = isDbricks
                ? "text-dbricks hover:text-dbricks-600"
                : isOrange
                ? "text-orange hover:text-orange-600"
                : "text-dark hover:text-dark/70";

              return (
                <div
                  key={offer.name}
                  className={`relative p-6 rounded-md hover:shadow-xl transition-all duration-300 ${borderClass} flex flex-col`}
                >
                  {offer.badge && (
                    <div className="absolute top-4 right-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] tracking-[0.22em] uppercase font-bold ${
                          isDbricks
                            ? "bg-dbricks/10 text-dbricks border border-dbricks/20"
                            : "bg-orange/10 text-orange border border-orange/20"
                        }`}
                      >
                        {offer.badge}
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-md ${iconBg} flex items-center justify-center mb-4`}>
                    <svg className={`w-6 h-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {offer.icon}
                    </svg>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-dark mb-2">{offer.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{offer.description}</p>

                  {/* Key stat */}
                  <div className="p-3 rounded-md bg-stone-100 border border-dark/5 mb-4">
                    <div className="text-lg font-bold text-dark">{offer.stat}</div>
                    <div className="text-xs text-muted">{offer.statDesc}</div>
                  </div>

                  {offer.submissionNote && (
                    <p className="text-[11px] text-muted/60 mb-3">
                      {offer.submissionNote}{" "}
                      <a href={offer.submissionLink} className="text-dbricks hover:underline" target="_blank" rel="noopener noreferrer">
                        Learn more
                      </a>
                    </p>
                  )}

                  <Link href={offer.ctaHref} className={`text-sm font-semibold ${ctaColor} transition-colors mt-auto`}>
                    {offer.cta} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="bg-stone-100 section-padding">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-4">
            Not Sure Which Offer Fits?
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Talk to our team — we&apos;ll help you match the right offer to your customer&apos;s needs in one call.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Call
            </Link>
            <Link href="/credits" className="btn-outline text-base px-8 py-4">
              Learn About Credits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
