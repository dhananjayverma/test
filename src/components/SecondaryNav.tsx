import { FunctionComponent, type CSSProperties } from "react";
import styles from "./SecondaryNav.module.css";

export type SecondaryNavType = {
  className?: string;
  aboutGlobalDesignSystem?: string;

  /** Variant props */
  property1?: string;
};

const SecondaryNav: FunctionComponent<SecondaryNavType> = ({
  className = "",
  property1 = "L1 Default",
  aboutGlobalDesignSystem,
}) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.aboutGlobalDesignSystemWrapper}>
        <div className={styles.aboutGlobalDesign}>
          {aboutGlobalDesignSystem}
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
