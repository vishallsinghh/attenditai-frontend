import { Title, Paragraph } from "@/app/components/ui/Typography";
import { QrCode, Monitor, ScanFace, Link2, FileSpreadsheet, Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#10B981]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3 py-1.5 text-xs font-medium text-[#1E293B] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            New · Kiosk 2.0 + on-device face check-in
            <ArrowRight className="w-3 h-3 text-[#64748B]" />
          </div>

          <div className="mt-6">
            <Title>
              Roll call,<br />
              without the <span className="text-[#10B981]">roll call.</span>
            </Title>
          </div>

          <Paragraph className="mt-6 max-w-xl">
            Upload your roster, spin up an event, and let people check in by{" "}
            <span className="font-semibold text-[#0F172A]">QR</span>,{" "}
            <span className="font-semibold text-[#0F172A]">kiosk</span>,{" "}
            <span className="font-semibold text-[#0F172A]">face</span>, or a personal{" "}
            <span className="font-semibold text-[#0F172A]">link</span>. Attendit turns attendance into a
            workflow — not a spreadsheet graveyard.
          </Paragraph>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-medium px-5 py-3 transition shadow-sm">
              Start free — no card <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] hover:border-[#10B981] text-[#0F172A] text-sm font-medium px-5 py-3 transition">
              <Play className="w-4 h-4 fill-[#0F172A]" /> Watch 90-sec demo
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[
                { i: "AM", c: "bg-[#FDE68A] text-[#92400E]" },
                { i: "SK", c: "bg-[#D1FAE5] text-[#065F46]" },
                { i: "PD", c: "bg-[#FECACA] text-[#991B1B]" },
                { i: "RN", c: "bg-[#E9D5FF] text-[#6B21A8]" },
              ].map((a) => (
                <div key={a.i} className={`w-7 h-7 rounded-full ${a.c} flex items-center justify-center text-[10px] font-semibold border-2 border-white`}>
                  {a.i}
                </div>
              ))}
            </div>
            <div className="text-xs text-[#64748B]">
              <div className="text-[#10B981]">★★★★★</div>
              Trusted by 2,400+ teams · <span className="font-semibold text-[#0F172A]">4.9 on G2</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { i: QrCode, l: "QR code" },
              { i: Monitor, l: "Kiosk" },
              { i: ScanFace, l: "Face" },
              { i: Link2, l: "Self-link" },
              { i: FileSpreadsheet, l: "Excel / CSV" },
            ].map((p) => (
              <span key={p.l} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#E2E8F0] px-3 py-1.5 text-xs font-medium text-[#1E293B]">
                <p.i className="w-3.5 h-3.5 text-[#10B981]" /> {p.l}
              </span>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-8">
          <AppMockup />
        </div>
      </div>
    </section>
  );
}

