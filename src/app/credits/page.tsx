import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Databricks Credit Program | Blue Orange Digital × Databricks",
  description:
    "We fund your deals — Blue Orange provides Databricks consumption credits for opportunities brought in by Databricks reps.",
};

/* ── Step component ────────────────────────────────────────────── */
function Step({
  number,
  title,
  description,
  icon,
  isLast,
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector arrow (hidden on last) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 -right-[calc(50%-20px)] w-[calc(100%-40px)]">
          <div className="h-0.5 w-full bg-gradient-to-r from-orange/40 to-orange/10" />
          <svg className="absolute -right-2 -top-1.5 w-4 h-4 text-orange/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </div>
      )}

      {/* Icon circle */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange/10 to-dbricks/10 border border-orange/20 flex items-center justify-center mb-4 relative">
        <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-orange flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange/30">
          {number}
        </div>
        {icon}
      </div>

      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-navy-200 leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}

export default function Credits() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
        </div>
        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-orange/20 text-orange border border-orange/30">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              CREDIT PROGRAM
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            We Fund{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Your Deals
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
            Blue Orange provides Databricks consumption credits for opportunities exclusively brought in by Databricks reps. De-risk the deal for your customer and accelerate time-to-close.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn-primary text-base px-8 py-4">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Discuss Credit Eligibility with Josh
            </a>
            <a href="#" className="btn-secondary text-base px-8 py-4">
              Talk to Rizwan
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — PROCESS FLOW ──────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Simple 5-Step Process</h2>
            <p className="text-navy-200 max-w-2xl mx-auto">
              From introduction to customer success — here&apos;s how the credit program works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            <Step
              number={1}
              title="Rep Introduces"
              description="Databricks AE identifies an opportunity and introduces Blue Orange to the customer."
              icon={
                <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <Step
              number={2}
              title="Blue Orange Qualifies"
              description="We assess the opportunity for fit, scope, and credit eligibility within 48 hours."
              icon={
                <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
            />
            <Step
              number={3}
              title="Credits Allocated"
              description="Databricks consumption credits are allocated to the customer's engagement."
              icon={
                <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
            />
            <Step
              number={4}
              title="Joint Engagement"
              description="Blue Orange and Databricks collaborate on delivery with shared accountability."
              icon={
                <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <Step
              number={5}
              title="Customer Wins"
              description="Customer realizes value on Databricks. Deal closes, consumption grows, everyone wins."
              icon={
                <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
              isLast
            />
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────────── */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-3">Eligibility</p>
              <h2 className="text-3xl font-bold text-navy mb-6">Who Qualifies?</h2>
              <ul className="space-y-4">
                {[
                  "Deal must be sourced or referred by a Databricks rep (not self-sourced by Blue Orange)",
                  "Customer has a clear Databricks consumption growth opportunity",
                  "Engagement scope aligns with Blue Orange's core competencies",
                  "Executive sponsorship present on the customer side",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Credit Tiers Placeholder */}
            <div className="p-8 rounded-2xl bg-white border border-navy/10 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-6">Credit Tiers</h3>
              <div className="space-y-4">
                {[
                  { tier: "Starter", range: "$5K – $15K", desc: "Initial assessment and pilot engagements" },
                  { tier: "Growth", range: "$15K – $50K", desc: "Migration and modernization projects" },
                  { tier: "Enterprise", range: "$50K+", desc: "Large-scale platform builds and AI deployments" },
                ].map((t) => (
                  <div key={t.tier} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-navy/5">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <span className="text-orange font-bold text-sm">{t.tier[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-navy">{t.tier}</span>
                        <span className="text-sm font-semibold text-orange">{t.range}</span>
                      </div>
                      <p className="text-xs text-navy-200">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-navy-200/60 mt-4 italic">
                Credit amounts are indicative — final allocation discussed on a per-deal basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF POINT: SUNNY SKY ───────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="p-8 md:p-12 rounded-2xl gradient-navy relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange/5 blur-3xl" />
            </div>
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="px-3 py-1 text-xs font-semibold text-dbricks bg-dbricks/10 rounded-full mb-4 inline-block">
                  Proof Point
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Sunny Sky Products</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Sunny Sky Products leveraged the Blue Orange credit program as part of their unified data platform build on Databricks, reducing initial investment risk and accelerating their time to production.
                </p>
                <Link href="/case-studies" className="text-sm font-semibold text-orange hover:text-orange-300 transition-colors">
                  Read the Full Case Study &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 shrink-0">
                {[
                  { stat: "3x", label: "Faster Reporting" },
                  { stat: "40%", label: "Cost Reduction" },
                  { stat: "100%", label: "On Databricks" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-orange">{s.stat}</div>
                    <div className="text-xs text-white/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Have a Deal in Mind?</h2>
          <p className="text-navy-200 max-w-xl mx-auto mb-8">
            Talk to Josh or Rizwan to discuss credit eligibility for a specific opportunity. We respond within 4 business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-primary text-base px-8 py-4">
              Book Time with Josh
            </a>
            <a href="#" className="btn-outline text-base px-8 py-4">
              Book Time with Rizwan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
