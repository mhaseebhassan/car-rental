"use client";

import React, { useState } from "react";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { WhatsAppIcon } from "@/components/Icons";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("Ferrari F8 Tributo");
  const [datesLocation, setDatesLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Apex Drive dispatch,\n\nName: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nDates/Location: ${datesLocation}\n\nPlease confirm availability and dispatch terms.`;
    
    // Open prefilled WhatsApp
    window.open(getWhatsAppUrl(msg), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--bg-surface)] rule-all p-6 sm:p-8">
      <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-bold mb-4">
        RESERVATION DISPATCH REQUEST (MAX 4 FIELDS)
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Field 1: Name */}
        <div className="space-y-1">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            01 / Full Legal Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Henrik Lindqvist"
            className="w-full bg-[var(--bg-paper)] text-[var(--text-ink)] rule-all px-3.5 py-2.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        {/* Field 2: Phone */}
        <div className="space-y-1">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            02 / Contact Telephone / WhatsApp
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+971 50 000 0000"
            className="w-full bg-[var(--bg-paper)] text-[var(--text-ink)] rule-all px-3.5 py-2.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        {/* Field 3: Vehicle Preference */}
        <div className="space-y-1">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            03 / Preferred Vehicle or Category
          </label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full bg-[var(--bg-paper)] text-[var(--text-ink)] rule-all px-3.5 py-2.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          >
            <option value="Ferrari F8 Tributo">Ferrari F8 Tributo (Supercar)</option>
            <option value="Lamborghini Huracán Evo">Lamborghini Huracán Evo Spyder</option>
            <option value="Porsche 911 GT3">Porsche 911 GT3 (992)</option>
            <option value="Rolls-Royce Cullinan">Rolls-Royce Cullinan (Luxury SUV)</option>
            <option value="Mercedes-AMG G63">Mercedes-AMG G63 V8</option>
            <option value="Bentley Continental GT">Bentley Continental GT V8</option>
            <option value="Range Rover Autobiography">Range Rover Autobiography LWB</option>
            <option value="Mercedes-Maybach S580">Mercedes-Maybach S580</option>
            <option value="Tesla Model S Plaid">Tesla Model S Plaid (1,020 HP)</option>
            <option value="Corvette C8 Stingray">Corvette C8 Stingray Convertible</option>
          </select>
        </div>

        {/* Field 4: Dates & Location */}
        <div className="space-y-1">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            04 / Delivery Hub &amp; Rental Dates
          </label>
          <input
            type="text"
            required
            value={datesLocation}
            onChange={(e) => setDatesLocation(e.target.value)}
            placeholder="e.g. DXB Terminal 3, 14-17 Nov (3 Days)"
            className="w-full bg-[var(--bg-paper)] text-[var(--text-ink)] rule-all px-3.5 py-2.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors rule-all shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Transmit to WhatsApp Dispatch</span>
          </button>
        </div>

        <div className="text-[11px] font-mono text-[var(--text-muted)] text-center pt-1">
          Response guarantee: Live fleet controller confirms in under 8 minutes.
        </div>
      </form>
    </div>
  );
}
