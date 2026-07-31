import { FunctionComponent } from "react";
import styles from "./DesignTeams.module.css";

const DesignTeams: FunctionComponent = () => {
  return (
      <section className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/component_library.svg"
            />
            <div className={styles.componentLibraryParent}>
              <h3 className={styles.componentLibrary}>Component library</h3>
              <div className={styles.preBuiltCustomizableUi}>
                Pre-built, customizable UI components that align with HBK
                product standards.
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/component.svg"
            />
            <div className={styles.componentLibraryParent}>
              <h3 className={styles.componentLibrary}>Design guidelines</h3>
              <div className={styles.preBuiltCustomizableUi}>
                Best practices and usage recom-mendations to guide the creation
                of clear, user-friendly interfaces.
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/brand.svg"
            />
            <div className={styles.componentLibraryParent}>
              <h3 className={styles.componentLibrary}>Brand assets</h3>
              <div className={styles.preBuiltCustomizableUi}>
                Logos, icons, colors, and typography that reflect HBK’s visual
                identity.
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/code_resources.svg"
            />
            <div className={styles.componentLibraryParent}>
              <h3 className={styles.componentLibrary}>Code resources</h3>
              <div className={styles.preBuiltCustomizableUi}>
                Developer documentation and code snippets to bring the design
                system to life.
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default DesignTeams;
