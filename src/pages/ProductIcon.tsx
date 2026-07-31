import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import ProductIconIntorducation from "../inc/ProductIconIntorducation";
import Footer from "../components/Footer";
import styles from "./TypographyOverview.module.css";


const ProductIconPage: FunctionComponent = () => {
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
                  <h2 className={styles.button}>Product Icon</h2>
                  <div className={styles.chooseYourContext2}>
                    Product icons create visual recognition and help users quickly identify products across experiences.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/Typo.png"
                />
              </div>
            </div>
          </section>
            <ProductIconIntorducation />
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/spacing" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Spacing</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/button" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>Button</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default ProductIconPage;