"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  Check, ChevronDown, GraduationCap, Building2, HeartHandshake,
  ClipboardCheck, ShieldCheck, LogOut, QrCode, ScanFace,
  Link2, FileSpreadsheet, Briefcase, CalendarDays, FileText,
  BookOpen, Stethoscope, Users, Camera, MapPin, Puzzle,
  LayoutDashboard, BarChart3, Sparkles, LifeBuoy, Code2, Rss,
  User, LogIn
} from "lucide-react";

type MegaKey = "solutions" | "product" | "resources" | null;

export default function Header() {
  const [open, setOpen] = useState<MegaKey>(null);
  const [prevOpen, setPrevOpen] = useState<MegaKey>(null);
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState({ left: 0, width: 560 });

  // Calculate dropdown position relative to the hovered nav item
  useEffect(() => {
    if (open && navRef.current) {
      const buttons = navRef.current.querySelectorAll("[data-mega]");
      buttons.forEach((btn) => {
        if (btn.getAttribute("data-mega") === open) {
          const rect = btn.getBoundingClientRect();
          const parentRect = navRef.current!.getBoundingClientRect();
          // Align dropdown to start from the nav item, but clamp to viewport
          const idealLeft = rect.left - parentRect.left - 20;
          const width = open === "solutions" ? 640 : open === "product" ? 580 : 520;
          setDropdownStyle({ left: idealLeft, width });
        }
      });
    }
  }, [open]);

  const handleOpen = (key: MegaKey) => {
    setPrevOpen(open);
    setOpen(key);
  };

  return (
    <header
      onMouseLeave={() => { setOpen(null); setPrevOpen(null); }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#10B981] flex items-center justify-center">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#0F172A]">
            AttendItAI
          </span>
        </Link>

        {/* Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-1 relative">
          <NavItem
            label="Solutions"
            megaKey="solutions"
            active={open === "solutions"}
            onHover={() => handleOpen("solutions")}
          />
          <NavItem
            label="Product"
            megaKey="product"
            active={open === "product"}
            onHover={() => handleOpen("product")}
          />
          <Link
            href="/methods"
            onMouseEnter={() => setOpen(null)}
            className="px-3 py-2 text-sm font-medium text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
          >
            Methods
          </Link>
          <Link
            href="/pricing"
            onMouseEnter={() => setOpen(null)}
            className="px-3 py-2 text-sm font-medium text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
          >
            Pricing
          </Link>
          <NavItem
            label="Resources"
            megaKey="resources"
            active={open === "resources"}
            onHover={() => handleOpen("resources")}
          />
          <Link
            href="/faq"
            onMouseEnter={() => setOpen(null)}
            className="px-3 py-2 text-sm font-medium text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
          >
            FAQ
          </Link>
        </nav>

        {/* Auth buttons — changes based on login state */}
        <div className="flex items-center gap-3">
          {isPending ? (
            // Loading state — show nothing to prevent flash
            <div className="w-24 h-9" />
          ) : session ? (
            // LOGGED IN: show dashboard + avatar
            <>
              <Link
                href="/dashboard"
                className="hidden sm:inline text-sm font-medium text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={async () => {
                  await signOut();
                  router.push("/sign-in");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-medium px-4 py-2 transition-colors duration-200"
              >
                <User className="w-3.5 h-3.5" />
                Log Out
              </button>
            </>
          ) : (
            // NOT LOGGED IN: show sign in + start free
            <>
              <Link
                href="/sign-in"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-medium px-4 py-2 transition-colors duration-200"
              >
                Start free <span aria-hidden>→</span>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mega menu dropdown — compact, animated, positioned under nav item */}
      <div
        className={`absolute top-16 transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      style={{
  left: "50%",
  transform: open ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
  width: "800px",
  maxWidth: "calc(100vw - 2rem)",
}}
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] overflow-hidden">
          <div className="p-6">
            {/* Content transitions */}
            {open === "solutions" && <Solutions />}
{open === "product" && <Product />}
{open === "resources" && <Resources />}
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  label,
  megaKey,
  active,
  onHover,
}: {
  label: string;
  megaKey: string;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <button
      data-mega={megaKey}
      onMouseEnter={onHover}
      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        active ? "text-[#10B981]" : "text-[#1E293B] hover:text-[#10B981]"
      }`}
    >
      {label}
      <ChevronDown
        className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
          active ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#94A3B8] mb-3">
      {children}
    </div>
  );
}

function MegaLink({
  icon: Icon,
  label,
  desc,
}: {
  icon: any;
  label: string;
  desc?: string;
}) {
  return (
    <a
      href="#"
      className="group flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-[#F1FDF7] transition-all duration-200"
    >
      <div className="mt-0.5 w-8 h-8 rounded-md bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#10B981] group-hover:text-white group-hover:scale-110 transition-all duration-200">
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-medium text-[#0F172A] group-hover:text-[#059669] transition-colors duration-200">
          {label}
        </div>
        {desc && (
          <div className="text-xs text-[#94A3B8] mt-0.5 group-hover:text-[#64748B] transition-colors duration-200">
            {desc}
          </div>
        )}
      </div>
    </a>
  );
}

function Solutions() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <ColTitle>By Industry</ColTitle>
        <div className="space-y-0.5">
          <MegaLink icon={GraduationCap} label="K-12 Schools" />
          <MegaLink icon={Building2} label="Higher Education" />
          <MegaLink icon={HeartHandshake} label="Nonprofits" />
          <MegaLink icon={Briefcase} label="Workplaces" />
        </div>
      </div>
      <div>
        <ColTitle>By Use Case</ColTitle>
        <div className="space-y-0.5">
          <MegaLink icon={ClipboardCheck} label="Class Attendance" />
          <MegaLink icon={CalendarDays} label="Events" />
          <MegaLink icon={ShieldCheck} label="Anti-Proxy Check-in" />
          <MegaLink icon={FileText} label="Grant Reports" />
          <MegaLink icon={LogOut} label="School Dismissals" />
          <MegaLink icon={Users} label="Memberships" />
        </div>
      </div>
      <div>
        <ColTitle>Compare</ColTitle>
        <div className="space-y-0.5">
          <MegaLink icon={FileSpreadsheet} label="vs Google Forms" />
          <MegaLink icon={FileSpreadsheet} label="vs Excel" />
          <MegaLink icon={QrCode} label="vs QR Sheets" />
        </div>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <ColTitle>Features</ColTitle>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
          <MegaLink icon={LayoutDashboard} label="Attendance Tracker" />
          <MegaLink icon={QrCode} label="QR Code & Barcode" />
          <MegaLink icon={ScanFace} label="Face Check-in" />
          <MegaLink icon={MapPin} label="Location Tracking" />
          <MegaLink icon={Link2} label="Sign-in Links" />
          <MegaLink icon={Camera} label="Photo Capture" />
          <MegaLink icon={Puzzle} label="Integrations" />
          <MegaLink icon={BarChart3} label="Analytics" />
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-[#10B981]/10 p-4">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#059669] bg-white/70 rounded-full px-2.5 py-1 mb-3">
          <Sparkles className="w-3 h-3" /> NEW
        </div>
        <div className="text-sm font-semibold text-[#0F172A] mb-1">
          Kiosk 2.0 + Face check-in
        </div>
        <p className="text-xs text-[#64748B] mb-3">
          Turn any tablet into a hands-free check-in station.
        </p>
        <a
          href="#"
          className="text-xs font-semibold text-[#059669] hover:text-[#047857] transition-colors duration-200"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <ColTitle>Discover</ColTitle>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
          <MegaLink icon={BookOpen} label="Help Center" />
          <MegaLink icon={Rss} label="Blog" />
          <MegaLink icon={Code2} label="API Docs" />
          <MegaLink icon={Users} label="Community" />
          <MegaLink icon={FileText} label="Templates" />
          <MegaLink icon={LifeBuoy} label="How It Works" />
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-[#10B981]/10 p-4">
        <div className="text-sm font-semibold text-[#0F172A] mb-1">
          Still doing it manually?
        </div>
        <p className="text-xs text-[#64748B] mb-3">
          See how AttendItAI replaces paper sign-ins and messy spreadsheets.
        </p>
        <a
          href="#"
          className="text-xs font-semibold text-[#059669] hover:text-[#047857] transition-colors duration-200"
        >
          Book a demo →
        </a>
      </div>
    </div>
  );
}
