import { FunctionComponent, type CSSProperties } from "react";
import Badges from "./Badges";
import styles from "./NavButtonHorizontal.module.css";

export type NavButtonHorizontalType = {
  className?: string;
  labelText?: string;
  size?: string;
  type1?: string;
  text?: string;
  badgesHeight?: CSSProperties["height"];
  badgesWidth?: CSSProperties["width"];
  showNumber?: boolean;
  bottomBorder?: boolean;
  topBorder?: boolean;
  showTrailingIcon?: boolean;
  showLeadingIcon?: boolean;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon1?: React.ReactNode;
  leadingIcon1?: React.ReactNode;

  /** Variant props */
  type?: string;
};

const NavButtonHorizontal: FunctionComponent<NavButtonHorizontalType> = ({
  className = "",
  type = "Selected",
  labelText = "Design System",
  size = "Small",
  type1 = "Number",
  text,
  badgesHeight,
  badgesWidth,
  showNumber = false,
  bottomBorder = true,
  topBorder = false,
  showTrailingIcon = false,
  showLeadingIcon = false,
  trailingIcon,
  leadingIcon,
  trailingIcon1,
  leadingIcon1,
}) => {
  return (
    <div
      className={[styles.navButtonHorizontal, className].join(" ")}
      data-type={type}
    >
      <div className={styles.selectionContainer}>
        {leadingIcon1}
        <Badges size="Small" type="Number" text="1" />
        <div className={styles.textLabel}>Overview</div>
        {trailingIcon1}
      </div>
      <div className={styles.navButtonHorizontalChild} />
      <div className={styles.selectionIndicator} />
    </div>
  );
};

export default NavButtonHorizontal;
