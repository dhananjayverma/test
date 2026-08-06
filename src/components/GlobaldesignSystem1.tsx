import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GlobaldesignSystem1.module.css";

export type FrameComponent1Type = {
  className?: string;
  frame58?: string;
  guidingPrinciples?: string;
  chooseYourContextToExplore?: string;

  /** Style props */
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  guidingPrinciplesAlignSelf?: CSSProperties["alignSelf"];
  chooseYourContextAlignSelf?: CSSProperties["alignSelf"];
  chooseYourContextDisplay?: CSSProperties["display"];
};

const GlobaldesignSystem1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  frame58,
  frameDivAlignSelf,
  frameDivAlignItems,
  frameDivWidth,
  frameDivHeight,
  guidingPrinciples,
  guidingPrinciplesAlignSelf,
  chooseYourContextToExplore,
  chooseYourContextAlignSelf,
  chooseYourContextDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      alignItems: frameDivAlignItems,
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivAlignSelf, frameDivAlignItems, frameDivWidth, frameDivHeight]);

  const guidingPrinciplesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: guidingPrinciplesAlignSelf,
    };
  }, [guidingPrinciplesAlignSelf]);

  const chooseYourContextStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: chooseYourContextAlignSelf,
      display: chooseYourContextDisplay,
    };
  }, [chooseYourContextAlignSelf, chooseYourContextDisplay]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <img className={styles.frameChild} loading="lazy" alt="" src={frame58} />
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper} style={frameDivStyle}>
            <h3
              className={styles.guidingPrinciples}
              style={guidingPrinciplesStyle}
            >
              {guidingPrinciples}
            </h3>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <button className={styles.caretrightParent}>
                  <img
                    className={styles.caretrightIcon}
                    alt=""
                    src="/CaretRight.svg"
                  />
                  <div className={styles.exploreSystem}>Explore System</div>
                </button>
              </div>
              <div className={styles.frameWrapper2}>
                <button
                  className="flex items-center justify-center text-sm font-bold px-7 py-3.5 rounded-[16px] border-2 text-foreground hover:bg-muted transition-all duration-200"
                  style={{ borderColor: "#005B9A35", color: "#000" }}
                >
                  View Figma Kit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.chooseYourContext}
          style={chooseYourContextStyle}
        >
          {chooseYourContextToExplore}
        </div>
      </div>
    </div>
  );
};

export default GlobaldesignSystem1;
