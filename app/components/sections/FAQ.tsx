"use client";

import { useState } from "react";
import { Title, Paragraph } from "@/app/components/ui/Typography";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Do I need to install anything?",
    a: "No. Attendit runs in your browser. The optional kiosk app is a free download for iPad and Android tablets, and takes two minutes to set up.",
  },
  { q: "How does face check-in handle privacy?", a: "All face templates are processed on-device. We never store raw images, and templates stay encrypted at rest. You can delete any member's biometric data in one click." },
  { q: "Can I migrate from a spreadsheet?", a: "Yes — drop your Excel or CSV and we'll map columns automatically. Most teams import 500+ members in under a minute." },
  { q: "Does it integrate with Google Workspace / Slack?", a: "Yes. Native integrations for Google Calendar, Classroom, and Workspace SSO, plus a Slack app for real-time check-in notifications." },
  { q: "What about multi-location organizations?", a: "The Enterprise plan includes multi-location dashboards, role-based access per site, and consolidated reports across the org." },
  { q: "Can parents or members see their own attendance?", a: "Members get a personal portal (and optional mobile app) where they can view history, download certificates, and get check-in reminders." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* FAQ */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase text-[#059669]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              FAQ
            </span>
            <div className="mt-5">
              <Title>
                Questions? <span className="text-[#10B981]">We've got answers.</span>
              </Title>
            </div>
            <Paragraph className="mt-5">
              Still stuck?{" "}
              <a href="#" className="text-[#059669] underline underline-offset-4 hover:text-[#10B981]">
                Talk to a human
              </a>{" "}
              — we usually reply within an hour.
            </Paragraph>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-xl border transition ${
                    isOpen ? "bg-[#D1FAE5] border-[#10B981]/30" : "bg-white border-[#E2E8F0]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-[#0F172A]">{f.q}</span>
                    {isOpen ? <Minus className="w-4 h-4 text-[#059669] shrink-0" /> : <Plus className="w-4 h-4 text-[#10B981] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm text-[#1E293B]/80 leading-relaxed">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA band */}
        <div className="mt-24 rounded-3xl bg-[#0F172A] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#10B981]/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.14em] uppercase text-[#D1FAE5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Get started
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-[-0.02em] leading-tight text-white">
                Stop counting heads.<br />
                <span className="text-[#10B981]">Start running things.</span>
              </h2>
              <p className="mt-5 text-[#94A3B8] text-base max-w-md">
                Free for up to 50 members. No credit card. Live in ten minutes.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium px-5 py-3 transition">
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium px-5 py-3 transition">
                  Book a demo
                </a>
              </div>
            </div>

            {/* Live check-in preview */}
            <div className="rounded-2xl bg-[#1E293B] border border-white/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                <div className="mx-auto text-[11px] text-[#64748B] font-mono">app.attendit.com</div>
              </div>
              <div className="p-4 space-y-1.5">
                {[
                  ["Aarav checked in", "9:01"],
                  ["Sana checked in", "9:02"],
                  ["Priya checked in", "9:03"],
                  ["Ravi checked in", "9:04"],
                  ["Leena checked in", "9:05"],
                  ["Kabir checked in", "9:06"],
                ].map(([n, t]) => (
                  <div key={n} className="flex items-center gap-2 rounded-md bg-[#0F172A] border border-white/5 px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span className="flex-1 text-xs text-white">{n}</span>
                    <span className="text-[10px] text-[#64748B] font-mono">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}