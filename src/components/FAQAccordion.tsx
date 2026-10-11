"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/data/faqs";
import { ChevronDownIcon } from "./Icons";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string>(FAQ_DATA[0]?.id || "");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="rule-b bg-[var(--bg-paper)] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 pb-6 rule-b">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
            06 / CONTRACTUAL CLARITY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-ink)]">
            FREQUENTLY ANSWERED INQUIRIES.
          </h2>
          <p className="font-mono text-xs text-[var(--text-muted)] mt-2">
            Everything you need to know about UAE RTA documentation, Salik tolls, and security holds.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[var(--border-rule)] rule-t rule-b">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div key={faq.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--accent)] font-bold">
                      {num}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-tight text-[var(--text-ink)] group-hover:text-[var(--accent)] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-[var(--text-ink)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[var(--accent)]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2 pb-3 pl-8 pr-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-sans animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
