"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-blue-orange", label: "Why Blue Orange" },
  { href: "/credits", label: "Credits" },
  { href: "/value-based-pricing", label: "Value-Based Pricing" },
  { href: "/offers", label: "Offers" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Placeholder logo lockup */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange to-dbricks flex items-center justify-center">
                <span className="text-white font-bold text-sm">BO</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="text-white font-semibold text-sm">Blue Orange</span>
                <span className="text-white/30 text-xs">×</span>
                <span className="text-dbricks font-semibold text-sm">Databricks</span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[13px] font-medium rounded-md transition-colors ${
                  link.label === "Value-Based Pricing"
                    ? "text-orange hover:text-orange-300 hover:bg-orange/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {link.label === "Value-Based Pricing" && (
                  <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange/20 text-orange">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-orange rounded-lg hover:bg-orange-500 transition-all duration-200 hover:shadow-lg hover:shadow-orange/25"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-navy border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  link.label === "Value-Based Pricing"
                    ? "text-orange bg-orange/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {link.label === "Value-Based Pricing" && (
                  <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange/20 text-orange">
                    EXCLUSIVE
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center px-4 py-3 text-sm font-semibold text-white bg-orange rounded-lg"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
