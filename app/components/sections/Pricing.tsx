import { Title, Paragraph } from "@/app/components/ui/Typography";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    unit: "/ forever",
    desc: "For small teams and classrooms getting started.",
    cta: "Start free",
    features: ["Up to 50 members", "1 admin", "QR + self check-in", "Basic reports"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$1",
    unit: "/ per member / month",
    desc: "For schools, studios, and companies that run attendance daily.",
    cta: "Start 14-day trial",
    features: [
      "Unlimited admins & groups",
      "Kiosk + Face + all methods",
      "Automated reports & alerts",
      "Google / Slack / Zapier",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "/ annual",
    desc: "For multi-location orgs with custom compliance needs.",
    cta: "Talk to sales",
    features: [
      "SSO / SAML / SCIM",
      "Multi-location dashboards",
      "Dedicated success manager",
      "On-prem / data residency",
      "Custom SLAs & training",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase text-[#059669]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Pricing
          </span>
          <div className="mt-5">
            <Title>
              Simple pricing. <span className="text-[#10B981]">Scales with you.</span>
            </Title>
          </div>
          <Paragraph className="mt-5">
            Start free. Upgrade when you need it. No seat minimums, no setup fees.
          </Paragraph>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 border ${
                p.highlight
                  ? "bg-[#10B981] border-[#10B981] text-white shadow-[0_30px_60px_-20px_rgba(16,185,129,0.5)]"
                  : "bg-white border-[#E2E8F0]"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-[10px] font-semibold tracking-[0.14em] uppercase rounded-full px-3 py-1">
                  Most popular
                </div>
              )}

              <h3 className={`text-lg font-semibold ${p.highlight ? "text-white" : "text-[#0F172A]"}`}>{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className={`text-5xl font-semibold tracking-tight ${p.highlight ? "text-white" : "text-[#0F172A]"}`}>{p.price}</span>
                <span className={`text-xs ${p.highlight ? "text-white/80" : "text-[#64748B]"}`}>{p.unit}</span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${p.highlight ? "text-white/90" : "text-[#64748B]"}`}>{p.desc}</p>

              <button
                className={`mt-6 w-full rounded-full text-sm font-medium px-5 py-3 transition ${
                  p.highlight
                    ? "bg-white text-[#0F172A] hover:bg-[#F8FAFC]"
                    : "bg-white border border-[#E2E8F0] text-[#0F172A] hover:border-[#10B981]"
                }`}
              >
                {p.cta}
              </button>

              <div className={`my-6 border-t ${p.highlight ? "border-white/20" : "border-[#E2E8F0]"}`} />

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm font-medium ${p.highlight ? "text-white" : "text-[#1E293B]"}`}>
                    <Check className={`w-4 h-4 shrink-0 ${p.highlight ? "text-white" : "text-[#10B981]"}`} strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}