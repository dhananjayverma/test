import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Placeholder.module.css";

export type PlaceholderType = {
  className?: string;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  showLeadingIcon?: boolean;
  leadingIcon2?: React.ReactNode;
  buttonText?: string;
  leadingIcon21?: React.ReactNode;
  trailingIcon1?: React.ReactNode;

  /** Variant props */
  size?: string;
  states?: string;
  type?: string;

  /** Style props */
  placeholderHeight?: CSSProperties["height"];
  placeholderOpacity?: CSSProperties["opacity"];
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
  placeholderHeight,
  placeholderOpacity,
  leadingIcon21,
  trailingIcon1,
}) => {
  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      height: placeholderHeight,
      opacity: placeholderOpacity,
    };
  }, [placeholderHeight, placeholderOpacity]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-size={size}
      data-states={states}
      data-type={type}
      style={placeholderStyle}
    >
      {!!showLeadingIcon && leadingIcon21}
      <div className={styles.buttonText}>{buttonText}</div>
      {!!showTrailingIcon && trailingIcon1}
    </button>
  );
};

export default Placeholder;
