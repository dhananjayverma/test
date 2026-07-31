import { FunctionComponent, type CSSProperties } from "react";
import styles from "./Placeholder.module.css";

export type PlaceholderType = {
  className?: string;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  showLeadingIcon?: boolean;
  leadingIcon2?: React.ReactNode;
  buttonText?: string;
  trailingIcon1?: React.ReactNode;

  /** Variant props */
  size?: string;
  states?: string;
  type?: string;
};

const Placeholder: FunctionComponent<PlaceholderType> = ({
  className = "",
  size = "Small",
  states = "Default",
  type = "Primary",
  trailingIcon,
  showTrailingIcon = true,
  showLeadingIcon = true,
  leadingIcon2,
  buttonText = "Label",
  trailingIcon1,
}) => {
  return (
    <button
      className={[styles.button, className].join(" ")}
      data-size={size}
      data-states={states}
      data-type={type}
    >
      {!!showLeadingIcon && leadingIcon2}
      <div className={styles.buttonText}>{buttonText}</div>
      {!!showTrailingIcon && trailingIcon1}
    </button>
  );
};

export default Placeholder;
