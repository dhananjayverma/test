import { FunctionComponent, useState, useEffect } from "react";
import styles from "./TypographyOverview.module.css";

export type ContainerType = {
  className?: string;
};

const labelRows = [
  { name: "size-0", value: "0px" },
  { name: "size-1", value: "2px" },
  { name: "size-2", value: "4px" },
  { name: "size-4", value: "8px" },
  { name: "size-8", value: "16px" },
  { name: "size-16", value: "32px" },
  { name: "size-24", value: "48px" },
  { name: "size-32", value: "64px" },
];

const usageRows = [
  { name: "Tight spacing", value: "4–8px" },
  { name: "Small element spacing", value: "8–12px" },
  { name: "Related component spacing", value: "12–24px" },
  { name: "Component padding", value: "24–32px" },
  { name: "Section spacing", value: "24–32px" },
];

const spaceRows = [
  { name: "Buttons", value: "8–16px" },
  { name: "Input fields", value: "12–16px" },
  { name: "Cards", value: "16–16px" },
  { name: "Modals", value: "16–24px" },
  { name: "Drawers", value: "32–64px" },
];

const layoutRows = [
  { name: "Content groups", value: "24–32px" },
  { name: "Sections", value: "48–64px" },
  { name: "Page regions", value: "64px +" },
];

const navigationItems = [
  { id: "spacing", label: "Spacing" },
  { id: "principles", label: "Principles" },
  { id: "build-hierarchy", label: "Build hierarchy" },
  { id: "maintain-consistency", label: "Maintain consistency" },
  { id: "spacing-scale", label: "Spacing scale" },
  { id: "usage-recommendations", label: "Usage recommendations" },
  { id: "spacing-behavior", label: "Spacing behavior" },
  { id: "component-spacing", label: "Component spacing" },
  { id: "layout-spacing", label: "Layout spacing" },
  { id: "responsive-behavior", label: "Responsive behavior" },
  { id: "best-practices", label: "Best practices" },
];

