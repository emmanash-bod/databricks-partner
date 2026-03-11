import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Value-Based Pricing | Blue Orange Digital × Databricks",
  description:
    "Outcome-aligned pricing — Blue Orange fees tie to measurable business outcomes, not time-and-materials.",
};

export default function ValueBasedPricing() {
  return (
    <>
      {/* ── HERO with gold/amber treatment ───────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #2D1B00 50%, #0A1628 100%)" }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          {/* Gold shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] to-transparent" />
        </div>

        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          {/* Exclusive badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg shadow-amber-500/10">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              EXCLUSIVE PARTNER OFFER
            </span>
            <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-white/50 border border-white/10">
              LIMITED AVAILABILITY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            Outcome-Aligned Pricing —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange">
              We Win When You Win
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
            For qualified deals in the right ICP, Blue Orange offers value-based pricing where our fees tie to measurable business outcomes — not time-and-materials.
          </p>
          <a href="#" className="btn-primary text-base px-8 py-4" style={{ background: "linear-gradient(135deg, #F59E0B, #FF6B35)" }}>
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Talk to Josh About Value-Based Pricing
          </a>
        </div>
      </section>

      {/* ── DISCLAIMER BANNER ────────────────────────────────────── */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-amber-800 font-medium">
            Eligibility determined jointly with your Databricks rep — reach out to discuss fit for your specific deal.
          </p>
        </div>
      </div>

      {/* ── WHAT IT IS / WHY AEs CARE ────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What it is */}
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">What It Is</p>
              <h2 className="text-3xl font-bold text-navy mb-6">Fees Tied to Results</h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                For qualified deals in the right ICP, Blue Orange offers value-based pricing structures where our fees are tied to measurable business outcomes rather than time-and-materials.
              </p>
              <p className="text-navy-200 leading-relaxed mb-4">
                This removes budget risk for the customer and aligns Blue Orange&apos;s incentives directly with Databricks consumption growth. The customer pays for outcomes, not hours.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mt-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <p className="text-sm text-amber-800">
                    <strong>For AEs:</strong> This is a deal-closer for cost-conscious mid-market and PE portfolio companies where every dollar needs to tie to ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* Why AEs care */}
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Why You Should Care</p>
              <h2 className="text-3xl font-bold text-navy mb-6">Your Closing Advantage</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Remove Budget Objections",
                    desc: "Instead of selling a six-figure consulting engagement, position Blue Orange as a partner that only wins when the customer does.",
                  },
                  {
                    title: "Align Incentives with Consumption",
                    desc: "Our success metrics tie directly to Databricks usage growth — the same metric that drives your quota.",
                  },
                  {
                    title: "Accelerate Deal Cycles",
                    desc: "Outcome-based pricing shortens procurement cycles. No protracted SOW negotiations on hourly rates.",
                  },
                  {
                    title: "Build Customer Trust",
                    desc: "Customers trust a partner willing to put skin in the game. It signals confidence in delivery.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-navy/5">
                    <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                      <p className="text-sm text-navy-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATION ────────────────────────────────────────── */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Qualification</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Is Your Deal Eligible?</h2>
            <p className="text-navy-200 max-w-2xl mx-auto">
              Not every deal qualifies — this ensures the model is sustainable and reserved for high-fit opportunities. Blue Orange works directly with Databricks reps to qualify deals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                signal: "PE-Backed Mid-Market",
                desc: "Portfolio companies with data modernization mandates and defined budgets.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
              },
              {
                signal: "Databricks Expansion",
                desc: "Clear opportunity for Databricks consumption growth and platform adoption.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                ),
              },
              {
                signal: "Defined Success Metrics",
                desc: "Customer has measurable KPIs that tie directly to the data initiative's outcomes.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
              },
              {
                signal: "Executive Sponsorship",
                desc: "C-level or VP-level champion on the customer side who owns the initiative.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                ),
              },
            ].map((item) => (
              <div key={item.signal} className="p-6 rounded-2xl bg-white border border-navy/5 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.signal}</h3>
                <p className="text-sm text-navy-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #2D1B00 50%, #0A1628 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] to-transparent" />
        <div className="relative container-max section-padding text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold border border-amber-500/30 mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            EXCLUSIVE PARTNER OFFER
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Think Your Deal Qualifies?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Talk to Josh directly to explore whether value-based pricing is the right fit for your opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-primary text-base px-8 py-4" style={{ background: "linear-gradient(135deg, #F59E0B, #FF6B35)" }}>
              Talk to Josh About Value-Based Pricing
            </a>
            <Link href="/offers" className="btn-secondary text-base px-8 py-4">
              Browse All Offers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
