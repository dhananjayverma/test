import { FunctionComponent } from "react";
import styles from "./DevelopmentTokens.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const DevelopmentToken: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wereRollingOutDesignTokenParent}>
        <h3 className={styles.wereRollingOut}>
          We’re rolling out design tokens across HBK
        </h3>
        <div className={styles.withDesignTokens}>
          With design tokens, your style choices align with system-level design
          decisions. Tokens make themes like dark mode scalable and
          maintainable.
        </div>
      </div>
      <img
        className={styles.frameWrapper}
        alt=""
        src="/development.svg"
      />
    </section>
  );
};
export default DevelopmentToken;