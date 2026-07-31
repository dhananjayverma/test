import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
  typeIcon?: string;
  text?: string;
  value?: string;
  value1?: string;
  value2?: string;
};

const Content: FunctionComponent<ContentType> = ({
  className = "",
  typeIcon,
  text,
  value,
  value1,
  value2,
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.elements}>
        <div className={styles.element}>
          <div className={styles.element2}>
            <img className={styles.typeIcon} alt="" src={typeIcon} />
            <b className={styles.text}>{text}</b>
          </div>
          <div className={styles.attributes}>
            <div className={styles.attribute}>
              <div className={styles.text}>Direction:</div>
              <div className={styles.div}>
                <div className={styles.text}>{value}</div>
              </div>
            </div>
            <div className={styles.attribute}>
              <div className={styles.text}>Alignment:</div>
              <div className={styles.div}>
                <div className={styles.text}>{value1}</div>
              </div>
            </div>
            <div className={styles.attribute3}>
              <div className={styles.text}>Vertical resizing:</div>
              <div className={styles.div}>
                <div className={styles.text}>Hug</div>
              </div>
            </div>
            <div className={styles.attribute3}>
              <div className={styles.text}>Horizontal resizing:</div>
              <div className={styles.div}>
                <div className={styles.text}>{value2}</div>
              </div>
            </div>
            <div className={styles.attribute3}>
              <div className={styles.text}>Item spacing:</div>
              <div className={styles.div}>
                <div className={styles.text}>4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
