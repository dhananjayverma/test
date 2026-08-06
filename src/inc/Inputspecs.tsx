import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import InputSpecsVariant from "../components/InputSpecsVariant";
import InputSpecsSize from "../components/InputSpecsSize";
import InputSpecsStates from "../components/InputSpecsStates";
import styles from "./Inputspecs.module.css";

export type ContainerType = {
  className?: string;
};

export interface SpecSection {
  title: string;
  value: string;
  style?: string;
  attributes?: SpecSection[];
  image?: string;
};

const specSections: SpecSection[] = [
  {
    "title": "Input Field",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Vertical", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Top Right" },
      { "title": "Vertical resizing", "value": "Hug" },
      { "title": "Horizontal resizing", "value": "Fixed"},
      { "title": "Item spacing", "value": "4", "style": "heighlight-text" },
    ],
    "image": "input-11.svg",
  },
  {
    "title": "Input Container",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Horizontal", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Middle Left" },
      { "title": "Vertical resizing", "value": "Hug" },
      { "title": "Horizontal resizing", "value": "Fill"},
      { "title": "Item spacing", "value": "4", "style": "heighlight-text" },
    ],
    "image": "input-12.svg",
  },
  {
    "title": "Label Container",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Horizontal", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Top Right" },
      { "title": "Vertical resizing", "value": "Fixed" },
      { "title": "Horizontal resizing", "value": "Fill"},
      { "title": "Item spacing", "value": "4, 16", "style": "heighlight-text" },
    ],
    "image": "input-13.svg",
  },
  {
    "title": "Validation Container",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Horizontal", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Middle, spaced equally" },
      { "title": "Vertical resizing", "value": "Hug" },
      { "title": "Horizontal resizing", "value": "Fill"},
    ],
    "image": "input-14.svg",
  },
  {
    "title": "Validation Text Container",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Horizontal", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Middle Left" },
      { "title": "Vertical resizing", "value": "Hug" },
      { "title": "Horizontal resizing", "value": "Fixed"},
      { "title": "Item spacing", "value": "4", "style": "heighlight-text" },
    ],
    "image": "input-15.svg",
  },
];

const navigationItems = [
  { id: "specification-of-input-field", label: "Specification of Input Field" },
  { id: "input-field-variants", label: "Input Field Variants" },
  { id: "input-field-sizes", label: "Input Field Sizes" },
  { id: "input-field-states", label: "Input Field States" },
];

const Inputspecs: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("specification-of-input-field");
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
          <section className={styles.section} id="specification-of-input-field">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Specification of Input Field</h3>
              <p className={styles.sectionText}>
                Specifications define the standardized properties, such as size, spacing, typography, and states to ensure consistency, usability, and accessibility across the interface. <br></br>Its mandated to use these guidelines diligently.
              </p>
            </div>
          </section>
          <section >
            <div className={styles.cardList}>
              {specSections.map((section) => (
                <article key={section.title} className={styles.specCard}>
                  <div className={styles.infoColumn}>
                    <div className={styles.titleRow}>
                      <span className={styles.accentDot} ><img src="./Type-icon.svg"></img></span>
                      <h3 className={styles.subTitle}>{section.title}</h3>
                    </div>
                    <div className={styles.attributeItem}>
                      {section.attributes?.map((attribute) => (
                        <div key={attribute.title} className={styles.attributeRow}>
                          <span className={styles.attributeName}>{attribute.title}</span>
                          <div className={styles.attributeValue}>
                            <span
                              className={clsx(
                                attribute.style &&
                                  styles[attribute.style as keyof typeof styles]
                              )}
                            >{attribute.value}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.previewColumn}>
                    <div className={styles.previewSurface}>
                      <div className={styles.previewImage}>
                        <img src={section.image} ></img>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="input-field-variants">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Input Field Variants</h3>
              <p className={styles.sectionText}>
                Input fields have 4 major variants - Input, filled, password and error
              </p>
            </div>
          </section>
          <InputSpecsVariant />
          <div className={styles.divider}></div>
          <section className={styles.section} id="input-field-sizes">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Input Field Sizes</h3>
            </div>
          </section>
          <InputSpecsSize />
          <div className={styles.divider}></div>
          <section className={styles.section} id="input-field-states">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Input Field States</h3>
              <p className={styles.sectionText}>
                Input fields have 4 major variants - Input, filled, password and error
              </p>
            </div>
          </section>
          <InputSpecsStates />
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

export default Inputspecs;
