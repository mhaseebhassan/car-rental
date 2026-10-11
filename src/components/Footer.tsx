import React from "react";
import Link from "next/link";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-paper)] text-[var(--text-ink)] rule-t mt-auto">
      {/* Top Pre-Footer Marquee Ticker */}
      <div className="bg-[var(--text-ink)] text-white py-3 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#E0DCD3]">
          <span>FERRARI F8 TRIBUTO: READY IN MARINA</span>
          <span>·</span>
          <span>AIRPORT TERMINAL 3 MEET AND GREET: ZERO DELAY</span>
          <span>·</span>
          <span>ROLLS-ROYCE CULLINAN: AVAILABLE WITH CHAUFFEUR</span>
          <span>·</span>
          <span>NO DEPOSIT CREDIT CARD PRE-AUTHORIZATION HOLD</span>
          <span>·</span>
          <span>MERCEDES-AMG G63: OBSIDIAN BLACK DELIVERED TODAY</span>
          <span>·</span>
          <span>RTA COMMERCIAL FLEET PERMIT #2026-DXB-9912</span>
          <span>·</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--text-ink)] text-white flex items-center justify-center font-mono font-bold text-sm">
                AD
              </div>
              <span className="font-mono font-bold text-lg tracking-tight">
                {brandConfig.name}
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {brandConfig.tagline} Direct fleet ownership with no intermediary broker markups. Certified RTA commercial transport standards across the United Arab Emirates.
            </p>
            <div className="font-mono text-xs text-[var(--accent)] font-semibold space-y-1">
              <div>{brandConfig.permitNumber}</div>
              <div>{brandConfig.coordinates}</div>
            </div>
          </div>

          {/* Col 2: Fleet & Services */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--text-ink)]">
              Fleet &amp; Programs
            </div>
            <ul className="space-y-2 text-xs font-mono uppercase">
              <li>
                <Link href="/fleet" className="hover:text-[var(--accent)] transition-colors">
                  Supercars &amp; Exotics
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-[var(--accent)] transition-colors">
                  Luxury SUVs &amp; Maybach
                </Link>
              </li>
              <li>
                <Link href="/monthly-rental" className="hover:text-[var(--accent)] transition-colors">
                  Long-Term &amp; Monthly
                </Link>
              </li>
              <li>
                <Link href="/airport-delivery" className="hover:text-[var(--accent)] transition-colors">
                  DXB Airport VIP Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--accent)] transition-colors">
                  Mechanical Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Delivery Hubs */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--text-ink)]">
              Delivery Hubs
            </div>
            <ul className="space-y-2 text-xs text-[var(--text-muted)] font-mono">
              <li>DXB Terminal 1, 2 &amp; 3 VIP Valet</li>
              <li>Al Maktoum Airport (DWC VIP)</li>
              <li>Downtown Dubai &amp; DIFC</li>
              <li>Palm Jumeirah &amp; West Beach</li>
              <li>Dubai Marina &amp; Bluewaters</li>
              <li>Emirates Hills Private Gate</li>
            </ul>
          </div>

          {/* Col 4: Dispatch Contacts */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--text-ink)]">
              Direct Dispatch
            </div>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={`tel:${brandConfig.phone}`}
                className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>{brandConfig.phoneDisplay}</span>
              </a>
              <a
                href={getWhatsAppUrl("Hi Apex Drive dispatch, I am looking to confirm a vehicle today.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>{brandConfig.whatsappDisplay} (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-2 text-[var(--text-muted)]">
                <MapPinIcon className="w-3.5 h-3.5 mt-0.5 text-[var(--accent)] shrink-0" />
                <span>{brandConfig.address}</span>
              </div>
            </div>

            <div className="p-3 rule-all bg-[var(--bg-surface)] text-[11px] font-mono">
              <div className="text-[var(--accent)] font-semibold">RESPONSE GUARANTEE:</div>
              <div className="text-[var(--text-muted)] mt-0.5">Average dispatch response under 8 minutes 24/7.</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Hairline Strip */}
        <div className="rule-t mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            &copy; {currentYear} {brandConfig.brokerage}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-[var(--text-ink)] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/legal" className="hover:text-[var(--text-ink)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal" className="hover:text-[var(--text-ink)] transition-colors">
              RTA Rental Regulations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
