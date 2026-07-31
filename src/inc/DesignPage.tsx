import { FunctionComponent } from "react";
import DesignTeams from "../components/DesignTeams";
import DesignResource from "../components/DesignResource";
import DesignStarted from "../components/DesignStarted";
import styles from "./DesignPage.module.css";

const DesignPage: FunctionComponent = () => {
  return (
    <div className={styles.sectionParent}>
      <section className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.builtForTeamsParent}>
            <h1 className={styles.builtForTeams}>Built for Teams</h1>
            <div className={styles.hbkGlobalDesign}>
              HBK Global Design System is easy to follow framework for the
              different teams, ensuring consistency, scalability and flexibility
              in product design
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <button className={styles.caretrightParent}>
                <img className={styles.caretrightIcon} alt="" />
                <div className={styles.exploreSystem}>Explore System</div>
              </button>
            </div>
            <div className={styles.frameDiv}>
              <button className={styles.caretrightGroup}>
                <img className={styles.caretrightIcon2} alt="" />
                <div className={styles.viewFigmaKit}>View Figma Kit</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <DesignTeams />
      <DesignStarted />
      <DesignResource />
    </div>
  );
};

export default DesignPage;
