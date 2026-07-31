import { FunctionComponent } from "react";
import styles from "./AnatomyItem.module.css";

export type AnatomyItemType = {
  className?: string;
  value?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  spacerComponent?: string;
};

const AnatomyItem: FunctionComponent<AnatomyItemType> = ({
  className = "",
  value,
  value1,
  value2,
  value3,
  spacerComponent,
}) => {
  return (
    <div className={[styles.anatomyItem, className].join(" ")}>
      <div className={styles.elementParent}>
        <div className={styles.element}>
          <div className={styles.element2}>
            <img
              className={styles.typeIcon}
              loading="lazy"
              alt=""
              src="/Type-icon.svg"
            />
            <div className={styles.text}>Button</div>
          </div>
          <div className={styles.attributes}>
            <div className={styles.attribute}>
              <div className={styles.name}>Height:</div>
              <div className={styles.nameSpacerOne}>
                <div className={styles.value}>{value}</div>
              </div>
            </div>
            <div className={styles.attribute}>
              <div className={styles.name}>Min width:</div>
              <div className={styles.nameSpacerOne}>
                <div className={styles.value}>{value1}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.element}>
          <div className={styles.element2}>
            <img
              className={styles.typeIcon}
              loading="lazy"
              alt=""
              src="/Type-icon1.svg"
            />
            <div className={styles.text}>Button Text</div>
          </div>
          <div className={styles.attributes2}>
            <div className={styles.attribute}>
              <div className={styles.name}>Text style:</div>
              <div className={styles.nameSpacerThree}>
                <div className={styles.value}>{value2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.element}>
          <div className={styles.element2}>
            <img className={styles.typeIcon} alt="" src="/Type-icon.svg" />
            <div className={styles.text}>Icon</div>
          </div>
          <div className={styles.attributes2}>
            <div className={styles.attribute}>
              <div className={styles.name}>Icon size:</div>
              <div className={styles.nameSpacerOne}>
                <div className={styles.value}>{value3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dot}>
        <b className={styles.spacerComponent}>{spacerComponent}</b>
      </div>
    </div>
  );
};

export default AnatomyItem;
