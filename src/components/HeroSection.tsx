"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { SpeedometerIcon, WhatsAppIcon, ShieldCheckIcon, ClockIcon } from "./Icons";

export default function HeroSection() {
  const [pickupLocation, setPickupLocation] = useState("DXB Airport Terminal 3");
  const [dates, setDates] = useState("3 Days");
  const [category, setCategory] = useState("Supercar");

  const composeWhatsApp = () => {
    const text = `Hi Apex Drive, I want to rent a ${category} for ${dates} with delivery to ${pickupLocation}. Please share available options.`;
    window.open(getWhatsAppUrl(text), "_blank");
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between border-b-2 border-[#0E0E0E] bg-[#F3F1EC] overflow-hidden">
      {/* Background Visual Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/car-hero.webp"
          alt="Dubai Luxury Supercar Fleet"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F3F1EC] via-transparent to-transparent" />
      </div>

      {/* Top Telemetry Strip */}
      <div className="relative z-10 w-full px-4 sm:px-8 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-[#0E0E0E]">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 bg-white border border-[#0E0E0E] font-bold">
            {brandConfig.permitNumber}
          </span>
          <span className="hidden sm:inline text-[#55524C]">
            COMMERCIAL RTA REGISTERED FLEET
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#55524C]">
          <span>{brandConfig.coordinates}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline text-[#0E0E0E] font-bold">
            AL QUOZ CENTRAL DEPOT
          </span>
        </div>
      </div>

      {/* Main Center Headline */}
      <div className="relative z-10 w-full px-4 sm:px-8 py-10 sm:py-14 max-w-6xl">
        <div className="inline-block px-3 py-1 bg-[#0E0E0E] text-white font-mono text-[11px] uppercase font-bold tracking-widest mb-6">
          DIRECT FLEET OWNERSHIP · ZERO BROKER MARKUPS
        </div>

        <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#0E0E0E] leading-[0.96] mb-6">
          PRECISION AUTOMOTIVE. <br />
          <span className="text-[#E8590C]">ZERO COMPROMISE.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#55524C] max-w-2xl font-normal leading-relaxed">
          Ferrari, Lamborghini, Rolls-Royce, and AMG delivered directly to DXB Airport or your private residence in under 60 minutes.
        </p>
      </div>

      {/* Instant Booking Strip */}
      <div className="relative z-10 w-full bg-white border-t border-[#0E0E0E] p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Field 1: Pickup Location */}
            <div className="space-y-1.5">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-[#55524C] font-semibold">
                01 / Pickup Location
              </label>
              <select
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full bg-[#F3F1EC] text-[#0E0E0E] border border-[#0E0E0E] px-3 py-2.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#E8590C]"
              >
                <option value="DXB Airport Terminal 3">DXB Airport Terminal 3 (VIP Valet)</option>
                <option value="DXB Airport Terminal 1">DXB Airport Terminal 1</option>
                <option value="DWC Al Maktoum Airport">DWC VIP Private Terminal</option>
                <option value="Downtown Dubai & DIFC">Downtown Dubai &amp; DIFC</option>
                <option value="Palm Jumeirah">Palm Jumeirah (Private Villa/Hotel)</option>
                <option value="Dubai Marina & JBR">Dubai Marina &amp; JBR</option>
                <option value="Emirates Hills">Emirates Hills</option>
              </select>
            </div>

            {/* Field 2: Duration */}
            <div className="space-y-1.5">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-[#55524C] font-semibold">
                02 / Rental Duration
              </label>
              <select
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full bg-[#F3F1EC] text-[#0E0E0E] border border-[#0E0E0E] px-3 py-2.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#E8590C]"
              >
                <option value="1 Day (24 Hours)">1 Day (24 Hours)</option>
                <option value="3 Days Weekend">3 Days (Weekend Package)</option>
                <option value="7 Days Weekly">7 Days (Weekly Rate -15%)</option>
                <option value="14 Days">14 Days (Bi-Weekly)</option>
                <option value="30 Days Monthly">30 Days (Monthly Lease -35%)</option>
              </select>
            </div>

            {/* Field 3: Category */}
            <div className="space-y-1.5">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-[#55524C] font-semibold">
                03 / Vehicle Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#F3F1EC] text-[#0E0E0E] border border-[#0E0E0E] px-3 py-2.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#E8590C]"
              >
                <option value="Supercar">Supercar (Ferrari / Huracán / GT3)</option>
                <option value="Luxury SUV">Luxury SUV (Cullinan / G63 / Range)</option>
                <option value="Grand Tourer">Grand Tourer (Bentley / M4)</option>
                <option value="Executive Sedan">Executive (Maybach / Plaid)</option>
                <option value="Convertible">Convertible (Huracán Spyder / C8)</option>
              </select>
            </div>

            {/* Field 4: WhatsApp Action */}
            <div>
              <button
                type="button"
                onClick={composeWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#E8590C] hover:bg-[#C94A06] text-white py-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold transition-colors border border-[#0E0E0E] shadow-sm cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Check Availability</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar Pillars */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#0E0E0E] bg-[#F3F1EC] text-[#0E0E0E] border-t border-[#0E0E0E]">
        <div className="p-4 sm:p-5 flex items-center gap-3">
          <ShieldCheckIcon className="w-5 h-5 text-[#E8590C] shrink-0" />
          <div className="leading-tight">
            <div className="font-mono text-xs font-bold uppercase">Zero Deposit Options</div>
            <div className="text-[11px] text-[#55524C]">Card pre-authorization hold</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 flex items-center gap-3">
          <ClockIcon className="w-5 h-5 text-[#E8590C] shrink-0" />
          <div className="leading-tight">
            <div className="font-mono text-xs font-bold uppercase">Sub-60 Min Delivery</div>
            <div className="text-[11px] text-[#55524C]">To any hotel, villa or terminal</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 flex items-center gap-3">
          <SpeedometerIcon className="w-5 h-5 text-[#E8590C] shrink-0" />
          <div className="leading-tight">
            <div className="font-mono text-xs font-bold uppercase">250 KM Daily Included</div>
            <div className="text-[11px] text-[#55524C]">Full tank on delivery</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center font-mono font-bold text-xs bg-[#0E0E0E] text-white shrink-0">
            ✓
          </div>
          <div className="leading-tight">
            <div className="font-mono text-xs font-bold uppercase">RTA Certified Fleet</div>
            <div className="text-[11px] text-[#55524C]">Commercial permit #2026-DXB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
