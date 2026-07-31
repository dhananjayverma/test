import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;

  /** Style props */
  footerPosition?: CSSProperties["position"];
  footerTop?: CSSProperties["top"];
  footerLeft?: CSSProperties["left"];
  footerWidth?: CSSProperties["width"];
  footerAlignSelf?: CSSProperties["alignSelf"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  footerPosition,
  footerTop,
  footerLeft,
  footerWidth,
  footerAlignSelf,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
      width: footerWidth,
      alignSelf: footerAlignSelf,
    };
  }, [footerPosition, footerTop, footerLeft, footerWidth, footerAlignSelf]);

  return (
    <section
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <footer className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.heading3}>
              <h3 className={styles.design}>Design</h3>
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.components}>Components</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Patterns</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Foundations</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Figma Kit</div>
              </div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.heading3}>
              <h3 className={styles.design}>Develop</h3>
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.components}>Getting Started</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>React</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Vue</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>HTML</div>
              </div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.heading3}>
              <h3 className={styles.design}>Resources</h3>
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.components}>Documentation</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>GitHub</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Changelog</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Support</div>
              </div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.heading3}>
              <h3 className={styles.design}>Company</h3>
            </div>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.components}>About</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Team</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Blog</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.components}>Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container7}>
          <div className={styles.hbkDesignSystem}>
            © 2026 HBK Design System. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
