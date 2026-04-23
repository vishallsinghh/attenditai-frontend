"use client";

import { useState } from "react";
import { Title, Paragraph, Subheading } from "@/app/components/ui/Typography";
import { Check, ArrowRight } from "lucide-react";

const tabs = {
  Education: {
    title: "Attendance that teachers actually use.",
    desc: "Track students across classes, clubs, and extracurriculars. Automatic reports for parents. No more passing a sheet around.",
    bullets: [
      "Class-level & period-level tracking",
      "Parent notifications by SMS / email",
      "Exam eligibility auto-calculated",
      "Import from Google Classroom",
    ],
    cta: "See education customers",
    panel: {
      title: "Grade 11-A · Chemistry",
      stats: [
        { n: "28", l: "Present" },
        { n: "02", l: "Late" },
        { n: "02", l: "Absent" },
      ],
      rows: [
        ["AM", "Aarav M.", "In", "green"],
        ["SK", "Sana K.", "In", "green"],
        ["PD", "Priya D.", "In", "green"],
        ["RN", "Ravi N.", "Late", "amber"],
        ["LB", "Leena B.", "In", "green"],
      ] as [string, string, string, "green" | "amber"][],
    },
  },
  Workplaces: {
    title: "Shift-ready. Payroll-ready.",
    desc: "Track clock-ins across locations, shifts, and contractors. Export straight to your payroll system.",
    bullets: [
      "Multi-location & multi-shift",
      "Overtime & break tracking",
      "Geofenced check-in",
      "Payroll export (Excel / API)",
    ],
    cta: "See workplace customers",
    panel: {
      title: "Night shift · Warehouse 3",
      stats: [
        { n: "22", l: "On shift" },
        { n: "01", l: "Break" },
        { n: "01", l: "Late" },
      ],
      rows: [
        ["KB", "Kabir B.", "In", "green"],
        ["MT", "Maya T.", "In", "green"],
        ["AR", "Arjun R.", "Break", "amber"],
        ["NS", "Neha S.", "Late", "amber"],
        ["VG", "Vikram G.", "In", "green"],
      ] as [string, string, string, "green" | "amber"][],
    },
  },
  Events: {
    title: "Doors open. Guests in.",
    desc: "Pre-register invitees, send unique QR codes, and clear the line at the door. Works for 20 guests or 20,000.",
    bullets: [
      "Unique QR per guest",
      "Badge printing on arrival",
      "VIP & plus-one tracking",
      "Real-time head count",
    ],
    cta: "See event customers",
    panel: {
      title: "Founders Dinner · Mar 24",
      stats: [
        { n: "46", l: "Checked in" },
        { n: "08", l: "En route" },
        { n: "06", l: "No-show" },
      ],
      rows: [
        ["JS", "Jay S.", "In", "green"],
        ["RK", "Riya K.", "In", "green"],
        ["AM", "Aman M.", "In", "green"],
        ["DP", "Divya P.", "Late", "amber"],
        ["SV", "Sahil V.", "In", "green"],
      ] as [string, string, string, "green" | "amber"][],
    },
  },
  Studios: {
    title: "Class full. Membership tight.",
    desc: "Yoga, fitness, music, coaching. Track drop-ins, credits, and retention — without a front-desk bottleneck.",
    bullets: [
      "Credit & package tracking",
      "Self check-in kiosk",
      "Waitlist automation",
      "Retention reports",
    ],
    cta: "See studio customers",
    panel: {
      title: "6 AM Vinyasa · Studio A",
      stats: [
        { n: "14", l: "Checked in" },
        { n: "02", l: "Drop-in" },
        { n: "01", l: "Waitlist" },
      ],
      rows: [
        ["NM", "Naina M.", "In", "green"],
        ["AK", "Akash K.", "In", "green"],
        ["TS", "Tanvi S.", "Drop-in", "amber"],
        ["RG", "Rahul G.", "In", "green"],
        ["PV", "Pooja V.", "In", "green"],
      ] as [string, string, string, "green" | "amber"][],
    },
  },
};

type TabKey = keyof typeof tabs;

export default function UseCases() {
  const [active, setActive] = useState<TabKey>("Education");
  const data = tabs[active];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase text-[#059669]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Built for
          </span>
          <div className="mt-5">
            <Title>
              One product. <span className="text-[#10B981]">Many rooms.</span>
            </Title>
          </div>
          <Paragraph className="mt-5">
            The same primitives — roster, events, check-in, reports — adapt to whatever you're counting heads for.
          </Paragraph>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {(Object.keys(tabs) as TabKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === k
                  ? "bg-[#0F172A] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#1E293B] hover:border-[#10B981]"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Subheading className="!text-3xl sm:!text-4xl">{data.title}</Subheading>
            <Paragraph className="mt-4">{data.desc}</Paragraph>
            <ul className="mt-6 space-y-2.5">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-[#1E293B]">
                  <Check className="w-4 h-4 text-[#10B981]" strokeWidth={3} />
                  {b}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] hover:text-[#059669] transition">
              {data.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mock panel */}
          <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.15)] p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-[#0F172A]">{data.panel.title}</div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D1FAE5] text-[#059669] text-[11px] font-medium px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> Live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {data.panel.stats.map((s) => (
                <div key={s.l} className="rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-3">
                  <div className="text-2xl font-semibold text-[#0F172A] tracking-tight">{s.n}</div>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-[#64748B] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1.5">
              {data.panel.rows.map(([i, n, s, tone]) => (
                <div key={n} className="flex items-center gap-3 rounded-md border border-[#E2E8F0] px-3 py-2">
                  <div className="w-7 h-7 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[10px] font-semibold text-[#1E293B]">{i}</div>
                  <div className="flex-1 text-sm text-[#0F172A]">{n}</div>
                  <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${tone === "green" ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#FEF3C7] text-[#92400E]"}`}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}