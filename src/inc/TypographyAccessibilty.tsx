import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./TypographyOverview.module.css";

export type ContainerType = {
  className?: string;
};

const titleRows = [
  { id: "Normal Text", size: "4:5:1" },
  { id: "Large Text", size: "3:1" },
];

const navigationItems = [
  { id: "typography-accessibility-principles", label: "Typography Accessibility Principles" },
  { id: "why-noto-sans-supports-accessibility", label: "Why Noto Sans Supports Accessibility" },
  { id: "text-contrast", label: "Text Contrast" },
  { id: "accessibility-checklist", label: "Accessibility Checklist" },
];

const TypographyAccessibility: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("typography-accessibility-principles");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: "-180px 0px -60% 0px" }
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  const handleNavClick = (id: string) => {
    setActiveNav(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        setActiveNav(navigationItems[navigationItems.length - 1].id);
        return;
      }

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
          <section className={styles.section} id="typography-accessibility-principles">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Typography Accessibility Principles</h3>
              <p className={styles.sectionText}>
                Typography should support all users regardless of visual ability, language, or device.
              </p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="why-noto-sans-supports-accessibility">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Why Noto Sans Supports Accessibility</h3>
              <p className={styles.sectionText}>
                Noto Sans was selected because it provides characteristics that improve readability and support inclusive experiences.
              </p>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Extensive Glyph Coverage</h3>
              <p className={styles.sectionText}>Noto supports a very large character set across numerous languages and scripts.</p>
            </div>
            <div className={styles.sectionsHeader}>
              <p className={styles.sectionText}>This helps:</p>
              <ul className={styles.sectionList}>
                <li>Display multilingual content correctly</li>
                <li>Prevent missing character symbols</li>
                <li>Reduce rendering inconsistencies</li>
                <li>Support global audiences</li>
              </ul>
            </div>
            <div className={styles.sectionHeaders}>
              <p className={styles.subtext}>Examples include:</p>
              <div className={styles.sectionBtn}>
                <button className={styles.btnText}>Latin</button>
                <button className={styles.btnText}>Arabic</button>
                <button className={styles.btnText}>Chinese</button>
                <button className={styles.btnText}>Japanese</button>
                <button className={styles.btnText}>Korean</button>
                <button className={styles.btnText}>Cyrillic</button>
                <button className={styles.btnText}>Devanagari</button>
                <button className={styles.btnText}>Greek</button>
                <button className={styles.btnText}>Thai</button>
              </div>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Readability</h3>
            </div>
            <div className={styles.sectionsHeader}>
              <p className={styles.sectionText}>Noto Sans is optimized for digital readability through:</p>
              <ul className={styles.sectionList}>
                <li>Large x-height</li>
                <li>Clear letterforms</li>
                <li>Consistent stroke thickness</li>
                <li>Reduced visual clutter</li>
                <li>Strong distinction between similar characters</li>
              </ul>
            </div>
            <div className={styles.sectionHeaders}>
              <p className={styles.subtext}>Examples include:</p>
              <div className={styles.sectionBtn}>
                <button className={styles.btnText}>Uppercase I</button>
                <button className={styles.btnText}>Lowercase l</button>
                <button className={styles.btnText}>Number 1</button>
                <button className={styles.btnText}>Uppercase O</button>
                <button className={styles.btnText}>Number 0</button>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="text-contrast">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Text Contrast</h3>
              <p className={styles.sectionText}>
                Text must comply with WCAG standards.
              </p>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.table2Header}>
                  <span className={styles.colNo}>Content Type</span>
                  <span className={styles.colGuideline}>Minimum Contrast</span>
                </div>
                {titleRows.map((row) => (
                  <div className={styles.table2Rows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="accessibility-checklist">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Accessibility Checklist</h3>
            </div>
            <div className={styles.sectionsHeader}>
              <ul className={clsx(styles.sectionList, styles.styleNone)}>
                <li>✓ Supports multilingual glyph rendering</li>
                <li>✓ Meets WCAG contrast requirements</li>
                <li>✓ Supports browser zoom</li>
                <li>✓ Maintains readable line height</li>
                <li>✓ Uses semantic heading hierarchy</li>
                <li>✓ Avoids text clipping</li>
                <li>✓ Supports assistive technologies</li>
                <li>✓ Uses accessible font sizes</li>
              </ul>
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

export default TypographyAccessibility;