function AppMockup() {
  return (
    <div className="relative rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
      <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
          <div className="mx-3 flex-1 rounded-md bg-white border border-[#E2E8F0] text-[11px] text-[#64748B] px-3 py-1">
            🔒 app.attendit.com / events / morning-standup
          </div>
          <span className="text-[11px] text-[#64748B]">Mon · 9:04 AM</span>
        </div>

        <div className="grid grid-cols-[180px_1fr] min-h-[480px]">
          <aside className="border-r border-[#E2E8F0] bg-[#F8FAFC] p-3">
            <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#64748B] px-2 mb-2">Live check-ins</div>
            <div className="space-y-1 mb-4">
              {[
                ["Aarav M.", "09:02"],
                ["Sana K.", "09:03"],
                ["Priya D.", "09:01"],
              ].map(([n, t]) => (
                <div key={n} className="flex items-center justify-between text-[11px] px-2 py-1.5 rounded-md bg-white border border-[#E2E8F0]">
                  <span className="text-[#0F172A]">{n}</span>
                  <span className="text-[#64748B]">{t}</span>
                </div>
              ))}
            </div>
            <nav className="space-y-0.5 text-xs">
              <SideItem label="Events" active count={4} />
              <SideItem label="Members" />
              <SideItem label="Reports" />
              <SideItem label="Kiosks" />
              <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#64748B] px-2 mt-4 mb-1">Setup</div>
              <SideItem label="Roster" />
              <SideItem label="Rules" />
            </nav>
          </aside>

          <main className="p-5">
            <div className="text-[11px] text-[#64748B] mb-1">Events › Morning Standup › Today</div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-[#0F172A] leading-tight">Morning Standup · Grade 11-A</h3>
              <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#D1FAE5] text-[#059669] text-[11px] font-medium px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> Live
              </span>
            </div>
            <p className="text-[11px] text-[#64748B] mt-1">Recurring · Mon–Fri · 9:00 AM · QR + Kiosk</p>

            <div className="grid grid-cols-4 gap-2 mt-4">
              <Stat label="Present" value="41" sub="↑ 3 late" subColor="text-[#10B981]" />
              <Stat label="Absent" value="09" sub="— avg" subColor="text-[#64748B]" />
              <Stat label="Late" value="03" sub="↓ 2 vs Fri" subColor="text-[#059669]" />
              <Stat label="Roster" value="53" sub="total" subColor="text-[#64748B]" />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-lg border border-[#E2E8F0] p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-semibold text-[#0F172A]">Recent check-ins</div>
                  <span className="text-[9px] tracking-[0.1em] uppercase text-[#64748B]">Auto-refresh</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    ["AM", "Aarav Menon", "In · QR", "09:02", "bg-[#D1FAE5] text-[#065F46]"],
                    ["SK", "Sana Khatri", "In · Kiosk", "09:03", "bg-[#D1FAE5] text-[#065F46]"],
                    ["PD", "Priya Desai", "In · Face", "09:01", "bg-[#D1FAE5] text-[#065F46]"],
                    ["RN", "Ravi Nair", "Late · Link", "09:14", "bg-[#FEF3C7] text-[#92400E]"],
                    ["LB", "Leena Banerjee", "In · QR", "08:58", "bg-[#D1FAE5] text-[#065F46]"],
                    ["JT", "Jay Thomas", "Absent", "—", "bg-[#FEE2E2] text-[#991B1B]"],
                  ].map(([i, n, s, t, c]) => (
                    <div key={n} className="flex items-center gap-2 text-[10px]">
                      <div className="w-6 h-6 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[9px] font-semibold text-[#1E293B]">{i}</div>
                      <div className="flex-1 text-[#0F172A]">{n}</div>
                      <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${c}`}>{s}</span>
                      <span className="text-[#64748B] w-8 text-right">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg border border-[#E2E8F0] p-3">
                  <div className="text-[11px] font-semibold text-[#0F172A] mb-2">This week</div>
                  <div className="flex items-end gap-2 h-20">
                    {[
                      ["Mon", 70, "#10B981"],
                      ["Tue", 85, "#10B981"],
                      ["Wed", 55, "#10B981"],
                      ["Thu", 40, "#FBBF24"],
                      ["Fri", 30, "#FBBF24"],
                    ].map(([d, h, c]) => (
                      <div key={d as string} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full rounded-t" style={{ height: `${h}%`, background: c as string }} />
                        <span className="text-[9px] text-[#64748B]">{d as string}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-[9px] text-[#64748B]">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#10B981]" /> Present</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#FBBF24]" /> Late</span>
                  </div>
                </div>

                <div className="rounded-lg border border-[#E2E8F0] p-3">
                  <div className="text-[10px] tracking-[0.12em] uppercase text-[#64748B] mb-2">Kiosk · Reception</div>
                  <QRPattern />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function SideItem({ label, active, count }: { label: string; active?: boolean; count?: number }) {
  return (
    <div className={`flex items-center justify-between px-2 py-1.5 rounded-md ${active ? "bg-[#D1FAE5] text-[#065F46]" : "text-[#1E293B] hover:bg-white"}`}>
      <span>{label}</span>
      {count !== undefined && (
        <span className={`text-[9px] font-semibold rounded-full px-1.5 ${active ? "bg-[#10B981] text-white" : "bg-[#E2E8F0] text-[#64748B]"}`}>
          {count}
        </span>
      )}
    </div>
  );
}

function Stat({ label, value, sub, subColor }: { label: string; value: string; sub: string; subColor: string }) {
  return (
    <div className="rounded-lg border border-[#E2E8F0] p-2.5">
      <div className="text-[9px] tracking-[0.12em] uppercase text-[#64748B]">{label}</div>
      <div className="text-xl font-semibold text-[#0F172A] mt-0.5 tracking-tight">{value}</div>
      <div className={`text-[9px] mt-0.5 ${subColor}`}>{sub}</div>
    </div>
  );
}

function QRPattern() {
  const cells = Array.from({ length: 81 }, (_, i) => {
    const x = i % 9, y = Math.floor(i / 9);
    const corner = (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
    return corner ? 1 : (x * 7 + y * 13) % 3 === 0 ? 1 : 0;
  });
  return (
    <div className="grid grid-cols-9 gap-[2px] aspect-square">
      {cells.map((c, i) => (
        <div key={i} className={c ? "bg-[#0F172A]" : "bg-white"} />
      ))}
    </div>
  );
}