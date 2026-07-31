import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputIntroField.module.css";

export type InputFeildType = {
  className?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  placeholder?: string;
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

  /** Style props */
  inputFeildPosition?: CSSProperties["position"];
  inputFeildTop?: CSSProperties["top"];
  inputFeildLeft?: CSSProperties["left"];
};

const InputIntroField: FunctionComponent<InputFeildType> = ({
  className = "",
  state = "Default",
  type = "input",
  trailingIcon,
  leadingIcon,
  placeholder = "Placeholder",
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
  inputFeildPosition,
  inputFeildTop,
  inputFeildLeft,
  trailingIcon1,
}) => {
  const inputFeildStyle: CSSProperties = useMemo(() => {
    return {
      position: inputFeildPosition,
      top: inputFeildTop,
      left: inputFeildLeft,
    };
  }, [inputFeildPosition, inputFeildTop, inputFeildLeft]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-state={state}
      data-type={type}
      style={inputFeildStyle}
    >
      {!!showLabelText && (
        <div className={styles.labelContainer}>
          <div className={styles.label}>{labelText}</div>
          {!!showLabelIcon && trailingIcon}
        </div>
      )}
      <div className={styles.inputContainer}>
        {!!showLeadingIcon && leadingIcon}
        <div className={styles.placeholderText}>{placeholder}</div>
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

export default InputIntroField;
