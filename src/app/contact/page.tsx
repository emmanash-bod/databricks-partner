import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book a Call | Blue Orange Digital × Databricks",
  description:
    "Book time directly with Blue Orange leadership — no deal registration, no forms, no friction.",
};

const executives = [
  {
    name: "Josh Miramant",
    title: "CEO & Founder",
    initials: "JM",
    desc: "Executive sponsor on every strategic engagement. Best for deal strategy, credit program, and value-based pricing discussions.",
    calendly: "#",
  },
  {
    name: "Colin Van Dyke",
    title: "CTO",
    initials: "CV",
    desc: "Technical vision and architecture. Best for joint technical deep-dives, architecture reviews, and platform strategy.",
    calendly: "#",
  },
  {
    name: "Rizwan Yousef",
    title: "VP of Data & AI",
    initials: "RY",
    desc: "Leads Lakehouse design and ML architecture. Best for data strategy, AI/BI planning, and technical advisory calls.",
    calendly: "#",
  },
  {
    name: "Dean Cirielli",
    title: "VP of Engineering",
    initials: "DC",
    desc: "Engineering execution and delivery assurance. Best for scoping migrations, delivery timelines, and project planning.",
    calendly: "#",
  },
];

export default function Contact() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
        </div>
        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-4">Zero Friction</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            Book a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Call
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            No deal registration forms. No gatekeepers. Book directly with our leadership team.
          </p>

          {/* SLA badge */}
          <div className="mt-8 inline-flex items-center px-4 py-2.5 rounded-full bg-green-500/10 border border-green-500/20">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-green-400">We respond within 4 business hours</span>
          </div>
        </div>
      </section>

      {/* ── EXEC BOOKING CARDS ───────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-3">Direct Booking</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Choose Your Contact</h2>
            <p className="text-navy-200 max-w-2xl mx-auto">
              Pick the right person for your conversation and book time directly on Calendly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {executives.map((exec) => (
              <div key={exec.initials} className="p-6 rounded-2xl border border-navy/5 bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange/80 to-dbricks/80 flex items-center justify-center ring-2 ring-white shadow-lg shrink-0">
                    <span className="text-white font-bold text-lg">{exec.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{exec.name}</h3>
                    <p className="text-sm text-orange font-medium">{exec.title}</p>
                  </div>
                </div>
                <p className="text-sm text-navy-200 leading-relaxed mb-5">{exec.desc}</p>
                <a
                  href={exec.calendly}
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-semibold text-white bg-orange hover:bg-orange-500 transition-all duration-200 hover:shadow-lg hover:shadow-orange/25"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Time on Calendly
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL CONTACT + SLACK/TEAMS ─────────────────────────── */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="p-6 rounded-2xl bg-white border border-navy/5">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">General Email</h3>
              <p className="text-sm text-navy-200 mb-4">For non-urgent inquiries, partnership questions, or general information.</p>
              <a href="mailto:databricks@blueorange.digital" className="text-sm font-semibold text-orange hover:text-orange-600 transition-colors">
                databricks@blueorange.digital
              </a>
            </div>

            {/* Slack/Teams */}
            <div className="p-6 rounded-2xl bg-white border border-navy/5">
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Add Us to Your Deal Channel</h3>
              <p className="text-sm text-navy-200 mb-4">
                Invite us to your Slack or Teams deal channel for real-time collaboration.
              </p>
              <div className="space-y-2 text-sm text-navy-200">
                <p><strong className="text-navy">Slack:</strong> Invite <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">@blueorange-team</code> to your channel</p>
                <p><strong className="text-navy">Teams:</strong> Add <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">databricks@blueorange.digital</code> as a guest</p>
              </div>
            </div>

            {/* Response SLA */}
            <div className="p-6 rounded-2xl bg-white border border-navy/5">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Response SLA</h3>
              <p className="text-sm text-navy-200 mb-4">We take responsiveness seriously. Every inquiry gets a human response.</p>
              <div className="p-3 rounded-xl bg-green-50 border border-green-200">
                <p className="text-sm font-semibold text-green-700">4 Business Hours</p>
                <p className="text-xs text-green-600 mt-0.5">Guaranteed response time for all Databricks team inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES ──────────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-3">Our Offices</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Where to Find Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* NYC */}
            <div className="p-6 rounded-2xl border border-navy/5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-bold text-orange bg-orange/10 rounded-full">HQ</span>
                <span className="text-sm font-semibold text-navy">New York, NY</span>
              </div>
              <p className="text-navy-200 leading-relaxed mb-3">
                750 Lexington Avenue<br />
                New York, NY 10022
              </p>
              {/* Placeholder map */}
              <div className="aspect-[2/1] rounded-xl bg-gradient-to-br from-navy-400/50 to-navy overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* DC */}
            <div className="p-6 rounded-2xl border border-navy/5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-navy">Washington, DC</span>
              </div>
              <p className="text-navy-200 leading-relaxed mb-3">
                Washington, DC<br />
                Office location details coming soon
              </p>
              {/* Placeholder map */}
              <div className="aspect-[2/1] rounded-xl bg-gradient-to-br from-navy-400/50 to-navy overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM NOTE ──────────────────────────────────────────── */}
      <section className="gradient-navy section-padding">
        <div className="container-max text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <svg className="w-5 h-5 text-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-white/60">No Deal Registration Required</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We Handle Everything on Our End
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Blue Orange manages all deal registration internally. Your only job is to make the introduction — we take care of the rest.
          </p>
        </div>
      </section>
    </>
  );
}
