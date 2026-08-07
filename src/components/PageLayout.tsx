import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const B = {
  blue: "#005B9A",
  blueDark: "#003D6B",
  blueLight: "#E8F4FD",
  blueAlt: "#0078D4",
  emerald: "#059669",
  emeraldL: "#D1FAE5",
  orange: "#D97706",
  orangeL: "#FEF3C7",
  purple: "#7C3AED",
  purpleL: "#EDE9FE",
  coral: "#DC2626",
  coralL: "#FEE2E2",
  sky: "#0EA5E9",
  skyL: "#E0F2FE",
};

const navLinks = ["Innovation Lab", "Design System", "Products"];

function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe9f2] bg-white px-8 max-[520px]:px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[88px] items-center gap-4 md:h-[68px] lg:gap-7 xl:gap-[42px]">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src="/HBK-New-Logo-1.svg"
              alt="HBK Logo"
              className="h-[40px] max-[520px]:h-[32px] w-auto"
            />
          </Link>

          <div className="flex-1" />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-[28px]">
            {navLinks.map((link) => {
              if (link === "Design System") {
                return (
                  <Link
                    key={link}
                    to="/design-system"
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
                  >
                    {link}
                  </Link>
                );
              }
              const route = link === "Innovation Lab" ? "/innovation-lab" : (link === "Products" ? "/products" : "#");
              return (
                <Link
                  key={link}
                  to={route}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
                >
                  {link}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-[12px]">
            <Link to="/connect-with-us">
              <button
                className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{ background: B.blue, boxShadow: `0 4px 12px ${B.blue}35` }}
              >
                Connect with Us
              </button>
            </Link>
            <button
              className="lg:hidden text-muted-foreground"
              onClick={() => {
                setMobileOpen((v) => !v);
              }}
            >
              {mobileOpen ? (
                <X size={28} className="max-[520px]:size-6" />
              ) : (
                <Menu size={28} className="max-[520px]:size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#dbe6f0] pb-9 pt-8 lg:hidden max-[520px]:py-4">
            {navLinks.map((link) => {
              if (link === "Design System") {
                return (
                  <Link
                    key={link}
                    to="/design-system"
                    className="block w-full rounded-lg px-4 py-4 text-left text-[16px] font-medium leading-none text-[#607487] transition-colors hover:bg-muted hover:text-foreground max-[520px]:px-2 max-[520px]:py-3.5 max-[520px]:text-[15px]"
                  >
                    {link}
                  </Link>
                );
              }
              const route = link === "Innovation Lab" ? "/innovation-lab" : (link === "Products" ? "/products" : "#");
              return (
                <Link
                  key={link}
                  to={route}
                  className="block w-full rounded-lg px-4 py-4 text-left text-[16px] font-medium leading-none text-[#607487] transition-colors hover:bg-muted hover:text-foreground max-[520px]:px-2 max-[520px]:py-3.5 max-[520px]:text-[15px]"
                >
                  {link}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white px-4 py-12 sm:px-6 md:px-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/HBK-New-Logo-1.svg"
                alt="HBK Logo"
                className="h-[32px] w-auto"
              />
            </Link>
            <p className="mb-5 text-[13px] font-normal leading-relaxed text-[#607487]">
              A unified design ecosystem for HBK teams worldwide.
            </p>
            {/* Mini footer illustration */}
            <svg width="72" height="52" viewBox="0 0 72 52" fill="none" className="opacity-35">
              <circle cx="18" cy="26" r="16" fill={B.blue} />
              <circle cx="40" cy="18" r="11" fill={B.purple} />
              <circle cx="58" cy="34" r="9" fill={B.emerald} />
            </svg>
          </div>

          {[
            { title: "Experience Hub", links: ["Overview", "Design Workshop", "Design System", "Customer Advisor", "Product Portfolio"] },
            { title: "Resources", links: ["Guidelines", "Templates", "Downloads", "Changelog", "API Docs"] },
            { title: "Products", links: ["Analytics", "Platform", "Insights", "DataOps", "CloudHub"] },
            { title: "Company", links: ["About HBK", "Team", "Blog", "Careers", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-extrabold text-foreground uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#dbe6f0] pt-6 sm:flex-row">
          <p className="text-[13px] font-normal text-[#607487]">
            © 2026 HBK Design System. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Accessibility", "Status"].map((l) => (
              <a key={l} href="#" className="text-[13px] font-medium text-[#607487] transition-colors hover:text-[#050b12]">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

interface PageLayoutProps {
  children?: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <TopNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