const SpacingIntroducation: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("spacing");
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
          <section className={styles.section} id="spacing">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Spacing</h3>
              <p className={styles.sectionText}>
                Spacing defines rhythm, structure, and relationships across the HBK Design System. Consistent spacing creates predictable layouts, improves readability, and helps users understand how elements belong together.</p>
              <p className={styles.sectionText}>HBK uses a token-based spacing system built on reusable primitives and semantic application patterns. Instead of assigning arbitrary values, use spacing tokens to maintain visual consistency across screens and devices.
              </p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="principles">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Principles</h3>
              <div className={styles.sectionsHeader}>
                <h3 className={styles.subtext}>Create relationships</h3>
                <p className={styles.sectionText}>
                  Elements placed close together are perceived as related, while larger gaps indicate separation. Use spacing to communicate hierarchy and grouping.
                </p>
              </div>
              <div className={styles.sectionsHeader}>
                <h3 className={styles.subtext}>Examples</h3>
                <ul className={styles.sectionList}>
                  <li>Label + input → close spacing</li>
                  <li>Related actions → moderate spacing</li>
                  <li>Distinct content sections → larger spacing</li>
                </ul>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="build-hierarchy">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Build hierarchy</h3>
              <div className={styles.sectionsHeader}>
                <p className={styles.sectionText}>
                  Whitespace is not empty space — it establishes emphasis and visual priority.</p>
                <p className={styles.sectionText}>Use larger spacing around:</p>
                <ul className={styles.sectionList}>
                  <li>Section headers</li>
                  <li>Major content blocks</li>
                  <li>Page-level containers</li>
                  <li>High-priority components</li>
                </ul>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="maintain-consistency">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Maintain consistency</h3>
              <div className={styles.sectionsHeader}>
                <p className={styles.sectionText}>
                 Avoid manually assigning spacing values.<br />Always use spacing tokens instead of custom values.</p>
              </div>
              <div className={styles.dosDontsGrid}>
                <div className={styles.dosCard}>
                  <div className={styles.cardTitle}>
                    Do
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> gap: spacing-md</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> padding: spacing-lg</li>
                  </ul>
                </div>
                <div className={styles.dontsCard}>
                  <div className={styles.cardTitle}>
                    Don’t
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> gap: 13px</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> padding: 27px</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="spacing-scale">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Spacing scale</h3>
              <p className={styles.sectionText}>
                HBK spacing is built from primitive tokens that establish a reusable foundation for layouts and components.
              </p>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.table2Header}>
                  <span className={styles.colNo}>Token Name</span>
                  <span className={styles.colGuideline}>Value</span>
                </div>
                {labelRows.map((row) => (
                  <div className={styles.table2Rows} key={row.name}>
                    <span className={styles.colNo}><span className={styles.heighlight_text}>{row.name}</span></span>
                    <span className={styles.colGuideline}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="usage-recommendations">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Usage recommendations</h3>
              <div className={styles.tableSection}>
                <div className={styles.table}>
                  <div className={styles.tables2Header}>
                    <span className={styles.colNo}>Purpose</span>
                    <span className={styles.colGuideline}>Recommended range</span>
                  </div>
                  {usageRows.map((row) => (
                    <div className={styles.tables2Rows} key={row.name}>
                      <span className={styles.colNo}>{row.name}</span>
                      <span className={styles.colGuideline}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="spacing-behavior">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Spacing Behavior</h3>
              <p className={styles.sectionText}>
                Spacing should scale with content importance and container size
              </p>
            </div>
            <div className={styles.heroSection}>
              <div className={styles.heroCopy}>
                <p className={styles.sectionText}>
                  Small spaces create stronger relationships: <br />Label <br />↓ 4-8px<br />Input
                </p>
              </div>
              <div className={styles.typeText}>
                <div className={styles.previewSurface}>
                  <div className={styles.previewImage}>
                    <img src="./space-1.svg" alt="Spacing Behavior 1" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroSection}>
              <div className={styles.heroCopy}>
                <p className={styles.sectionText}>
                  Medium spaces separate related groups:<br />Card content <br />↓ 16–24px<br />Actions
                </p>
              </div>
              <div className={styles.typeText}>
                <div className={styles.previewSurface}>
                  <div className={styles.previewImage}>
                    <img src="./space-2.svg" alt="Spacing Behavior 1" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroSection}>
              <div className={styles.heroCopy}>
                <p className={styles.sectionText}>
                  Large spaces separate independent content:<br />Hero section <br />↓ 48–64px<br />Feature section
                </p>
              </div>
              <div className={styles.typeText}>
                <div className={styles.previewSurface}>
                  <div className={styles.previewImage}>
                    <img src="./space-3.svg" alt="Spacing Behavior 1" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="component-spacing">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Component Spacing</h3>
              <p className={styles.sectionText}>
                Use internal spacing (padding) to create breathing room within components.
              </p>
              <div className={styles.tableSection}>
                <div className={styles.table}>
                  <div className={styles.tables2Header}>
                    <span className={styles.colNo}>Component</span>
                    <span className={styles.colGuideline}>Suggested spacing</span>
                  </div>
                  {spaceRows.map((row) => (
                    <div className={styles.tables2Rows} key={row.name}>
                      <span className={styles.colNo}>{row.name}</span>
                      <span className={styles.colGuideline}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="layout-spacing">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Layout Spacing</h3>
              <p className={styles.sectionText}>
                Layout spacing controls separation between major content regions.
              </p>
              <div className={styles.tableSection}>
                <div className={styles.table}>
                  <div className={styles.tables2Header}>
                    <span className={styles.colNo}>Layout element</span>
                    <span className={styles.colGuideline}>Suggested spacing</span>
                  </div>
                  {layoutRows.map((row) => (
                    <div className={styles.tables2Rows} key={row.name}>
                      <span className={styles.colNo}>{row.name}</span>
                      <span className={styles.colGuideline}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="responsive-behavior">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Responsive Behavior</h3>  
              <p className={styles.sectionText}>
                HBK spacing tokens remain consistent across devices while components and typography adapt to screen sizes.
              </p>
              <div className={styles.typeImage}>
                <img src="./space-4.svg" alt="Spacing Behavior 1" />
              </div>
              <p className={styles.sectionText}>
                This approach preserves visual rhythm while allowing content density to scale appropriately.
              </p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="best-practices">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Best Practices</h3>
            </div>
            <div className={styles.dosDontsGrid}>
                <div className={styles.dosCard}>
                  <div className={styles.cardTitle}>
                    Do
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use tokens instead of hardcoded values</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Keep related content visually close</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Increase spacing with hierarchy changes</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use layout containers to manage spacing</li>
                  </ul>
                </div>
                <div className={styles.dontsCard}>
                  <div className={styles.cardTitle}>
                    Don’t
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Random spacing values</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Excessively dense layouts</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Inconsistent gaps within similar components</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Mixing multiple spacing patterns in the same layout</li>
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

export default SpacingIntroducation;