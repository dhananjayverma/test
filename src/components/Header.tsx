import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export type HeaderType = {
  className?: string;
  hBKNewLogo1?: string;
};

const navLinks = ["Innovation Lab", "Design System", "Products"];

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  hBKNewLogo1 = "/HBK-New-Logo-1.svg",
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleSidebarClosed = () => setMobileOpen(false);
    window.addEventListener("sidebar-closed", handleSidebarClosed);
    return () => window.removeEventListener("sidebar-closed", handleSidebarClosed);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 border-b border-[#dfe9f2] bg-white px-8 max-[520px]:px-5 md:px-10 ${className}`}>
      <div className="w-full">
        <div className="flex h-[88px] items-center justify-between md:h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={hBKNewLogo1}
              alt="HBK Logo"
              className="h-[40px] max-[520px]:h-[32px] w-auto"
            />
          </Link>

          {/* Right section */}
          <div className="flex items-center gap-4 lg:gap-7 xl:gap-[42px]">
            {/* Desktop nav */}
            <nav className="hidden items-center gap-5 lg:flex xl:gap-[28px]">
              {navLinks.map((link) => {
                if (link === "Design System") {
                  return (
                    <Link
                      key={link}
                      to="/about-global-design-system"
                      className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
                    >
                      {link}
                    </Link>
                  );
                }
                return (
                  <button
                    key={link}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
                  >
                    {link}
                  </button>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-[12px]">
              <button
                className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{ background: "#005B9A", boxShadow: "0 4px 12px #0071BC35" }}
              >
                Connect with Us
              </button>




              {/* <button
              className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: B.blue, boxShadow: `0 4px 12px ${B.blue}35` }}>
              Connect with Us
            </button> */}


              <button
                className="lg:hidden text-muted-foreground"
                onClick={() => {
                  const sidebar = document.getElementById("sidebar_nav");
                  if (sidebar) {
                    if (sidebar.style.display === "flex") {
                      sidebar.style.setProperty("display", "none", "important");
                      setMobileOpen(false);
                    } else {
                      sidebar.style.setProperty("display", "flex", "important");
                      setMobileOpen(true);
                    }
                  } else {
                    setMobileOpen((v) => !v);
                  }
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
        </div>

        {/* Mobile menu */}
        {mobileOpen && !document.getElementById("sidebar_nav") && (
          <div className="border-t border-[#dbe6f0] pb-9 pt-8 lg:hidden max-[520px]:py-4">
            {navLinks.map((link) => {
              if (link === "Design System") {
                return (
                  <Link
                    key={link}
                    to="/about-global-design-system"
                    className="block w-full rounded-lg px-4 py-4 text-left text-[16px] font-medium leading-none text-[#607487] transition-colors hover:bg-muted hover:text-foreground max-[520px]:px-2 max-[520px]:py-3.5 max-[520px]:text-[15px]"
                  >
                    {link}
                  </Link>
                );
              }
              return (
                <button
                  key={link}
                  className="w-full rounded-lg px-4 py-4 text-left text-[16px] font-medium leading-none text-[#607487] transition-colors hover:bg-muted hover:text-foreground max-[520px]:px-2 max-[520px]:py-3.5 max-[520px]:text-[15px]"
                >
                  {link}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
