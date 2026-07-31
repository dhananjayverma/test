import { FunctionComponent } from "react";
import styles from "./ColorUsages.module.css";

const ColorUsage: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <main className={styles.frameGroup}>
        <header className={styles.colorUsageParent}>
          <h1 className={styles.colorUsage}>Color Usage</h1>
          <div className={styles.coloursAreUsed}>
            Colours are used minimally, and when necessary to represent visual
            keys like: Action, Background, Information, State.
          </div>
        </header>
        <h2 className={styles.brandNeutral}>{`Brand & Neutral`}</h2>
        <section className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.colourRoleParent}>
              <div className={styles.colourRole}>Colour Role</div>
              <div className={styles.colourName}>Colour Name</div>
              <div className={styles.usage}>Usage</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.primaryParent}>
                <div className={styles.primary}>Primary</div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameChild} />
                  <div className={styles.ctas}>Brand 600</div>
                </div>
                <div className={styles.ctas}>CTAs</div>
              </div>
              <div className={styles.primaryParent}>
                <div className={styles.primary}>Neutral</div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameItem} />
                  <div className={styles.ctas}>Grey 900</div>
                </div>
                <div className={styles.ctas}>Backgrounds and Texts</div>
              </div>
            </div>
          </div>
        </section>
        <h2 className={styles.brandNeutral}>Accent Colors</h2>
        <section className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.colourRoleParent}>
              <div className={styles.colourRole}>Colour Role</div>
              <div className={styles.colourName}>Colour Name</div>
              <div className={styles.usage}>Usage</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.primaryParent}>
                <div className={styles.primary}>Success</div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameInner} />
                  <div className={styles.ctas}>Accent Green 600</div>
                </div>
                <div className={styles.ctas}>
                  Confirmations, positive messaging, success states
                </div>
              </div>
              <div className={styles.primaryParent}>
                <div className={styles.primary}>Information</div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameChild2} />
                  <div className={styles.ctas}>Accent Blue 600</div>
                </div>
                <div className={styles.ctas}>
                  Informational icons, device indicators, secondary action
                  buttons
                </div>
              </div>
              <div className={styles.primaryParent}>
                <div className={styles.primary}>Warning</div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameChild3} />
                  <div className={styles.ctas}>Accent Yellow 600</div>
                </div>
                <div className={styles.ctas}>
                  Warnings, caution messages, system notifications
                </div>
              </div>
              <div className={styles.primaryParent}>
                <div className={styles.primary}>{`Error & Utility`}</div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameChild4} />
                  <div className={styles.ctas}>Accent Red 600</div>
                </div>
                <div className={styles.ctas}>
                  Error messages, critical alerts, secondary action action
                  buttons
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <b className={styles.buildByUse}>Build by use case</b>
      <section className={styles.frameParent10}>
        <div className={styles.guidelinesParent}>
          <h2 className={styles.guidelines}>Guidelines</h2>
          <div className={styles.theseRulesApply}>
            These rules apply to every team using the HBK design system. They
            are based on common mistakes observed in early product builds and
            informed by WCAG 2.1 guidelines.
          </div>
        </div>
        <footer className={styles.frameFooter}>
          <section className={styles.frameParent11}>
            <div className={styles.iconParent}>
              <img className={styles.icon} alt="" src="/Icon3.svg" />
              <div className={styles.do}>Do</div>
            </div>
            <div className={styles.frameParent12}>
              <div className={styles.useBlue6000cb3adAsTheWrapper}>
                <div className={styles.useBlue600Container}>
                  <span className={styles.use}>{`Use `}</span>
                  <b
                    className={styles.blue6000cb3ad}
                  >{`Blue 600 (#0CB3AD) `}</b>
                  <span className={styles.use}>
                    as the primary action color for all interactive elements —
                    buttons, links, active navigation states, and focus rings.
                  </span>
                </div>
              </div>
              <div className={styles.useYellow900B8720aForAWrapper}>
                <div className={styles.useBlue600Container}>
                  <span className={styles.use}>{`Use `}</span>
                  <b className={styles.blue6000cb3ad}>Yellow 900 (#B8720A)</b>
                  <span className={styles.use}>
                    {" "}
                    for any warning text labels. The 900 stop is the minimum
                    that meets AA against white.
                  </span>
                </div>
              </div>
              <div className={styles.frameParent13}>
                <div className={styles.bgBrandSoftWrapper}>
                  <div className={styles.bgBrandSoft}>bg-brand-soft</div>
                </div>
                <div className={styles.alwaysUseAContainer}>
                  <p
                    className={styles.alwaysUseA}
                  >{`Always use a token name in design files and code       `}</p>
                  <p className={styles.bgBrandSoft2}>
                    bg-brand-soft never a raw hex value. Tokens make system-wide
                    updates possible without breaking anything.
                  </p>
                </div>
              </div>
              <div className={styles.useYellow900B8720aForAWrapper}>
                <div className={styles.pairSemanticColor}>
                  Pair semantic color with a secondary signal. An error message
                  should have a red border + a warning icon + descriptive error
                  text. All three together.
                </div>
              </div>
            </div>
          </section>
          <section className={styles.frameParent11}>
            <div className={styles.warningcircleParent}>
              <img className={styles.icon} alt="" src="/WarningCircle.svg" />
              <div className={styles.do}>Don’t</div>
            </div>
            <div className={styles.frameParent12}>
              <div className={styles.useBlue5002f80edAsAnIWrapper}>
                <div className={styles.useBlue500Container}>
                  <span className={styles.use}>{`Use `}</span>
                  <b className={styles.blue6000cb3ad}>Blue 500 (#2F80ED)</b>
                  <span className={styles.use}>
                    {" "}
                    as an interactive or action color on white backgrounds. It
                    fails WCAG AA for text and UI components.
                  </span>
                </div>
              </div>
              <div className={styles.useYellow80097762eForTWrapper}>
                <div className={styles.useYellow800Container}>
                  <span className={styles.use}>{`Use `}</span>
                  <b className={styles.blue6000cb3ad}>Yellow 800 (#97762E)</b>
                  <span className={styles.use}>
                    {" "}
                    for text. It only achieves 4.24:1 contrast against white — a
                    clear WCAG fail. Use it only for icons and decorative
                    borders.
                  </span>
                </div>
              </div>
              <div className={styles.hardCodeHexValuesLike007Parent}>
                <div className={styles.hardCodeHexValues}>
                  Hard-code hex values like #0072C6 directly into components or
                  stylesheets. This creates unmaintainable code and breaks any
                  future rebrand or theme change.
                </div>
                <div className={styles.e6f4f8Wrapper}>
                  <div className={styles.e6f4f8}>#E6F4F8</div>
                </div>
              </div>
              <div className={styles.useYellow80097762eForTWrapper}>
                <div className={styles.pairSemanticColor}>
                  Rely on color alone to communicate state. A red border with no
                  text explanation fails users with color blindness and fails
                  WCAG success criterion 1.4.1.
                </div>
              </div>
            </div>
          </section>
        </footer>
      </section>
    </div>
  );
};

export default ColorUsage;
