"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export default function MobileConciergeBar() {
  const pathname = usePathname();

  // If on a specific car detail page, hide this global bar so the vehicle sticky bar has full prominence
  if (pathname && pathname.startsWith("/fleet/") && pathname !== "/fleet") {
    return null;
  }

  const defaultMsg = `Hi Apex Drive, I am looking to rent a vehicle in Dubai. Please share current availability.`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-paper)]/95 backdrop-blur-md rule-t p-3 flex items-center gap-2">
      <a
        href={`tel:${brandConfig.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rule-all font-mono text-xs uppercase tracking-wider text-[var(--text-ink)] hover:bg-black/5 transition-colors"
      >
        <PhoneIcon className="w-3.5 h-3.5 text-[var(--text-ink)]" />
        <span>Direct Call</span>
      </a>
      <a
        href={getWhatsAppUrl(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-[var(--accent)] text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-colors"
      >
        <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
        <span>WhatsApp Dispatch</span>
      </a>
    </div>
  );
}
