"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FLEET_DATA, Vehicle } from "@/data/fleet";
import { useCurrency } from "@/context/CurrencyContext";
import { getWhatsAppUrl } from "@/config/brand";
import { ArrowUpRightIcon, WhatsAppIcon, SpeedometerIcon, HorsepowerIcon } from "./Icons";

export default function FeaturedFleetIndex() {
  const { formatPrice } = useCurrency();
  const [hoveredVehicle, setHoveredVehicle] = useState<Vehicle | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Display top 8 vehicles on the homepage index
  const vehicles = FLEET_DATA.slice(0, 8);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative rule-b bg-[var(--bg-paper)] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 rule-b">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              01 / ACTIVE FLEET ROSTER
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-ink)]">
              FEATURED PERFORMANCE SPECIMENS.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--text-muted)]">
              12 VEHICLES MAINTAINED IN INVENTORY
            </span>
            <Link
              href="/fleet"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--text-ink)] font-bold hover:text-[var(--accent)]"
            >
              <span>View All 12</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop Technical Index Table */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 py-3 px-4 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] rule-b">
            <span className="col-span-1">Ref</span>
            <span className="col-span-4">Vehicle / Specification</span>
            <span className="col-span-2">Class</span>
            <span className="col-span-1">0-100</span>
            <span className="col-span-1">Output</span>
            <span className="col-span-2 text-right">Daily Rate</span>
            <span className="col-span-1 text-right">Action</span>
          </div>

          <div className="divide-y divide-[var(--border-rule)]">
            {vehicles.map((car, index) => {
              const formattedIndex = String(index + 1).padStart(2, "0");
              const isHovered = hoveredVehicle?.slug === car.slug;

              return (
                <div
                  key={car.slug}
                  onMouseEnter={() => setHoveredVehicle(car)}
                  onMouseLeave={() => setHoveredVehicle(null)}
                  className={`grid grid-cols-12 items-center py-5 px-4 transition-colors group cursor-pointer ${
                    isHovered ? "bg-[var(--bg-surface)]" : "hover:bg-black/[0.02]"
                  }`}
                >
                  {/* Ref Numeral */}
                  <span className="col-span-1 font-mono text-xs text-[var(--accent)] font-bold">
                    {formattedIndex}
                  </span>

                  {/* Vehicle Name */}
                  <div className="col-span-4">
                    <Link
                      href={`/fleet/${car.slug}`}
                      className="font-bold text-lg uppercase tracking-tight text-[var(--text-ink)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                    >
                      <span>{car.name}</span>
                    </Link>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-1 font-mono">
                      {car.specs.engine}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="col-span-2">
                    <span className="inline-block px-2 py-0.5 font-mono text-[11px] uppercase bg-black/5 rule-all">
                      {car.category}
                    </span>
                  </div>

                  {/* 0-100 km/h */}
                  <div className="col-span-1 font-mono text-xs font-semibold">
                    {car.specs.zeroToHundred}
                  </div>

                  {/* Output HP */}
                  <div className="col-span-1 font-mono text-xs font-semibold text-[var(--accent)]">
                    {car.specs.horsepower} HP
                  </div>

                  {/* Rate */}
                  <div className="col-span-2 text-right">
                    <div className="font-mono text-base font-bold text-[var(--text-ink)]">
                      {formatPrice(car.pricePerDay)}
                    </div>
                    <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase">
                      Per Day / 250 KM
                    </div>
                  </div>

                  {/* Action */}
                  <div className="col-span-1 flex justify-end">
                    <Link
                      href={`/fleet/${car.slug}`}
                      className="p-2 rule-all bg-[var(--text-ink)] text-white hover:bg-[var(--accent)] transition-colors"
                      title="Inspect Specifications"
                    >
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cursor Following Floating Image Preview for Desktop */}
        {hoveredVehicle && (
          <div
            style={{
              position: "fixed",
              left: `${cursorPos.x + 24}px`,
              top: `${cursorPos.y - 120}px`,
              pointerEvents: "none",
              zIndex: 50,
            }}
            className="hidden lg:block w-72 h-44 rule-all bg-black shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="relative w-full h-full">
              <Image
                src={hoveredVehicle.image}
                alt={hoveredVehicle.name}
                fill
                sizes="300px"
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/85 p-2 font-mono text-[10px] text-white flex justify-between uppercase">
                <span>{hoveredVehicle.specs.topSpeed}</span>
                <span className="text-[var(--accent)]">{hoveredVehicle.specs.transmission}</span>
              </div>
            </div>
          </div>
        )}

        {/* Mobile & Tablet Card Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vehicles.map((car, index) => {
            const num = String(index + 1).padStart(2, "0");
            const quickText = `Hi Apex Drive, I want to rent the ${car.name}. Please confirm availability.`;

            return (
              <div
                key={car.slug}
                className="bg-[var(--bg-surface)] rule-all flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-black">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-white font-mono text-[10px] uppercase">
                    {num} / {car.category}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[var(--accent)] text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                    {car.specs.horsepower} HP
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg uppercase tracking-tight text-[var(--text-ink)]">
                      {car.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {car.specs.engine}
                    </p>
                  </div>

                  {/* Spec Row */}
                  <div className="grid grid-cols-2 gap-2 py-2 rule-t rule-b font-mono text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <SpeedometerIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>0-100: {car.specs.zeroToHundred}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HorsepowerIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Max: {car.specs.topSpeed}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="font-mono text-lg font-black text-[var(--text-ink)]">
                        {formatPrice(car.pricePerDay)}
                      </div>
                      <div className="font-mono text-[9px] uppercase text-[var(--text-muted)]">
                        Per Day
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={getWhatsAppUrl(quickText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors rule-all"
                        aria-label="Book on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                      <Link
                        href={`/fleet/${car.slug}`}
                        className="px-3 py-2 bg-[var(--text-ink)] text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent)] transition-colors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
