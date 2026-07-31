import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent3Type = {
  className?: string;
  visionValuesPrinciples?: string;
  definesTheCorePrinciplesThat?: string;

  /** Style props */
  definesTheCoreWebkitLineClamp?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  visionValuesPrinciples,
  definesTheCorePrinciplesThat,
  definesTheCoreWebkitLineClamp,
}) => {
  const definesTheCoreStyle: CSSProperties = useMemo(() => {
    return {
      WebkitLineClamp: definesTheCoreWebkitLineClamp,
    };
  }, [definesTheCoreWebkitLineClamp]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/Frame-1686561766@2x.png"
      />
      <div className={styles.visionValuesPrinciplesParent}>
        <h3 className={styles.visionValues}>{visionValuesPrinciples}</h3>
        <div className={styles.definesTheCore} style={definesTheCoreStyle}>
          {definesTheCorePrinciplesThat}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
