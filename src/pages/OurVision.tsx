import { FunctionComponent } from "react";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import Footer from "../components/Footer";
import styles from "./OurVision.module.css";
import VisionPage from "../inc/OurvisionPage";


const OurVision: FunctionComponent = () => {
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
                  <div className={styles.chooseYourContext}>Get Started</div>
                </div>
                <div className={styles.buttonParent}>
                  <h2 className={styles.button}>Vision</h2>
                  <div className={styles.chooseYourContext2}>
                    The north star principles that align our design decisions and drive consistent, intentional experiences
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/campos.svg"
                />
              </div>
            </div>
          </section>
          <VisionPage />
          <section className={styles.frameParent8}>
            <div className={styles.frameParent9}>
              <div className={styles.frameWrapper10}>
                <div className={styles.contributeToUsParent}>
                  <h2 className={styles.contributeToUs}>Contribute to us</h2>
                </div>
              </div>
              <div className={styles.chooseYourContextContainer2}>
                <p
                  className={styles.weWouldLove}
                >{`We would love to hear your thoughts and suggestions on Global Design System. `}</p>
                <p className={styles.theSystemCombines}>
                  Feel free to reach out to the core team via email or write a post on our Teams channel.
                </p>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <button className={styles.frameWrapper13}>
                <div className={styles.caretrightParent4}>
                  <img
                    className={styles.caretrightIcon7}
                    alt=""
                    src="/CaretRight.svg"
                  />
                  <div className={styles.emailUs}>Email Us</div>
                </div>
              </button>
              <button className={styles.frameWrapper14}>
                <div className={styles.caretrightParent5}>
                  <img
                    className={styles.caretrightIcon7}
                    alt=""
                    src="/CaretRight.svg"
                  />
                  <div className={styles.joinOurTeams}>
                    Join our Teams Channel
                  </div>
                </div>
              </button>
            </div>
          </section>
          <Footer />
        </section>
      </main>
    </div>
    );
};
export default OurVision;