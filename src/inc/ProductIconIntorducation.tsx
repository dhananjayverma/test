import { FunctionComponent, useState, useEffect } from "react";
import styles from "./TypographyOverview.module.css";

export type ContainerType = {
  className?: string;
};

const labelRows = [
  { name: "Favicon", value: "16 x 16 px" },
  { name: "Window menu icon", value: "16 x 16 px" },
  { name: "Modal icon", value: "20 x 20 px" },
  { name: "Taskbar icon", value: "24 x 24 px" },
  { name: "Product interface icon", value: "32 x 32 px" },
  { name: "Desktop application icon", value: "64 x 64 px" },
  { name: "Large desktop icon", value: "128 x 128 px" },
  { name: "Application package/store icon", value: "256 x 256 px" },
];

const navigationItems = [
  { id: "overview", label: "Overview" },
  { id: "icon-variants", label: "Icon Variants" },
  { id: "desktop-variant", label: "Desktop Variant (HBK Branded)" },
  { id: "icon-sizes", label: "Icon Sizes" },
  { id: "usage-guidelines", label: "Usage Guidelines" },
];

const ProductIconIntorducation: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("overview");
  const handleNavClick = (id: string) => {
    setActiveNav(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 120;
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
      const scrollPosition = window.scrollY + 150; // Offset for header

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
    handleScroll(); // Set initial active state
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
          <section className={styles.section} id="overview">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Overview</h3>
              <p className={styles.sectionText}>
                Product icons provide a visual identity for HBK applications and help users quickly recognize products across platforms and touchpoints. The icon system is designed to maintain consistency, improve discoverability, and create a unified product ecosystem.</p>
              <p className={styles.sectionText}>The HBK product icon family is organized into four categories. Each category represents a specific product domain and uses a dedicated visual language to create differentiation while preserving a consistent HBK appearance.
              </p>
              <div className={styles.sectionCard}>
                <div className={styles.smallCard}>
                  <img src="/mpc.svg" alt="Product Icon Categories" />
                  <p className={styles.cardText}>Simulation</p>
                </div>
                <div className={styles.smallCard}>
                  <img src="/rcm.svg" alt="Product Icon Categories" />
                  <p className={styles.cardText}>Data Acquisition</p>
                </div>
                <div className={styles.smallCard}>
                  <img src="/fmea.svg" alt="Product Icon Categories" />
                  <p className={styles.cardText}>Data Analytical</p>
                </div>
                <div className={styles.smallCard}>
                  <img src="/ps.svg" alt="Product Icon Categories" />
                  <p className={styles.cardText}>Data Management</p>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="icon-variants">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Icon Variants</h3>
              <p className={styles.sectionText}>Product icons are available in multiple variants to support different platforms and environments.</p>
              <div className={styles.sectionsHeader}>
                <h3 className={styles.subtext}>Standard Variant</h3>
                <p className={styles.sectionText}>
                  The standard icon is used across most interfaces and product experiences.
                </p>
              </div>
            </div>
            <div className={styles.sectionHeader}>
              <div className={styles.typeImage}>
                <img src="/display.svg" alt="Standard Variant" />
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="desktop-variant">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Desktop Variant (HBK Branded)</h3>
              <p className={styles.sectionText}>This variant includes the HBK logo integrated within the icon.</p>
              <p className={styles.sectionText}>The HBK branded version should be used only for desktop application icons to strengthen brand visibility and improve product recognition within operating systems.</p>
              <div className={styles.dosDontsGrid}>
                <div className={styles.dosCard}>
                  <div className={styles.cardTitle}>
                    Usage
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Desktop application shortcut</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Installed application icon</li>
                  </ul>
                </div>
                <div className={styles.dontsCard}>
                  <div className={styles.cardTitle}>
                    Do Not Use
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Window menu, Modal, Taskbar icons, Favicon</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> In-product navigation icons</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="icon-sizes">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Icon Sizes</h3>
              <p className={styles.sectionText}>
                Product icons are designed in multiple sizes to ensure clarity and visual consistency across use cases.
              </p>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tables2Header}>
                  <span className={styles.colNo}>Usage</span>
                  <span className={styles.colGuideline}>Recommended Size</span>
                </div>
                {labelRows.map((row) => (
                  <div className={styles.tables2Rows} key={row.name}>
                    <span className={styles.colNo}>{row.name}</span>
                    <span className={styles.colGuideline}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="usage-guidelines">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Usage Guidelines</h3>
              <div className={styles.sectionsHeader}>
                <h4 className={styles.subtext}>Maintain Consistency</h4>
                <p className={styles.sectionText}>Always use approved category icons and avoid modifying icon structure, colors, or visual elements.</p>
              </div>
              <div className={styles.sectionsHeader}>
                <h4 className={styles.subtext}>Use Appropriate Variants</h4>
                <p className={styles.sectionText}>Use the branded HBK version only for desktop environments. All other contexts should use the standard variant.</p>
              </div>
              <div className={styles.sectionsHeader}>
                <h4 className={styles.subtext}>Preserve Visual Quality</h4>
                <p className={styles.sectionText}>Use the closest available icon size to avoid scaling artifacts and maintain visual sharpness.</p>
              </div>
              <div className={styles.sectionsHeader}>
                <h4 className={styles.subtext}>Maintain Clear Recognition</h4>
                <p className={styles.sectionText}>Icons should remain visually distinguishable and recognizable at small sizes.</p>
              </div>
            </div>
            <div className={styles.dosDontsGrid}>
                <div className={styles.dosCard}>
                  <div className={styles.cardTitle}>
                    Best Practices
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use category-specific icons based on product type</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use predefined size assets</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Maintain padding and safe area around icons</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use HBK-branded icons only on desktop shortcuts</li>
                  </ul>
                </div>
                <div className={styles.dontsCard}>
                  <div className={styles.cardTitle}>
                    Avoid
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Stretching or distorting icons</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Adding shadows or visual effects</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Changing category colors or symbols</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Using desktop-branded variants in UI components</li>
                  </ul>
                </div>
              </div>
          </section>
        </div>
        <aside className={styles.sideNav} id="sideNavContainer">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              id={`navItem-${item.id}`} className={`${styles.navItem} ${
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

export default ProductIconIntorducation;