import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";
import styles from "./ColorMainPage.module.css";

export type ContainerType = {
  className?: string;
};

const brandColors = [
  {
    name: "Product Strong Blue",
    hex: "#006AC2",
    reason:
      "This color suggests digital modeling, speed, virtual environments, and engineering innovation.",
  },
  {
    name: "Product Teal Blue",
    hex: "#008080",
    reason:
      "Teal is strongly associated with sensors, signals, instrumentation, and real-time measurement.",
  },
  {
    name: "Product Grey Blue",
    hex: "#005B9A",
    reason:
      "The blue-teal tone feels technical and analytical, while remaining distinct from the more sensor-oriented teal.",
  },
  {
    name: "Product Dark Blue",
    hex: "#014070",
    reason:
      "The darkest navy communicates stability, security, governance, storage, and enterprise reliability.",
  },
];

const accentColors = [
  {
    name: "Accent Blue",
    hex: "#2A73D4",
    reason: "Informational messages and guidance",
  },
  {
    name: "Accent Yellow",
    hex: "#F2C94C",
    reason: "Attention and caution states",
  },
  {
    name: "Accent Green",
    hex: "#2EA345",
    reason: "Positive outcomes and confirmations",
  },
  {
    name: "Accent Red",
    hex: "#D92D20",
    reason: "Errors and destructive actions",
  },
];

const neutralStops = [
  { name: "Base 1", hex: "#FAFAFA" },
  { name: "Base 2", hex: "#F4F4F5" },
  { name: "Base 3", hex: "#E4E4E7" },
  { name: "Base 4", hex: "#D4D4D8" },
  { name: "Base 5", hex: "#A1A1AB" },
  { name: "Base 6", hex: "#71717B" },
  { name: "Base 7", hex: "#52525B" },
  { name: "Base 8", hex: "#3F3F48" },
  { name: "Base 9", hex: "#282828" },
  { name: "Base 10", hex: "#1A1A1A" },
  { name: "Base 11", hex: "#121212" },
];

const navigationItems = [
  { label: "Overview", id: "overview" },
  { label: "Product Brand Color", id: "product-brand-color" },
  { label: "Neutral Colors", id: "neutral-colors" },
  { label: "Accent Color", id: "accent-color" },
];


