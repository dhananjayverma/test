import { FunctionComponent } from "react";
import VisionPillar from "../components/VisionPillar";
import VisionGoal from "../components/VisionGoal";
import styles from "./OurvisionPage.module.css";


const OurVision: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <section className={styles.frameParent1}>
        <div className={styles.visionParent}>
            <p className={styles.threePillarsOf}>
                Three pillars of our design philosophy
            </p>
        </div>
        <VisionPillar />
      </section>
      <section className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameDiv}>
                <div className={styles.frameDiv}>
                  <h2 className={styles.aVisionPowered}>
                    A Vision powered by HBK’s core value
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.beTrueParent}>
                    <h3 className={styles.beTrue}>Be True</h3>
                    <div className={styles.weActWith}>
                      We act with integrity and transparency in everything we
                      do.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.beTrueParent}>
                    <h3 className={styles.beTrue}>Own It</h3>
                    <div className={styles.weActWith}>
                      We take responsibility and follow through on our promises,
                      ensuring consistent, high-quality outcomes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.beTrueParent}>
                    <h3 className={styles.beTrue}>Aim It</h3>
                    <div className={styles.weActWith}>
                      We push boundaries and strive for excellence in every
                      detail.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className={styles.frameMain}>
        <div className={styles.visionParent}>
            <h1 className={styles.vision}>
                Global Design System - Design Goal
            </h1>
        </div>
        <section className={styles.frameSection}>
          <VisionGoal
            premiumCustomerExperience="Premium Customer Experience"
            chooseYourContextToExplore="Consistent, cohesive experiences across every touchpoint that build trust and delight at scale. "
          />
          <VisionGoal
            frameDivBackgroundColor="#e6f4f8"
            frameDivBackgroundColor1="#f4f4f5"
            premiumCustomerExperience="Reduced Rework and Development Effort"
            chooseYourContextToExplore="Eliminate redundancy and rework; reusable components cut development cycles in half."
          />
        </section>
        <section className={styles.frameSection}>
          <VisionGoal
            frameDivBackgroundColor="#f4f4f5"
            frameDivBackgroundColor1="unset"
            premiumCustomerExperience="Easy to Find and Transparent"
            chooseYourContextToExplore="Single source of truth—every design decision, component, and guideline accessible to the entire team."
          />
          <VisionGoal
            frameDivBackgroundColor="#f4f4f5"
            frameDivBackgroundColor1="unset"
            premiumCustomerExperience="Faster Go to Market"
            chooseYourContextToExplore="Ship with confidence—pre-built components and patterns accelerate development from concept to launch."
          />
        </section>
      </main>
    </div>
  );
};

export default OurVision;