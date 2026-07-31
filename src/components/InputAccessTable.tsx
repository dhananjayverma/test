import { FunctionComponent } from "react";
import styles from "./InputAccessTable.module.css";

export type FrameComponent1111111111111Type = {
  className?: string;
};

const InputAccessTable: FunctionComponent<
  FrameComponent1111111111111Type
> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.keyParent}>
        <div className={styles.key}>Key</div>
        <div className={styles.action}>Action</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.tabParent}>
          <div className={styles.tab}>Tab</div>
          <div className={styles.movesToTheNextFieldWrapper}>
            <div className={styles.movesToThe}>Moves to the next field.</div>
          </div>
        </div>
        <div className={styles.tabParent}>
          <div className={styles.tab}>Shift + Tab</div>
          <div className={styles.movesToTheNextFieldWrapper}>
            <div className={styles.movesToThe}>
              Moves to the previous field.
            </div>
          </div>
        </div>
        <div className={styles.tabParent}>
          <div className={styles.tab}>Enter</div>
          <div className={styles.movesToTheNextFieldWrapper}>
            <div className={styles.movesToThe}>Submits or confirms input.</div>
          </div>
        </div>
        <div className={styles.tabParent}>
          <div className={styles.tab}>Esc</div>
          <div className={styles.dismissesSuggestionsOrOverlWrapper}>
            <div className={styles.dismissesSuggestionsOr}>
              Dismisses suggestions or overlays.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputAccessTable;
