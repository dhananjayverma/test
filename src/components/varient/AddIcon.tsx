import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AddIcon.module.css";

export type AddIcon1Type = {
  className?: string;
  showTrailingIcon?: boolean;
  showLeadingIcon?: boolean;
  buttonText?: string;

  /** Variant props */
  size?: string;
  states?: string;
  type?: string;

  /** Style props */
  addIconPosition?: CSSProperties["position"];
  addIconTop?: CSSProperties["top"];
  addIconLeft?: CSSProperties["left"];
  addIconAlignSelf?: CSSProperties["alignSelf"];
  addIconHeight?: CSSProperties["height"];
  addIconOpacity?: CSSProperties["opacity"];
};

const AddIcon1: FunctionComponent<AddIcon1Type> = ({
  className = "",
  size = "Small",
  states = "Default",
  type = "Primary",
  showTrailingIcon = true,
  showLeadingIcon = true,
  buttonText = "Label",
  addIconPosition,
  addIconTop,
  addIconLeft,
  addIconAlignSelf,
  addIconHeight,
  addIconOpacity,
}) => {
  const addIconStyle: CSSProperties = useMemo(() => {
    return {
      position: addIconPosition,
      top: addIconTop,
      left: addIconLeft,
      alignSelf: addIconAlignSelf,
      height: addIconHeight,
      opacity: addIconOpacity,
    };
  }, [
    addIconPosition,
    addIconTop,
    addIconLeft,
    addIconAlignSelf,
    addIconHeight,
    addIconOpacity,
  ]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-size={size}
      data-states={states}
      data-type={type}
      style={addIconStyle}
    >
      {!!showLeadingIcon && (
        <img
          className={styles.addIcon}
          loading="lazy"
          alt=""
          src="/Add-Icon.svg"
        />
      )}
      <div className={styles.buttonText}>{buttonText}</div>
      {!!showTrailingIcon && (
        <img
          className={styles.nextIcon}
          loading="lazy"
          alt=""
          src="/Next-Icon.svg"
        />
      )}
    </div>
  );
};

export default AddIcon1;
