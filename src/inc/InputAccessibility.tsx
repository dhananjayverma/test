import { FunctionComponent } from "react";
import styles from "./InputAccessibility.module.css";

export type ContainerType = {
  className?: string;
};

const labelRows = [
  { id: 1, guideline: "Visible Label", description: "Every field should have a clear label." },
  { id: 2, guideline: "Required Fields", description: "Clearly indicate mandatory inputs." },
  { id: 3, guideline: "Descriptive Naming", description: "Use meaningful and recognizable terms." },
];

const keyboardRows = [
  { keyName: "Tab", action: "Moves to the next field." },
  { keyName: "Shift + Tab", action: "Moves to the previous field." },
  { keyName: "Enter", action: "Submits or confirms input." },
  { keyName: "Esc", action: "Dismisses suggestions or overlays." },
];

const focusRows = [
  { guideline: "Visible Focus", description: "Active fields must display a focus indicator." },
  { guideline: "Consistent Style", description: "Focus appearance should remain consistent." },
  { guideline: "Accessibility", description: "Do not rely on color alone." },
];

const contrastRows = [
  { guideline: "Text Contrast", description: "Minimum 4.5:1" },
  { guideline: "UI Elements", description: "Minimum 3:1" },
  { guideline: "Error Indicators", description: "Minimum 4.5:1" },
];

const InputAccessibility: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Accessibility in Input Fields</h2>
              <p className={styles.sectionText}>
                Accessible input fields provide clear labels, focus states, and error feedback for all users.
              </p>
            </div>

            <div className={styles.previewCard}>
              <div className={styles.previewSurface}>
                <div className={styles.mockup}>
                  <img src="./input-access.svg"></img>
                </div>
              </div>
            </div>

            <div className={styles.tableSection}>
              <h3 className={styles.subTitle}>Label</h3>
              <div className={styles.table}>
                <div className={styles.tablesHeader}>
                  <span className={styles.colNo}>S.No.</span>
                  <span className={styles.colGuideline}>Guideline</span>
                  <span className={styles.colDescription}>Description</span>
                </div>
                {labelRows.map((row) => (
                  <div className={styles.tablesRow} key={row.id}>
                    <span className={styles.colNo}>{row.id}</span>
                    <span className={styles.colGuideline}>{row.guideline}</span>
                    <span className={styles.colDescription}>{row.description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.tableSection}>
              <h3 className={styles.subTitle}>Keyboard Navigation</h3>
              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span className={styles.colGuideline}>Key</span>
                  <span className={styles.colDescription}>Action</span>
                </div>
                {keyboardRows.map((row) => (
                  <div className={styles.tableRow} key={row.keyName}>
                    <span className={styles.colGuideline}>{row.keyName}</span>
                    <span className={styles.colDescription}>{row.action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.tableSection}>
              <h3 className={styles.subTitle}>Focus Indicators</h3>
              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span className={styles.colGuideline}>Guideline</span>
                  <span className={styles.colDescription}>Description</span>
                </div>
                {focusRows.map((row) => (
                  <div className={styles.tableRow} key={row.guideline}>
                    <span className={styles.colGuideline}>{row.guideline}</span>
                    <span className={styles.colDescription}>{row.description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.tableSection}>
              <h3 className={styles.subTitle}>Color Contrast</h3>
              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span className={styles.colGuideline}>Requirement</span>
                  <span className={styles.colDescription}>Value</span>
                </div>
                {contrastRows.map((row) => (
                  <div className={styles.tableRow} key={row.guideline}>
                    <span className={styles.colGuideline}>{row.guideline}</span>
                    <span className={styles.colDescription}>{row.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InputAccessibility;