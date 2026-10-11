import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FleetClient from "./FleetClient";

export const metadata: Metadata = {
  title: "Fleet Index | Exotic & Luxury Supercars Dubai",
  description: "Browse our 12 company-owned exotic supercars, luxury SUVs, and executive sedans in Dubai. Direct RTA licensed operator with under 60-minute delivery.",
};

export default function FleetPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />
      <Suspense fallback={<div className="p-20 text-center font-mono">LOADING FLEET ROSTER...</div>}>
        <FleetClient />
      </Suspense>
      <Footer />
    </main>
  );
}
