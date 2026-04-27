"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSession, signOut, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  Check, ChevronDown, GraduationCap, Building2, HeartHandshake,
  ClipboardCheck, ShieldCheck, LogOut, QrCode, ScanFace,
  Link2, FileSpreadsheet, Briefcase, CalendarDays, FileText,
  BookOpen, Stethoscope, Users, Camera, MapPin, Puzzle,
  LayoutDashboard, BarChart3, Sparkles, LifeBuoy, Code2, Rss,
  User, LogIn, Menu, X
} from "lucide-react";

type MegaKey = "solutions" | "product" | "resources" | null;

export default function Header() {
  const [open, setOpen] = useState<MegaKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MegaKey>(null);
  const { data: session } = useSession();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleOpen = (key: MegaKey) => {
    setOpen(key);
  };

  const toggleMobileAccordion = (key: MegaKey) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  return (
    <>
      <header
        onMouseLeave={() => setOpen(null)}
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

          {/* Desktop Navigation */}
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

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
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
              <>
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 -mr-2 text-[#1E293B] hover:text-[#10B981] transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <div
          className={`absolute top-16 hidden lg:block transition-all duration-300 ease-out ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          style={{
            left: "50%",
            transform: open
              ? "translateX(-50%) translateY(0)"
              : "translateX(-50%) translateY(-8px)",
            width: "800px",
            maxWidth: "calc(100vw - 2rem)",
          }}
        >
          <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] overflow-hidden">
            <div className="p-6">
              {open === "solutions" && <Solutions />}
              {open === "product" && <Product />}
              {open === "resources" && <Resources />}
            </div>
          </div>
        </div>
      </header>

      {/* ==================== MOBILE DRAWER ==================== */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#E2E8F0]">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-md bg-[#10B981] flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#0F172A]">
              AttendItAI
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-2 text-[#64748B] hover:text-[#0F172A] transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="overflow-y-auto h-[calc(100%-64px-80px)] px-4 py-4">
          {/* Accordion: Solutions */}
          <MobileAccordion
            label="Solutions"
            isOpen={mobileAccordion === "solutions"}
            onToggle={() => toggleMobileAccordion("solutions")}
          >
            <MobileSection title="By Industry">
              <MobileMegaLink icon={GraduationCap} label="K-12 Schools" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Building2} label="Higher Education" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={HeartHandshake} label="Nonprofits" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Briefcase} label="Workplaces" onClose={() => setMobileOpen(false)} />
            </MobileSection>
            <MobileSection title="By Use Case">
              <MobileMegaLink icon={ClipboardCheck} label="Class Attendance" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={CalendarDays} label="Events" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={ShieldCheck} label="Anti-Proxy Check-in" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={FileText} label="Grant Reports" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={LogOut} label="School Dismissals" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Users} label="Memberships" onClose={() => setMobileOpen(false)} />
            </MobileSection>
            <MobileSection title="Compare">
              <MobileMegaLink icon={FileSpreadsheet} label="vs Google Forms" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={FileSpreadsheet} label="vs Excel" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={QrCode} label="vs QR Sheets" onClose={() => setMobileOpen(false)} />
            </MobileSection>
          </MobileAccordion>

          {/* Accordion: Product */}
          <MobileAccordion
            label="Product"
            isOpen={mobileAccordion === "product"}
            onToggle={() => toggleMobileAccordion("product")}
          >
            <MobileSection title="Features">
              <MobileMegaLink icon={LayoutDashboard} label="Attendance Tracker" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={QrCode} label="QR Code & Barcode" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={ScanFace} label="Face Check-in" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={MapPin} label="Location Tracking" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Link2} label="Sign-in Links" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Camera} label="Photo Capture" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Puzzle} label="Integrations" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={BarChart3} label="Analytics" onClose={() => setMobileOpen(false)} />
            </MobileSection>
            <div className="mx-2 mt-3 rounded-lg bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-[#10B981]/10 p-3">
              <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#059669] bg-white/70 rounded-full px-2 py-0.5 mb-2">
                <Sparkles className="w-3 h-3" /> NEW
              </div>
              <div className="text-sm font-semibold text-[#0F172A] mb-0.5">
                Kiosk 2.0 + Face check-in
              </div>
              <p className="text-xs text-[#64748B]">
                Turn any tablet into a hands-free check-in station.
              </p>
            </div>
          </MobileAccordion>

          {/* Accordion: Resources */}
          <MobileAccordion
            label="Resources"
            isOpen={mobileAccordion === "resources"}
            onToggle={() => toggleMobileAccordion("resources")}
          >
            <MobileSection title="Discover">
              <MobileMegaLink icon={BookOpen} label="Help Center" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Rss} label="Blog" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Code2} label="API Docs" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={Users} label="Community" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={FileText} label="Templates" onClose={() => setMobileOpen(false)} />
              <MobileMegaLink icon={LifeBuoy} label="How It Works" onClose={() => setMobileOpen(false)} />
            </MobileSection>
          </MobileAccordion>

          {/* Simple links */}
          <MobileSimpleLink href="/methods" label="Methods" onClose={() => setMobileOpen(false)} />
          <MobileSimpleLink href="/pricing" label="Pricing" onClose={() => setMobileOpen(false)} />
          <MobileSimpleLink href="/faq" label="FAQ" onClose={() => setMobileOpen(false)} />
        </div>

        {/* Drawer Footer — Auth buttons */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#E2E8F0] bg-white px-6 py-4">
          {session ? (
            <div className="flex gap-3">
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center rounded-lg border border-[#E2E8F0] text-sm font-medium text-[#1E293B] py-2.5 hover:bg-[#F8FAFC] transition-colors duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={async () => {
                  setMobileOpen(false);
                  await signOut();
                  router.push("/sign-in");
                }}
                className="flex-1 text-center rounded-lg bg-[#0F172A] text-white text-sm font-medium py-2.5 hover:bg-[#1E293B] transition-colors duration-200"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/sign-in"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center rounded-lg border border-[#E2E8F0] text-sm font-medium text-[#1E293B] py-2.5 hover:bg-[#F8FAFC] transition-colors duration-200"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center rounded-lg bg-[#0F172A] text-white text-sm font-medium py-2.5 hover:bg-[#1E293B] transition-colors duration-200"
              >
                Start free →
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ==================== DESKTOP COMPONENTS ==================== */

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

/* ==================== MOBILE COMPONENTS ==================== */

function MobileAccordion({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#F1F5F9]">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3.5 px-2 text-[15px] font-medium text-[#0F172A]"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 text-[#94A3B8] transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[600px] opacity-100 pb-3" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-2">
      <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#94A3B8] px-2 mb-1.5">
        {title}
      </div>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function MobileMegaLink({
  icon: Icon,
  label,
  onClose,
}: {
  icon: any;
  label: string;
  onClose: () => void;
}) {
  return (
    <a
      href="#"
      onClick={onClose}
      className="flex items-center gap-3 px-2 py-2 rounded-lg active:bg-[#F1FDF7] transition-colors duration-150"
    >
      <div className="w-7 h-7 rounded-md bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <span className="text-sm text-[#1E293B]">{label}</span>
    </a>
  );
}

function MobileSimpleLink({
  href,
  label,
  onClose,
}: {
  href: string;
  label: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="block py-3.5 px-2 text-[15px] font-medium text-[#0F172A] border-b border-[#F1F5F9]"
    >
      {label}
    </Link>
  );
}
