import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { CheckIcon, WhatsAppIcon, ShieldCheckIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Monthly & Long-Term Luxury Car Rental Dubai",
  description: "Flexible 30 to 365 day luxury vehicle leasing in Dubai. Up to 35% discount, complimentary vehicle swaps, full insurance, and zero depreciation liability.",
};

export default function MonthlyRentalPage() {
  const tiers = [
    {
      months: "1 Month (30 Days)",
      discount: "Save 25% to 33%",
      mileage: "5,000 KM Included",
      swaps: "1 Vehicle Swap",
      deposit: "Card Pre-Auth Hold",
      popular: false,
    },
    {
      months: "3 Months (Quarterly)",
      discount: "Save 35%",
      mileage: "15,000 KM Included",
      swaps: "Monthly Vehicle Swaps",
      deposit: "Zero Deposit for Corporate",
      popular: true,
    },
    {
      months: "6 to 12 Months (Annual)",
      discount: "Save 42%",
      mileage: "Flexible Custom Allowance",
      swaps: "Unlimited Seasonal Swaps",
      deposit: "Corporate Account Invoicing",
      popular: false,
    },
  ];

  const monthlyVehicles = [
    { name: "Mercedes-AMG G63 V8", rate: "AED 44,000 / Month", normal: "AED 66,000" },
    { name: "Range Rover Autobiography LWB", rate: "AED 40,000 / Month", normal: "AED 60,000" },
    { name: "Porsche 911 GT3 (992)", rate: "AED 58,000 / Month", normal: "AED 87,000" },
    { name: "Rolls-Royce Cullinan", rate: "AED 90,000 / Month", normal: "AED 135,000" },
    { name: "Bentley Continental GT V8", rate: "AED 56,000 / Month", normal: "AED 84,000" },
    { name: "Mercedes-Maybach S580", rate: "AED 48,000 / Month", normal: "AED 72,000" },
  ];

  const msg = "Hi Apex Drive, I want to discuss a monthly rental agreement for a luxury vehicle.";

  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />

      <section className="py-16 sm:py-24 rule-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-4xl space-y-4 mb-14">
            <div className="inline-block bg-[var(--accent)] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              ENTERPRISE &amp; RESIDENTIAL FLEET
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[var(--text-ink)] leading-[0.95]">
              MONTHLY LUXURY LEASING.
              <br />
              <span className="text-[var(--accent)]">ZERO DEPRECIATION.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
              Designed for entrepreneurs, expatriate executives, and long-stay seasonal visitors who demand high-tier transport without banking encumbrance or long-term vehicle ownership friction.
            </p>
          </div>

          {/* Pricing Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rule-all flex flex-col justify-between space-y-6 ${
                  t.popular ? "bg-[var(--text-ink)] text-white" : "bg-[var(--bg-surface)] text-[var(--text-ink)]"
                }`}
              >
                <div>
                  {t.popular && (
                    <div className="text-[10px] font-mono font-bold uppercase text-[var(--accent)] mb-2">
                      RECOMMENDED FOR RESIDENTS
                    </div>
                  )}
                  <h2 className="font-mono text-xl font-bold uppercase tracking-tight">
                    {t.months}
                  </h2>
                  <div className={`font-mono text-sm font-bold mt-1 ${t.popular ? "text-[var(--accent)]" : "text-green-700"}`}>
                    {t.discount}
                  </div>

                  <ul className="mt-6 space-y-3 font-mono text-xs">
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span>{t.mileage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span>{t.swaps}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span>Full RTA Commercial Insurance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span>Scheduled Maintenance &amp; Tires</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span>{t.deposit}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-current/20">
                  <a
                    href={getWhatsAppUrl(`Hi Apex Drive, I am inquiring about the ${t.months} lease program.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors ${
                      t.popular
                        ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white"
                        : "bg-[var(--text-ink)] hover:bg-[var(--accent)] text-white"
                    }`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Inquire for {t.months}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Monthly Roster Matrix */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--text-ink)] font-bold">
              MONTHLY ALLOCATION BENCHMARKS
            </h2>

            <div className="rule-all bg-[var(--bg-surface)] divide-y divide-[var(--border-rule)] font-mono text-xs">
              {monthlyVehicles.map((car, i) => (
                <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-black/[0.01]">
                  <div>
                    <div className="font-bold text-base uppercase text-[var(--text-ink)]">
                      {car.name}
                    </div>
                    <div className="text-[var(--text-muted)] text-[11px]">
                      Standard 30-day cumulative rate: <span className="line-through">{car.normal}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-black text-lg text-[var(--accent)]">
                        {car.rate}
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)] uppercase">
                        Includes 5,000 KM &amp; Full Service
                      </div>
                    </div>

                    <a
                      href={getWhatsAppUrl(`Hi Apex Drive, I want to book the ${car.name} on monthly terms.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[var(--text-ink)] text-white hover:bg-[var(--accent)] transition-colors uppercase"
                    >
                      Book Month
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
