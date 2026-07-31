import { FunctionComponent, useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import Footer from "../components/Footer";
import clsx from "clsx";
import styles from "./ColorProductGrayBlue.module.css";
import ColorGrayOver from "../inc/ColorGrayOverview";
import ColorGrayPalettes from "../inc/ColorGrayPalettes";
import ColorGrayaccessibility from "../inc/ColorGrayAccessibility";
import ColorGrayCode from "../inc/ColorGraycode";


const ColorProductGrayBlue: FunctionComponent = () => {
    const tabs = ["Overview", "Color Palette", "Accessibility", "Code"];
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
                  <h2 className={styles.button}>Color - Product Grey Blue</h2>
                  <div className={styles.chooseYourContext2}>
                    HBK’s Product Grey Blue balances innovation, virtual modeling, engineering excellence, and performance. 
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/gray-blue-banner.svg"
                />
              </div>
            </div>
          </section>
          <div className={styles.navButtonHorizontalParent}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); window.scrollTo(0, 0); }}
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
          <div className={styles.tabContent}>
            {activeTab === "Overview" && (
              <ColorGrayOver />
            )}
            {activeTab === "Color Palette" && (
              <div className={styles.colorPaletteSection}>
                <ColorGrayPalettes />
              </div>
            )}
            {activeTab === "Accessibility" && (
              <div className={styles.accessibilitySection}>
                <ColorGrayaccessibility />
              </div>
            )}
            {activeTab === "Code" && (
              <div className={styles.codeSection}>
                <ColorGrayCode />
              </div>
            )}
          </div>
          <div className={styles.footerUpper}>
            <div className={styles.actionButton}>
              <Link to="/color-product-teal-blue" className={styles.btnLink}>
                <div className={styles.actionTextBtn}><img src="./left-arrow.svg" alt="Previous" /> Previous</div>
                <span className={styles.actionNameBtn}>Product Teal Blue</span>
              </Link>
            </div>
            <div className={styles.actionButton}>
              <Link to="/color-product-dark-blue" className={styles.btnLink}>
                <div className={styles.actionTextBtn}>Up Next <img src="./right-arrow.svg" alt="Next" /></div>
                <span className={styles.actionNameBtn}>Product Dark Blue</span>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default ColorProductGrayBlue;