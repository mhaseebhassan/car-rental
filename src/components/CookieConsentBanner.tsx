"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("apex_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("apex_cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("apex_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-[var(--bg-paper)] text-[var(--text-ink)] rule-all p-4 sm:p-6 shadow-2xl pointer-events-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
            Privacy &amp; Telemetry Notice
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            We use essential session storage for currency preference and anonymized telemetry to improve fleet delivery logistics. No commercial advertising cookies.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none text-xs font-mono uppercase px-4 py-2.5 rule-all hover:bg-black/5 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none text-xs font-mono uppercase px-5 py-2.5 bg-[var(--text-ink)] text-white hover:bg-[var(--accent)] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
