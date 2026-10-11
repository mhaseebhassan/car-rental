import React from "react";

export default function HowToRentTable() {
  const steps = [
    {
      num: "01",
      title: "Select & Configure",
      detail: "Choose your vehicle from our active roster. Specify your pickup hub, exact delivery time, and duration.",
      sla: "Instant Confirmation",
    },
    {
      num: "02",
      title: "Upload Credentials",
      detail: "Send your passport/Emirates ID and driving license via our encrypted WhatsApp dispatch channel.",
      sla: "Verification in 5 Mins",
    },
    {
      num: "03",
      title: "Curbside Handover",
      detail: "Our driver delivers the freshly detailed, fuel-filled car to your terminal or residence with digital inspection.",
      sla: "Under 60 Minutes",
    },
    {
      num: "04",
      title: "Return & Settlement",
      detail: "Effortless collection at your departure terminal. Transparent digital Salik itemization and prompt deposit release.",
      sla: "21-Day Bank Release",
    },
  ];

  return (
    <section className="rule-b bg-[var(--bg-paper)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 pb-6 rule-b">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
            04 / TRANSACTION PROTOCOL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-ink)]">
            FOUR-STEP DISPATCH PROCESS.
          </h2>
          <p className="font-mono text-xs text-[var(--text-muted)] mt-2">
            Engineered for frictionless speed without compromising legal documentation or insurance validity.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[var(--bg-surface)] rule-all flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="font-mono text-3xl font-black text-[var(--accent)] mb-4">
                  {step.num}
                </div>
                <h3 className="font-mono text-base font-bold uppercase tracking-tight text-[var(--text-ink)] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 rule-t font-mono text-[11px] text-[var(--text-ink)] font-semibold flex items-center justify-between">
                <span className="text-[var(--text-muted)] uppercase">Timeframe</span>
                <span className="text-[var(--accent)]">{step.sla}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
