import { FunctionComponent, useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./TypographyOverview.module.css";

export type ContainerType = {
  className?: string;
};

const labelRows = [
  { id: "1", name: "Sign In Screen", value: "Parent container for the authentication experience." },
  { id: "2", name: "Image Container", value: "Displays illustrations, promotional content, or supporting visuals." },
  { id: "3", name: "Right Container", value: "Contains the authentication form and related actions." },
  { id: "4", name: "Logo", value: "Brand identifier displayed prominently." },
  { id: "5", name: "Heading", value: "Primary message communicating the screen purpose." },
  { id: "6", name: "Subheading", value: "Supporting information or instructions." },
  { id: "7", name: "Form Container", value: "Holds authentication fields and actions." },
  { id: "8", name: "Input Fields", value: "Collect user credentials such as email and password." },
  { id: "9", name: "Sign In Button", value: "Primary action to authenticate users." },
  { id: "10", name: "Forgot Password Link", value: "Recovery option for users who cannot access their account." },
  { id: "11", name: "Register Button", value: "Secondary action for account creation." },
  { id: "12", name: "Additional Help Text", value: "Optional guidance or support information." },
];

const navigationItems = [
  { id: "introduction", label: "Introduction" },
  { id: "best-practices", label: "Best Practices" },
];

const SigninIntroducation: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("introduction");
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
          <section className={styles.section} id="introduction">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Introduction</h3>
              <p className={styles.sectionText}>
                The Sign In Screen serves as the primary entry point for authenticated users. It enables users to access protected areas of a product by providing their credentials while maintaining security and ease of use.</p>
              <p className={styles.sectionText}>The template includes support for branding, headings, form fields, password recovery, registration links, and optional supporting content. It is designed to provide a consistent login experience across all HBK applications.
              </p>
            </div>
            <div className={styles.anatomyImageContainer}>
              <img src="./sign-in.svg" alt="Sign In Screen" className={styles.anatomyImage} />
            </div>
          </section>
          <section className={styles.section} id="principles">
            <div className={styles.tableSection}>
              <div className={styles.table}>
                <div className={styles.tablesHeader}>
                  <span className={styles.colNo}>No.</span>
                  <span className={styles.colGuideline}>Element</span>
                  <span className={styles.colDescription}>Description</span>
                </div>
                {labelRows.map((row) => (
                  <div className={styles.tablesRow} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.name}</span>
                    <span className={styles.colDescription}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className={styles.section} id="maintain-consistency">
            <div className={styles.sectionHeader}>
              <div className={clsx(styles.dosDontsGrid, styles.dosDontsStyle)}>
                <div className={styles.dosCard}>
                  <div className={styles.cardTitle}>
                    <span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> When to use
                  </div>
                  <ul className={styles.list}>
                    <li>User authentication</li>
                    <li>Secure account access</li>
                    <li>Enterprise applications</li>
                    <li>Customer portals</li>
                    <li>Employee and partner platforms</li>
                  </ul>
                </div>
                <div className={styles.dontsCard}>
                  <div className={styles.cardTitle}>
                    <span className={styles.bullet}><img alt="red-close" src="/red-close.svg" /></span> When not to use
                  </div>
                  <ul className={styles.list}>
                    <li>Guest access experiences</li>
                    <li>One-time confirmation flows</li>
                    <li>Simple newsletter signups</li>
                    <li>Non-authenticated public content</li>
                  </ul>
                </div>
              </div>
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
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Display clear branding and screen purpose.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Keep the authentication form visually prominent.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Use concise headings and supporting text.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Provide password recovery options.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Maintain consistent spacing and alignment.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Support responsive layouts across devices.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Clearly differentiate primary and secondary actions.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Keep the number of required fields to a minimum.</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  Don’t
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg" /></span> Overload the screen with marketing content.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg" /></span> Require unnecessary information during sign in.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg" /></span> Hide recovery or registration options.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg" /></span> Place multiple competing primary actions.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg" /></span> Use unclear button labels.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg" /></span> Distract users from the authentication task.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <aside className={styles.sideNav} id="sideNavContainer">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              id={`navItem-${item.id}`} className={`${styles.navItem} ${activeNav === item.id ? styles.navItemActive : ""
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

export default SigninIntroducation;