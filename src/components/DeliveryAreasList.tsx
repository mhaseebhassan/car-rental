import React from "react";
import { getWhatsAppUrl } from "@/config/brand";
import { HUB_LOCATIONS } from "@/data/locations";
import { MapPinIcon, ClockIcon } from "./Icons";

export default function DeliveryAreasList() {
  return (
    <section className="rule-b bg-[var(--bg-paper)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 pb-6 rule-b flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              05 / DISPATCH RADIUS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-ink)]">
              ACTIVE DISPATCH HUBS.
            </h2>
          </div>
          <p className="font-mono text-xs text-[var(--text-muted)] max-w-sm">
            Our drivers operate from four strategically stationed dispatch depots across the city for rapid arrival.
          </p>
        </div>

        {/* Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HUB_LOCATIONS.map((hub) => {
            const msg = `Hi Apex Drive, I need a car delivered to ${hub.name}. What is the earliest arrival?`;
            return (
              <div
                key={hub.id}
                className="p-6 bg-[var(--bg-surface)] rule-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[var(--accent)] font-bold mb-2">
                    <span>{hub.type}</span>
                    <span className="text-[var(--text-muted)]">{hub.coordinates}</span>
                  </div>
                  <h3 className="font-mono text-xl font-bold uppercase tracking-tight text-[var(--text-ink)]">
                    {hub.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                    {hub.address}
                  </p>
                  {hub.terminalDetails && (
                    <p className="text-xs text-[var(--text-ink)] font-sans mt-2 bg-black/5 p-2 rule-all">
                      {hub.terminalDetails}
                    </p>
                  )}
                </div>

                <div className="pt-4 rule-t flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-[var(--text-ink)] font-semibold">
                    <ClockIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{hub.deliverySpeed}</span>
                  </div>
                  <a
                    href={getWhatsAppUrl(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] font-bold hover:underline"
                  >
                    Request Delivery →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
