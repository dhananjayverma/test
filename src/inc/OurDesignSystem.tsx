import { FunctionComponent } from "react";
import styles from "./OurDesignSystem.module.css";

export type Frame2131329411Type = {
  className?: string;
};

const OurDesignSystem: FunctionComponent<Frame2131329411Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.designSystemWrapper}>
            <h1 className={styles.designSystem}>Design System</h1>
          </div>
        </div>
      </div>
      <section className={styles.cardParent}>
        <div className={styles.card}>
          <div className={styles.topContainer}>
            <div className={styles.content}>
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/atom.png"
              />
              <h2 className={styles.atom}>ATOM</h2>
              <div className={styles.globalElements}>Foundations</div>
              <div className={styles.foundationalStylesIncluding}>
                Foundational styles including colors, typography, grids, and
                spacing, maintained with version numbers to ensure consistency
                across all components.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topContainer}>
            <div className={styles.content}>
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/molecules.png"
              />
              <h2 className={styles.atom}>MOLECULES</h2>
              <div className={styles.globalElements}>Components</div>
              <div className={styles.foundationalStylesIncluding}>
                Comprehensive library of standardized components and layouts,
                maintained with version numbers to enable consistent, and
                accessible product design.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topContainer}>
            <div className={styles.content}>
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/organisms.png"
              />
              <h2 className={styles.atom}>ORGANISMS</h2>
              <div className={styles.globalElements}>Complex Patterns</div>
              <div className={styles.foundationalStylesIncluding}>
                Comprehensive library of standardized components and layouts,
                maintained with version numbers to enable consistent, and
                accessible product design.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topContainer}>
            <div className={styles.content}>
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/template.png"
              />
              <h2 className={styles.atom}>LAYOUTS</h2>
              <div className={styles.globalElements}>Template</div>
              <div className={styles.foundationalStylesIncluding}>
                Comprehensive library of reusable page templates and layouts,
                versioned to ensure consistent, scalable, and accessible user
                experiences.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.linkedIcon}>
          <div className={styles.linked}></div>
        </div>
      </section>
    </div>
  );
};

export default OurDesignSystem;
