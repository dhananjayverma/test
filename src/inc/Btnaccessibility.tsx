import { FunctionComponent } from "react";
import styles from "./Btnaccessibility.module.css";

const Btnaccessibility: FunctionComponent = () => {
  return (
    <div className={styles.container}>
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
                  <img src="./btn-access.svg"></img>
                </div>
              </div>
            </div>
            <ul className={styles.list}>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Ensure sufficient color contrast between button and text. Maintain ratio of 4.5:1</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Provide clear focus states: Always include a visible focus indicator for keyboard navigation users.</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Use meaningful labels for Button text. Describe the action clearly (e.g., “Submit form” instead of “Click here”).</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Support keyboard interaction in the layouts. Buttons must be accessible via Tab, Enter, and Space keys.</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Ensure touch targets are large enough (minimum ~48x48px) and spaced to prevent mis-taps.</li>
              <li><span className={styles.bullet}><img alt="red close" src="/red-close.svg" /></span> Do not rely only on colors. Use supportive icons to communicate the clear message.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Btnaccessibility;
