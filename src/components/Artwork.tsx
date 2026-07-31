import { FunctionComponent } from "react";
import Placeholder from "./code/Placeholder";
import styles from "./Artwork.module.css";

export type ArtworkType = {
  className?: string;
};

const Artwork: FunctionComponent<ArtworkType> = ({ className = "" }) => {
  return (
    <div className={styles.artwork}>
      <div className={styles.buttonParent}>
        <Placeholder
          size="Small"
          states="Default"
          type="Primary"
          trailingIcon={
            <img
              className={styles.placeholderIcon2}
              alt=""
              src="/placeholder.svg"
            />
          }
          showTrailingIcon
          showLeadingIcon
          leadingIcon2={
            <img
              className={styles.placeholderIcon}
              alt=""
              src="/placeholder.svg"
            />
          }
          buttonText="Label"
          trailingIcon1={
            <img
              className={styles.placeholderIcon2}
              alt=""
              src="/placeholder.svg"
            />
          }
        />
        <img
          className={styles.directionArrowIcon}
          loading="lazy"
          alt=""
          src="/Direction-arrow2.svg"
        />
        <img
          className={styles.alignmentMiddleCenter}
          loading="lazy"
          alt=""
          src="/Alignment-Middle-center.svg"
        />
        <img
          className={styles.elementResizingIcon}
          loading="lazy"
          alt=""
          src="/Element-resizing4.svg"
        />
        <img
          className={styles.elementResizingIcon2}
          loading="lazy"
          alt=""
          src="/Element-resizing3@2x.png"
        />
        <div className={styles.frame}>
          <div className={styles.childElementOverlay} />
        </div>
        <div className={styles.childElementResizing} />
        <div className={styles.childElementOverlay2} />
        <div className={styles.childElementOverlay3} />
      </div>
    </div>
  );
};

export default Artwork;
