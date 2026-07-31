import { FunctionComponent, useState } from "react";
import clsx from "clsx";
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
    "title": "Toast Message",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Direction", "value": "Horizontal" },
                        {"title": "Alignment", "value": "Top left" },
                        {"title": "Vertical Resizing", "value": "Hug" },
                        {"title": "Horizontal Resizing", "value": "Fixed" },
                        {"title": "Width", "value": "320 px", "style": "heighlight-text" },
                        {"title": "Border Radius", "value": "8 px", "style": "heighlight-text" },
                        {"title": "Padding Left", "value": "16 px", "style": "heighlight-text" },
                        {"title": "Padding Right", "value": "16 px", "style": "heighlight-text" },
                        {"title": "Padding Top", "value": "20 px", "style": "heighlight-text" },
                        {"title": "Padding Bottom", "value": "20 px", "style": "heighlight-text" }
        ] }
    ],
    "image": "toast-1.svg",
  },
  {
    "title": "Text Container",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Direction", "value": "Vertical" },
                        {"title": "Alignment", "value": "Middle Left" },
                        {"title": "Vertical Resizing", "value": "Hug" },
                        {"title": "Horizontal Resizing", "value": "Fill Container" },
                        {"title": "Item Spacing", "value": "4 px", "style": "heighlight-text" },
        ] },
    ],
    "image": "toast-2.svg",
  },
  {
    "title": "Icon",
    "value": "",
    "attributes": [
      { "title": "Status Icon", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Size", "value": "20 x 20 px", "style": "heighlight-text" },
                        {"title": "Alignment", "value": "Top Left" }
        ] },
      { "title": "Close Icon", "value": "", "image": "Type-icon1.svg",
        "attributes": [{"title": "Size", "value": "24 x 24 px", "style": "heighlight-text" },
                        {"title": "Alignment", "value": "Top Right" },
                        {"title": "Visibility", "value": "Optional" }] },
    ],
    "image": "toast-3.svg",
  }
];

const navigationItems = [
  { id: "toast-message-specification", label: "Toast Message Specification" },
  { id: "toast-message-layout-and-spacing", label: "Toast Message Layout and Spacing" },
];

const ToastMessageSpecification: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("toast-message-specification");
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
          <section className={styles.section} id="toast-message-specification">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Toast Message Specification</h3>
              <p className={styles.sectionText}>
                Toast message specifications define the component properties, layout, spacing, visual styles, and behavior to ensure consistent, accessible, and non-intrusive notifications across the product. These guidelines help maintain clarity while delivering timely feedback to users.
              </p>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="toast-message-layout-and-spacing">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Toast Message Layout and Spacing</h3>
              <p className={styles.sectionText}>
                Toast messages follow a consistent layout to improve readability and ensure important information is communicated clearly.
              </p>
            </div>
            <div className={styles.cardList}>
              {specSections.map((section) => (
                <article key={section.title} className={styles.specCard}>
                  <div className={styles.infoColumn}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.headingTitle}>{section.title}</h3>
                    </div>
                    <div className={styles.attributeList}>
                      {section.attributes?.map((attribute) => (
                        <div className={styles.listItem}>
                          <div key={attribute.title} className={styles.titleRow}>
                            <span className={styles.accentDot} ><img src={attribute.image}></img></span>
                            <h3 className={styles.subTitle}>{attribute.title}</h3>
                          </div>

                          {attribute.attributes?.map((attr) => (
                            <div
                              key={attr.title}
                              className={styles.attributeRow}
                            >
                              <span className={styles.attributeName}>
                                {attr.title}
                              </span>

                              <div className={styles.attributeValue}>
                                <span
                                  className={clsx(
                                    attr.style &&
                                      styles[attr.style as keyof typeof styles]
                                  )}
                                >
                                  {attr.value}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.previewColumn}>
                    <div className={styles.previewSurface}>
                      <div className={clsx(styles.previewImage, styles.height300)}>
                        <img src={section.image} ></img>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
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

export default ToastMessageSpecification;
