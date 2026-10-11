"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { useCurrency } from "@/context/CurrencyContext";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Fleet Index", href: "/fleet" },
    { label: "Monthly Rental", href: "/monthly-rental" },
    { label: "Airport VIP", href: "/airport-delivery" },
    { label: "Garage Standards", href: "/about" },
    { label: "Dispatch Direct", href: "/contact" },
  ];

  const quickMsg = "Hi Apex Drive, I want to inquire about vehicle availability.";

  return (
    <header className="sticky top-0 z-40 bg-[#F3F1EC] border-b border-[#0E0E0E]">
      {/* Top Telemetry Strip */}
      <div className="bg-[#0E0E0E] text-[#E5E0D8] py-1.5 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[var(--accent)] animate-pulse" />
            <span className="text-white font-medium">DISPATCH ACTIVE:</span>
            <span className="hidden sm:inline">DXB / DWC / PALM / DOWNTOWN UNDER 60 MINS</span>
          </div>
          <div className="flex items-center gap-4 text-[#A8A49C]">
            <span className="hidden md:inline">{brandConfig.permitNumber}</span>
            <span className="text-[var(--accent)] font-semibold">24/7 SUPPORT</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[var(--text-ink)] text-white flex items-center justify-center font-mono font-bold text-sm group-hover:bg-[var(--accent)] transition-colors">
            AD
          </div>
          <div className="leading-tight">
            <div className="font-mono font-bold text-base tracking-tight text-[var(--text-ink)]">
              {brandConfig.name}
            </div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)]">
              RTA LICENSED FLEET
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider transition-colors py-1 ${
                  isActive
                    ? "text-[var(--accent)] font-semibold border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-ink)] hover:text-[var(--accent)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Currency Toggle */}
          <div className="hidden sm:flex items-center rule-all font-mono text-xs overflow-hidden">
            <button
              type="button"
              onClick={() => setCurrency("AED")}
              className={`px-2.5 py-1.5 transition-colors ${
                currency === "AED"
                  ? "bg-[var(--text-ink)] text-white font-semibold"
                  : "bg-transparent text-[var(--text-ink)] hover:bg-black/5"
              }`}
            >
              AED
            </button>
            <div className="w-[1px] h-6 bg-[var(--border-rule)]" />
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-2.5 py-1.5 transition-colors ${
                currency === "USD"
                  ? "bg-[var(--text-ink)] text-white font-semibold"
                  : "bg-transparent text-[var(--text-ink)] hover:bg-black/5"
              }`}
            >
              USD
            </button>
          </div>

          {/* Desktop WhatsApp CTA */}
          <a
            href={getWhatsAppUrl(quickMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--text-ink)] text-white hover:bg-[var(--accent)] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>WhatsApp Dispatch</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rule-all text-[var(--text-ink)] hover:bg-black/5 transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-[1.5px] bg-[var(--text-ink)] transition-transform duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[1.5px] bg-[var(--text-ink)] transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-[var(--text-ink)] transition-transform duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-paper)] rule-t p-6 space-y-6">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-sm uppercase tracking-wider py-2 rule-b flex items-center justify-between ${
                  pathname === link.href ? "text-[var(--accent)] font-bold" : "text-[var(--text-ink)]"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--text-muted)]">→</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-xs uppercase text-[var(--text-muted)]">Currency Switcher</span>
            <div className="flex items-center rule-all font-mono text-xs">
              <button
                type="button"
                onClick={() => setCurrency("AED")}
                className={`px-3 py-1.5 ${currency === "AED" ? "bg-[var(--text-ink)] text-white" : ""}`}
              >
                AED
              </button>
              <div className="w-[1px] h-6 bg-[var(--border-rule)]" />
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 ${currency === "USD" ? "bg-[var(--text-ink)] text-white" : ""}`}
              >
                USD
              </button>
            </div>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-3">
            <a
              href={`tel:${brandConfig.phone}`}
              className="flex items-center justify-center gap-2 py-3 rule-all font-mono text-xs uppercase tracking-wider"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={getWhatsAppUrl(quickMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[var(--accent)] text-white font-mono text-xs uppercase tracking-wider"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
