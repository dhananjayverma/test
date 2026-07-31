import { FunctionComponent } from "react";
import styles from "./InputOverCard.module.css";

type InputVariant = "standard" | "filled" | "password";

type InputTypeItem = {
  title: string;
  description: string[];
  chips: string[];
  variant: InputVariant;
};

const inputTypes: InputTypeItem[] = [
  {
    title: "Standard Input",
    description: [
      "Standard Input are used for general text entry.",
      "Allows users to input basic information such as names, titles, or short responses.",
    ],
    chips: ["Name", "City", "Email ID"],
    variant: "standard",
  },
  {
    title: "Filled Input",
    description: [
      "Filled Input are used when inputs need stronger visual emphasis.",
      "Highlights input areas with a filled background to improve visibility and focus.",
    ],
    chips: ["Company", "Role", "Department"],
    variant: "filled",
  },
  {
    title: "Password Input",
    description: [
      "Password Input are used for entering sensitive information securely.",
      "Masks characters to protect user privacy and prevent unauthorized visibility.",
    ],
    chips: ["Hide / Show Password", "Secure Masking"],
    variant: "password",
  },
];

const InputTypes: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      {inputTypes.map((item) => (
        <div key={item.title} className={styles.typeRow}>
          <div className={styles.infoColumn}>
            <h3 className={styles.typeTitle}>{item.title}</h3>
            <div className={styles.bodyText}>
              {item.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className={styles.chipGroup}>
              {item.chips.map((chip) => (
                <span key={chip} className={styles.chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.previewCard}>
            <div className={styles.previewSurface}>
              <div className={styles.mockup}>
                <div className={styles.labelRow}>
                  <span className={styles.labelText}>Label Text</span>
                  <img src="./info-icon.svg" alt="" className={styles.iconSmall} />
                </div>

                <div className={[styles.inputRow, item.variant === "filled" ? styles.inputRowFilled : "", item.variant === "password" ? styles.inputRowPassword : ""].filter(Boolean).join(" ")}>
                  <img src="./user-icon.svg" alt="" className={styles.iconMedium} />
                  <span className={[styles.placeholder, item.variant === "password" ? styles.passwordMask : ""].filter(Boolean).join(" ")}>
                    {item.variant === "password" ? "••••••••••••" : "Placeholder"}
                  </span>
                  <img src="./Search-Icon.svg" alt="" className={styles.iconMedium} />
                </div>

                <div className={styles.validationRow}>
                  <div className={styles.validationTextGroup}>
                    <img src="./info-icon.svg" alt="" className={styles.iconSmall} />
                    <span className={styles.validationText}>Validation</span>
                  </div>
                  <span className={styles.counter}>0/32 Characters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InputTypes;