import { FunctionComponent, useState } from "react";
import clsx from "clsx";
import styles from "./TypographyOverview.module.css";

export type ContainerType = {
  className?: string;
};

const labelRows = [
  { id: "1", name: "HBK logo", value: "Reinforces the HBK brand and establishes product identity." },
  { id: "2", name: "Application name", value: "Clearly identifies the application being launched." },
  { id: "3", name: "Product color theme", value: "Distinguishes the product category using its assigned brand color." },
  { id: "4", name: "Tagline", value: "Provides a brief description of the application's purpose or value." },
  { id: "5", name: "Copyright information", value: "Displays ownership and legal information for the application." },
  { id: "6", name: "Progress bar", value: "Indicates the application's loading status during startup." },
  { id: "7", name: "Illustration", value: "Represents the product category through consistent visual imagery." },
];
const brandRows = [
  { id: "Simulation", name: "Engineering simulation and virtual testing applications.", value: "Product Strong Blue" },
  { id: "Data Acquisition", name: "Measurement, sensing, and real-time data collection applications.", value: "Product Teal Blue" },
  { id: "Data Analytical", name: "Analysis, visualization, and interpretation of engineering data.", value: "Product Grey Blue" },
  { id: "Data Management", name: "Data storage, administration, governance, and enterprise services.", value: "Product Dark Blue" },
];

const navigationItems = [
  { id: "overview", label: "Overview" },
  { id: "product-categories", label: "Product Categories" },
  { id: "anatomy-of-splash-screen", label: "Anatomy of Splash Screen" },
  { id: "usage", label: "Usage" },
  { id: "best-practices", label: "Best Practices" },
];

const SplashScreenPage: FunctionComponent<ContainerType> = ({ className = "" }) => {
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
  const tabs = [
      { id: "product-strong-blue", hex: "#006AC2", name: "Product Strong Blue", group: "Simulation" },
      { id: "product-teal-blue", hex: "#008080", name: "Product Teal Blue", group: "Data Acquisition"},
      { id: "product-grey-blue", hex: "#006C8E", name: "Product Grey Blue", group: "Data Analytical" },
      { id: "product-dark-blue", hex: "#014070", name: "Product Dark Blue", group: "Data Management" },
      ];
  const [activeTab, setActiveTab] = useState("product-strong-blue");
  const [displayedTab, setDisplayedTab] = useState("product-strong-blue");
  const [isVisible, setIsVisible] = useState(true);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tabId);
      setDisplayedTab(tabId);
      setIsVisible(true);
    }, 200);
  };
  return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section} id="overview">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Overview</h3>
              <p className={styles.sectionText}>
                The HBK splash screen is displayed during application startup to communicate the product identity while essential resources are loading. It ensures a polished first impression and provides a consistent experience across all HBK desktop applications.</p>
              <p className={styles.sectionText}>Each splash screen follows the same visual structure while using a distinct product color to represent its respective solution category.
              </p>
            </div>
            <div className={styles.splashProduct}>
              <div className={clsx(styles.tabContent, isVisible ? styles.tabVisible : styles.tabHidden)}>
                  <div className={styles.typeImage} style={{ display: displayedTab === "product-strong-blue" ? "block" : "none" }}>
                    <img src="/splash-screen-strong-blue.svg" alt="Splash Screen Strong Blue" />
                  </div>
                  <div className={styles.typeImage} style={{ display: displayedTab === "product-teal-blue" ? "block" : "none" }}>
                    <img src="/splash-screen-teal-blue.svg" alt="Splash Screen Teal Blue" />
                  </div>
                  <div className={styles.typeImage} style={{ display: displayedTab === "product-grey-blue" ? "block" : "none" }}>
                    <img src="/splash-screen-grey-blue.svg" alt="Splash Screen Grey Blue" />
                  </div>
                  <div className={styles.typeImage} style={{ display: displayedTab === "product-dark-blue" ? "block" : "none" }}>
                    <img src="/splash-screen-dark-blue.svg" alt="Splash Screen Dark Blue" />
                  </div>
              </div>
              <div className={styles.cardGrid}>
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={clsx(
                      styles.brandCard,
                      activeTab === tab.id && styles.brandCardActive
                    )}
                  >
                    <div className={styles.swatch} style={{ backgroundColor: tab.hex }}>
                      <span className={styles.swatchTitle}>{tab.name}</span>
                    </div>
                    <div className={styles.cardLabel}>{tab.group}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="product-categories">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Product Categories</h3>
              <p className={styles.sectionText}>The HBK design system includes four standardized splash screens, each aligned with a product ecosystem.</p>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.table3Header}>
                  <span className={styles.colNo}>Category</span>
                  <span className={styles.colElement}>Purpose</span>
                  <span className={styles.colDesc}>Brand Color</span>
                </div>
                {brandRows.map((row) => (
                  <div className={styles.table3Rows} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colElement}>{row.name}</span>
                    <span className={styles.colDesc}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="anatomy-of-splash-screen">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Anatomy of Splash Screen</h3>
              <p className={styles.sectionText}>A splash screen typically contains:</p>
            </div>
             <div className={styles.sectionHeader}>
              <div className={styles.typeImage}>
                <img src="/splash-anatomy.svg" alt="Splash Screen" />
              </div>
            </div>
            <div className={styles.sectionHeader}>
              <h3 className={styles.subTitle}>Elements of Splash Screen</h3>
            </div>
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tablesHeader}>
                  <span className={styles.colNo}>No</span>
                  <span className={styles.colElement}>Element</span>
                  <span className={styles.colDesc}>Description</span>
                </div>
                {labelRows.map((row) => (
                  <div className={styles.tablesRow} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colElement}>{row.name}</span>
                    <span className={styles.colDesc}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="usage">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Usage</h3>
              <p className={styles.sectionText}>
                Use the standardized splash screen whenever an HBK desktop application:
              </p>
              <ul className={styles.sectionList}>
                <li>Launches from the operating system.</li>
                <li>Requires a short loading period before the interface is ready.</li>
                <li>Needs to communicate product branding consistently.</li>
                <li>Initializes application services, plugins, or user resources.</li>
              </ul>
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
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use the appropriate product category color for each application.</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Keep the logo, typography, and layout consistent across all splash screens.</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Display the splash screen only during application startup.</li>
                    <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Transition to the application as soon as loading is complete.</li>
                  </ul>
                </div>
                <div className={styles.dontsCard}>
                  <div className={styles.cardTitle}>
                    Don’t
                  </div>
                  <ul className={styles.list}>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Don't use the splash screen for in-app loading or navigation.</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Don't modify the standard layout, branding, or illustration style.</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Don't display unnecessary information or interactive elements.</li>
                    <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Don't keep the splash screen visible longer than required.</li>
                  </ul>
                </div>
              </div>
          </section>
        </div>
        <aside className={styles.sideNav}>
          {navigationItems.map((item) => (
            <div
              key={item.id}
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

export default SplashScreenPage;