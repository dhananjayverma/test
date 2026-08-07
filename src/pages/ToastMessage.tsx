import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import ToastMessageOverview from "../inc/ToastMessageOverview";
import ToastMessageSpecification from "../inc/ToastMessageSpecification";
import ToastMessageAccessibility from "../inc/ToastMessageAccessibility";
import ToastMessageCode from "../inc/ToastMessageCode";
import Footer from "../components/Footer";
import styles from "./TypographyOverview.module.css";

const ToastMessagePage: FunctionComponent = () => {
  const tabs = ["Overview", "Specifications", "Accessibility", "Code", "Storybook"];
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
                  <div className={styles.chooseYourContext}>Foundation</div>
                </div>
                <div className={styles.buttonParent}>
                  <h2 className={styles.button}>Toast Message</h2>
                  <div className={styles.chooseYourContext2}>
                    A toast message is a temporary notification that provides users with brief feedback about an action, system event, or process without interrupting their workflow.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/toast-banner.svg"
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
              <ToastMessageOverview />
            )}
            {displayedTab === "Specifications" && (
              <ToastMessageSpecification />
            )}
            {displayedTab === "Accessibility" && (
              <ToastMessageAccessibility />
            )}
            {displayedTab === "Code" && (
              <div className={styles.codeSection}>
                <ToastMessageCode />
              </div>
            )}
            {displayedTab === "Storybook" && (
              <div className={`${styles.codeSection || ''} h-[450px] md:h-[600px] w-full max-w-full overflow-hidden p-0 md:p-5 box-border`}>
                <iframe src={`${import.meta.env.VITE_STORYBOOK_URL}?path=/story/hbk-toast-message--main-component&nav=0`} width="100%" height="100%" style={{ border: "1px solid #dfe9f2", borderRadius: "12px", background: "#fff" }} title="Storybook - Toast Message" />
              </div>
            )}
          </div>
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/checkbox" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Checkbox</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/splash-screen" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>Splash Screen</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default ToastMessagePage;