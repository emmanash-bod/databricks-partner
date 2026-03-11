import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Blue Orange Digital × Databricks",
  description:
    "Real results from Blue Orange + Databricks engagements — Sunny Sky Products and more.",
};

const additionalCases = [
  {
    title: "National Retailer",
    subtitle: "Lakehouse Migration & Real-Time Analytics",
    industry: "Retail",
    products: ["Unity Catalog", "Delta Lake", "Photon"],
    metrics: [
      { stat: "60%", label: "Query Performance Improvement" },
      { stat: "$2M", label: "Annual Cost Savings" },
    ],
  },
  {
    title: "PE Portfolio — FinTech",
    subtitle: "AI-Powered Risk Scoring Platform",
    industry: "Financial Services",
    products: ["Mosaic AI", "MLflow", "Feature Store"],
    metrics: [
      { stat: "5x", label: "Faster Model Deployment" },
      { stat: "30%", label: "Reduction in Default Rate" },
    ],
  },
  {
    title: "Healthcare Analytics Co.",
    subtitle: "Data Platform Modernization",
    industry: "Healthcare",
    products: ["Lakehouse", "AI/BI", "Delta Sharing"],
    metrics: [
      { stat: "80%", label: "Reduction in Data Pipeline Failures" },
      { stat: "4x", label: "Faster Reporting" },
    ],
  },
  {
    title: "Manufacturing Conglomerate",
    subtitle: "Predictive Maintenance & IoT Analytics",
    industry: "Manufacturing",
    products: ["Streaming", "Mosaic AI", "Unity Catalog"],
    metrics: [
      { stat: "45%", label: "Unplanned Downtime Reduction" },
      { stat: "20%", label: "Maintenance Cost Savings" },
    ],
  },
];

const industries = ["All", "Food & Beverage", "Retail", "Financial Services", "Healthcare", "Manufacturing"];

export default function CaseStudies() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
        </div>
        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          <p className="section-label mb-4">Proof Points</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            Case{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Studies
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            Evidence you can forward to your champions. Real results from Blue Orange + Databricks engagements.
          </p>
        </div>
      </section>

      {/* ── INDUSTRY FILTER ──────────────────────────────────────── */}
      <section className="bg-white border-b border-dark/5">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {industries.map((ind, i) => (
              <button
                key={ind}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-dark text-white"
                    : "bg-stone-100 text-muted hover:bg-stone-200"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED: SUNNY SKY ──────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="p-8 md:p-12 rounded-md border-t-[3px] border-t-dbricks border border-dark/5 bg-gradient-to-br from-dbricks/[0.02] to-transparent">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase font-semibold text-dbricks bg-dbricks/10 rounded-full">Featured Case Study</span>
              <span className="px-3 py-1 text-xs font-medium text-dark/60 bg-dark/5 rounded-full">Food & Beverage</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Content */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-dark mb-2">Sunny Sky Products</h2>
                <h3 className="text-lg text-muted mb-6">Unified Data Platform — Transforming Operations with Databricks</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-dbricks mb-2">The Challenge</h4>
                    <p className="text-muted leading-relaxed">
                      Sunny Sky Products, a leading food and beverage manufacturer, struggled with fragmented data across multiple legacy systems. Reporting took days, operational insights were stale, and there was no unified view of production, inventory, and sales data.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-dbricks mb-2">The Approach</h4>
                    <p className="text-muted leading-relaxed">
                      Blue Orange designed and built a unified data platform on Databricks Lakehouse, consolidating disparate data sources into a single source of truth. The team implemented Delta Lake for reliable data pipelines, Unity Catalog for governance, and real-time dashboards for operational intelligence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-dbricks mb-2">Databricks Products Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Delta Lake", "Unity Catalog", "SQL Warehouses", "Workflows", "AI/BI Dashboards"].map((p) => (
                        <span key={p} className="px-3 py-1 text-xs font-medium text-dbricks bg-dbricks/10 rounded-md border border-dbricks/20">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary text-sm">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </button>
                  <button className="btn-outline text-sm">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share This Case Study
                  </button>
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-dbricks mb-4">Key Outcomes</h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { stat: "3x", label: "Faster Reporting", desc: "From days to hours" },
                    { stat: "40%", label: "Cost Reduction", desc: "In data infrastructure" },
                    { stat: "100%", label: "On Databricks", desc: "Single unified platform" },
                    { stat: "Real-time", label: "Operational Intelligence", desc: "Across manufacturing" },
                  ].map((o) => (
                    <div key={o.label} className="p-5 rounded-md bg-white border border-dark/5 shadow-sm">
                      <div className="text-2xl font-bold text-dbricks mb-1">{o.stat}</div>
                      <div className="text-sm font-semibold text-dark">{o.label}</div>
                      <div className="text-xs text-muted mt-1">{o.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Placeholder image area */}
                <div className="relative aspect-[16/9] rounded-md overflow-hidden bg-gradient-to-br from-dark/80 to-dark">
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
                    <circle cx="30" cy="30" r="40" fill="#FF6B35" />
                    <circle cx="170" cy="170" r="60" fill="#FF3621" />
                    <rect x="80" y="60" width="80" height="80" rx="8" fill="#FF6B35" opacity="0.5" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-xs font-medium uppercase tracking-wider">
                      Case Study Visual — Placeholder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL CASE STUDIES ───────────────────────────────── */}
      <section className="bg-stone-100 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-dark mb-4">More Success Stories</h2>
            <p className="text-muted">Placeholder case studies — full write-ups coming soon.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCases.map((cs) => (
              <div key={cs.title} className="p-6 rounded-md bg-white border-t-[3px] border-t-amber border border-dark/5 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-dark/60 bg-dark/5 rounded-full">{cs.industry}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-dark mb-1">{cs.title}</h3>
                <p className="text-sm text-muted mb-4">{cs.subtitle}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.products.map((p) => (
                    <span key={p} className="px-2 py-0.5 text-[11px] font-medium text-dbricks bg-dbricks/10 rounded-full">
                      {p}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-md bg-stone-100 border border-dark/5 text-center">
                      <div className="text-xl font-bold text-amber">{m.stat}</div>
                      <div className="text-xs text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="text-sm font-semibold text-dark hover:text-dark/70 transition-colors">
                    Read More &rarr;
                  </button>
                  <button className="text-sm text-muted hover:text-dark transition-colors">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-4">Want a Case Study for Your Vertical?</h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            We can walk you through relevant examples for your specific customer. Book a call with our team.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
