import React from "react";
import { CheckIcon, CloseIcon } from "./Icons";

export default function WhyUsTable() {
  const comparisons = [
    {
      metric: "Fleet Ownership & Legal Title",
      apex: "100% direct company-owned fleet registered with RTA",
      typical: "Sub-leased through unlicensed 3rd-party middlemen",
      apexPositive: true,
    },
    {
      metric: "Security Deposit Settlement",
      apex: "Released in 21 days with official bank authorization statement",
      typical: "Delays of 45-60 days with frequent unjustified deductions",
      apexPositive: true,
    },
    {
      metric: "Handover Speed & Punctuality",
      apex: "Guaranteed under 60 minutes to your door or AED 200 fuel credit",
      typical: "Frequent 2 to 4 hour delays and unpredictable timing",
      apexPositive: true,
    },
    {
      metric: "Insurance Transparency",
      apex: "Full commercial RTA insurance included with zero surprise surcharges",
      typical: "Mandatory surprise insurance fees added upon vehicle arrival",
      apexPositive: true,
    },
    {
      metric: "Vehicle Mechanical Condition",
      apex: "Track-inspected tire depth, OEM brakes, ozone sanitized cabin",
      typical: "Irregular service history and uneven tire wear",
      apexPositive: true,
    },
    {
      metric: "Direct WhatsApp Dispatch",
      apex: "Live garage manager answers in under 8 minutes 24/7",
      typical: "Automated chatbot or offshore outsourced ticketing center",
      apexPositive: true,
    },
  ];

  return (
    <section className="rule-b bg-[var(--bg-paper)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 pb-6 rule-b">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
            03 / OPERATIONAL INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-ink)]">
            TECHNICAL COMPARISON MATRIX.
          </h2>
          <p className="font-mono text-xs text-[var(--text-muted)] mt-2">
            Dubai luxury rental standards measured with complete contractual clarity.
          </p>
        </div>

        {/* Table Container */}
        <div className="rule-all bg-[var(--bg-surface)] overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="rule-b bg-[var(--text-ink)] text-white font-mono text-xs uppercase tracking-wider">
                <th className="py-4 px-6 w-1/3">Standard / Metric</th>
                <th className="py-4 px-6 w-1/3 text-[var(--accent)] font-bold">
                  Apex Drive (Direct Fleet)
                </th>
                <th className="py-4 px-6 w-1/3 text-[#A8A49C]">
                  Typical Broker Aggregator
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-rule)] font-mono text-xs">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-black/[0.02] transition-colors">
                  <td className="py-4 px-6 font-bold uppercase text-[var(--text-ink)]">
                    {row.metric}
                  </td>
                  <td className="py-4 px-6 text-[var(--text-ink)] font-medium bg-[var(--accent)]/5">
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--accent)] mt-0.5 font-bold">✓</span>
                      <span>{row.apex}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <span className="text-red-600 mt-0.5 font-bold">✕</span>
                      <span>{row.typical}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
