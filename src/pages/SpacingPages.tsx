import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import Footer from "../components/Footer";
import SpacingIntroducation from "../inc/SpacingIntroducation";
import styles from "./TypographyOverview.module.css";


const SpacingPage: FunctionComponent = () => {
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
                  <h2 className={styles.button}>Spacing</h2>
                  <div className={styles.chooseYourContext2}>
                    Spacing turns layout choices into reusable tokens, boosting consistency, visual hierarchy, responsiveness, and scalability across platforms.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/space-banner.svg"
                />
              </div>
            </div>
          </section>
          <SpacingIntroducation />
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/typography" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Typography</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/product-icon" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>Iconography</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default SpacingPage;