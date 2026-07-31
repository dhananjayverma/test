import { FunctionComponent } from "react";
import InputAccessFieldCnt from "./InputAccessFieldCnt";
import styles from "./InputAccessField.module.css";

export type Artwork1Type = {
  className?: string;
};

const InputAccessField: FunctionComponent<Artwork1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.artwork, className].join(" ")}>
      <InputAccessFieldCnt
        state="Default"
        type="input"
        trailingIcon={
          <img
            className={styles.validationInfoIcon}
            loading="lazy"
            alt=""
            src="/Info1.svg"
          />
        }
        leadingIcon={
          <img className={styles.personIcon} alt="" src="/Person-Icon.svg" />
        }
        showValidationIcon
        showSupportingText
        validation="Validation"
        labelText="Label Text"
        showValidation
        charactersText="0/32 Characters"
        showTrailingIcon
        showLabelIcon
        showLabelText
        showCharacters
        showLeadingIcon
        trailingIcon1={
          <img className={styles.searchIcon} alt="" src="/Search-Icon.svg" />
        }
      />
    </section>
  );
};

export default InputAccessField;
