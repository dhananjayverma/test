import { FunctionComponent, useState } from "react";
import InputOverIntro from "../components/InputOverIntro";
import InputOverCard from "../components/InputOverCard";
import styles from "./Inputoverview.module.css";

export type ContainerType = {
  className?: string;
};

const elements = [
  { id: 1, name: "Input Field", type: "Mandatory", description: "Parent component" },
  { id: 2, name: "Label", type: "Optional", description: "Identifies the field" },
  { id: 3, name: "Label Icon", type: "Optional", description: "Additional information" },
  { id: 4, name: "Input Container", type: "Mandatory", description: "Text area entry" },
  { id: 5, name: "Leading Icon", type: "Optional", description: "Contextual icon" },
  { id: 6, name: "Placeholder Text", type: "Mandatory", description: "Expected input hint" },
  { id: 7, name: "Trailing Icon", type: "Optional", description: "Supporting action" },
  { id: 8, name: "Validation Icon", type: "Optional", description: "Feedback state" },
  { id: 9, name: "Validation Text", type: "Optional", description: "Guidance or error text" },
  { id: 10, name: "Character Count", type: "Optional", description: "Length guidance" },
];


const navigationItems = [
  { id: "anatomy-of-input-field", label: "Anatomy of Input Field" },
  { id: "types-of-input-fields", label: "Types of Input Fields" },
  { id: "best-practices", label: "Best practices" },
];

const InputOverview: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("anatomy-of-input-field");
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
          <section className={styles.section} id="anatomy-of-input-field">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Anatomy of Input Field</h3>
              <p className={styles.sectionText}>
                Input fields allow users to enter, edit, and review text-based information. They support various input types, validation states, supporting text, and optional icons to improve usability and guidance.
              </p>
            </div>
            <InputOverIntro />
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Elements of Input Fields</h3>
              <div className={styles.tableWrap}>
                <div className={styles.tableHeader}>
                  <span className={styles.colNo}>S.No.</span>
                  <span className={styles.colName}>Element</span>
                  <span className={styles.colType}>Element Type</span>
                  <span className={styles.colDesc}>Description</span>
                </div>
                {elements.map((element) => (
                  <div key={element.id} className={styles.tableRow}>
                    <span className={styles.colNo}>{element.id}</span>
                    <span className={styles.colName}>{element.name}</span>
                    <span className={styles.colType}>{element.type}</span>
                    <span className={styles.colDesc}>{element.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider} />
          <section className={styles.section} id="types-of-input-fields">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Types of Input Fields</h3>
              <p className={styles.sectionText}>
                Input field types establish various visual styles such as text, password, email, and number, which assist in directing user interactions. Each type maintains a consistent function and differs in prominence, contributing to a clear hierarchy and an intuitive design experience.
              </p>
            </div>
            <InputOverCard />
          </section>
          <div className={styles.divider} />
          <section className={styles.section} id="best-practices">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Best practices</h3>
            </div>
            <div className={styles.dosDontsGrid}>
              <div className={styles.dosCard}>
                <div className={styles.cardTitle}>
                  Do
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use clear labels to describe what information is required.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Provide placeholders or hints for better guidance.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Group related fields logically for better flow.</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  Don’t
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not rely only on placeholders as labels (they disappear).</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not break the design tokens in any caseDo not use vague error messages like “Invalid input.”</li>
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

export default InputOverview;