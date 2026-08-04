import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import CheckboxOverCard from "../components/CheckboxOverCard";
import styles from "./CheckboxOverview.module.css";

export type ContainerType = {
  className?: string;
  label?: string;
};

const buttonElements = [
  { id: 1, name: "Checkbox Container", description: "Parent component that defines the interactive area and alignment behavior." },
  { id: 2, name: "Checkbox Control", description: "Interactive element used to indicate selection state." },
];

const navigationItems = [
  { id: "introduction", label: "Introduction" },
  { id: "types-of-buttons", label: "Types of Buttons" },
  { id: "best-practices", label: "Best practices" },
];

const CheckboxOverview: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("introduction");
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
          <section className={styles.section} id="introduction">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Introduction</h3>
              <p className={styles.sectionText}>
                Checkboxes allow users to select one or more independent options from a set. They are commonly used in forms, settings, filters, permissions, and bulk-selection workflows where multiple selections are allowed.
              </p>
              <p className={styles.sectionText}>
                Unlike radio buttons, checkboxes enable users to select several options simultaneously without affecting other choices.
              </p>
              <p className={styles.sectionText}>
                HBK checkboxes are designed to provide clear state communication, consistent interaction patterns, and accessible experiences across products.
              </p>
            </div>
            <div className={styles.previewCard}>
              <div className={styles.previewSurface}>
                <img src="/checkbox.svg" alt=" Anatomy" className={styles.previewImage} />
              </div>
            </div>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Elements of Checkbox</h3>
              <div className={styles.tableWrap}>
                <div className={styles.tableHeader}>
                  <span className={styles.colNo}>S.No.</span>
                  <span className={styles.colElement}>Element</span>
                  <span className={styles.colDesc}>Description</span>
                </div>
                {buttonElements.map((element) => (
                  <div key={element.id} className={styles.tableRow}>
                    <span className={styles.colNo}>{element.id}</span>
                    <span className={styles.colElement}>{element.name}</span>
                    <span className={styles.colDesc}>{element.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={clsx(styles.dosDontsGrid, styles.dosDontsStyle)}>
              <div className={styles.dosCard}>
                <div className={styles.cardTitle}>
                 <span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> When to use
                </div>
                <ul className={styles.list}>
                  <li>Select multiple options independently</li>
                  <li>Accept agreements and consent</li>
                  <li>Apply filters or preferences</li>
                  <li>Enable settings or permissions</li>
                  <li>Support bulk actions in tables and lists</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  <span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> When not to use
                </div>
                <ul className={styles.list}>
                  <li>Single-choice selections (Use Radio Buttons)</li>
                  <li>Immediate state switching (Use Toggle Switches)</li>
                  <li>Trigger actions (Use Buttons)</li>
                </ul>
              </div>
            </div>
          </section>
          <div className={styles.divider} />
          <section className={styles.section} id="types-of-buttons">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Types of Checkbox</h3>
              <p className={styles.sectionText}>
                Checkbox types offer various styles such as standard, toggle, and indeterminate, which assist users in making selections. Each type maintains consistent functionality and differs in visual emphasis, contributing to a clear hierarchy and an intuitive design experience.
              </p>
            </div>
            <CheckboxOverCard />
          </section>
          <div className={styles.divider} />
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
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use concise and descriptive labels</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Keep checkbox groups logically organized</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use the intermediate state only when appropriate</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Maintain consistent alignment and spacing</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  Don’t
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Use checkboxes for mutually exclusive options</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Depend on color alone to communicate states</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Use unclear labels</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Place unrelated items within the same group</li>
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

export default CheckboxOverview;