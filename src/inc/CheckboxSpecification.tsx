import { FunctionComponent, useState } from "react";
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
  image?: string;
};

const specSections: SpecSection[] = [
  {
    "title": "Checkbox",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Vertical", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Middle center" },
      { "title": "Vertical resizing", "value": "Fixed" },
      { "title": "Horizontal resizing", "value": "Fixed"},
    ],
    "image": "checkbox-1.svg",
  },
  {
    "title": "Checkbox with Label",
    "value": "",
    "attributes": [
      { "title": "Direction", "value": "Horizontal", "style": "heighlight-text" },
      { "title": "Alignment", "value": "Middle center" },
      { "title": "Vertical resizing", "value": "Fixed" },
      { "title": "Horizontal resizing", "value": "Hug"},
      { "title": "Item spacing", "value": "0", "style": "heighlight-text" },
    ],
    "image": "checkbox-2.svg",
  },
];
const stateSections: SpecSection[] = [
  {
    "title": "Default State",
    "value": "",
    "attributes": [
      { "title": "Checkbox", "value": "",
        "attributes": [{"title": "Background color", "value": "#FAFAFA", "style": "heighlight-text" },
            {"title": "Border color", "value": "#71717A", "style": "heighlight-text" },
            {"title": "Border radius", "value": "4", "style": "heighlight-text" }
        ] },
    ],
    "image": "checkbox-4.svg",
  },
  {
    "title": "Hover State",
    "value": "",
    "attributes": [
      { "title": "Checkbox", "value": "",
        "attributes": [{"title": "Background color", "value": "#F4F4F5", "style": "heighlight-text" },
            {"title": "Border color", "value": "#80C9DE", "style": "heighlight-text" },
            {"title": "Border radius", "value": "4", "style": "heighlight-text" }
        ] },
    ],
    "image": "checkbox-5.svg",
  },
  {
    "title": "Focus State",
    "value": "",
    "attributes": [
      { "title": "Checkbox", "value": "",
        "attributes": [{"title": "Background color", "value": "#F4F4F5", "style": "heighlight-text" },
            {"title": "Border color", "value": "#71717A", "style": "heighlight-text" },
            {"title": "Border ring color", "value": "#80C9DE", "style": "heighlight-text" },
            {"title": "Border radius", "value": "6", "style": "heighlight-text" }
        ] },
    ],
    "image": "checkbox-6.svg",
  },
  {
    "title": "Pressed State",
    "value": "",
    "attributes": [
      { "title": "Checkbox", "value": "",
        "attributes": [{"title": "Background color", "value": "#005C78", "style": "heighlight-text" },
            {"title": "Border color", "value": "#FFFFFF", "style": "heighlight-text" },
            {"title": "Border radius", "value": "4", "style": "heighlight-text" }
        ] },
    ],
    "image": "checkbox-7.svg",
  },
  {
    "title": "Disabled State",
    "value": "",
    "attributes": [
      { "title": "Checkbox", "value": "",
        "attributes": [{"title": "Background color", "value": "#F4F4F5", "style": "heighlight-text" },
            {"title": "Border color", "value": "#121212", "style": "heighlight-text" },
            {"title": "Opacity", "value": "24%", "style": "heighlight-text" },
            {"title": "Border radius", "value": "4", "style": "heighlight-text" }
        ] },
    ],
    "image": "checkbox-8.svg",
  },
];

const navigationItems = [
  { id: "specification-of-checkbox", label: "Specification of Checkbox" },
  { id: "layout-and-spacing", label: "Layout and spacing" },
  { id: "checkbox-states", label: "Checkbox States" },
];

const Checkboxspecs: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("specification-of-checkbox");
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
          <section className={styles.section} id="specification-of-checkbox">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Specification of Checkbox</h3>
              <p className={styles.sectionText}>
                Specifications define the standardized properties of checkboxes, including size, spacing, states, behavior, and interaction patterns to ensure consistency, usability, and accessibility across the interface. It is mandatory to follow these guidelines consistently across all HBK products.
              </p>
            </div>
            <div className={styles.cardList}>
              <article className={styles.specCard}>
                <div className={styles.checkRow}>
                  <div className={styles.checkColumn}>
                    <div className={styles.number}>1</div>
                    <div className={styles.infoColumn}>
                      <div className={styles.titleRow}>
                        <span className={styles.accentDot} ><img src="./Type-icon.svg" /></span>
                        <h3 className={styles.subTitle}>Checkbox</h3>
                      </div>
                      <div className={styles.attributeItem}>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Height: 48</span></div>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Width: 48</span></div>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Aspect ratio: 1:1</span></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkColumn}>
                    <div className={styles.number}>2</div>
                    <div className={styles.infoColumn}>
                      <div className={styles.titleRow}>
                        <span className={styles.accentDot} ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H17.998V15H2V5Z" stroke="#6B6B6B"/></svg></span>
                        <h3 className={styles.subTitle}>Checkbox</h3>
                      </div>
                      <div className={styles.attributeItem}>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Height: 20</span></div>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Width: 20</span></div>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Border weight: 1</span></div>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Border radius: 4</span></div>
                        <div className={styles.attributeRow}><span className={styles.attributeName}>Aspect ratio: 1:1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.previewColumn}>
                  <div className={styles.previewSurface}>
                    <div className={styles.previewImage}>
                      <img src="checkbox.svg" ></img>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="layout-and-spacing">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Layout and spacing</h3>
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
          <section className={styles.section} id="checkbox-states">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Checkbox States</h3>
              <p className={styles.sectionText}>
                Checkboxes can exhibit various states: default, hover, focus, pressed, and disabled. Each state indicates the current interaction or status of the checkbox.
              </p>
            </div>
            <div className={styles.cardList}>
              {stateSections.map((section) => (
                <article key={section.title} className={styles.specCard}>
                  <div className={styles.infoColumn}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.headingTitle}>{section.title}</h3>
                    </div>
                    <div className={styles.attributeList}>
                      {section.attributes?.map((attribute) => (
                        <div className={styles.listItem}>
                          <div key={attribute.title} className={styles.titleRow}>
                            <span className={styles.accentDot} ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H17.998V15H2V5Z" stroke="#6B6B6B"/></svg></span>
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
                      <div className={styles.previewImage}>
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

export default Checkboxspecs;
