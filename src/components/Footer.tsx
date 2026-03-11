import Link from "next/link";

const footerLinks = {
  Portal: [
    { href: "/why-blue-orange", label: "Why Blue Orange" },
    { href: "/offers", label: "Offers & Accelerators" },
    { href: "/credits", label: "Credit Program" },
    { href: "/value-based-pricing", label: "Value-Based Pricing" },
  ],
  Resources: [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/resources", label: "Co-Sell Toolkit" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Book a Call" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-max section-padding pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange to-dbricks flex items-center justify-center">
                <span className="text-white font-bold text-sm">BO</span>
              </div>
              <span className="font-semibold">Blue Orange Digital</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your Data & AI Delivery Partner for Mid-Market and PE-Backed Companies.
              Databricks Consulting Partner.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              New York, NY (HQ) &middot; Washington, DC
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              Powered by <span className="text-white/60 font-medium">Blue Orange Digital</span> &middot; Backed by <span className="text-white/60 font-medium">Oliver Wyman</span>
            </p>
            <div className="flex items-center gap-4">
              {/* Databricks partner badge placeholder */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <div className="w-4 h-4 rounded bg-dbricks/80" />
                <span className="text-xs text-white/50">Databricks Consulting Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
