import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brand";

export const metadata: Metadata = {
  title: "Rental Terms, Privacy & RTA Compliance | Apex Drive Dubai",
  description: "Official rental terms, security deposit refund schedules, Salik toll charges, and UAE RTA commercial car rental conditions for Apex Drive Dubai.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />

      <section className="py-16 sm:py-24 rule-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Header */}
          <div className="space-y-4 pb-6 rule-b">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
              CONTRACTUAL FRAMEWORK &amp; COMPLIANCE
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-ink)]">
              TERMS, POLICIES &amp; RTA CONDITIONS.
            </h1>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              OPERATING ENTITY: {brandConfig.brokerage} · {brandConfig.permitNumber}
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="font-mono text-lg font-bold uppercase text-[var(--text-ink)]">
              01. DRIVER ELIGIBILITY &amp; DOCUMENTATION
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Renters must meet the minimum age requirements of 21 years old for luxury SUVs and executive sedans, and 25 years old for supercars. Drivers must present an original driving license that has been valid for at least 12 months. Tourists from eligible territories (GCC, EU, UK, USA, Canada, Australia, Switzerland, Japan) may drive on their national driving license along with their passport and valid UAE tourist visa. Other nationalities must present a valid International Driving Permit (IDP). UAE residents must present their original UAE driving license and Emirates ID.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-mono text-lg font-bold uppercase text-[var(--text-ink)]">
              02. SECURITY DEPOSIT RETURN TIMELINE
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Standard security deposits are held as a pre-authorization on a major credit card. Pursuant to UAE commercial automotive practice, deposits are held for a maximum period of 21 to 30 calendar days following vehicle return. This period permits Dubai Police and UAE RTA traffic databases to synchronize pending fine notifications, electronic speed radar records, and inter-emirate road tolls. Upon receipt of final clearance, the unbilled hold is immediately released and an electronic bank confirmation is transmitted to the renter.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-mono text-lg font-bold uppercase text-[var(--text-ink)]">
              03. SALIK ROAD TOLLS &amp; TRAFFIC FINES
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              All vehicles are fitted with official electronic RTA Salik tags. Each passage through an active Salik toll gate is billed at AED 5.00 plus 5% VAT. Any traffic fines or municipal parking violations incurred during the rental tenure are the sole legal responsibility of the registered renter and will be charged alongside official government processing receipts.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="font-mono text-lg font-bold uppercase text-[var(--text-ink)]">
              04. INSURANCE &amp; ACCIDENT NOTIFICATION
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Every vehicle includes comprehensive RTA commercial fleet insurance. In the event of any collision or damage, the renter is legally obligated under UAE Federal Law to leave the vehicle stationary (where safe) and immediately contact Dubai Police (999 or via Dubai Police App) to obtain an official Green Accident Report. Repairs cannot be processed through insurance without an official police slip.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="font-mono text-lg font-bold uppercase text-[var(--text-ink)]">
              05. GEOGRAPHIC RESTRICTIONS &amp; OFF-ROAD PROHIBITION
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              All vehicles are strictly restricted to paved tarmac roads within the borders of the United Arab Emirates. Vehicles may not be taken onto race circuits, desert dunes, beaches, or unpaved tracks. Crossing into Oman or Saudi Arabia requires prior written NOC authorization and supplementary cross-border insurance documentation issued 48 hours in advance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
