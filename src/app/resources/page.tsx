"use client";

import { useState } from "react";

const emailTemplates = [
  {
    title: "Introducing Our Delivery Partner",
    subject: "Introducing Blue Orange Digital — Our Data & AI Delivery Partner",
    body: `Hi [Customer Name],

I wanted to introduce you to Blue Orange Digital, one of our top delivery partners for data and AI initiatives. They specialize in mid-market and PE-backed companies, and they've delivered 250+ production deployments on Databricks.

What makes them different:
• Backed by Oliver Wyman — boutique agility with enterprise credibility
• Databricks-first — they build exclusively on the Lakehouse platform
• Executive accessibility — their CEO and CTO personally attend client meetings
• 95% strategy-to-build rate — when they scope a project, it moves to production

I think they'd be a great fit for [specific initiative]. Happy to set up an intro call — they respond within 4 business hours.

Best,
[Your Name]`,
  },
  {
    title: "Free Data Maturity Assessment",
    subject: "Free Data & AI Maturity Assessment for [Company Name]",
    body: `Hi [Customer Name],

I wanted to share a resource that's been really valuable for companies like yours — a free Data & AI Maturity Assessment from Blue Orange Digital (one of our Databricks delivery partners).

It takes about 2 minutes and gives you:
• A composite score (0-100) across 5 dimensions
• Benchmarking against industry peers
• 3 prioritized recommendations specific to your data stack
• Dollar-denominated opportunity mapping to Databricks products

Most customers score around 35/100 — meaning there's significant untapped potential in their Databricks investment.

Here's the link: [Assessment Link]

No commitment required — it's a free tool. Let me know if the results surface anything interesting and we can discuss next steps.

Best,
[Your Name]`,
  },
  {
    title: "Databricks Credits for Your Project",
    subject: "Databricks Consumption Credits Available for [Company Name]",
    body: `Hi [Customer Name],

Quick note — Blue Orange Digital, one of our Databricks delivery partners, has a credit program where they provide Databricks consumption credits for qualifying projects. This can significantly reduce the initial investment for data platform initiatives.

How it works:
1. We identify the right project scope together
2. Blue Orange qualifies the engagement
3. Credits are allocated to offset your Databricks consumption costs
4. Joint delivery ensures you get maximum value

This is specifically for deals we introduce — it's their way of investing in the partnership. If you're considering a data modernization or AI initiative, this could meaningfully impact your business case.

Want me to set up a quick call with their CEO Josh to discuss eligibility?

Best,
[Your Name]`,
  },
  {
    title: "Executive Dinner Invitation",
    subject: "Invitation: Executive Dinner — AI in [Industry] | [Date]",
    body: `Hi [Customer Name],

I'd like to invite you to an exclusive executive dinner hosted by Blue Orange Digital (one of our Databricks delivery partners) at Fly Fish Club in NYC.

Event Details:
• Topic: AI in [Industry] — From Strategy to Production
• Format: Intimate roundtable dinner (8-10 executives)
• Date: [Date]
• Venue: Fly Fish Club, NYC (private dining)
• Agenda: Cocktails, three-course dinner, and a fireside chat with Blue Orange's CEO and CTO

This is not a sales pitch — it's a genuine discussion with peers about how leading companies are turning AI initiatives into production systems. The guest list includes executives from [2-3 similar companies].

Spots are limited to keep the conversation intimate. Let me know if you'd like to attend and I'll reserve your seat.

Best,
[Your Name]`,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
        copied
          ? "bg-green-100 text-green-700 border border-green-200"
          : "bg-orange text-white hover:bg-orange-500 hover:shadow-lg hover:shadow-orange/25"
      }`}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Copy to Clipboard
        </>
      )}
    </button>
  );
}

export default function Resources() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative gradient-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
        </div>
        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-dbricks mb-4">Co-Sell Toolkit</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            Resources &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Assets
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            Everything you need to pitch Blue Orange — no forms, no gates. Download and share with one click.
          </p>
        </div>
      </section>

      {/* ── DOWNLOADABLE ASSETS ──────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-dbricks mb-3">Downloads</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-4">Downloadable Assets</h2>
            <p className="text-muted">Single-click downloads. No forms. No gates.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Co-Sell Deck",
                desc: "Co-branded Blue Orange x Databricks overview deck. Differentiators, offers, case studies, team.",
                format: "PPTX",
                accent: "border-t-dbricks",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
              },
              {
                title: "One-Pager",
                desc: "Single-page PDF summarizing Blue Orange's Databricks practice, key stats, and contact info.",
                format: "PDF",
                accent: "border-t-orange",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                ),
              },
              {
                title: "Battle Cards",
                desc: "Competitive positioning vs. other Databricks partners. Why Blue Orange wins on key dimensions.",
                format: "PDF",
                accent: "border-t-amber",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                ),
              },
              {
                title: "Qualification Checklist",
                desc: "Quick guide for AEs to identify good-fit opportunities for Blue Orange engagement.",
                format: "PDF",
                accent: "border-t-dbricks",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                ),
              },
            ].map((asset) => (
              <div key={asset.title} className={`p-6 rounded-md border border-dark/5 border-t-3 ${asset.accent} bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col`}>
                <div className="w-12 h-12 rounded-md bg-dark/5 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {asset.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-dark mb-1">{asset.title}</h3>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-dbricks mb-2">{asset.format}</span>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{asset.desc}</p>
                <button className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded text-sm font-semibold text-white bg-dark hover:bg-dark/80 transition-colors">
                  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download {asset.format}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL TEMPLATES ──────────────────────────────────────── */}
      <section className="bg-stone-100 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-dbricks mb-3">Ready to Send</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-4">Email Templates</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Pre-written emails you can forward to customers. Copy with one click, customize the brackets, and send.
            </p>
          </div>

          <div className="space-y-6">
            {emailTemplates.map((tmpl) => (
              <div key={tmpl.title} className="p-6 md:p-8 rounded-md bg-white border border-dark/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-dark">{tmpl.title}</h3>
                    <p className="text-sm text-muted">Subject: {tmpl.subject}</p>
                  </div>
                  <CopyButton text={`Subject: ${tmpl.subject}\n\n${tmpl.body}`} />
                </div>
                <div className="p-4 rounded-md bg-stone-100 border border-dark/5">
                  <pre className="text-sm text-muted whitespace-pre-wrap font-sans leading-relaxed">
                    {tmpl.body}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-4">Need Something Custom?</h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            We can create custom assets for specific deals. Talk to our team.
          </p>
          <a href="/contact" className="btn-primary text-base px-8 py-4">
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}
