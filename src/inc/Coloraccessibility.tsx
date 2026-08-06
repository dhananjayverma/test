import { FunctionComponent, useState, useEffect } from "react";
import styles from "./Coloraccessibility.module.css";

export type ContainerType = {
  className?: string;
};

const contrastRows = [
  {
    label: "Text and Icon on Brand color background",
    preview: "/frame-squire.svg",
    whiteText: "5.46:1",
    whiteIcon: "5.46:1",
    darkText: "3.42:1",
    darkIcon: "3.42:1",
  }
];
const contrast2Rows = [
  {
    label: "Brand color on Light Backgrounds",
    preview: "/frame-Aa.svg",
    whiteText: "5.46:1",
    whiteIcon: "5.46:1",
    darkText: "4.97:1",
  },
  {
    label: "Brand Color Icon on Light Background",
    preview: "/frame-u.svg",
    whiteText: "5.46:1",
    whiteIcon: "5.23:1",
    darkText: "4.97:1",
  },
];

const navigationItems = [
  { id: "accessibility", label: "Accessibility" },
  { id: "color-contrast", label: "Color contrast" },
  { id: "color-blindness-test", label: "Color Blindness Test " },
];

const Coloraccessibility: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("accessibility");
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
          <section className={styles.section} id="accessibility">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Accessibility</h2>
              <p className={styles.sectionText}>As Brand color, the HBK Product Strong Blue color should comply to the color accessibility standards. While using this color, we should ensure: </p>
              <ul className={styles.list}>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> All color combinations should meet WCAG 2.1 AA Web Standards as minimum </li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Always check accessibility when using different color combinations</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Always pair text, icons or UI elements to communicate the different states. Don’t only rely on colors.</li>
              </ul>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="color-contrast">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Color contrast</h2>
              <p className={styles.sectionText}>HBK Product Strong Blue color ensures color contrast ratio &gt; 4.5: 1 for all Normal and Large Text Check the results color contrast result below:</p>
            </div>
            <div className={styles.tableCard}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Accessibility Type</div>
                <div className={styles.headerCell}>Preview</div>
                <div className={styles.headerCell}>White Text (#FFFFFF)</div>
                <div className={styles.headerCell}>White Icon (#FFFFFF)</div>
                <div className={styles.headerCell}>Dark Text (#121212)</div>
                <div className={styles.headerCell}>Dark Icon (#121212)</div>
              </div>
              {contrastRows.map((row) => (
                <div className={styles.tableRow} key={row.label}>
                  <div className={styles.rowLabel}>{row.label}</div>
                  <div className={styles.previewCell}>
                    <div className={styles.previewSquare} />
                  </div>
                  <div className={styles.resultCell}>
                    <span className={styles.passBadge}>{row.whiteText}</span>
                  </div>
                  <div className={styles.resultCell}>
                    <span className={styles.passBadge}>{row.whiteIcon}</span>
                  </div>
                  <div className={styles.resultCell}>
                    <span className={styles.failBadge}>{row.darkText}</span>
                  </div>
                  <div className={styles.resultCell}>
                    <span className={styles.passBadge}>{row.darkIcon}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={styles.passBadge}>Pass</span>
                <span>meets WCAG threshold</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.failBadge}>Fail</span>
                <span>below threshold (Text ≥4.5:1, Icon/UI ≥3:1)</span>
              </div>
            </div>
            <div className={styles.tableTypeCard}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Accessibility Type</div>
                <div className={styles.headerCell}>Preview</div>
                <div className={styles.headerCell}>On White (#FFFFFF)</div>
                <div className={styles.headerCell}>On Light Gray (#FAFAFA)</div>
                <div className={styles.headerCell}>On Light Gray 2 (#F4F4F5)</div>
              </div>
              {contrast2Rows.map((row) => (
                <div className={styles.tableRow} key={row.label}>
                  <div className={styles.rowLabel}>{row.label}</div>
                  <div className={styles.previewCell}>
                    <img src={row.preview} alt={row.label} />
                  </div>
                  <div className={styles.resultCell}>
                    <span className={styles.passBadge}>{row.whiteText}</span>
                  </div>
                  <div className={styles.resultCell}>
                    <span className={styles.passBadge}>{row.whiteIcon}</span>
                  </div>
                  <div className={styles.resultCell}>
                    <span className={styles.passBadge}>{row.darkText}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={styles.passBadge}>Pass</span>
                <span>meets WCAG threshold</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.failBadge}>Fail</span>
                <span>below threshold</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.largeBadge}>Large</span>
                <span>&ge;3:1 large text only</span>
              </div>
            </div>
          </section>
          <div className={styles.divider}></div>
          <section className={styles.section} id="color-blindness-test">
            <div className={styles.sectionContentSplit}>
              <div className={styles.textBlock}>
                <h3 className={styles.subTitle}>Color Blindness Test</h3>
                <p className={styles.sectionText}>
                  To comply with our specially-abled users, the HBK Product Strong Blue color is also tested for Color Blindness Test. 
                </p>
                <p className={styles.sectionText}>
                  We have studied all the different color blindness results to ensure the color is passing accessibility standards 
                </p>
              </div>
              <div className={styles.previewCard}>
                <div className={styles.imgWrapper}>
                  <img src="./color-test.svg" alt="Color blindness preview" />
                </div>
                <p>A quick preview of Color Blindness test for HBK Product Strong Blue color</p>
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

export default Coloraccessibility;
