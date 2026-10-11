import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brand";
import { ShieldCheckIcon, SpeedometerIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Garage Standards & Mechanical Philosophy | Apex Drive Dubai",
  description: "Learn about Apex Drive Dubai: direct fleet ownership, factory certified mechanical protocols, RTA licensing, and our Al Quoz operational headquarters.",
};

export default function AboutPage() {
  const standards = [
    {
      title: "100% Direct Fleet Ownership",
      detail: "We own, maintain, and insure every vehicle listed on our roster. We do not broker third-party personal cars or unverified consignments.",
    },
    {
      title: "Factory Diagnostic Scans",
      detail: "Every vehicle undergoes digital OBD-II diagnostic interrogation before and after every rental cycle to verify electronic powertrain integrity.",
    },
    {
      title: "Strict Tire Safety Standards",
      detail: "Tires are replaced at 50% wear limit using OEM Pirelli, Michelin, or Goodyear rubber. We never cut corners with regrooved or generic compounds.",
    },
    {
      title: "Ozone Sanitization & Climate Care",
      detail: "Each vehicle undergoes commercial ozone antimicrobial air treatment and cabin filter replacement to eliminate desert dust and allergens.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />

      <section className="py-16 sm:py-24 rule-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-4xl space-y-4 mb-14">
            <div className="inline-block bg-[var(--accent)] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              FACILITY &amp; MECHANICAL INTEGRITY
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[var(--text-ink)] leading-[0.95]">
              BUILT ON MECHANICAL PRECISION.
              <br />
              <span className="text-[var(--accent)]">NOT BROKER MARGINS.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
              Apex Drive was founded to dismantle the opaque, broker-heavy car rental model in the UAE. We operate an owned facility in Al Quoz with professional master technicians and dedicated dispatch coordinators.
            </p>
          </div>

          {/* Operational Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 rule-t rule-b py-8 font-mono">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[var(--text-ink)]">12</div>
              <div className="text-xs text-[var(--text-muted)] uppercase mt-1">Direct Owned Vehicles</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[var(--accent)]">100%</div>
              <div className="text-xs text-[var(--text-muted)] uppercase mt-1">RTA Commercial Insured</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[var(--text-ink)]">4</div>
              <div className="text-xs text-[var(--text-muted)] uppercase mt-1">City Dispatch Hubs</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[var(--text-ink)]">21</div>
              <div className="text-xs text-[var(--text-muted)] uppercase mt-1">Days Max Deposit Return</div>
            </div>
          </div>

          {/* Standards Grid */}
          <div className="space-y-6 mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
              GARAGE OPERATING STANDARDS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.map((s, i) => (
                <div key={i} className="p-6 bg-[var(--bg-surface)] rule-all space-y-3">
                  <div className="font-mono text-xs text-[var(--accent)] font-bold">
                    PROTOCOL 0{i + 1}
                  </div>
                  <h3 className="font-mono text-lg font-bold uppercase text-[var(--text-ink)]">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal RTA Verification Box */}
          <div className="p-8 bg-[var(--bg-surface)] rule-all space-y-4 font-mono text-xs">
            <div className="text-[var(--accent)] font-bold uppercase">
              REGULATORY ACCREDITATION &amp; LICENSES
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--text-muted)]">
              <div>
                <span className="font-bold text-[var(--text-ink)]">Trade Entity:</span> {brandConfig.brokerage}
              </div>
              <div>
                <span className="font-bold text-[var(--text-ink)]">RTA Permit:</span> {brandConfig.permitNumber}
              </div>
              <div>
                <span className="font-bold text-[var(--text-ink)]">Headquarters:</span> {brandConfig.address}
              </div>
              <div>
                <span className="font-bold text-[var(--text-ink)]">GPS Coordinates:</span> {brandConfig.coordinates}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
