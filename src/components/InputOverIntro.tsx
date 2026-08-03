import { FunctionComponent } from "react";
import InputIntroField from "./InputIntroField";
import styles from "./InputOverIntro.module.css";

export type ArtworkType = {
  className?: string;
};

const InputOverIntro: FunctionComponent<ArtworkType> = ({ className = "" }) => {
  return (
    <div className={styles.borderBox}>
      <section className={[styles.artwork, className].join(" ")}>
        <div className={styles.zoomContainer}>
        <InputIntroField
          state="Default"
          type="input"
          trailingIcon={
            <img
              className={styles.validationInfoIcon}
              loading="lazy"
              alt=""
              src="/Info.svg"
            />
          }
          leadingIcon={
            <img className={styles.personIcon} alt="" src="/Person-Icon.svg" />
          }
          placeholder="Placeholder"
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
        <div className={styles.markerInputFeild}>
          <div className={styles.rectangle} />
          <div className={styles.dot}>
            <b className={styles.b}>1</b>
          </div>
        </div>
        <div className={styles.markerLabel}>
          <div className={styles.rectangle2} />
          <div className={styles.dot}>
            <b className={styles.b}>2</b>
          </div>
        </div>
        <div className={styles.markerInfo}>
          <div className={styles.rectangle3} />
          <div className={styles.dot3}>
            <b className={styles.b}>3</b>
          </div>
        </div>
        <div className={styles.markerInputContainer}>
          <div className={styles.rectangle} />
          <div className={styles.dot4}>
            <b className={styles.b}>4</b>
          </div>
        </div>
        <div className={styles.markerPersonIcon}>
          <div className={styles.rectangle3} />
          <div className={styles.dot5}>
            <b className={styles.b}>5</b>
          </div>
        </div>
        <div className={styles.markerPlaceholderText}>
          <div className={styles.rectangle3} />
          <div className={styles.dot5}>
            <b className={styles.b}>6</b>
          </div>
        </div>
        <div className={styles.markerSearchIcon}>
          <div className={styles.rectangle3} />
          <div className={styles.dot5}>
            <b className={styles.b}>7</b>
          </div>
        </div>
        <div className={styles.markerValidationInfo}>
          <div className={styles.rectangle} />
          <div className={styles.dot}>
            <b className={styles.b}>8</b>
          </div>
        </div>
        <div className={styles.markerValidationText}>
          <div className={styles.rectangle3} />
          <div className={styles.dot5}>
            <b className={styles.b}>9</b>
          </div>
        </div>
        <div className={styles.markerCharacterCount}>
          <div className={styles.rectangle} />
          <div className={styles.dot4}>
            <b className={styles.b}>10</b>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default InputOverIntro;
