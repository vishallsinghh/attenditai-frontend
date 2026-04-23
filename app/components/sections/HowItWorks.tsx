"use client";

import { Title, Paragraph, Subheading, Eyebrow } from "@/app/components/ui/Typography";
import { Play, FileSpreadsheet, CalendarPlus, Radio } from "lucide-react";

const steps = [
  {
    n: "01",
    tag: "Set up",
    title: "Upload your roster.",
    desc: "Drop an Excel or CSV, sync from Google Workspace, or let people self-enroll with an invite link. We map columns for you.",
    icon: FileSpreadsheet,
    caption: "Step 1 · Importing a roster",
  },
  {
    n: "02",
    tag: "Configure",
    title: "Create an event.",
    desc: "A class, a shift, a standup, a conference. Attach groups, set rules, pick any combination of check-in methods.",
    icon: CalendarPlus,
    caption: "Step 2 · Configuring an event",
  },
  {
    n: "03",
    tag: "Go live",
    title: "Share & track in real-time.",
    desc: "One link, one kiosk, one QR. Watch check-ins stream in live. Export anytime to Excel, PDF, or your payroll system.",
    icon: Radio,
    caption: "Step 3 · Live check-ins",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase text-[#059669]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            How it works
          </span>
          <div className="mt-5">
            <Title>
              From zero to attendance in{" "}
              <span className="text-[#10B981]">three moves.</span>
            </Title>
          </div>
          <Paragraph className="mt-5">
            No migration. No training. No spreadsheets. You're live in under ten minutes.
          </Paragraph>
        </div>

        {/* Steps */}
        <div className="mt-20 space-y-24">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`grid lg:grid-cols-12 gap-8 items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Step marker */}
              <div className="lg:col-span-2">
                <div className="text-6xl font-semibold tracking-tight text-[#10B981] leading-none">
                  {s.n}
                </div>
                <span className="inline-block mt-4 rounded-full bg-[#D1FAE5] text-[#059669] text-[10px] font-medium tracking-[0.14em] uppercase px-3 py-1">
                  {s.tag}
                </span>
                <div className="hidden lg:block w-px h-24 bg-[#E2E8F0] ml-6 mt-6" />
              </div>

              {/* Content + mockup */}
              <div className="lg:col-span-10">
                <Subheading className="!text-3xl sm:!text-4xl">{s.title}</Subheading>
                <Paragraph className="mt-3 max-w-2xl">{s.desc}</Paragraph>

                <div className="mt-8 rounded-2xl overflow-hidden bg-[#0F172A] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.4)] border border-[#1E293B]">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E293B]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                    <div className="mx-auto rounded-md bg-[#1E293B] text-[11px] text-[#64748B] px-3 py-1 flex items-center gap-2">
                      <s.icon className="w-3 h-3" /> {s.caption.split("·")[0].trim()}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative h-[340px] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-[#10B981]/10 blur-3xl rounded-full" />
                    <div className="relative flex flex-col items-center gap-4">
                      <button className="w-16 h-16 rounded-full bg-[#1E293B]/80 border border-white/10 backdrop-blur flex items-center justify-center hover:bg-[#10B981] transition group">
                        <Play className="w-6 h-6 text-white fill-white ml-1 group-hover:scale-110 transition" />
                      </button>
                      <div className="text-center">
                        <div className="text-white text-sm font-medium">Product demo · coming soon</div>
                        <div className="text-[#64748B] text-xs mt-1 font-mono">{s.caption}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}