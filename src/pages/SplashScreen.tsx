import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import SplashScreenPage from "../inc/SplashScreenPage";
import Footer from "../components/Footer";
import styles from "./TypographyOverview.module.css";


const SplashScreen: FunctionComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                  <h2 className={styles.button}>Splash Screen</h2>
                  <div className={styles.chooseYourContext2}>
                    Splash screens reinforce product identity and provide a consistent experience while applications initialize.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/splash-screen.svg"
                />
              </div>
            </div>
          </section>
          <SplashScreenPage />
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/toast-message" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Toast Message</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/sign-in" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>Sign In</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default SplashScreen;