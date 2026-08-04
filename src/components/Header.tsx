import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  hBKNewLogo1?: string;
};
const handleClick = (): void => {
  
};
const openSidebar = (): void => {
  const sidebar = document.getElementById("sidebar_nav");
  if (sidebar) {
    sidebar.style.display = "flex";
  }
};
const Header: FunctionComponent<HeaderType> = ({
  className = "",
  hBKNewLogo1 = "/HBK-New-Logo-1.svg",
}) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.hbkNewLogo1Wrapper}>
          <Link to="/">
            <img
              className={styles.hbkNewLogo1Icon}
              loading="lazy"
              alt=""
              src={hBKNewLogo1}
            />
          </Link>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.designSystemWrapper}>
                <div className={styles.designSystem}>Design System</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.designSystemWrapper}>
                <div className={styles.designSystem} >Connect with Us</div>
              </div>
            </div>
            <div className={styles.navbar_menu} onClick={openSidebar}>
              <img className={styles.image} alt="" src="/navmenu.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
