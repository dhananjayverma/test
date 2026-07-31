import { FunctionComponent } from "react";
import styles from "./DevelopmentStart.module.css";

export type FrameComponent21Type = {
  className?: string;
};

const DevelopmentStart: FunctionComponent<FrameComponent21Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/development.png"
      />
      <div className={styles.beforeYouBeginParent}>
        <h3 className={styles.beforeYouBegin}>Before you begin</h3>
        <div className={styles.theHbkDesignSystemIsImpleParent}>
          <div className={styles.theHbkDesignContainer}>
            <p className={styles.theHbkDesign}>
              The HBK Design System is implemented with React 18 and TypeScript.
              Make sure you have React and optionally TypeScript installed
              before you start.
            </p>
            <p className={styles.theHbkDesign}>
              You’ll also need a package manager like npm. We use yarn in our
              examples:
            </p>
          </div>
          <div className={styles.yarnAddReact1820ReactDWrapper}>
            <div className={styles.yarnAddReact1820}>
              yarn add react@^18.2.0 react-dom@^18.2.0
              <br />
              yarn add --dev @types/react@^18.2.0 @types/react-dom@^18.2.0
              typescript@~5.4.0
            </div>
          </div>
          <div className={styles.theHbkDesignContainer}>
            <p
              className={styles.theHbkDesign}
            >{`HBK Design System packages are available on npm under the @hbk scope, along with other HBK platform components. `}</p>
            <p className={styles.theHbkDesign}>
              You can view source code for public packages in Bitbucket (HBK
              employees can access private repositories).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStart;