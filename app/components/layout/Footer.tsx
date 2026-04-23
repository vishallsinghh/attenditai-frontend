import Link from "next/link";
import { Check } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Check-in methods", "Pricing", "Integrations", "Changelog"] },
  { title: "Use Cases", links: ["Education", "Workplaces", "Events", "Studios", "Non-profit"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Security", "Contact"] },
  { title: "Resources", links: ["Docs", "API reference", "Help center", "Blog", "Status"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-[#10B981] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-[#0F172A]">Attendit</span>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs">
              Attendance that feels like nothing. Built for schools, teams, and everyone in between.
            </p>
            <div className="flex gap-2 mt-5">
              {["X", "LinkedIn", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-xs font-medium text-[#1E293B] bg-white border border-[#E2E8F0] rounded-full px-3 py-1.5 hover:border-[#10B981] hover:text-[#059669] transition">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#64748B] mb-4">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#1E293B] hover:text-[#059669] transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">© {new Date().getFullYear()} Attendit Labs · All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "DPA", "Security"].map((l) => (
              <a key={l} href="#" className="text-xs text-[#64748B] hover:text-[#059669]">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}