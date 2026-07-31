import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import Footer from "../components/Footer";
import clsx from "clsx";
import styles from "./ColorOverview.module.css";
import InputOverview from "../inc/Inputoverview";
import Inputspecs from "../inc/Inputspecs";
import InputAccessibility from "../inc/InputAccessibility";
import Inputcode from "../inc/Inputcode";

const InputFieldOverview: FunctionComponent = () => {
  const tabs = ["Overview", "Specifications", "Accessibility", "Code"];
  const [activeTab, setActiveTab] = useState("Overview");
  const [displayedTab, setDisplayedTab] = useState("Overview");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setDisplayedTab(tab);
      window.scrollTo(0, 0);
      setIsVisible(true);
    }, 200);
  };

    return (
    <div className={styles.buttonOverview}>
      <Header hBKNewLogo1="/HBK-New-Logo-1.svg" />
      <main className={styles.bodyLayout}>
        <SideNavigation />
        <section className={styles.mainContentArea}>
          <section className={styles.mainContentAreaInner}>
            <div className={styles.frameContainer}>
              <div className={styles.frameParent2}>
                <div className={styles.chooseYourContextToExploreWrapper}>
                  <div className={styles.chooseYourContext}>Components</div>
                </div>
                <div className={styles.buttonParent}>
                  <h2 className={styles.button}>Input Field</h2>
                  <div className={styles.chooseYourContext2}>
                    Input fields enable users to share information clearly and accurately. They integrate structure, feedback, and validation for a smooth data-entry experience across digital platforms.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/Input.png"
                />
              </div>
            </div>
          </section>
          <div className={styles.navButtonHorizontalParent}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={clsx(
                  styles.navButtonHorizontal,
                  activeTab === tab && styles.navTabButtonActive
                )}
              >
                <div className={styles.frame3}>
                  <div className={styles.textLabel}>{tab}</div>
                </div>
              </button>
            ))}
          </div>
          <div className={clsx(styles.tabContent, isVisible ? styles.tabVisible : styles.tabHidden)}>
            {displayedTab === "Overview" && (
              <InputOverview />
            )}
            {displayedTab === "Specifications" && (
              <div className={styles.specsSection}>
                <Inputspecs />
              </div>
            )}
            {displayedTab === "Accessibility" && (
              <div className={styles.accessibilitySection}>
                <InputAccessibility />
              </div>
            )}
            {displayedTab === "Code" && (
              <div className={styles.codeSection}>
                <Inputcode />
              </div>
            )}
          </div>
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/button" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Button</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/checkbox" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>Checkbox</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default InputFieldOverview;