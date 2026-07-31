import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Badges.module.css";

export type BadgesType = {
  className?: string;
  text?: string;

  /** Variant props */
  size?: string;
  type?: string;

  /** Style props */
  badgesHeight?: CSSProperties["height"];
  badgesWidth?: CSSProperties["width"];
};

const Badges: FunctionComponent<BadgesType> = ({
  className = "",
  size = "Small",
  type = "Number",
  text = "1",
  badgesHeight,
  badgesWidth,
}) => {
  const badgesStyle: CSSProperties = useMemo(() => {
    return {
      height: badgesHeight,
      width: badgesWidth,
    };
  }, [badgesHeight, badgesWidth]);

  return (
    <div
      className={[styles.badges, className].join(" ")}
      data-size={size}
      data-type={type}
      style={badgesStyle}
    >
      <div className={styles.numberContainer}>
        <div className={styles.number}>{text}</div>
      </div>
    </div>
  );
};

export default Badges;
