"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FLEET_DATA, Vehicle, CarCategory } from "@/data/fleet";
import { useCurrency } from "@/context/CurrencyContext";
import { getWhatsAppUrl } from "@/config/brand";
import {
  GridIcon,
  ListIcon,
  WhatsAppIcon,
  SpeedometerIcon,
  HorsepowerIcon,
  SeatIcon,
  ArrowUpRightIcon,
} from "@/components/Icons";

export default function FleetClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { formatPrice } = useCurrency();

  const categories = ["All", "Supercar", "Luxury SUV", "Grand Tourer", "Executive", "Convertible"];

  const brands = useMemo(() => {
    const list = Array.from(new Set(FLEET_DATA.map((c) => c.brand)));
    return ["All", ...list];
  }, []);

  const filteredVehicles = useMemo(() => {
    let result = [...FLEET_DATA];

    if (selectedCategory !== "All") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (selectedBrand !== "All") {
      result = result.filter((c) => c.brand === selectedBrand);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === "hp-desc") {
      result.sort((a, b) => b.specs.horsepower - a.specs.horsepower);
    }

    return result;
  }, [selectedCategory, selectedBrand, sortBy]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Title */}
        <div className="mb-10 pb-6 rule-b">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
            CATALOGUE &amp; INVENTORY
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[var(--text-ink)]">
              COMPLETE FLEET ROSTER.
            </h1>
            <div className="font-mono text-xs text-[var(--text-muted)]">
              SHOWING {filteredVehicles.length} OF {FLEET_DATA.length} AVAILABLE MACHINES
            </div>
          </div>
        </div>

        {/* Filter & View Controls Bar */}
        <div className="bg-[var(--bg-surface)] rule-all p-4 mb-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors shrink-0 rule-all ${
                  selectedCategory === cat
                    ? "bg-[var(--text-ink)] text-white font-bold"
                    : "bg-[var(--bg-paper)] text-[var(--text-ink)] hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Filters and View Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 rule-t text-xs font-mono">
            <div className="flex flex-wrap items-center gap-4">
              {/* Brand Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[var(--text-muted)] uppercase">Manufacturer:</span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-[var(--bg-paper)] text-[var(--text-ink)] px-2.5 py-1.5 rule-all focus:outline-none"
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2">
                <span className="text-[var(--text-muted)] uppercase">Order By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[var(--bg-paper)] text-[var(--text-ink)] px-2.5 py-1.5 rule-all focus:outline-none"
                >
                  <option value="default">Roster Priority</option>
                  <option value="price-asc">Daily Rate (Low to High)</option>
                  <option value="price-desc">Daily Rate (High to Low)</option>
                  <option value="hp-desc">Output (Highest HP First)</option>
                </select>
              </div>
            </div>

            {/* Grid / List Switcher */}
            <div className="flex items-center rule-all overflow-hidden">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${
                  viewMode === "grid" ? "bg-[var(--text-ink)] text-white" : "bg-transparent text-[var(--text-ink)]"
                }`}
                title="Grid View"
              >
                <GridIcon className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-6 bg-[var(--border-rule)]" />
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${
                  viewMode === "list" ? "bg-[var(--text-ink)] text-white" : "bg-transparent text-[var(--text-ink)]"
                }`}
                title="List View"
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Container */}
        {filteredVehicles.length === 0 ? (
          <div className="p-12 text-center rule-all bg-[var(--bg-surface)] font-mono space-y-3">
            <div className="text-base font-bold uppercase text-[var(--text-ink)]">
              No vehicles matched your current filters
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              Try selecting a different manufacturer or category to inspect available units.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBrand("All");
                setSortBy("default");
              }}
              className="mt-2 px-4 py-2 bg-[var(--text-ink)] text-white text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((car, index) => {
              const num = String(index + 1).padStart(2, "0");
              const msg = `Hi Apex Drive, I am looking to rent the ${car.name}. Please confirm availability.`;

              return (
                <div
                  key={car.slug}
                  className="bg-[var(--bg-surface)] rule-all flex flex-col justify-between group"
                >
                  <div className="relative w-full aspect-[16/10] bg-black overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-black/85 text-white font-mono text-[10px] px-2 py-0.5 uppercase">
                      {num} / {car.category}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-[var(--accent)] text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                      {car.specs.horsepower} HP
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="font-bold text-xl uppercase tracking-tight text-[var(--text-ink)] group-hover:text-[var(--accent)] transition-colors">
                        <Link href={`/fleet/${car.slug}`}>{car.name}</Link>
                      </h2>
                      <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                        {car.specs.engine}
                      </p>
                    </div>

                    {/* Technical Specs Row */}
                    <div className="grid grid-cols-3 gap-2 py-2 rule-t rule-b font-mono text-[11px] text-[var(--text-ink)]">
                      <div className="flex items-center gap-1">
                        <SpeedometerIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>{car.specs.zeroToHundred}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HorsepowerIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>{car.specs.topSpeed}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <SeatIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>{car.specs.seats} Seats</span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="font-mono text-lg font-black text-[var(--text-ink)]">
                          {formatPrice(car.pricePerDay)}
                        </div>
                        <div className="font-mono text-[9px] uppercase text-[var(--text-muted)]">
                          Per Day / 250 KM
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={getWhatsAppUrl(msg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors rule-all"
                          aria-label="WhatsApp Dispatch"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                        </a>
                        <Link
                          href={`/fleet/${car.slug}`}
                          className="px-4 py-2 bg-[var(--text-ink)] text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent)] transition-colors"
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
        ) : (
          /* List View */
          <div className="rule-all bg-[var(--bg-surface)] divide-y divide-[var(--border-rule)]">
            {filteredVehicles.map((car, index) => {
              const num = String(index + 1).padStart(2, "0");
              const msg = `Hi Apex Drive, I want to rent the ${car.name}. Please confirm availability.`;

              return (
                <div
                  key={car.slug}
                  className="p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-black/[0.01] transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm font-bold text-[var(--accent)] shrink-0">
                      {num}
                    </span>
                    <div className="relative w-24 h-16 sm:w-36 sm:h-24 bg-black shrink-0 overflow-hidden rule-all">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        sizes="150px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold text-lg sm:text-xl uppercase tracking-tight text-[var(--text-ink)]">
                        <Link href={`/fleet/${car.slug}`} className="hover:text-[var(--accent)]">
                          {car.name}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-muted)] mt-1">
                        <span className="bg-black/5 px-2 py-0.5 rule-all">{car.category}</span>
                        <span>{car.specs.engine}</span>
                        <span>0-100: {car.specs.zeroToHundred}</span>
                        <span>{car.specs.horsepower} HP</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-4 md:pt-0 rule-t md:border-none">
                    <div className="text-left md:text-right">
                      <div className="font-mono text-xl font-black text-[var(--text-ink)]">
                        {formatPrice(car.pricePerDay)}
                      </div>
                      <div className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                        Per Day / 250 KM
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={getWhatsAppUrl(msg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors rule-all"
                        aria-label="WhatsApp Dispatch"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                      <Link
                        href={`/fleet/${car.slug}`}
                        className="px-4 py-2 bg-[var(--text-ink)] text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent)] transition-colors"
                      >
                        Inspect
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
