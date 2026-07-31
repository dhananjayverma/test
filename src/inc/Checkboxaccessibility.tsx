import { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./CheckboxOverview.module.css";

export type ContainerType = {
  className?: string;
  label?: string;
};

const buttonElements = [
  { id: "Tab", name: "Moves focus to checkbox"},
  { id: "Shift + Tab", name: "Moves focus backward"},
  { id: "Space", name: "Selects or deselects checkbox"},
];

const contrastElements = [
  { id: "Checkbox control", name: "3:1"},
  { id: "Label text", name: "4.5:1"},
];

const CheckboxAccess: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Keyboard Support</h3>
              <p className={styles.sectionText}>
                Checkboxes must support keyboard navigation.
              </p>
            </div>
            <div className={styles.previewCard}>
              <div className={styles.previewSurface}>
                <div className={styles.mockup}>
                  <div className={styles.inputRow}></div>
                  <span className={styles.labelText}>Label</span>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.tableWrap}>
                <div className={styles.tablesHeader}>
                  <span className={styles.colNo}>Key</span>
                  <span className={styles.colElement}>Action</span>
                </div>
                {buttonElements.map((element) => (
                  <div key={element.id} className={styles.tablesRow}>
                    <span className={styles.colNo}>{element.id}</span>
                    <span className={styles.colElement}>{element.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Focus Visibility</h3>
              <p className={styles.sectionText}>Checkboxes should provide a clear focus state for keyboard users.</p>
              <ul className={clsx(styles.list, styles.focusList)}>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Focus indicators remain visible</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Focus order follows logical navigation</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Focus is not hidden</li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Touch Target Size</h3>
              <p className={styles.sectionText}>To improve usability</p>
              <ul className={clsx(styles.list, styles.focusList)}>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Minimum touch target: 44 x 44 px</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Maintain adequate spacing between interactive elements</li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Contrast Requirements</h3>
              <p className={styles.sectionText}>Checkbox states should satisfy WCAG requirements.</p>
              <div className={styles.tableWrap}>
                <div className={styles.tablesHeader}>
                  <span className={styles.colNo}>Element</span>
                  <span className={styles.colElement}>Minimum Contrast</span>
                </div>
                {contrastElements.map((element) => (
                  <div key={element.id} className={styles.tablesRow}>
                    <span className={styles.colNo}>{element.id}</span>
                    <span className={styles.colElement}>{element.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Screen Reader Support</h3>
              <p className={styles.sectionText}>Assistive technologies should announce:</p>
              <ul className={clsx(styles.list, styles.focusList)}>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Checkbox label</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Current state</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Disabled state if applicable</li>
              </ul>
              <div className={styles.examplesList}>
                <span className={styles.exampleBadge}>Receive notifications, checkbox, checked</span>
                <span className={styles.exampleBadge}>Subscribe to updates, checkbox, unchecked</span>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Accessibility Checklist</h3>
              <ul className={clsx(styles.list, styles.focusList)}>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Supports keyboard interaction</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Provides visible focus states</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Includes descriptive labels</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Supports screen readers</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Meets contrast requirements</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Supports sufficient touch targets</li>
                <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Communicates state beyond color alone</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CheckboxAccess;