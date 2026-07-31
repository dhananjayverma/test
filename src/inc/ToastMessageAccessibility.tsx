import { FunctionComponent } from "react";
import styles from "./Btnaccessibility.module.css";
import clsx from "clsx";

const ToastMessageAccessibility: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Toast Message Accessibility</h2>
              <p className={styles.sectionText}>
                Toast accessibility ensures notifications are perceivable without disrupting the user experience.
              </p>
            </div>
            <div className={styles.previewCard}>
              <div className={styles.previewSurface}>
                <div className={clsx(styles.mockup, styles.height150)}>
                  <img src="./toast-message-accessibility.svg"></img>
                </div>
              </div>
            </div>
            <ul className={styles.list}>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Ensure sufficient color contrast between text, icons, and the background (minimum 4.5:1).</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Provide clear and concise notification messages.</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Use both icons and colors to communicate message status.</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Announce toast messages using appropriate live regions.</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Keep toast notifications visible long enough for users to read (recommended 3–5 seconds or allow manual dismissal).</li>
              <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg" /></span> Ensure the close button is keyboard accessible and has an accessible label.</li>
              <li><span className={styles.bullet}><img alt="red close" src="/red-close.svg" /></span> Do not use toast messages for information that requires immediate user action or confirmation.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ToastMessageAccessibility;
