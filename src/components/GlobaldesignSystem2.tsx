import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GlobaldesignSystem2.module.css";

export type FrameComponent2Type = {
  className?: string;
  foundationsLibrary?: string;
  gridSpacingTypographyColors?: string;
  caretRight?: string;
  showCaretRightIcon?: boolean;
  download?: string;
  showDownloadIcon?: boolean;

  /** Style props */
  foundationsLibraryHeight?: CSSProperties["height"];
  foundationsLibraryDisplay?: CSSProperties["display"];
};

const GlobaldesignSystem2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  foundationsLibrary,
  foundationsLibraryHeight,
  foundationsLibraryDisplay,
  gridSpacingTypographyColors,
  caretRight,
  showCaretRightIcon,
  download,
  showDownloadIcon,
}) => {
  const foundationsLibraryStyle: CSSProperties = useMemo(() => {
    return {
      height: foundationsLibraryHeight,
      display: foundationsLibraryDisplay,
    };
  }, [foundationsLibraryHeight, foundationsLibraryDisplay]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/Frame-59.svg"
          />
          <div className={styles.foundationsLibraryParent}>
            <h3
              className={styles.foundationsLibrary}
              style={foundationsLibraryStyle}
            >
              {foundationsLibrary}
            </h3>
            <div className={styles.gridSpacingTypography}>
              {gridSpacingTypographyColors}
            </div>
          </div>
        </div>
        <button className={styles.frameContainer}>
          <div className={styles.caretrightParent}>
            {!!showCaretRightIcon && (
              <img className={styles.caretrightIcon} alt="" src={caretRight} />
            )}
            {!!showDownloadIcon && (
              <img className={styles.downloadIcon} alt="" src={download} />
            )}
            <div className={styles.downloadKit}>Download Kit</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GlobaldesignSystem2;
