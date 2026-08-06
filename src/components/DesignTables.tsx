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
        <button
          className="flex items-center justify-center text-sm font-bold px-7 py-3.5 rounded-[16px] border-2 text-foreground hover:bg-muted transition-all duration-200"
          style={{ borderColor: "#005B9A35", color: "#000" }}
        >
          View Figma Kit
        </button>
      </div>
    </section>
  );
};

export default DesignTables;
