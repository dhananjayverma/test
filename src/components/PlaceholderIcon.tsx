import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PlaceholderIcon.module.css";

export type PlaceholderIconType = {
  className?: string;

  /** Variant props */
  size?: string;
  states?: string;
  type?: string;

  /** Style props */
  placeholderIconHeight?: CSSProperties["height"];
  placeholderIconWidth?: CSSProperties["width"];
};

const PlaceholderIcon: FunctionComponent<PlaceholderIconType> = ({
  className = "",
  size = "Small",
  states = "Default",
  type = "Primary",
  placeholderIconHeight,
  placeholderIconWidth,
}) => {
  const placeholderIconStyle: CSSProperties = useMemo(() => {
    return {
      height: placeholderIconHeight,
      width: placeholderIconWidth,
    };
  }, [placeholderIconHeight, placeholderIconWidth]);

  return (
    <img
      className={[styles.root, className].join(" ")}
      alt=""
      src="/Info1.svg"
      data-size={size}
      data-states={states}
      data-type={type}
      style={placeholderIconStyle}
    />
  );
};

export default PlaceholderIcon;
