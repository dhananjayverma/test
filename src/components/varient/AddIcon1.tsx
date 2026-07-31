import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AddIcon1.module.css";

export type AddIconType = {
  className?: string;
  leadingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  trailingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  buttonText?: string;
  trailingIcon1?: React.ReactNode;

  /** Variant props */
  size?: string;
  states?: string;
  type?: string;

  /** Style props */
  addIconHeight?: CSSProperties["height"];
};

const AddIcon: FunctionComponent<AddIconType> = ({
  className = "",
  size = "Small",
  states = "Default",
  type = "Primary",
  leadingIcon,
  showTrailingIcon = false,
  trailingIcon,
  showLeadingIcon = false,
  buttonText = "Save Changes",
  addIconHeight,
  trailingIcon1,
}) => {
  const addIcon1Style: CSSProperties = useMemo(() => {
    return {
      height: addIconHeight,
    };
  }, [addIconHeight]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-size={size}
      data-states={states}
      data-type={type}
      style={addIcon1Style}
    >
      {!!showLeadingIcon && leadingIcon}
      <div className={styles.buttonText}>{buttonText}</div>
      {!!showTrailingIcon && trailingIcon1}
    </button>
  );
};

export default AddIcon;
