import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VisionGoal.module.css";

export type FrameComponent4Type = {
  className?: string;
  premiumCustomerExperience?: string;
  chooseYourContextToExplore?: string;

  /** Style props */
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivBackgroundColor1?: CSSProperties["backgroundColor"];
};

const VisionGoal: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  frameDivBackgroundColor,
  frameDivBackgroundColor1,
  premiumCustomerExperience,
  chooseYourContextToExplore,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor1,
    };
  }, [frameDivBackgroundColor1]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameContainer} style={frameDiv1Style}>
        <div className={styles.frameParent}>
          <div className={styles.frameDiv}>
            <div className={styles.frameDiv}>
              <h3 className={styles.premiumCustomerExperience}>
                {premiumCustomerExperience}
              </h3>
            </div>
          </div>
          <div className={styles.chooseYourContext}>
            {chooseYourContextToExplore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionGoal;
