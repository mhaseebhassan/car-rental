"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/data/fleet";
import { useCurrency } from "@/context/CurrencyContext";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import {
  SpeedometerIcon,
  HorsepowerIcon,
  TransmissionIcon,
  SeatIcon,
  LuggageIcon,
  ShieldCheckIcon,
  ClockIcon,
  WhatsAppIcon,
  PhoneIcon,
  CheckIcon,
} from "@/components/Icons";

interface VehicleDetailClientProps {
  car: Vehicle;
}

export default function VehicleDetailClient({ car }: VehicleDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(car.gallery[0] || car.image);
  const { formatPrice } = useCurrency();

  const bookingMsg = `Hi Apex Drive dispatch, I am looking to rent the ${car.name} (${car.year}). Please share current availability and delivery details.`;

  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb & Roster Ref */}
        <div className="flex items-center justify-between font-mono text-xs uppercase mb-6 pb-4 rule-b">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--text-ink)]">Home</Link>
            <span>/</span>
            <Link href="/fleet" className="hover:text-[var(--text-ink)]">Fleet Index</Link>
            <span>/</span>
            <span className="text-[var(--text-ink)] font-bold">{car.name}</span>
          </div>
          <div className="text-[var(--accent)] font-bold">
            RTA SPECIMEN #{car.slug.toUpperCase()}
          </div>
        </div>

        {/* Vehicle Title & Key Stats Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-block px-2.5 py-1 bg-black/5 font-mono text-xs uppercase tracking-wider text-[var(--text-ink)] rule-all">
              {car.category} · Model Year {car.year}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-ink)]">
              {car.name}
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal max-w-2xl">
              {car.tagline}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 bg-[var(--bg-surface)] rule-all w-full sm:w-auto text-left lg:text-right">
              <div className="font-mono text-2xl sm:text-3xl font-black text-[var(--text-ink)]">
                {formatPrice(car.pricePerDay)}
              </div>
              <div className="font-mono text-xs uppercase text-[var(--text-muted)]">
                Per Day · 250 KM Included
              </div>
              <div className="mt-2 text-[11px] font-mono text-[var(--accent)] font-semibold">
                {car.zeroDepositAvailable ? "0-Deposit Credit Card Pre-Auth Available" : "Standard Security Deposit Held"}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-4 mb-12">
          {/* Main Large Visual */}
          <div className="relative w-full aspect-[16/9] max-h-[580px] bg-black overflow-hidden rule-all">
            <Image
              src={selectedImage}
              alt={car.name}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 bg-black/80 text-white font-mono text-xs px-3 py-1 rule-all">
              {car.specs.horsepower} HP · {car.specs.zeroToHundred} (0-100)
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {car.gallery.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`relative aspect-[16/10] bg-black overflow-hidden rule-all transition-opacity ${
                  selectedImage === img ? "ring-2 ring-[var(--accent)] opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${car.name} angle ${index + 1}`}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Specs and Description */}
          <div className="lg:col-span-8 space-y-10">
            {/* Description */}
            <div className="space-y-3">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--accent)] font-bold">
                ENGINEERING PROFILE
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-ink)] leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Technical Spec Sheet Table */}
            <div className="space-y-4">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--text-ink)] font-bold">
                FACTORY SPECIFICATION DATA
              </h2>
              <div className="rule-all bg-[var(--bg-surface)] divide-y divide-[var(--border-rule)] font-mono text-xs">
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Engine / Powertrain</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.engine}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Power Output</span>
                  <span className="font-bold text-[var(--accent)]">{car.specs.horsepower} Horsepower</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">0-100 km/h Sprint</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.zeroToHundred}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Maximum Track Velocity</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.topSpeed}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Transmission Type</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.transmission}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Drivetrain</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.drivetrain}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Passenger Capacity</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.seats} Occupants</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Luggage Volume</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.luggage} Suitcases</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 hover:bg-black/[0.02]">
                  <span className="text-[var(--text-muted)] uppercase">Required Fuel Octane</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.specs.fuelType}</span>
                </div>
              </div>
            </div>

            {/* Included in Rental Contract */}
            <div className="space-y-4">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--text-ink)] font-bold">
                COMPLIMENTARY WITH EVERY BOOKING
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.included.map((item, idx) => (
                  <div key={idx} className="p-3 bg-[var(--bg-surface)] rule-all flex items-start gap-2.5 text-xs font-mono">
                    <span className="text-[var(--accent)] font-bold mt-0.5">✓</span>
                    <span className="text-[var(--text-ink)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Equipment & Features */}
            <div className="space-y-4">
              <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--text-ink)] font-bold">
                CHASSIS &amp; COCKPIT FEATURES
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[var(--text-muted)]">
                {car.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Rate Tiers & Rental Rules */}
          <div className="lg:col-span-4 space-y-6">
            {/* Rate Matrix Card */}
            <div className="p-6 bg-[var(--bg-surface)] rule-all space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
                RATE MATURITY SCHEDULE
              </div>

              <div className="space-y-3 font-mono text-xs divide-y divide-[var(--border-rule)]">
                <div className="pt-2 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[var(--text-ink)]">Daily Rental (24h)</div>
                    <div className="text-[10px] text-[var(--text-muted)]">250 km included</div>
                  </div>
                  <div className="font-bold text-[var(--text-ink)] text-base">
                    {formatPrice(car.pricePerDay)}
                  </div>
                </div>

                <div className="pt-3 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[var(--text-ink)]">Weekly Tier (7 Days)</div>
                    <div className="text-[10px] text-green-600 font-bold">Save 15%</div>
                  </div>
                  <div className="font-bold text-[var(--text-ink)] text-base">
                    {formatPrice(car.pricePerWeek)}
                  </div>
                </div>

                <div className="pt-3 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[var(--text-ink)]">Monthly Tier (30 Days)</div>
                    <div className="text-[10px] text-green-600 font-bold">Save 35%</div>
                  </div>
                  <div className="font-bold text-[var(--text-ink)] text-base">
                    {formatPrice(car.pricePerMonth)}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(bookingMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors rule-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Reserve on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Rental Contract Terms */}
            <div className="p-6 bg-[var(--bg-paper)] rule-all space-y-3 font-mono text-xs">
              <div className="text-[var(--text-ink)] font-bold uppercase">
                CONTRACT CONDITIONS
              </div>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li className="flex justify-between py-1 border-b border-[var(--border-rule)]/20">
                  <span>Security Deposit:</span>
                  <span className="font-bold text-[var(--text-ink)]">AED {car.securityDeposit.toLocaleString()}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[var(--border-rule)]/20">
                  <span>Daily Mileage Limit:</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.mileageLimitPerDay} KM</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[var(--border-rule)]/20">
                  <span>Additional KM Fee:</span>
                  <span className="font-bold text-[var(--text-ink)]">AED {car.extraKmFee} / KM</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[var(--border-rule)]/20">
                  <span>Minimum Age:</span>
                  <span className="font-bold text-[var(--text-ink)]">{car.minimumAge} Years</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Insurance Included:</span>
                  <span className="font-bold text-[var(--text-ink)]">Full Commercial RTA</span>
                </li>
              </ul>
            </div>

            {/* Required Documentation Box */}
            <div className="p-6 bg-[var(--text-ink)] text-white rule-all space-y-3 font-mono text-xs">
              <div className="text-[var(--accent)] font-bold uppercase">
                REQUIRED AT HANDOVER
              </div>
              <p className="text-[#DDD7CB] leading-relaxed">
                Tourists: Passport, Tourist Visa, Home Driving License (GCC/US/EU/UK require no IDP).
              </p>
              <p className="text-[#DDD7CB] leading-relaxed">
                Residents: Emirates ID &amp; UAE Driving License.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[var(--bg-paper)]/95 backdrop-blur-md rule-t p-3 sm:p-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <div className="font-bold text-sm uppercase text-[var(--text-ink)]">{car.name}</div>
              <div className="font-mono text-[10px] text-[var(--text-muted)]">DXB Ready · Immediate Dispatch</div>
            </div>
            <div>
              <div className="font-mono text-lg sm:text-xl font-black text-[var(--text-ink)]">
                {formatPrice(car.pricePerDay)}
              </div>
              <div className="font-mono text-[9px] uppercase text-[var(--text-muted)]">Per Day</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${brandConfig.phone}`}
              className="px-4 py-2.5 rule-all font-mono text-xs uppercase tracking-wider text-[var(--text-ink)] hover:bg-black/5 transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={getWhatsAppUrl(bookingMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
