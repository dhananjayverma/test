import { FunctionComponent, useState, useEffect } from "react";
import styles from "./ColorDarkPalettes.module.css";

export type ContainerType = {
  className?: string;
};

const paletteItems = [
  { label: "brand 50", hex: "#EBF3F8", textColor: "#000" },
  { label: "brand 100", hex: "#C9DBE8", textColor: "#000" },
  { label: "brand 200", hex: "#A4C2D8", textColor: "#000" },
  { label: "brand 300", hex: "#7EA9C7", textColor: "#000" },
  { label: "brand 400", hex: "#5F95BB", textColor: "#000" },
  { label: "brand 500", hex: "#3476A0", textColor: "#000" },
  { label: "brand 600 (Base)", hex: "#014070", textColor: "#fff" },
  { label: "brand 700", hex: "#01365F", textColor: "#fff" },
  { label: "brand 800", hex: "#012B4D", textColor: "#fff" },
  { label: "brand 900", hex: "#001D35", textColor: "#fff" },
];

const usageItems = [
  {
    token: "bg-cta",
    lightName: "brand-600",
    darkName: "brand-600",
    lightHex: "#014070",
    darkHex: "#014070",
    usage: "Default CTAs background",
  },
  {
    token: "bg-cta-hover",
    lightName: "brand-500",
    darkName: "brand-700",
    lightHex: "#3476A0",
    darkHex: "#01365F",
    usage: "Hover on CTAs background",
  },
  {
    token: "bg-cta-pressed",
    lightName: "brand-700",
    darkName: "brand-500",
    lightHex: "#01365F",
    darkHex: "#3476A0",
    usage: "Pressed CTAs background",
  },
  {
    token: "bg-brand",
    lightName: "brand-600",
    darkName: "grey-850",
    lightHex: "#014070",
    darkHex: "#1A1A1A",
    usage: "Header background",
  },
  {
    token: "bg-brand-medium",
    lightName: "brand-100",
    darkName: "brand-700",
    lightHex: "#C9DBE8",
    darkHex: "#01365F",
    usage: "Highlight background",
  },
  {
    token: "bg-brand-strong",
    lightName: "brand-700",
    darkName: "brand-200",
    lightHex: "#01365F",
    darkHex: "#A4C2D8",
    usage: "Dark background",
  },
  {
    token: "text-fg-brand",
    lightName: "brand-600",
    darkName: "brand-400",
    lightHex: "#014070",
    darkHex: "#5F95BB",
    usage: "Highlighted texts",
  },
  {
    token: "text-secondary-cta",
    lightName: "brand-600",
    darkName: "brand-400",
    lightHex: "#014070",
    darkHex: "#5F95BB",
    usage: "Secondary CTA text",
  },
  {
    token: "text-secondary-cta-hover",
    lightName: "brand-500",
    darkName: "brand-300",
    lightHex: "#3476A0",
    darkHex: "#7EA9C7",
    usage: "Pressed secondary CTA text",
  },
  {
    token: "text-secondary-cta-pressed",
    lightName: "brand-700",
    darkName: "brand-500",
    lightHex: "#01365F",
    darkHex: "#3476A0",
    usage: "Pressed secondary CTA text",
  },
  {
    token: "border-brand",
    lightName: "brand-600",
    darkName: "brand-400",
    lightHex: "#014070",
    darkHex: "#5F95BB",
    usage: "Highlighting border",
  },
  {
    token: "border-cta",
    lightName: "brand-600",
    darkName: "brand-400",
    lightHex: "#014070",
    darkHex: "#5F95BB",
    usage: "CTAs border",
  },
  {
    token: "border-cta-hover",
    lightName: "brand-500",
    darkName: "brand-300",
    lightHex: "#3476A0",
    darkHex: "#7EA9C7",
    usage: "Hover CTAs border",
  },
  {
    token: "border-cta-pressed",
    lightName: "brand-700",
    darkName: "brand-500",
    lightHex: "#01365F",
    darkHex: "#3476A0",
    usage: "Pressed CTAs border",
  },
  {
    token: "icon-cta",
    lightName: "brand-600",
    darkName: "brand-400",
    lightHex: "#014070",
    darkHex: "#5F95BB",
    usage: "Icon",
  },
  {
    token: "icon-cta-hover",
    lightName: "brand-500",
    darkName: "brand-300",
    lightHex: "#3476A0",
    darkHex: "#7EA9C7",
    usage: "Hover CTAs icon",
  },
  {
    token: "icon-cta-pressed",
    lightName: "brand-700",
    darkName: "brand-500",
    lightHex: "#01365F",
    darkHex: "#3476A0",
    usage: "Pressed CTAs icon",
  },
];

