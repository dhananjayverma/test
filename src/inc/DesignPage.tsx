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
              <button
                className="flex items-center justify-center text-sm font-bold px-7 py-3.5 rounded-[16px] border-2 text-foreground hover:bg-muted transition-all duration-200"
                style={{ borderColor: "#005B9A35", color: "#000" }}
              >
                View Figma Kit
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
