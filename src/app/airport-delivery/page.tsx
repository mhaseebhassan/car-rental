import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig, getWhatsAppUrl } from "@/config/brand";
import { AirplaneIcon, ClockIcon, WhatsAppIcon, ShieldCheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "DXB Airport VIP Car Delivery | Meet & Greet Handover",
  description: "Curbside luxury vehicle delivery to Dubai International Airport (DXB Terminals 1, 2, 3) and Al Maktoum Airport (DWC). Live flight tracking and zero wait time handover.",
};

export default function AirportDeliveryPage() {
  const steps = [
    {
      step: "01",
      title: "Flight Number Logged",
      desc: "Provide your scheduled flight arrival number during WhatsApp reservation. Our operations desk tracks live radar updates for early landings or delays.",
    },
    {
      step: "02",
      title: "Pre-Flight Climate Prep",
      desc: "30 minutes before your wheels touch tarmac, your vehicle is detailed, fueled, and air-conditioned to an optimal 20°C.",
    },
    {
      step: "03",
      title: "Terminal Arrival Greeter",
      desc: "As you step out of baggage reclaim, our uniformed representative meets you at the VIP valet curb holding your personalized name board.",
    },
    {
      step: "04",
      title: "4-Minute Curbside Handover",
      desc: "Quick digital inspection sign-off on tablet, key handover, and you drive immediately onto Airport Road with zero shuttle delays.",
    },
  ];

  const terminals = [
    {
      name: "DXB Terminal 3 (Emirates & Flydubai)",
      location: "VIP Valet Curbside & Al Majlis Lounge",
      speed: "Immediate curbside arrival upon exit",
      coverage: "24 Hours / 7 Days",
    },
    {
      name: "DXB Terminal 1 (International Carriers)",
      location: "Valet Arrival Deck Level 1",
      speed: "Immediate curbside arrival upon exit",
      coverage: "24 Hours / 7 Days",
    },
    {
      name: "DXB Terminal 2",
      location: "Executive Arrival Valet Point",
      speed: "Under 15 minutes",
      coverage: "24 Hours / 7 Days",
    },
    {
      name: "DWC Al Maktoum International",
      location: "VIP Aviation Terminal & FBO Apron",
      speed: "Direct private jet apron delivery on request",
      coverage: "24 Hours / 7 Days",
    },
  ];

  const msg = "Hi Apex Drive, I am arriving at DXB Airport soon and need a vehicle delivered to my terminal.";

  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />

      <section className="py-16 sm:py-24 rule-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-4xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              <AirplaneIcon className="w-4 h-4" />
              <span>TERMINAL CURBSIDE PROTOCOL</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[var(--text-ink)] leading-[0.95]">
              AIRPORT VIP DELIVERY.
              <br />
              <span className="text-[var(--accent)]">ZERO CAR RENTAL COUNTER LINES.</span>
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
              Skip traditional airport terminal rental counters and crowded shuttle buses. Step off your flight and straight into a cooled supercar or luxury SUV waiting at the arrivals curb.
            </p>
          </div>

          {/* 4 Step Handover Protocol */}
          <div className="mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-6">
              THE 4-MINUTE TOUCHDOWN PROTOCOL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.step} className="p-6 bg-[var(--bg-surface)] rule-all flex flex-col justify-between space-y-4">
                  <div>
                    <div className="font-mono text-3xl font-black text-[var(--accent)] mb-2">
                      {s.step}
                    </div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-tight text-[var(--text-ink)] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Coverage Grid */}
          <div className="space-y-6 mb-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold">
              TERMINAL SERVICING MATRIX
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {terminals.map((t, idx) => (
                <div key={idx} className="p-6 bg-[var(--bg-surface)] rule-all space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[var(--accent)] font-bold">
                    <span>TERMINAL #{idx + 1}</span>
                    <span>{t.coverage}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-ink)] uppercase">
                    {t.name}
                  </h3>
                  <div className="text-[var(--text-muted)]">
                    Handover Location: {t.location}
                  </div>
                  <div className="pt-2 rule-t flex items-center gap-1.5 text-[var(--text-ink)] font-semibold">
                    <ClockIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{t.speed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 sm:p-10 bg-[var(--text-ink)] text-white rule-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="font-mono text-xs uppercase text-[var(--accent)] font-bold">
                FLIGHT TRACKING CONCIERGE
              </div>
              <h3 className="text-2xl font-black uppercase text-white">
                LANDING IN DUBAI TODAY?
              </h3>
              <p className="text-xs text-[#DDD7CB] font-mono leading-relaxed">
                Send your flight details directly to our WhatsApp dispatcher. We will have your machine idling at arrivals before you touch down.
              </p>
            </div>
            <a
              href={getWhatsAppUrl(msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 transition-colors shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Arrange Airport Delivery</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
