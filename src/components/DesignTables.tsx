import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesignTables.module.css";

export type FrameComponent11Type = {
  className?: string;
  hBKDesignComponentsLibrary?: string;
  coreComponentsUsedAcrossHB?: string;

  /** Style props */
  hBKDesignComponentsHeight?: CSSProperties["height"];
  hBKDesignComponentsDisplay?: CSSProperties["display"];
};

const DesignTables: FunctionComponent<FrameComponent11Type> = ({
  className = "",
  hBKDesignComponentsLibrary,
  hBKDesignComponentsHeight,
  hBKDesignComponentsDisplay,
  coreComponentsUsedAcrossHB,
}) => {
  const hBKDesignComponentsStyle: CSSProperties = useMemo(() => {
    return {
      height: hBKDesignComponentsHeight,
      display: hBKDesignComponentsDisplay,
    };
  }, [hBKDesignComponentsHeight, hBKDesignComponentsDisplay]);

  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameContainer} alt="" src="/figma.svg" />
          <div className={styles.hbkDesignComponentsLibraryParent}>
            <h3
              className={styles.hbkDesignComponents}
            >
              {hBKDesignComponentsLibrary}
            </h3>
            <div className={styles.coreComponentsUsed}>
              {coreComponentsUsedAcrossHB}
            </div>
          </div>
        </div>
        <button className={styles.frameButton}>
          <div className={styles.caretrightParent}>
            <img className={styles.caretrightIcon} alt="" />
            <div className={styles.viewFigmaKit}>View Figma Kit</div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default DesignTables;
