import { FunctionComponent, useState } from "react";
import clsx from "clsx";
import ButtonVariants from "../components/ButtonVariants";
import BtnSpecsSizes from "../components/BtnSpecsSizes";
import BtnSpecsStates from "../components/BtnSpecsStates";
import styles from "./BtnSpecifications.module.css";

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
    "title": "Button - Layout and Spacing",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Horizontal", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Middle center" },
      { "title": "Vertical resizing", "value": "Fixed" },
      { "title": "Horizontal resizing", "value": "Hug"},
      { "title": "Item spacing", "value": "8", "style": "heighlight-text" },
      { "title": "Padding left", "value": "16", "style": "heighlight-text" },
      { "title": "Padding right", "value": "16", "style": "heighlight-text" },
    ],
    "image": "btn-1.svg",
  }
];

const navigationItems = [
  { id: "button-specification", label: "Button Specification" },
  { id: "button-variants", label: "Button Variants" },
  { id: "button-sizes", label: "Button Sizes" },
  { id: "button-states", label: "Button States" },
];

const BtnSpecifications: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("button-specification");
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
  return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section} id="button-specification">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Specification of a button</h3>
              <p className={styles.sectionText}>
                Specifications define the standardized properties, such as size, spacing, typography, and states to ensure consistency, usability, and accessibility across the interface. Its mandated to use these guidelines diligently.
              </p>
            </div>
            <div className={styles.cardList}>
              {specSections.map((section) => (
                <article key={section.title} className={styles.specCard}>
                  <div className={styles.infoColumn}>
                    <div className={styles.titleRow}>
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
          <section className={styles.section} id="button-variants">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Button Variants</h3>
              <p className={styles.sectionText}>
                Buttons are available in different variants / types that help guide visual hierarchy in layouts.
              </p>
            </div>
            <ButtonVariants />
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="button-sizes">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Button Sizes</h3>
              <p className={styles.sectionText}>Buttons are available in two different sizes - Small and Base Size. Use Small button for compact layouts and Base button for regular layouts.</p>
            </div>
            <BtnSpecsSizes />
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="button-states">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Button States</h3>
              <p className={styles.sectionText}>
                These are the different interaction stages of a button which provide a visual feedback to the user about their actions in the experience. 
              </p>
            </div>
            <BtnSpecsStates />
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

export default BtnSpecifications;
