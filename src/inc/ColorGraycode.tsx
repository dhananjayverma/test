import { FunctionComponent, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import styles from "./Btncode.module.css";

export type ContainerType = {
  className?: string;
};

const navigationItems = [
  { id: "code", label: "Code" },
  { id: "react", label: "React" },
];

const ColorTealcode: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("code");
  const handleNavClick = (id: string) => {
    setActiveNav(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = 170;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const item = navigationItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= scrollPosition) {
            setActiveNav(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navItem = document.getElementById(`navItem-${activeNav}`);
    const sideNav = document.getElementById("sideNavContainer");
    if (navItem && sideNav) {
      const navItemTop = navItem.offsetTop;
      const navItemHeight = navItem.clientHeight;
      const sideNavScrollTop = sideNav.scrollTop;
      const sideNavHeight = sideNav.clientHeight;

      if (navItemTop < sideNavScrollTop + 20) {
        sideNav.scrollTo({ top: navItemTop - 20, behavior: 'smooth' });
      } else if (navItemTop + navItemHeight > sideNavScrollTop + sideNavHeight - 20) {
        sideNav.scrollTo({ top: navItemTop + navItemHeight - sideNavHeight + 20, behavior: 'smooth' });
      }
    }
  }, [activeNav]);
return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.buildByUseCaseParent}>
            <section className={styles.frameParent} id="code">
              <div className={styles.codeParent}>
                <h1 className={styles.code}>Code</h1>
                <div className={styles.importTheButton}>
                  The HBK Product Grey Blue color library is hosted on Github and Storybook as a repo. These can be easily downloaded and used by the developers. 
                </div>
              </div>
              <section className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.codeParent}>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/Frame-59@2x.png"
                      />
                      <div className={styles.gitRepoParent}>
                        <h3 className={styles.gitRepo}>Git Repo</h3>
                        <div className={styles.importTheButton}>
                          React Github Code
                        </div>
                      </div>
                    </div>
                    <Link to="https://github.com/kishankumar9003/DesignSystemToken/blob/main/Color%20Primitive%20.Mode%201.tokens.json">
                    <button className={styles.frameButton}>
                      <div className={styles.caretrightParent}>
                        <img
                          className={styles.caretrightIcon}
                          alt=""
                          src="/CaretRight.svg"
                        />
                        <img
                          className={styles.openInNewIcon}
                          alt=""
                          src="/open-in-new.svg"
                        />
                        <div className={styles.openTheRepo}>Open the Repo</div>
                      </div>
                    </button></Link>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.codeParent}>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.frameItem}
                        loading="lazy"
                        alt=""
                        src="/Frame-591@2x.png"
                      />
                      <div className={styles.gitRepoParent}>
                        <h3 className={styles.gitRepo}>Story Book</h3>
                        <div className={styles.importTheButton}>
                          Repository for the code Snippets
                        </div>
                      </div>
                    </div>
                    <Link to="http://localhost:6009/?path=/story/components-button--primary">
                    <button className={styles.frameWrapper3}>
                      <div className={styles.caretrightGroup}>
                        <img
                          className={styles.caretrightIcon}
                          alt=""
                          src="/CaretRight.svg"
                        />
                        <img
                          className={styles.openInNewIcon}
                          alt=""
                          src="/open-in-new.svg"
                        />
                        <div className={styles.openTheStory}>Open the Story Book</div>
                      </div>
                    </button></Link>
                  </div>
                </div>
              </section>
              <div className={styles.primaryButtonButtonClaParent} id="react">
                <div className={styles.primaryButtonContainer}>
                  <span>
                    {`<!-- Primary button -->`}
                    <br />
                    {``}
                  </span>
                  <span className={styles.button}>{`<button`}</span>
                  <span>{` `}</span>
                  <span className={styles.class}>class</span>
                  <span className={styles.span}>=</span>
                  <span className={styles.hbkBtnHbkBtnPrimary}>
                    "hbk-btn hbk-btn--primary"
                  </span>
                  <span className={styles.button}>
                    {`>`}
                    <br />
                    {``}
                  </span>
                  <span className={styles.span3}>{`  `}</span>
                  <span className={styles.span}>
                    Save changes
                    <br />
                  </span>
                  <span className={styles.button}>
                    {`</button>`}
                    <br />
                    {``}
                  </span>
                  <span>
                    {``}
                    <br />
                    {`<!-- With icon -->`}
                    <br />
                    {``}
                  </span>
                  <span className={styles.button}>{`<button`}</span>
                  <span>{` `}</span>
                  <span className={styles.class}>class</span>
                  <span>="hbk-btn hbk-btn--primary"</span>
                  <span className={styles.button}>
                    {`>`}
                    <br />
                    {``}
                  </span>
                  <span className={styles.span3}>{`  `}</span>
                  <span className={styles.button}>{`<hbk-icon`}</span>
                  <span>{` `}</span>
                  <span className={styles.class}>name</span>
                  <span>=</span>
                  <span className={styles.hbkBtnHbkBtnPrimary}>"plus"</span>
                  <span>{` `}</span>
                  <span className={styles.class}>size</span>
                  <span className={styles.span}>=</span>
                  <span className={styles.hbkBtnHbkBtnPrimary}>"16"</span>
                  <span>{` `}</span>
                  <span className={styles.button}>
                    {`/>`}
                    <br />
                    {``}
                  </span>
                  <span className={styles.span3}>{`  `}</span>
                  <span className={styles.span}>
                    Add component
                    <br />
                  </span>
                  <span className={styles.button}>
                    {`</button>`}
                    <br />
                    {``}
                  </span>
                  <span>
                    {``}
                    <br />
                    {`<!-- Disabled state -->`}
                    <br />
                    {``}
                  </span>
                  <span className={styles.button}>{`<button`}</span>
                  <span>{` `}</span>
                  <span className={styles.class}>class</span>
                  <span>=</span>
                  <span className={styles.hbkBtnHbkBtnPrimary}>
                    "hbk-btn hbk-btn--primary"
                  </span>
                  <span>{` `}</span>
                  <span className={styles.class}>disabled</span>
                  <span className={styles.button}>
                    {`>`}
                    <br />
                    {``}
                  </span>
                  <span className={styles.span3}>{`  `}</span>
                  <span className={styles.span}>
                    Processing…
                    <br />
                  </span>
                  <span className={styles.button}>{`</button>`}</span>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.reactParent}>
                      <h3 className={styles.react}>React</h3>
                      <img
                        className={styles.caretdownIcon}
                        alt=""
                        src="/CaretDown.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent5}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/Frame-8@2x.png"
                    />
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/Frame-2131329391@2x.png"
                    />
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/Frame-2131329392@2x.png"
                    />
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/Frame-2131329393@2x.png"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <aside id="sideNavContainer" className={styles.sideNav}>
          {navigationItems.map((item) => (
            <div
              key={item.id}
              id={`navItem-${item.id}`}
              className={`${styles.navItem} ${
                activeNav === item.id ? styles.navItemActive : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default ColorTealcode;
