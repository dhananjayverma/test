import { FunctionComponent, useState, useEffect } from "react"; 
import { Link } from "react-router";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import Footer from "../components/Footer";
import Colormain from "../components/ColorMainPage";
import styles from "./ColorOverview.module.css";


const ColorOverview: FunctionComponent = () => {
    const tabs = ["Overview", "Color Palette", "Color Usage", "Accessibility", "Code"];
  const [activeTab, setActiveTab] = useState("Overview");

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
                  <h2 className={styles.button}>Color</h2>
                  <div className={styles.chooseYourContext2}>
                    The colour palette enhances HBK’s unique aesthetic, reflecting a modern and evolving identity. It balances humanity and technology, with colours that harmonize with nature while shining in the digital realm.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/color-banner.svg"
                />
              </div>
            </div>
          </section>
          <Colormain />
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Color System</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/color-product-strong-blue" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>Product Strong Blue</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default ColorOverview;