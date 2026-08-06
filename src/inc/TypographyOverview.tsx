import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./TypographyOverview.module.css";

export type ContainerType = {
  className?: string;
};

const labelRows = [
  { id: "Display", guideline: "High-emphasis content and brand moments", description: "Hero banners, onboarding screens, marketing content" },
  { id: "Heading", guideline: "Page and section hierarchy", description: "Page titles, section headers, card titles" },
  { id: "Title", guideline: "Compact section titles", description: "Widgets, modal titles, tabs, side panels" },
  { id: "Body", guideline: "Primary content and reading text", description: "Paragraphs, descriptions, general content" },
  { id: "Label", guideline: "Interactive and form-related text", description: "Buttons, inputs, filters, navigation" },
  { id: "Caption", guideline: "Secondary and supporting content", description: "Helper text, metadata, validation messages" },
];

const navigationItems = [
  { id: "introduction", label: "Introduction" },
  { id: "primary-typeface-noto-sans", label: "Primary Typeface - Noto Sans" },
  { id: "typography-structure", label: "Typography Structure" },
  { id: "best-practices", label: "Best Practices" },
];

const TypographyOverview: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("introduction");

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
      const offset = 125;
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
          <section className={styles.section} id="introduction">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Introduction</h3>
              <p className={styles.sectionText}>
                Typography creates a consistent visual language and establishes hierarchy across HBK products. It improves readability, supports accessibility standards, and ensures content remains clear across devices, platforms, and user contexts.</p>
                <p className={styles.sectionText}>HBK uses <span>Noto Sans</span> as the primary typeface because it provides strong readability, broad language support, and consistent rendering across digital experiences. The typography system is designed around a scalable structure that defines usage patterns, sizes, spacing, and semantic hierarchy.
              </p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="primary-typeface-noto-sans">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Primary Typeface - Noto Sans</h3>
              <p className={styles.sectionText}>
                Noto Sans is a modern sans-serif typeface designed to support global communication while maintaining high readability and accessibility.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.heroSection}>
              <div className={styles.heroCopy}>
                <h3 className={styles.subTitle}>Why HBK uses Noto Sans</h3>
                <ul className={styles.sectionList}>
                  <li>Supports a broad range of languages and writing systems</li>
                  <li>Provides extensive glyph coverage for multilingual content</li>
                  <li>Delivers consistent rendering across operating systems and devices</li>
                  <li>Optimized for digital interfaces and small text sizes</li>
                  <li>Improves readability in both dense enterprise interfaces and content-heavy layouts</li>
                  <li>Supports inclusive experiences for global audiences</li>
                </ul>
              </div>
              <div className={styles.typeText}>
                <div className={styles.typeImage}>
                  <img src="./noto-sans.svg"></img>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="typography-structure">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Typography Structure</h3>
              <p className={styles.sectionText}>
                The typography system follows a hierarchical structure:
              </p>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tablesHeader}>
                  <span className={styles.colNo}>Category</span>
                  <span className={styles.colGuideline}>Purpose</span>
                  <span className={styles.colDescription}>Common Usage</span>
                </div>
                {labelRows.map((row) => (
                  <div className={styles.tablesRow} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.guideline}</span>
                    <span className={styles.colDescription}>{row.description}</span>
                  </div>
                ))}
              </div>
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
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use typography based on hierarchy</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Maintain consistent spacing between text elements</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use semantic text styles</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use predefined typography tokens</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Keep content scannable</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  Don’t
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Create arbitrary text sizes</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Mix multiple font families</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Use font weight alone to indicate hierarchy</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Reduce text sizes below accessibility limits</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Create custom spacing rules</li>
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

export default TypographyOverview;