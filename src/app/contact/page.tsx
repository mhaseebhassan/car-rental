import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Dispatch Direct & Contact | Apex Drive Dubai",
  description: "Contact Apex Drive Dubai dispatch headquarters. 24/7 reservations, airport delivery requests, and corporate accounts via direct WhatsApp or telephone.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />

      <section className="py-16 sm:py-24 rule-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl space-y-4 mb-14">
            <div className="inline-block bg-[var(--accent)] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              24/7 DISPATCH COMMAND
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[var(--text-ink)] leading-[0.95]">
              GET IN TOUCH DIRECTLY.
              <br />
              <span className="text-[var(--accent)]">UNDER 8-MINUTE REACTION TIME.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
              Whether reserving a supercar for an evening event or arranging a monthly corporate fleet, our operational team is on duty around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-[var(--bg-surface)] rule-all space-y-4 font-mono text-xs">
                <div className="text-[var(--accent)] font-bold uppercase">
                  DIRECT ACCESS CHANNELS
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[var(--text-muted)] uppercase text-[10px]">Primary Voice Line</div>
                    <a
                      href={`tel:${brandConfig.phone}`}
                      className="font-bold text-base text-[var(--text-ink)] hover:text-[var(--accent)] flex items-center gap-2 mt-0.5"
                    >
                      <PhoneIcon className="w-4 h-4 text-[var(--accent)]" />
                      <span>{brandConfig.phoneDisplay}</span>
                    </a>
                  </div>

                  <div>
                    <div className="text-[var(--text-muted)] uppercase text-[10px]">WhatsApp Dispatch (Encrypted)</div>
                    <a
                      href={getWhatsAppUrl("Hi Apex Drive, I am inquiring from the website.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-[var(--text-ink)] hover:text-[var(--accent)] flex items-center gap-2 mt-0.5"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[var(--accent)]" />
                      <span>{brandConfig.whatsappDisplay}</span>
                    </a>
                  </div>

                  <div>
                    <div className="text-[var(--text-muted)] uppercase text-[10px]">Official Dispatch Email</div>
                    <a
                      href={`mailto:${brandConfig.email}`}
                      className="font-bold text-sm text-[var(--text-ink)] hover:text-[var(--accent)] block mt-0.5"
                    >
                      {brandConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[var(--text-ink)] text-white rule-all space-y-3 font-mono text-xs">
                <div className="text-[var(--accent)] font-bold uppercase">
                  OPERATIONS HEADQUARTERS
                </div>
                <div className="text-[#E0DCD3] space-y-1">
                  <div>{brandConfig.address}</div>
                  <div className="text-[var(--accent)] font-semibold">{brandConfig.coordinates}</div>
                </div>
                <div className="pt-2 border-t border-white/20 text-[#A8A49C] text-[11px]">
                  Visiting by appointment only for security and vehicle prep privacy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