const navigationItems = [
  { id: "color-palette", label: "Color Palette" },
  { id: "usage-guidelines", label: "Usage guidelines" },
  { id: "dos-and-donts", label: "Do’s & Don’t" },
];

const ColorPalettes: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("color-palette");
  const handleNavClick = (id: string) => {
    setActiveNav(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 170;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const item = navigationItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= scrollPosition) {
            setActiveNav(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navItem = document.getElementById(`navItem-${activeNav}`);
    const sideNav = document.getElementById("sideNavContainer");
    if (navItem && sideNav) {
      const navItemTop = navItem.offsetTop;
      const navItemHeight = navItem.clientHeight;
      const sideNavScrollTop = sideNav.scrollTop;
      const sideNavHeight = sideNav.clientHeight;

      if (navItemTop < sideNavScrollTop + 20) {
        sideNav.scrollTo({ top: navItemTop - 20, behavior: 'smooth' });
      } else if (navItemTop + navItemHeight > sideNavScrollTop + sideNavHeight - 20) {
        sideNav.scrollTo({ top: navItemTop + navItemHeight - sideNavHeight + 20, behavior: 'smooth' });
      }
    }
  }, [activeNav]);
return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section} id="color-palette">
            <h2 className={styles.sectionTitle}>Color Palette</h2>
            <div className={styles.paletteCard}>
              <div className={styles.paletteHeader}>
                <h3>Product Gray Blue</h3>
              </div>
              <div className={styles.paletteRows}>
                {paletteItems.map((item) => (
                  <div
                    key={item.label}
                    className={styles.paletteRow}
                    style={{ backgroundColor: item.hex, color: item.textColor }}
                  >
                    <span>{item.label}</span>
                    <span>{item.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider} />
          <section className={styles.section} id="usage-guidelines">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Usage guidelines</h3>
              <p className={styles.sectionText}>
                Base colors form the foundation of HBK’s visual identity. For Data Management Tools, the dark blue anchors the experience in stability and trust, reflecting enterprise reliability, governance, and secure data handling. It creates a strong visual hierarchy while maintaining a calm and controlled interface, especially in environments where accuracy and dependability are critical.</p>
                <p className={styles.sectionText}>Working alongside other design system elements, this color reinforces a sense of confidence and consistency across data management products.
              </p>
            </div>
            <div className={styles.usageTableWrap}>
              <div className={styles.usageTable}>
                <div className={styles.tableHeader}>
                  <div className={styles.headerCell}>Token</div>
                  <div className={styles.headerCell}>Colour Name (Light)</div>
                  <div className={styles.headerCell}>Colour Name (Dark)</div>
                  <div className={styles.headerCell}>Usage</div>
                </div>
                {usageItems.map((item) => (
                  <div className={styles.tableRow} key={item.token}>
                    <div className={styles.tokenCell}>
                      <span className={styles.tokenBadge}>{item.token}</span>
                    </div>
                    <div className={styles.colorCell}>
                      <span
                        className={styles.colorDot}
                        style={{ backgroundColor: item.lightHex }}
                      />
                      <div>
                        <div>{item.lightName}</div>
                        <div>{item.lightHex}</div>
                      </div>
                    </div>
                    <div className={styles.colorCell}>
                      <span
                        className={styles.colorDot}
                        style={{ backgroundColor: item.darkHex }}
                      />
                      <div>
                        <div>{item.darkName}</div>
                        <div>{item.darkHex}</div>
                      </div>
                    </div>
                    <div className={styles.usageCell}>{item.usage}</div>
                  </div>
                ))}
              </div>
              <p className={styles.sectionText}>Use the brand color tokens to establish the foundation colors of the palette. </p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="dos-and-donts">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Do’s & Don’ts</h3>
              <p className={styles.sectionText}>
                These rules apply to every team using the HBK design system. They are based on common mistakes observed in early product builds and informed by WCAG 2.1 guidelines.
              </p>
            </div>
            <div className={styles.dosDontsGrid}>
              <div className={styles.dosCard}>
                <div className={styles.cardTitle}>
                  Do
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Always use the relevant brand tokens to define foundations </li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Always apply tokens to the elements (design and dev both)</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use token name only for design to dev collaboration</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  Don’t
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not use Hex values</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not break the design tokens in any case</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <aside id="sideNavContainer" className={styles.sideNav}>
          {navigationItems.map((item) => (
            <div
              key={item.id}
              id={`navItem-${item.id}`}
              className={`${styles.navItem} ${
                activeNav === item.id ? styles.navItemActive : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default ColorPalettes;
