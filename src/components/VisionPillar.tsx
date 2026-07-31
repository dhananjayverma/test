import { FunctionComponent } from "react";
import styles from "./VisionPillar.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const Visionpillar: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/vision-1.svg"
          />
          <div className={styles.integratingDesignInto}>
            Integrating design into our software culture to foster creativity
            and cross-functional collaboration.
          </div>
        </div>
        <h2 className={styles.h2}>+</h2>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/vision-2.svg"
          />
          <div className={styles.integratingDesignInto}>
            Providing premium visual experiences that reflect the quality and
            precision our brand stands for..
          </div>
        </div>
        <h2 className={styles.h2}>+</h2>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/vision-3.svg"
          />
          <div className={styles.integratingDesignInto}>
            Delivering high-quality user experiences that are intuitive,
            efficient, and aligned with customer needs.
          </div>
        </div>
      </div>
  );
};

export default Visionpillar;
