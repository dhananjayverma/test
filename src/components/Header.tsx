import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export type HeaderType = {
  className?: string;
  hBKNewLogo1?: string;
};

const navLinks = ["Design Workshop", "Design System"];

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  hBKNewLogo1 = "/HBK-New-Logo-1.svg",
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
                      to="/design-system"
                      className="whitespace-nowrap text-[14px] font-bold leading-none text-[#5d7184] transition-colors hover:text-[#122033] xl:text-[15px]"
                    >
                      {link}
                    </Link>
                  );
                }
                return (
                  <button
                    key={link}
                    className="whitespace-nowrap text-[14px] font-bold leading-none text-[#5d7184] transition-colors hover:text-[#122033] xl:text-[15px]"
                  >
                    {link}
                  </button>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-[12px]">
              <button className="hidden h-[42px] min-w-[112px] items-center justify-center rounded-[15px] border-[2px] border-[#d3dfeb] bg-white px-[18px] text-[14px] font-extrabold leading-none text-[#122033] transition-colors hover:bg-[#f8fbfd] xl:flex">
                Resources
              </button>
              <button
                className="flex h-[52px] min-w-[156px] items-center justify-center rounded-[16px] px-6 text-[18px] font-extrabold leading-none text-white shadow-[0_8px_16px_rgba(0,91,154,0.18)] transition-all hover:opacity-90 max-[520px]:h-11 max-[520px]:min-w-[132px] max-[520px]:rounded-[14px] max-[520px]:px-4 max-[520px]:text-[15px] md:h-[42px] md:min-w-[126px] md:rounded-[15px] md:px-[20px] md:text-[14px]"
                style={{ background: "#0071BC" }}
              >
                Get Started
              </button>
              <button
                className="lg:hidden text-muted-foreground"
                onClick={() => {
                  const sidebar = document.getElementById("sidebar_nav");
                  if (sidebar) {
                    sidebar.style.display = "flex";
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
