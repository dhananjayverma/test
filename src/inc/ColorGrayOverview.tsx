import { FunctionComponent, useState, useEffect } from "react";
import styles from "./ColorGrayOverview.module.css";

export type ContainerType = {
  className?: string;
};

const reminderItems = [
  {id: 1, name: "HBK Product Grey Blue is defined only for Digital Products.", icon: "/green-check.svg"},
  {id: 2, name: "HBK Product colors are used to define color theme for different value chains. Do not use them interchangeably.", icon: "/green-check.svg"},
];
const navigationItems = [
  { label: "Overview", id: "overview" },
  { label: "Color Categorization", id: "color-categorization" },
];

const ProductStrongBlueCard: FunctionComponent<{ className?: string }> = ({ className }) => (
  <div className={[styles.colorCard, className].filter(Boolean).join(" ")}>
    <div className={styles.colorCardInner}>
      <div className={styles.colorSwatch} />
      <div className={styles.colorCardText}>
        <h3>Product Grey Blue</h3>
        <p>#005B9A</p>
      </div>
    </div>
    <span className={styles.colorCardCaption}>Product Grey Blue Color</span>
  </div>
);

const ColorOverview: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("overview");
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
          <section className={styles.section} id="overview">
            <h2 className={styles.sectionTitle}>Color Overview</h2>
            <div className={styles.heroSection}>
              <div className={styles.heroCopy}>
                <p className={styles.sectionText}>
                  HBK’s <span>Product Grey Blue Color</span> is evolved to create a stronger balance between intelligence and clarity in digital experiences. The refined Hex Code enhances visual distinction while maintaining a professional and modern identity. The update ensures stronger representation of analytical thinking and informed decision-making across the digital ecosystem.
                </p>
              </div>
              <ProductStrongBlueCard />
            </div>
          </section>
          <section className={styles.reminderCard}>
            <h3 className={styles.subTitle}>Things to remember</h3>
            <ul className={styles.reminderList}>
              {reminderItems.map((item) => (
                <li key={item.id}>
                  <span className={styles.bullet} ><img src={item.icon} alt={item.icon} /></span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="color-categorization">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Color Categorization</h3>
              <p className={styles.sectionText}>
                HBK drives immense value through its value chain, and each product under different value chains communicates a message and serves a unique purpose. Hence, the <span>Product Grey Blue Color</span> is designed to communicate intelligence, analytical depth, precision, and technical confidence to support Data Analytics tools and enable meaningful insights from data.
              </p>
            </div>

            <div className={styles.valueChainCard}>
              <img src="/gray-value.svg" alt="HBK Value Chain" className={styles.valueChainImage} />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.subTitle}>Data Analytics Tools</h3>
              <p className={styles.sectionText}>
                Data Analytics Tools aim to transform collected data into meaningful insights and enable smarter decision-making through analysis, interpretation, and visualization.
              </p>
            </div>
            <div className={styles.simulationPreview}>
              <div className={styles.simulationPanel}>
                <img src="/gray-blue.svg" alt="Data Analytics Tools" className={styles.simulationImage} /> 
              </div>
              <div className={styles.simulationHint}>
                <i>A quick preview of how the data analytics tools would look-like in Product Grey Blue color palette</i>
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

export default ColorOverview;
