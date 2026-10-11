import React from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/config/brand";
import { CheckIcon, WhatsAppIcon, ArrowUpRightIcon } from "./Icons";

export default function MonthlyBlock() {
  const monthlyBenefits = [
    "Up to 35% discount compared to standard daily rates",
    "Zero long-term bank financing or depreciation liabilities",
    "Complimentary vehicle swap every 30 days upon request",
    "Full mechanical servicing and OEM tire replacement included",
    "Immediate replacement vehicle delivered during any service window",
    "Monthly VAT tax invoices formatted for corporate accounting",
  ];

  const msg = "Hi Apex Drive, I am interested in a monthly luxury vehicle lease. Please share current rates.";

  return (
    <section className="rule-b bg-[var(--text-ink)] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[var(--accent)] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              LONG-TERM &amp; CORPORATE LEASING
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              MONTHLY TERMS FOR RESIDENTS &amp; ENTERPRISES.
            </h2>
            <p className="text-sm sm:text-base text-[#DDD7CB] leading-relaxed max-w-xl">
              Enjoy complete vehicle sovereignty across Dubai without the capital lockup of outright vehicle ownership. Flexible 30 to 365 day agreements with direct company support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {monthlyBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#E5E0D8]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase tracking-wider font-bold py-3 px-6 inline-flex items-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Discuss Monthly Terms</span>
              </a>
              <Link
                href="/monthly-rental"
                className="border border-white/30 hover:border-white text-white font-mono text-xs uppercase tracking-wider py-3 px-6 inline-flex items-center gap-2 transition-colors"
              >
                <span>Read Full Program</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Rate Benchmark Panel */}
          <div className="lg:col-span-5 bg-black/60 border border-white/20 p-6 sm:p-8 space-y-6">
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
              MONTHLY RATE BENCHMARKS (30 DAYS)
            </div>

            <div className="space-y-4 font-mono text-xs divide-y divide-white/10">
              <div className="pt-2 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">Mercedes-AMG G63</div>
                  <div className="text-[#A8A49C] text-[10px]">Daily: AED 2,200</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--accent)] font-bold text-sm">AED 44,000 / Mo</div>
                  <div className="text-green-400 text-[10px]">Save 33%</div>
                </div>
              </div>

              <div className="pt-3 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">Range Rover Autobiography</div>
                  <div className="text-[#A8A49C] text-[10px]">Daily: AED 2,000</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--accent)] font-bold text-sm">AED 40,000 / Mo</div>
                  <div className="text-green-400 text-[10px]">Save 33%</div>
                </div>
              </div>

              <div className="pt-3 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">Porsche 911 GT3 (992)</div>
                  <div className="text-[#A8A49C] text-[10px]">Daily: AED 2,900</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--accent)] font-bold text-sm">AED 58,000 / Mo</div>
                  <div className="text-green-400 text-[10px]">Save 33%</div>
                </div>
              </div>

              <div className="pt-3 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">Rolls-Royce Cullinan</div>
                  <div className="text-[#A8A49C] text-[10px]">Daily: AED 4,500</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--accent)] font-bold text-sm">AED 90,000 / Mo</div>
                  <div className="text-green-400 text-[10px]">Save 33%</div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#A8A49C] bg-white/5 p-3">
              All monthly rates include 5,000 km per month, full comprehensive insurance, and zero maintenance costs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
