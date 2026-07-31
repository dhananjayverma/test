import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputField.module.css";

export type InputFieldType = {
  className?: string;
  validation?: string;
  labelText?: string;
  charactersText?: string;
  showCharacters?: boolean;
  showValidationIcon?: boolean;
  showSupportingText?: boolean;
  showValidation?: boolean;
  showTrailingIcon?: boolean;
  showLabelIcon?: boolean;
  showLabelText?: boolean;
  showLeadingIcon?: boolean;
  leadingIcon?: React.ReactNode;
  labelIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  validationIcon?: React.ReactNode;
  leadingIcon1?: React.ReactNode;
  labelIcon1?: React.ReactNode;
  trailingIcon1?: React.ReactNode;
  validationIcon1?: React.ReactNode;

  /** Variant props */
  state?: string;
  type?: string;

  /** Style props */
  inputFieldHeight?: CSSProperties["height"];
  inputContainerBorder?: CSSProperties["border"];
  placeholderTextColor?: CSSProperties["color"];
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  state = "Default",
  type = "Input",
  validation = "Validation",
  labelText = "Label Text",
  charactersText = "0/32 Characters",
  showCharacters = true,
  showValidationIcon = true,
  showSupportingText = false,
  showValidation = true,
  showTrailingIcon = true,
  showLabelIcon = true,
  showLabelText = false,
  showLeadingIcon = false,
  inputFieldHeight,
  inputContainerBorder,
  placeholderTextColor,
  leadingIcon,
  labelIcon,
  trailingIcon,
  validationIcon,
  leadingIcon1,
  labelIcon1,
  trailingIcon1,
  validationIcon1,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      height: inputFieldHeight,
    };
  }, [inputFieldHeight]);

  const inputContainerStyle: CSSProperties = useMemo(() => {
    return {
      border: inputContainerBorder,
    };
  }, [inputContainerBorder]);

  const placeholderTextStyle: CSSProperties = useMemo(() => {
    return {
      color: placeholderTextColor,
    };
  }, [placeholderTextColor]);

  return (
    <div
      className={[styles.inputField, className].join(" ")}
      data-state={state}
      data-type={type}
      style={inputFieldStyle}
    >
      {!!showLabelText && (
        <div className={styles.labelContainer}>
          <div className={styles.label}>{labelText}</div>
          {labelIcon1}
        </div>
      )}
      <div className={styles.inputContainer} style={inputContainerStyle}>
        {leadingIcon1}
        <input
          className={styles.placeholderText}
          placeholder="Search"
          type="text"
          style={placeholderTextStyle}
        />
        {trailingIcon1}
      </div>
      {!!showSupportingText && (
        <div className={styles.validationContainer}>
          {!!showValidation && (
            <div className={styles.validationTextContainer}>
              {validationIcon1}
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
