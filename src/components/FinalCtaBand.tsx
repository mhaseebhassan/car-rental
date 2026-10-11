import React from "react";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export default function FinalCtaBand() {
  const msg = "Hi Apex Drive, I am ready to book a vehicle for immediate dispatch.";

  return (
    <section className="bg-[var(--bg-surface)] rule-b py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 bg-[var(--text-ink)] text-white rule-all relative overflow-hidden">
          {/* Background Monospace watermark */}
          <div className="absolute right-4 bottom-4 font-mono text-[90px] font-black text-white/5 select-none pointer-events-none leading-none">
            APEX
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-block bg-[var(--accent)] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              IMMEDIATE ALLOCATION AVAILABLE
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
              RESERVE YOUR CAR NOW.
              <br />
              <span className="text-[var(--accent)]">DELIVERED IN UNDER 60 MINS.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#DDD7CB] leading-relaxed max-w-xl font-normal">
              Whether landing at DXB Terminal 3 or relaxing at your private residence, our drivers provide immediate curbside vehicle handover with full commercial documentation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase tracking-wider font-bold py-3.5 px-8 inline-flex items-center justify-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Start WhatsApp Dispatch</span>
              </a>

              <a
                href={`tel:${brandConfig.phone}`}
                className="border border-white/40 hover:border-white text-white font-mono text-xs uppercase tracking-wider py-3.5 px-8 inline-flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call Dispatch Line ({brandConfig.phoneDisplay})</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#A8A49C]">
              <span>RESPONSE PROMISE: UNDER 8 MINUTES</span>
              <span>·</span>
              <span>ZERO HIDDEN SURCHARGES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
