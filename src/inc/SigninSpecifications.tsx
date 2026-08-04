import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./Inputspecs.module.css";

export type ContainerType = {
  className?: string;
};

export interface SpecSection {
  title: string;
  value: string;
  style?: string;
  attributes?: SpecSection[];
  head?: string;
  image?: string;
};

const specSections: SpecSection[] = [
  {
    "title": "Show Heading",
    "value": "",
    "attributes": [
      { "title": "Property type:", "value": "Boolean" },
      { "title": "Default:", "value": "true" },
      { "title": "Associated layers:", "value": "" },
    ],
    "head": "Sign In Title",
    "image": "sign-space-1.svg",
  },
  {
    "title": "Show Subheading",
    "value": "",
    "attributes": [
      { "title": "Property type:", "value": "Boolean" },
      { "title": "Default:", "value": "true" },
      { "title": "Associated layers:", "value": "" },
    ],
    "head": "Form subtitle",
    "image": "sign-space-2.svg",
  }
]
const layoutSections: SpecSection[] = [
  {
    "title": "Right Container",
    "value": "",
    "attributes": [
      { "title": "Direction:", "value": "Vertical" },
      { "title": "Alignment:", "value": "Middle center" },
      { "title": "Vertical resizing:", "value": "Fixed" },
      { "title": "Horizontal resizing:", "value": "Fixed" },
      { "title": "Item spacing:", "value": "24" },
      { "title": "Padding top:", "value": "72" },
      { "title": "Padding bottom:", "value": "72" },
      { "title": "Padding left:", "value": "48" },
      { "title": "Padding right:", "value": "48" },
    ],
    "head": "",
    "image": "sign-space-3.svg",
  },
  {
    "title": "Logo Container",
    "value": "",
    "attributes": [
      { "title": "Direction:", "value": "Vertical" },
      { "title": "Alignment:", "value": "Top left" },
      { "title": "Vertical resizing:", "value": "Hug" },
      { "title": "Horizontal resizing:", "value": "Fixed" },
      { "title": "Item spacing:", "value": "10" },
    ],
    "head": "",
    "image": "sign-space-4.svg",
  },
  {
    "title": "Sign In Container",
    "value": "",
    "attributes": [
      { "title": "Direction:", "value": "Vertical" },
      { "title": "Alignment:", "value": "Top left" },
      { "title": "Vertical resizing:", "value": "Hug" },
      { "title": "Horizontal resizing:", "value": "Fixed" },
      { "title": "Item spacing:", "value": "16" },
    ],
    "head": "",
    "image": "sign-space-5.svg",
  },
  {
    "title": "Sign In Form",
    "value": "",
    "attributes": [
      { "title": "Direction:", "value": "Vertical" },
      { "title": "Alignment:", "value": "Top left" },
      { "title": "Vertical resizing:", "value": "Hug" },
      { "title": "Horizontal resizing:", "value": "Fill" },
      { "title": "Item spacing:", "value": "32" },
    ],
    "head": "",
    "image": "sign-space-6.svg",
  },
]

const navigationItems = [
  { id: "properties", label: "Properties" },
  { id: "layout-and-spacing", label: "Layout and spacing" },
];

const SigninSpecifications: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("properties");
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
          <section className={styles.section} id="properties">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Properties</h3>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.cardList}>
              {specSections.map((section) => (
                <article className={styles.specCard}>
                  <div className={styles.infoColumn}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.subTitle}>{section.title}</h3>
                    </div>
                    <div className={styles.attributeItem}>
                      {section.attributes?.map((attribute) => (
                        <div className={styles.attributeRow}><span className={clsx(styles.attributeName, styles.attributeWidth)}>{attribute.title} {attribute.value}</span></div>
                      ))}
                    </div>
                    <div className={styles.titleRow}>
                      <span className={styles.accentDot} ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2H4V5.5M10 2H16V5.5M10 2V17M10 17H13.5M10 17H6.5" stroke="#6B6B6B"/></svg></span>
                      <h3 className={styles.subTitle}>{section.head}</h3>
                    </div>
                  </div>
                  <div className={styles.previewColumn}>
                    <div className={styles.previewSurface}>
                      <div className={clsx(styles.previewImage, styles.previewWidth)}>
                        <img src={section.image} ></img>
                      </div>
                    </div>
                  </div>
                </article>
               ))}
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="layout-and-spacing">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Layout and spacing</h3>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.cardList}>
              {layoutSections.map((sections) => (
                <article className={styles.specCard}>
                  <div className={styles.infoColumn}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.subTitle}>{sections.title}</h3>
                    </div>
                    <div className={styles.attributeItem}>
                      {sections.attributes?.map((attributes) => (
                        <div className={styles.attributeRow}><span className={clsx(styles.attributeName, styles.attributeWidth)}>{attributes.title} {attributes.value}</span></div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.previewColumn}>
                    <div className={styles.previewSurface}>
                      <div className={clsx(styles.previewImage, styles.previewWidth)}>
                        <img src={sections.image} ></img>
                      </div>
                    </div>
                  </div>
                </article>
               ))}
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

export default SigninSpecifications;