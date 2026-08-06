import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./TypographyOverview.module.css";

export type ContainerType = {
  className?: string;
};

const displayRows = [
  { id: "Display/XL", size: "48", linehieght: "56", weight: "Bold" },
  { id: "Display/L", size: "40", linehieght: "48", weight: "Bold" },
  { id: "Display/M", size: "32", linehieght: "40", weight: "Bold" },
];
const headingRows = [
  { id: "Heading/XL", size: "28", linehieght: "36", weight: "Bold" },
  { id: "Heading/L", size: "24", linehieght: "32", weight: "Bold" },
  { id: "Heading/M", size: "20", linehieght: "28", weight: "Semi Bold" },
  { id: "Heading/S", size: "18", linehieght: "26", weight: "Semi Bold" },
  { id: "Heading/XS", size: "16", linehieght: "24", weight: "Semi Bold" },
];
const titleRows = [
  { id: "Title/L", size: "18", linehieght: "28", weight: "Semi Bold" },
  { id: "Title/M", size: "16", linehieght: "24", weight: "Semi Bold" },
  { id: "Title/S", size: "14", linehieght: "20", weight: "Semi Bold" },
];
const bodyRows = [
  { id: "Body/XL", size: "18", linehieght: "28", weight: "Regular" },
  { id: "Body/L", size: "16", linehieght: "26", weight: "Regular" },
  { id: "Body/M", size: "16", linehieght: "26", weight: "Regular" },
  { id: "Body/S", size: "13", linehieght: "20", weight: "Regular" },
  { id: "Body/XS", size: "12", linehieght: "18", weight: "Regular" },
];
const labelRows = [
  { id: "Label/L", size: "16", linehieght: "24", weight: "Medium" },
  { id: "Label/L-Underline", size: "16", linehieght: "26", weight: "Medium" },
  { id: "Label/M", size: "14", linehieght: "20", weight: "Medium" },
  { id: "Label/S", size: "12", linehieght: "16", weight: "Medium" },
  { id: "Label/S-Underline", size: "12", linehieght: "16", weight: "Medium" },
];
const captionRows = [
  { id: "Caption/L", size: "13", linehieght: "18", weight: "Regular" },
  { id: "Caption/M", size: "12", linehieght: "16", weight: "Regular" },
  { id: "Caption/S", size: "10", linehieght: "14", weight: "Regular" },
];

const navigationItems = [
  { id: "display", label: "Display" },
  { id: "heading", label: "Heading" },
  { id: "title", label: "Title" },
  { id: "body", label: "Body" },
  { id: "label", label: "Label" },
  { id: "caption", label: "Caption" },
];

const TypographySpecification: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("display");

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
          <section className={styles.section} id="display">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Display</h3>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tableHeading}>
                  <span className={styles.colNo}>Token </span>
                  <span className={styles.colGuideline}>Size</span>
                  <span className={styles.colGuideline}>Line Height</span>
                  <span className={styles.colDescription}>Weight</span>
                </div>
                {displayRows.map((row) => (
                  <div className={styles.tableRows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.size}</span>
                    <span className={styles.colGuideline}>{row.linehieght}</span>
                    <span className={styles.colDescription}>{row.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Purpose</h3>
              <p className={styles.sectionText}>High-impact typography used for key visual moments and brand expression.</p>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Common Usage</h3>
              <p className={styles.sectionText}>Hero banners, onboarding screens, splash screens, marketing highlights, empty states.</p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="heading">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Heading</h3>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tableHeading}>
                  <span className={styles.colNo}>Token </span>
                  <span className={styles.colGuideline}>Size</span>
                  <span className={styles.colGuideline}>Line Height</span>
                  <span className={styles.colDescription}>Weight</span>
                </div>
                {headingRows.map((row) => (
                  <div className={styles.tableRows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.size}</span>
                    <span className={styles.colGuideline}>{row.linehieght}</span>
                    <span className={styles.colDescription}>{row.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Purpose</h3>
              <p className={styles.sectionText}>Establishes clear content hierarchy and improves information scanning.</p>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Common Usage</h3>
              <p className={styles.sectionText}>Page titles, section headers, card titles, widget headers, grouped content sections.</p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="title">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Title</h3>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tableHeading}>
                  <span className={styles.colNo}>Token </span>
                  <span className={styles.colGuideline}>Size</span>
                  <span className={styles.colGuideline}>Line Height</span>
                  <span className={styles.colDescription}>Weight</span>
                </div>
                {titleRows.map((row) => (
                  <div className={styles.tableRows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.size}</span>
                    <span className={styles.colGuideline}>{row.linehieght}</span>
                    <span className={styles.colDescription}>{row.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Purpose</h3>
              <p className={styles.sectionText}>Compact headings designed for dense enterprise and application interfaces.</p>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Common Usage</h3>
              <p className={styles.sectionText}>Modal titles, table sections, side panels, tabs, popovers, drawers, dashboard widgets.</p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="body">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Body</h3>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tableHeading}>
                  <span className={styles.colNo}>Token </span>
                  <span className={styles.colGuideline}>Size</span>
                  <span className={styles.colGuideline}>Line Height</span>
                  <span className={styles.colDescription}>Weight</span>
                </div>
                {bodyRows.map((row) => (
                  <div className={styles.tableRows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.size}</span>
                    <span className={styles.colGuideline}>{row.linehieght}</span>
                    <span className={styles.colDescription}>{row.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Purpose</h3>
              <p className={styles.sectionText}>Primary reading text used throughout the product experience.</p>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Common Usage</h3>
              <p className={styles.sectionText}>Paragraphs, descriptions, lists, form content, notifications, general UI content.</p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="label">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Label</h3>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tableHeading}>
                  <span className={styles.colNo}>Token </span>
                  <span className={styles.colGuideline}>Size</span>
                  <span className={styles.colGuideline}>Line Height</span>
                  <span className={styles.colDescription}>Weight</span>
                </div>
                {labelRows.map((row) => (
                  <div className={styles.tableRows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.size}</span>
                    <span className={styles.colGuideline}>{row.linehieght}</span>
                    <span className={styles.colDescription}>{row.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Purpose</h3>
              <p className={styles.sectionText}>Action-oriented text supporting interactive components and navigation.</p>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Common Usage</h3>
              <p className={styles.sectionText}>Buttons, inputs, dropdowns, filters, navigation items, chips, menus, tabs.</p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="caption">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Caption</h3>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tableHeading}>
                  <span className={styles.colNo}>Token </span>
                  <span className={styles.colGuideline}>Size</span>
                  <span className={styles.colGuideline}>Line Height</span>
                  <span className={styles.colDescription}>Weight</span>
                </div>
                {captionRows.map((row) => (
                  <div className={styles.tableRows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.size}</span>
                    <span className={styles.colGuideline}>{row.linehieght}</span>
                    <span className={styles.colDescription}>{row.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Purpose</h3>
              <p className={styles.sectionText}>Supporting information with lower visual emphasis.</p>
            </div>
            <div className={styles.sectionsHeader}>
              <h3 className={styles.subTitle}>Common Usage</h3>
              <p className={styles.sectionText}>Helper text, validation messages, metadata, timestamps, file details, secondary information.</p>
            </div>
          </section>
        </div>
        <aside className={styles.sideNav} id="sideNavContainer">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              id={`navItem-${item.id}`} className={`${styles.navItem} ${activeNav === item.id ? styles.navItemActive : ""
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

export default TypographySpecification;