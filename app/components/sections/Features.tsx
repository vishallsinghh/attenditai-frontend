import { Title, Paragraph, Subheading, Eyebrow } from "@/app/components/ui/Typography";
import { BarChart3, Users, Calendar, Lock, Bell, Plug } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase text-[#059669]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            The control room
          </span>
          <div className="mt-5">
            <Title>
              One admin panel. <span className="text-[#10B981]">Every event.</span>
            </Title>
          </div>
          <Paragraph className="mt-5">
            Attendit is the command center for attendance across your org — classes, shifts, workshops, recurring meetings, one-off conferences.
          </Paragraph>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card icon={BarChart3} title="Dashboard & reports" desc="Present / absent / late at a glance. Drill into any member, group, or date range. Export to Excel or email on a schedule.">
            <MiniChart />
          </Card>

          <Card icon={Users} title="Roster & groups" desc="Classes, teams, shifts, custom tags. Bulk import from Excel. Merge duplicates. Assign group admins.">
            <div className="flex flex-wrap gap-1.5">
              <Chip>Grade 11-A · 32</Chip>
              <Chip>Grade 11-B · 29</Chip>
              <Chip tone="green">Swim Team · 18</Chip>
              <Chip tone="amber">Night shift · 24</Chip>
              <Chip tone="ghost">+ New group</Chip>
            </div>
          </Card>

          <Card icon={Calendar} title="Events & schedules" desc="One-off events or recurring schedules. Auto-reminders by email, SMS, or WhatsApp. Attendance windows & late thresholds.">
            <div className="space-y-2">
              <EventRow badge="M" title="English Lit" meta="Mon–Fri · QR" tag="Recurring" />
              <EventRow badge="24" title="Founders dinner" meta="Thu · 7pm · Self" tag="RSVP" tone="amber" />
            </div>
          </Card>

          <Card icon={Lock} title="Roles & access" desc="Admins, managers, teachers, members. Scoped permissions — a teacher sees their class, HQ sees everything.">
            <div className="space-y-1.5">
              <RoleRow initials="AD" name="Anita D." role="Admin" tone="green" />
              <RoleRow initials="RK" name="Ravi K." role="11-A only" tone="ghost" />
              <RoleRow initials="MJ" name="Meera J." role="View own" tone="ghost" />
            </div>
          </Card>

          <Card icon={Bell} title="Smart reminders" desc="Nudge late arrivals, notify absentees' guardians, ping managers when attendance dips below a threshold.">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 rounded-md bg-[#FEF3C7] border border-[#FDE68A] px-2.5 py-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[#92400E]">Attendance for <b>12-A</b> dropped to <b>68%</b>.</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-[#D1FAE5] border border-[#A7F3D0] px-2.5 py-2 text-[11px] text-[#065F46]">
                ✓ Parent SMS sent to 4 guardians · 9:07 AM
              </div>
            </div>
          </Card>

          <Card icon={Plug} title="Integrations & API" desc="Google Workspace, Slack, Zapier, webhooks, and a clean REST API. Push attendance into payroll or your LMS.">
            <div className="grid grid-cols-3 gap-1.5">
              {["Google", "Slack", "Zapier", "Excel", "Webhook", "API"].map((x) => (
                <Chip key={x}>{x}</Chip>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* --- subcomponents --- */

function Card({
  icon: Icon,
  title,
  desc,
  children,
}: {
  icon: any;
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 hover:border-[#10B981]/40 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.25)] transition">
      <div className="w-9 h-9 rounded-lg bg-[#D1FAE5] text-[#059669] flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-white transition">
        <Icon className="w-4 h-4" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#0F172A]">{title}</h3>
      <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{desc}</p>
      <div className="mt-5 rounded-xl bg-white border border-[#E2E8F0] p-3">{children}</div>
    </div>
  );
}

function Chip({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "green" | "amber" | "ghost" }) {
  const tones = {
    default: "bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B]",
    green: "bg-[#D1FAE5] border-[#A7F3D0] text-[#065F46]",
    amber: "bg-[#FEF3C7] border-[#FDE68A] text-[#92400E]",
    ghost: "bg-white border-dashed border-[#CBD5E1] text-[#64748B]",
  };
  return <span className={`inline-flex items-center rounded-md border px-2 py-1 text-[11px] font-medium ${tones[tone]}`}>{children}</span>;
}

function MiniChart() {
  const heights = [60, 70, 45, 80, 55, 65, 75, 50];
  const highlight = [3, 7];
  return (
    <div>
      <div className="text-[9px] tracking-[0.12em] uppercase text-[#64748B] mb-2">Attendance · Apr</div>
      <div className="flex items-end gap-1.5 h-20">
        {heights.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${highlight.includes(i) ? "bg-[#FDBA74]" : "bg-[#10B981]"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1.5 text-[9px] text-[#64748B]">
        {["M", "T", "W", "T", "F", "M", "T", "W"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    </div>
  );
}

function EventRow({ badge, title, meta, tag, tone = "green" }: { badge: string; title: string; meta: string; tag: string; tone?: "green" | "amber" }) {
  const tagClass = tone === "amber" ? "bg-[#FEF3C7] text-[#92400E]" : "bg-[#D1FAE5] text-[#065F46]";
  return (
    <div className="flex items-center gap-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] p-2">
      <div className="w-9 h-9 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[11px] font-semibold text-[#0F172A]">{badge}</div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-[#0F172A] truncate">{title}</div>
        <div className="text-[10px] text-[#64748B] truncate">{meta}</div>
      </div>
      <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${tagClass}`}>{tag}</span>
    </div>
  );
}

function RoleRow({ initials, name, role, tone }: { initials: string; name: string; role: string; tone: "green" | "ghost" }) {
  const toneClass = tone === "green" ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]";
  return (
    <div className="flex items-center gap-2 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-1.5">
      <div className="w-6 h-6 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[9px] font-semibold text-[#1E293B]">{initials}</div>
      <div className="flex-1 text-[11px] font-medium text-[#0F172A]">{name}</div>
      <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${toneClass}`}>{role}</span>
    </div>
  );
}