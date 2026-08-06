import { FunctionComponent, useState, useEffect } from "react";
import styles from "./ButtonAnatomy.module.css";

export type ContainerType = {
  className?: string;
  label?: string;
};

const buttonElements = [
  { id: 1, name: "Container", type: "Mandatory", description: "Background surface that holds the contents of button" },
  { id: 2, name: "Leading Icon", type: "Optional", description: "Supports element helping quick recognition" },
  { id: 3, name: "Label", type: "Mandatory", description: "Describes the action performed" },
  { id: 4, name: "Trailing Icon", type: "Optional", description: "Helps in setting up additional context" },
];

const buttonTypes = [
  {
    name: "Primary Button",
    description: "Primary buttons represent the most important action on a screen, using strong visual emphasis to drive user attention. They are used sparingly to highlight the main call-to-action and guide decision-making.",
    examples: ["Save", "Continue", "Confirm", "Submit"],
    label: "Label",
    icon: "placeholder.svg",
  },
  {
    name: "Secondary Button",
    description: "Secondary buttons support the primary action with less visual emphasis, offering alternative or supplementary options. They maintain visibility while ensuring the primary action remains dominant.",
    examples: ["Cancel", "Back", "Edit"],
    label: "Label",
    icon: "info-blue.svg",
  },
  {
    name: "Tertiary Button",
    description: "Tertiary buttons are low-emphasis actions, often styled minimally or as text to reduce visual weight. They are used for less critical interactions without distracting from primary tasks.",
    examples: ["Learn More", "Skip", "View Details"],
    label: "Label",
    icon: "info-blue.svg",
  },
  {
    name: "Hyperlinks",
    description: "Hyperlinks act as inline or standalone text-based actions, typically used for navigation or lightweight interactions. They blend within content while still being recognizable as interactive elements.",
    examples: ["View Terms", "Open Details", "Read More"],
    label: "Label",
    icon: "info-blue.svg",
  },
];

const navigationItems = [
  { id: "anatomy-of-a-button", label: "Anatomy of a Button" },
  { id: "types-of-buttons", label: "Types of Buttons" },
  { id: "best-practices", label: "Best practices" },
];

const ButtonAnatomy: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("anatomy-of-a-button");
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
          <section className={styles.section} id="anatomy-of-a-button">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Anatomy of a Button</h3>
              <p className={styles.sectionText}>
                Button anatomy follows a consistent design pattern with mandatory elements and optional elements to ensure clarity and flexibility across use cases.
              </p>
            </div>
            <div className={styles.previewCard}>
              <div className={styles.previewSurface}>
                <img src="/btn.svg" alt="Button Anatomy" className={styles.previewImage} />
              </div>
            </div>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Elements of a Button</h3>
              <div className={styles.tableWrap}>
                <div className={styles.tableHeader}>
                  <span className={styles.colNo}>S.No.</span>
                  <span className={styles.colElement}>Element</span>
                  <span className={styles.colType}>Element Type</span>
                  <span className={styles.colDesc}>Description</span>
                </div>
                {buttonElements.map((element) => (
                  <div key={element.id} className={styles.tableRow}>
                    <span className={styles.colNo}>{element.id}</span>
                    <span className={styles.colElement}>{element.name}</span>
                    <span className={styles.colType}>{element.type}</span>
                    <span className={styles.colDesc}>{element.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider} />
          <section className={styles.section} id="types-of-buttons">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Types of Buttons</h3>
              <p className={styles.sectionText}>
                Button types define different visual styles like primary, secondary, tertiary, hyperlink that helps guide the user actions. Each type has consistent behavior and varies in emphasis that helps create clear hierarchy and intuitive experience design.
              </p>
            </div>
            <div className={styles.typesSection}>
              {buttonTypes.map((type, idx) => (
                <div key={idx} className={styles.sectiontwo}>
                  <div className={styles.typeBlock}>
                    <h3 className={styles.typeName}>{type.name}</h3>
                    <p className={styles.typeDescription}>{type.description}</p>
                    <div className={styles.examplesList}>
                      {type.examples.map((example, i) => (
                        <span className={styles.exampleBadge} key={i}>
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.buttonSection}>
                    <div className={styles.buttonBox}>
                      <button className={styles.button} type="button" aria-label={type.label}>
                        <img className={styles.icon} alt="" src={type.icon} />
                        <span className={styles.label}>{type.label}</span>
                        <img className={styles.icon} alt="" src={type.icon} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Maintain clear hierarchy in actions through buttons</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use only one primary action in a section to define better hierarchy</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use the button based on importance and user flow ensuring consistency across similar actions</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  Don’t
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not overuse high emphasis button like primary CTA</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not mix different types of buttons inconsistently. This leads to cognitive load for the user.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <aside className={styles.sideNav} id="sideNavContainer">
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

export default ButtonAnatomy;