const ColorOverview: FunctionComponent<ContainerType> = ({ className = "" }) => {
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
  const tabs = [
      { id: "product-strong-blue", hex: "#006AC2", name: "Product Strong Blue", group: "Simulation" },
      { id: "product-teal-blue", hex: "#008080", name: "Product Teal Blue", group: "Data Acquisition"},
      { id: "product-grey-blue", hex: "#005B9A", name: "Product Grey Blue", group: "Data Analytical" },
      { id: "product-dark-blue", hex: "#014070", name: "Product Dark Blue", group: "Data Management" },
      ];
  const [activeTab, setActiveTab] = useState("product-strong-blue");
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section} id="overview">
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.sectionText}>
              Color is a core part of our design language. It helps establish brand
              recognition, create visual hierarchy, communicate meaning, and guide
              users through experiences. Our color system is built to create consistency across products while
              remaining flexible enough to support different contexts and use cases.
            </p>
            <p className={styles.sectionText}>
              The system is organized into a set of foundational color groups:
            </p>
            <ul className={styles.list}>
              <li>
                <span className={styles.listStrong}>Product brand colors</span> create the
                visual identity of the product and define its personality.
              </li>
              <li>
                <span className={styles.listStrong}>Neutral colors</span> provide
                structure through backgrounds, surfaces, text, borders, and layouts.
              </li>
              <li>
                <span className={styles.listStrong}>Accent colors</span> communicate
                status and feedback through informational, warning, success, and
                critical states.
              </li>
            </ul>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="product-brand-color">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Product Brand Color</h3>
              <p className={styles.sectionText}>
                Our four brand colors work together to create a balanced and
                recognizable visual language.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    styles.brandCard,
                    activeTab === tab.id && styles.brandCardActive
                  )}
                >
                  <div className={styles.swatch} style={{ backgroundColor: tab.hex }}>
                    <span className={styles.hexLabel}>{tab.hex}</span>
                    <span className={styles.swatchTitle}>{tab.name}</span>
                  </div>
                  <div className={styles.cardLabel}>{tab.group}</div>
                </div>
              ))}
            </div>
            <div className={styles.tabContent}>
              {(() => {
                const tabData: Record<string, { name: string; desc: string; link: string }> = {
                  "product-strong-blue": {
                    name: "Product Strong Blue",
                    desc: "represents digital modeling, speed, and technological innovation. It reflects the precision and agility of virtual engineering environments, symbolizing simulation, computational performance, and forward-thinking product development. This color conveys confidence, intelligence, and technical excellence, making it ideal for interfaces and experiences related to digital twins, simulation workflows, engineering analysis, and advanced product innovation.",
                    link: "/color-product-strong-blue",
                  },
                  "product-teal-blue": {
                    name: "Product Teal Blue",
                    desc: "represents precision sensing, real-time data capture, and reliable instrumentation. It is strongly associated with sensors, signal acquisition, and measurement technologies that form the foundation of connected engineering systems. The color conveys accuracy, trust, and responsiveness, making it well suited for interfaces focused on data acquisition, hardware integration, live monitoring, instrumentation, and continuous measurement workflows where reliability and real-time insights are essential.",
                    link: "/color-product-teal-blue",
                  },
                  "product-grey-blue": {
                    name: "Product Grey Blue",
                    desc: "represents analytical thinking, technical expertise, and data-driven decision-making. Its blue-teal tone conveys intelligence, precision, and computational analysis while remaining visually distinct from the more sensor-oriented teal used for data acquisition. This color reflects advanced analytics, engineering insights, and performance evaluation, making it ideal for interfaces focused on data visualization, reporting, trend analysis, predictive modeling, and transforming complex datasets into actionable insights.",
                    link: "/color-product-grey-blue",
                  },
                  "product-dark-blue": {
                    name: "Product Dark Blue",
                    desc: "represents stability, security, and enterprise reliability. Its deep navy tone conveys trust, governance, and long-term dependability, reflecting the systems that securely manage, organize, and protect critical engineering data. This color is ideal for interfaces related to data management, system administration, storage, compliance, and platform governance, reinforcing confidence, control, and operational integrity across enterprise environments.",
                    link: "/color-product-dark-blue",
                  },
                };
                const currentTab = tabData[activeTab];
                if (!currentTab) return null;

                return (
                  <div className={styles.descriptionCardContainer}>
                    <div key={activeTab} className={styles.descriptionCard}>
                      <p className={styles.descriptionText}>
                        <span>{currentTab.name}</span> {currentTab.desc}
                      </p>
                      <Link to={currentTab.link}>
                        <button className={styles.ctaButton} type="button">
                          <span>Learn More</span>
                          <img src="./blue-arrow.svg" alt="arrow icon" className={styles.arrowIcon} />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.sectionRow} id="neutral-colors">
            <div className={styles.sectionCard}>
              <h3 className={styles.sectionTitle}>Neutral Colors</h3>
              <p className={styles.sectionText}>
                Used to build interface structure and maintain visual balance.
              </p>
              <p className={styles.sectionText}>
                Typical applications include:
              </p>
              <ul className={styles.list}>
                <li>Page and surface backgrounds</li>
                <li>Text hierarchy</li>
                <li>Borders and dividers</li>
                <li>Disabled states</li>
                <li>Layout containers</li>
              </ul>
            </div>
            <div className={styles.neutralCard}>
              {neutralStops.map((stop) => (
                <div
                  key={stop.name}
                  className={styles.neutralSwatch}
                  style={{ backgroundColor: stop.hex }}
                  title={stop.name}
                />
              ))}
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="accent-color">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Accent Color</h3>
              <p className={styles.sectionText}>
                Supporting colors extend the system by providing clear communication
                across interfaces.
              </p>
            </div>
            
            <div className={styles.tableCard}>
              <div className={styles.tableHeader}>
                <span>Color Name</span>
                <span>Color Code</span>
                <span>Reason</span>
              </div>
              <div className={styles.tableBody}>
                {accentColors.map((color) => (
                  <div className={styles.tableRow} key={color.name}>
                    <span className={styles.tableLabel}>{color.name}</span>
                    <div className={styles.codeCell}>
                      <span
                        className={styles.colorDot}
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.hex}</span>
                    </div>
                    <span className={styles.tableReason}>{color.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <p className={styles.footerText}>
            Together, these colors create a scalable system that supports both brand
            expression and product usability.
          </p>
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

export default ColorOverview;
