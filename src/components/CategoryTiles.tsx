import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "./Icons";

export default function CategoryTiles() {
  const categories = [
    {
      num: "01",
      name: "Supercars",
      tag: "V8 & V10 Exotic Mid-Engine",
      units: "Ferrari F8 · Huracán · Porsche GT3",
      startingRate: "From AED 2,900 / Day",
      slug: "Supercar",
    },
    {
      num: "02",
      name: "Luxury SUVs",
      tag: "Command Seating & Supreme Comfort",
      units: "Cullinan · G63 AMG · Range Rover",
      startingRate: "From AED 2,000 / Day",
      slug: "Luxury SUV",
    },
    {
      num: "03",
      name: "Grand Tourers",
      tag: "Trans-Continental High Speed",
      units: "Bentley Continental GT · BMW M4",
      startingRate: "From AED 1,400 / Day",
      slug: "Grand Tourer",
    },
    {
      num: "04",
      name: "Executive & Chauffeur",
      tag: "First-Class Acoustic Cabin",
      units: "Maybach S580 · Tesla Plaid",
      startingRate: "From AED 1,600 / Day",
      slug: "Executive",
    },
    {
      num: "05",
      name: "Open-Top Convertibles",
      tag: "Coastal Top-Down Aerodynamics",
      units: "Huracán Spyder · Corvette C8",
      startingRate: "From AED 1,300 / Day",
      slug: "Convertible",
    },
  ];

  return (
    <section className="rule-b bg-[var(--bg-paper)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 pb-6 rule-b flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              02 / FLEET DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-ink)]">
              CLASSIFIED BY CAPABILITY.
            </h2>
          </div>
          <p className="font-mono text-xs text-[var(--text-muted)] max-w-xs">
            Every vehicle in our collection is company owned, fully insured, and prepared to factory track standards.
          </p>
        </div>

        {/* Category Grid with hard rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/fleet?category=${encodeURIComponent(cat.slug)}`}
              className="group p-6 bg-[var(--bg-surface)] rule-all flex flex-col justify-between hover:border-[var(--accent)] transition-colors min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-4">
                  <span className="text-[var(--accent)] font-bold">{cat.num}</span>
                  <span className="text-[var(--text-muted)] uppercase">{cat.tag}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--text-ink)] group-hover:text-[var(--accent)] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-2">
                  {cat.units}
                </p>
              </div>

              <div className="pt-6 rule-t mt-4 flex items-center justify-between font-mono text-xs">
                <span className="text-[var(--text-ink)] font-bold">{cat.startingRate}</span>
                <span className="flex items-center gap-1 text-[var(--accent)] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Browse</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}

          {/* Sixth tile: Custom Private Sourcing */}
          <div className="p-6 bg-[var(--text-ink)] text-white rule-all flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-4 text-[#A8A49C]">
                <span className="text-[var(--accent)] font-bold">06</span>
                <span>BESPOKE SOURCING</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                SPECIAL REQUESTS.
              </h3>
              <p className="text-xs text-[#DDD7CB] font-mono mt-2">
                Need a Bugatti Chiron, Ferrari SF90, or armored VIP convoy? We source within 2 hours.
              </p>
            </div>

            <div className="pt-6 border-t border-white/20 mt-4 flex items-center justify-between font-mono text-xs">
              <span className="text-white">Direct VIP Line</span>
              <a
                href="/contact"
                className="text-[var(--accent)] font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Inquire</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
