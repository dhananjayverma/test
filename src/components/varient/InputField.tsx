import { FunctionComponent, type CSSProperties } from "react";
import styles from "./InputField.module.css";

export type InputFieldType = {
  className?: string;
  leadingIcon?: React.ReactNode;
  labelIcon?: React.ReactNode;
  showValidationIcon?: boolean;
  showSupportingText?: boolean;
  validation?: string;
  labelText?: string;
  showValidation?: boolean;
  charactersText?: string;
  showTrailingIcon?: boolean;
  showLabelIcon?: boolean;
  validationIcon?: React.ReactNode;
  showLabelText?: boolean;
  showCharacters?: boolean;
  showLeadingIcon?: boolean;
  leadingIcon1?: React.ReactNode;

  /** Variant props */
  state?: string;
  type?: string;
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  state = "Default",
  type = "Input",
  leadingIcon,
  labelIcon,
  showValidationIcon = true,
  showSupportingText = false,
  validation = "Validation",
  labelText = "Label Text",
  showValidation = true,
  charactersText = "0/32 Characters",
  showTrailingIcon = true,
  showLabelIcon = true,
  validationIcon,
  showLabelText = false,
  showCharacters = true,
  showLeadingIcon = false,
  leadingIcon1,
}) => {
  return (
    <div
      className={[styles.inputField, className].join(" ")}
      data-state={state}
      data-type={type}
    >
      {!!showLabelText && (
        <div className={styles.labelContainer}>
          <div className={styles.label}>{labelText}</div>
          {!!showLabelIcon && labelIcon}
        </div>
      )}
      <div className={styles.inputContainer}>
        {!!showLeadingIcon && leadingIcon1}
        <input
          className={styles.placeholderText}
          placeholder="Search"
          type="text"
        />
        {!!showTrailingIcon && leadingIcon}
      </div>
      {!!showSupportingText && (
        <div className={styles.validationContainer}>
          {!!showValidation && (
            <div className={styles.validationTextContainer}>
              {!!showValidationIcon && validationIcon}
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

export default InputField;
