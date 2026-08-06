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
