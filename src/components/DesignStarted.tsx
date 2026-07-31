import { FunctionComponent } from "react";
import styles from "./DesignStarted.module.css";

const DesignStarted: FunctionComponent = () => {
  return (      
      <section className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameDiv}>
                <div className={styles.frameDiv}>
                  <h2 className={styles.aVisionPowered}>
                    How to get started
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
                    <div className={styles.listNo}>1</div>
                    <h3 className={styles.beTrue}>Explore the system</h3>
                    <div className={styles.weActWith}>
                      Browse the components, patterns and guidelines
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.beTrueParent}>
                    <div className={styles.listNo}>2</div>
                    <h3 className={styles.beTrue}>Use the Tools</h3>
                    <div className={styles.weActWith}>
                      Access design kits and development resources to build faster
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.beTrueParent}>
                    <div className={styles.listNo}>3</div>
                    <h3 className={styles.beTrue}>Contribute and improve</h3>
                    <div className={styles.weActWith}>
                      HBK design grows with feedback. If something’s missing, let us kow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default DesignStarted;