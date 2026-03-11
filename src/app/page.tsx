import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ── Geometric Placeholder SVG ─────────────────────────────────── */
function PlaceholderImage({ className = "", label }: { className?: string; label?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md bg-gradient-to-br from-dark-700 to-dark ${className}`}>
      {/* Geometric pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
        <circle cx="30" cy="30" r="40" fill="#F47621" />
        <circle cx="170" cy="170" r="60" fill="#FF3621" />
        <rect x="80" y="60" width="80" height="80" rx="4" fill="#E8A838" opacity="0.5" />
      </svg>
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/30 text-xs font-mono uppercase tracking-wider">{label}</span>
        </div>
      )}
    </div>
  );
}

/* ── Headshot Placeholder ──────────────────────────────────────── */
function HeadshotPlaceholder({ initials }: { initials: string }) {
  return (
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dbricks/80 to-amber/80 flex items-center justify-center ring-2 ring-white/10">
      <span className="text-white font-bold text-lg">{initials}</span>
    </div>
  );
}

/* ── Icon Components ───────────────────────────────────────────── */
function IconPE() {
  return (
    <div className="w-12 h-12 rounded-md bg-orange/10 flex items-center justify-center">
      <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
  );
}
function IconDatabricks() {
  return (
    <div className="w-12 h-12 rounded-md bg-dbricks/10 flex items-center justify-center">
      <svg className="w-6 h-6 text-dbricks" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    </div>
  );
}
function IconExec() {
  return (
    <div className="w-12 h-12 rounded-md bg-orange/10 flex items-center justify-center">
      <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
  );
}
function IconOW() {
  return (
    <div className="w-12 h-12 rounded-md bg-dark/10 flex items-center justify-center">
      <svg className="w-6 h-6 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HOMEPAGE
   ══════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative bg-dark overflow-hidden">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid" />
        {/* Subtle glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber/5 blur-3xl" />
        </div>

        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-20">
          {/* Monospace eyebrow with red line */}
          <div className="section-label mb-8">Partner Portal</div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-[1.1] mb-6">
            Your Data &amp; AI Delivery Partner for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Mid-Market and PE-Backed
            </span>{" "}
            Companies
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed">
            Pre-built accelerators, co-funded credits, and white-glove executive engagement to help you close faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/offers" className="btn-primary text-base px-8 py-4">
              Browse Our Offers
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">
              Book a Joint Call
            </Link>
            <Link href="/resources" className="btn-secondary text-base px-8 py-4">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Co-Sell Deck
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ────────────────────────────────────────── */}
      <section className="bg-dark-700 border-y border-white/5">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            <AnimatedCounter end={250} suffix="+" label="Production Deployments" />
            <AnimatedCounter end={150} label="Team Members" />
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-dbricks">Databricks</div>
              <div className="text-xs sm:text-sm text-white/50 mt-1">Consulting Partner</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-white">SOC 2</div>
              <div className="text-xs sm:text-sm text-white/50 mt-1">Type II Certified</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-lg sm:text-xl font-bold text-white">Oliver Wyman</div>
              <div className="text-xs sm:text-sm text-white/50 mt-1">Backed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AEs CHOOSE BLUE ORANGE ─────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-3">For Databricks AEs</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-dark mb-4">Why AEs Choose Blue Orange</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Four reasons Databricks reps recommend us over 50 other partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group p-6 rounded-md border border-dark/5 border-t-[3px] border-t-orange bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <IconPE />
              <h3 className="text-lg font-bold text-dark mt-4 mb-2">PE &amp; Mid-Market Focus</h3>
              <p className="text-sm text-muted leading-relaxed">
                Deep experience with PE-backed growth companies. We understand EBITDA-driven prioritization and accelerated timelines.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group p-6 rounded-md border border-dark/5 border-t-[3px] border-t-dbricks bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <IconDatabricks />
              <h3 className="text-lg font-bold text-dark mt-4 mb-2">Databricks-First Architecture</h3>
              <p className="text-sm text-muted leading-relaxed">
                Committed advocates of Lakebase, AI/BI, and Mosaic AI. Not a Snowflake shop moonlighting on Databricks.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group p-6 rounded-md border border-dark/5 border-t-[3px] border-t-amber bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <IconExec />
              <h3 className="text-lg font-bold text-dark mt-4 mb-2">Executive Accessibility</h3>
              <p className="text-sm text-muted leading-relaxed">
                Our CEO, CTO, VP of Data &amp; AI, and VP of Engineering personally attend client meetings and co-sponsor events.
              </p>
            </div>
            {/* Card 4 */}
            <div className="group p-6 rounded-md border border-dark/5 border-t-[3px] border-t-dark bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <IconOW />
              <h3 className="text-lg font-bold text-dark mt-4 mb-2">Backed by Oliver Wyman</h3>
              <p className="text-sm text-muted leading-relaxed">
                Boutique agility and technical depth with the strategic rigor and enterprise trust of a global management consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS VIDEO ─────────────────────────────────────── */}
      <section className="bg-stone-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Meet the Team</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-dark mb-4">Message from Our Founders</h2>
              <p className="text-muted leading-relaxed mb-6">
                Get to know the team behind Blue Orange Digital. Hear directly from our leadership about why we built this partnership and how we help Databricks reps win.
              </p>
              <Link href="/why-blue-orange" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
            {/* Video placeholder */}
            <div className="relative aspect-video rounded-md overflow-hidden bg-dark shadow-2xl shadow-dark/20">
              <div className="absolute inset-0 dot-grid" />
              <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 225">
                <circle cx="60" cy="40" r="80" fill="#F47621" />
                <circle cx="340" cy="185" r="100" fill="#FF3621" />
                <rect x="120" y="70" width="160" height="85" rx="4" fill="#E8A838" opacity="0.3" />
              </svg>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-orange/90 hover:bg-orange flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg shadow-orange/30">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/30 text-xs font-mono">Video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED OFFERS ────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-3">Ready-Made Packages</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-dark mb-4">Featured Offers</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Ready-made packages you can pitch in 30 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Scout — highlighted */}
            <div className="relative p-6 rounded-md border-t-[3px] border-t-dbricks border border-dbricks/20 bg-gradient-to-br from-dbricks/[0.02] to-transparent hover:shadow-xl hover:shadow-dbricks/5 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-wider bg-dbricks/10 text-dbricks border border-dbricks/20">
                  Partner Solution
                </span>
              </div>
              <div className="w-12 h-12 rounded-md bg-dbricks/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dbricks" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Databricks Scout</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Read-only Databricks-native executable with 6 accelerators. Identifies where customers are leaving value on the table.
              </p>
              <Link href="/offers" className="text-sm font-semibold text-dbricks hover:text-dbricks-600 transition-colors">
                Request a Demo &rarr;
              </Link>
            </div>

            {/* Value-Based Pricing — highlighted */}
            <div className="relative p-6 rounded-md border-t-[3px] border-t-orange border border-orange/20 bg-gradient-to-br from-orange/[0.03] to-transparent hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-wider bg-orange/10 text-orange border border-orange/20">
                  Exclusive Offer
                </span>
              </div>
              <div className="w-12 h-12 rounded-md bg-orange/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Value-Based Pricing</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Outcome-aligned pricing where our fees tie to measurable business outcomes. We only win when your customer does.
              </p>
              <Link href="/value-based-pricing" className="text-sm font-semibold text-orange hover:text-orange-600 transition-colors">
                Learn More &rarr;
              </Link>
            </div>

            {/* Blueprint */}
            <div className="p-6 rounded-md border border-dark/5 border-t-[3px] border-t-amber bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-dark/5 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Blueprint for Databricks</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Free data &amp; AI maturity scan that identifies Databricks product adoption opportunities. Offer it to every prospect.
              </p>
              <Link href="/offers" className="text-sm font-semibold text-dark-400 hover:text-dark transition-colors">
                Send to Customer &rarr;
              </Link>
            </div>

            {/* LakehouseIQ */}
            <div className="p-6 rounded-md border border-dark/5 border-t-[3px] border-t-dbricks bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-dark/5 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">LakehouseIQ Assessment</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                2-minute optimization assessment. Most customers only use 35% of what they pay for. Show them where to expand.
              </p>
              <Link href="/offers" className="text-sm font-semibold text-dark-400 hover:text-dark transition-colors">
                Share with Customer &rarr;
              </Link>
            </div>

            {/* Executive Strategy Sprint */}
            <div className="p-6 rounded-md border border-dark/5 border-t-[3px] border-t-orange bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-dark/5 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Executive Strategy Sprint</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Boardroom-ready data strategy in two weeks, not two quarters. Includes 90-day roadmap with ROI projections.
              </p>
              <Link href="/offers" className="text-sm font-semibold text-dark-400 hover:text-dark transition-colors">
                Schedule a Sprint &rarr;
              </Link>
            </div>

            {/* Credit Program */}
            <div className="p-6 rounded-md border border-dark/5 border-t-[3px] border-t-amber bg-white hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-dark/5 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Databricks Credit Program</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                We fund your deals. Co-funded Databricks consumption credits for opportunities sourced by Databricks reps.
              </p>
              <Link href="/credits" className="text-sm font-semibold text-dark-400 hover:text-dark transition-colors">
                Learn About Credits &rarr;
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/offers" className="btn-outline">
              View All Offers &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY: SUNNY SKY ──────────────────────────────── */}
      <section className="bg-stone-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <PlaceholderImage className="aspect-[4/3]" label="Sunny Sky Products — Case Study" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-mono font-semibold text-dbricks bg-dbricks/10 rounded">Featured Case Study</span>
                <span className="px-3 py-1 text-xs font-mono font-medium text-dark/60 bg-dark/5 rounded">Food &amp; Beverage</span>
              </div>
              <h2 className="font-serif text-3xl text-dark mb-4">Sunny Sky Products</h2>
              <h3 className="text-lg text-muted mb-4">Unified Data Platform — Transforming Operations with Databricks</h3>
              <p className="text-muted leading-relaxed mb-6">
                Sunny Sky Products partnered with Blue Orange Digital to build a unified data platform on Databricks, consolidating disparate data sources and enabling real-time operational intelligence across their manufacturing operations.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-md bg-white border border-dark/5">
                  <div className="text-2xl font-bold text-dark">3x</div>
                  <div className="text-xs text-muted mt-1">Faster Reporting</div>
                </div>
                <div className="text-center p-3 rounded-md bg-white border border-dark/5">
                  <div className="text-2xl font-bold text-dark">40%</div>
                  <div className="text-xs text-muted mt-1">Cost Reduction</div>
                </div>
                <div className="text-center p-3 rounded-md bg-white border border-dark/5">
                  <div className="text-2xl font-bold text-dark">100%</div>
                  <div className="text-xs text-muted mt-1">On Databricks</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/case-studies" className="btn-primary">
                  Read Full Case Study
                </Link>
                <button className="btn-outline text-sm">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share This
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ───────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-3">Your Direct Line</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-dark mb-4">Meet the Leadership</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Every exec personally attends client meetings and is available for direct booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Josh Miramant", title: "CEO & Founder", initials: "JM", desc: "Executive sponsor on every strategic engagement. Personally meets with clients and co-sponsors partner events." },
              { name: "Colin Van Dyke", title: "CTO", initials: "CV", desc: "Leads technical vision and architecture. Committed advocate for Lakebase, Unity Catalog, and Mosaic AI." },
              { name: "Rizwan Yousef", title: "VP of Data & AI", initials: "RY", desc: "Technical heartbeat of every Databricks engagement. Leads Lakehouse design and ML architecture." },
              { name: "Dean Cirielli", title: "VP of Engineering", initials: "DC", desc: "Owns engineering execution and delivery assurance. Makes sure what gets sold actually gets delivered." },
            ].map((exec) => (
              <div key={exec.initials} className="text-center group">
                <div className="flex justify-center mb-4">
                  <HeadshotPlaceholder initials={exec.initials} />
                </div>
                <h3 className="font-serif text-base text-dark">{exec.name}</h3>
                <p className="text-sm font-mono text-dbricks mb-2">{exec.title}</p>
                <p className="text-xs text-muted leading-relaxed mb-4">{exec.desc}</p>
                <div className="flex items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-orange hover:text-orange-600 transition-colors"
                  >
                    Book a Call
                  </Link>
                  <span className="text-dark/20">|</span>
                  {/* LinkedIn placeholder */}
                  <a href="#" className="text-xs text-muted hover:text-dark transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/why-blue-orange" className="btn-outline">
              Full Team &amp; Bios &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS & VENUES ────────────────────────────────────── */}
      <section className="relative bg-dark section-padding">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid" />
        <div className="relative container-max">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-3">Relationship Building</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Co-Sponsor an Event</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              We invest in real relationships, not just email pitches. Host an executive dinner, golf outing, or networking event with Blue Orange.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Westchester Hills Golf Club",
                type: "Executive Golf Outings",
                desc: "Premium golf experience for executive relationship building. Perfect for intimate deal discussions in a relaxed setting.",
                capacity: "Up to 16 guests",
              },
              {
                name: "Fly Fish Club",
                type: "Private Dining",
                desc: "Exclusive private dining for executive roundtables. Three-course dinner with fireside chat format.",
                capacity: "8-12 guests",
              },
              {
                name: "Maxwell Social",
                type: "NYC Networking",
                desc: "Members-only social club in NYC for casual networking and hosted events. Ideal for larger partner gatherings.",
                capacity: "20-50 guests",
              },
            ].map((venue) => (
              <div key={venue.name} className="group rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Venue image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark overflow-hidden">
                  <div className="absolute inset-0 dot-grid opacity-50" />
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 200">
                    <circle cx="50" cy="50" r="60" fill="#F47621" />
                    <circle cx="250" cy="150" r="80" fill="#FF3621" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-xs font-mono uppercase tracking-wider">{venue.type}</span>
                  </div>
                </div>
                <div className="p-6 bg-dark-700/50">
                  <h3 className="text-lg font-bold text-white mb-1">{venue.name}</h3>
                  <p className="text-xs text-dbricks font-mono mb-3">{venue.type} &middot; {venue.capacity}</p>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">{venue.desc}</p>
                  <Link href="/events" className="text-sm font-semibold text-orange hover:text-orange-300 transition-colors">
                    Co-Sponsor &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/events" className="btn-primary">
              View All Events &amp; Venues
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-dark mb-4">
            Ready to Close Faster?
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Book a joint call with Blue Orange leadership. We respond within 4 business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Call Now
            </Link>
            <Link href="/resources" className="btn-outline text-base px-8 py-4">
              Download Co-Sell Deck
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
