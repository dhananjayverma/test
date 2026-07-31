import { FunctionComponent, type CSSProperties } from "react";
import styles from "./InputAccessFieldCnt.module.css";

export type InputFeild1Type = {
  className?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  showValidationIcon?: boolean;
  showSupportingText?: boolean;
  validation?: string;
  labelText?: string;
  showValidation?: boolean;
  charactersText?: string;
  showTrailingIcon?: boolean;
  showLabelIcon?: boolean;
  showLabelText?: boolean;
  showCharacters?: boolean;
  showLeadingIcon?: boolean;
  trailingIcon1?: React.ReactNode;

  /** Variant props */
  state?: string;
  type?: string;
};

const InputAccessFieldCnt: FunctionComponent<InputFeild1Type> = ({
  className = "",
  state = "Default",
  type = "input",
  trailingIcon,
  leadingIcon,
  showValidationIcon = true,
  showSupportingText = true,
  validation = "Validation",
  labelText = "Label Text",
  showValidation = true,
  charactersText = "0/32 Characters",
  showTrailingIcon = true,
  showLabelIcon = true,
  showLabelText = true,
  showCharacters = true,
  showLeadingIcon = true,
  trailingIcon1,
}) => {
  return (
    <div
      className={[styles.inputFeild, className].join(" ")}
      data-state={state}
      data-type={type}
    >
      {!!showLabelText && (
        <div className={styles.labelContainer}>
          <div className={styles.label}>{labelText}</div>
          {!!showLabelIcon && trailingIcon}
        </div>
      )}
      <div className={styles.inputContainer}>
        {!!showLeadingIcon && leadingIcon}
        <input
          className={styles.placeholderText}
          placeholder="Placeholder"
          type="text"
        />
        {!!showTrailingIcon && trailingIcon1}
      </div>
      {!!showSupportingText && (
        <div className={styles.validationContainer}>
          {!!showValidation && (
            <div className={styles.validationTextContainer}>
              {!!showValidationIcon && trailingIcon}
              <div className={styles.validationText}>{validation}</div>
            </div>
          )}
          {!!showCharacters && (
            <div className={styles.characterCount}>{charactersText}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputAccessFieldCnt;
