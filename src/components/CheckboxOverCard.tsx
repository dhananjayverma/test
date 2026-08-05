import { FunctionComponent } from "react";
import styles from "./CheckboxOverCard.module.css";

type InputVariant = "standard" | "filled" | "password" | "label";

type InputTypeItem = {
  title: string;
  description: string;
  variant: InputVariant;
};

const inputTypes: InputTypeItem[] = [
  {
    title: "Unselected",
    description: "Represents the default state before a user makes a selection.",
    variant: "standard",
  },
  {
    title: "Selected",
    description: "Indicates that the option has been chosen.",
    variant: "filled",
  },
  {
    title: "Intermediate",
    description: "Represents a partially selected state commonly used for parent-child relationships.",
    variant: "password",
  },
  {
    title: "With Label",
    description: "This is how a checkbox with its label will be displayed.",
    variant: "label",
  },
];

const CheckboxOverCard: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      {inputTypes.map((item) => (
        <div key={item.title} className={styles.typeRow}>
          <div className={styles.infoColumn}>
            <h3 className={styles.typeTitle}>{item.title}</h3>
            <div className={styles.bodyText}>
                <p>{item.description}</p>
            </div>
          </div>

          <div className={styles.previewCard}>
            <div className={styles.previewSurface}>
              <div className={styles.mockup}>
                <div className={[styles.inputRow, item.variant === "filled" ? styles.inputRowFilled : "", item.variant === "password" ? styles.inputRowPassword : ""].filter(Boolean).join(" ")}> {item.variant === "filled" ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#006C8E"/><path d="M5 9.73333L8.33333 13L15 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> : ""} {item.variant === "password" ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#006C8E"/><rect x="4" y="9" width="12" height="2" fill="white"/></svg> : ""}
                </div>
                {item.variant === "label" ? <span className={styles.labelText}>Label</span> : ""}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CheckboxOverCard;