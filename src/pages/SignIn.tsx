import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import SignInOverviewpage from "../inc/SignInOverview";
import SigninSpecifications from "../inc/SigninSpecifications";
import SigninCode from "../inc/SigninCode";
import Footer from "../components/Footer";
import styles from "./TypographyOverview.module.css";

const SignIn: FunctionComponent = () => {
  const tabs = ["Overview", "Specifications", "Code"];
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
                  <div className={styles.chooseYourContext}>Patterns</div>
                </div>
                <div className={styles.buttonParent}>
                  <h2 className={styles.button}>Sign-In</h2>
                  <div className={styles.chooseYourContext2}>
                    Sign-in is the process that allows registered users to securely access their accounts using verified credentials.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/signin-banner.svg"
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
              <SignInOverviewpage />
            )}
            {displayedTab === "Specifications" && (
              <SigninSpecifications />
            )}
            {displayedTab === "Code" && (
              <SigninCode />
            )}
          </div>
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/splash-screen" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Splash Screen</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>---</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default SignIn;