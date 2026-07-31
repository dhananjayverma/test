import { FunctionComponent, useState } from "react";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import GlobaldesignSystem1 from "../components/GlobaldesignSystem1";
import GlobaldesignSystem2 from "../components/GlobaldesignSystem2";
import Footer from "../components/Footer";
import styles from "./GetStartedAboutGlobalDesignSystemCollapsed.module.css";

export type GetStartedAboutGlobalDesignSystemCollapsedType = {};

const GetStartedAboutGlobalDesignSystemCollapsed: FunctionComponent<
  GetStartedAboutGlobalDesignSystemCollapsedType
> = ({}) => {
  const [frameComponent1Items] = useState([
    {
      frame58: "/principle.png",
      frameDivAlignSelf: "stretch" as const,
      frameDivAlignItems: "flex-start" as const,
      frameDivWidth: undefined,
      frameDivHeight: undefined,
      guidingPrinciples: "Guiding Principles",
      guidingPrinciplesAlignSelf: "stretch" as const,
      chooseYourContextToExplore:
        "Know more about our vision, values and principles of Global Design System and how it connects to One HBK vision",
      chooseYourContextAlignSelf: "stretch" as const,
      chooseYourContextDisplay: undefined,
    },
    {
      frame58: "/Frame-581@2x.png",
      frameDivAlignSelf: "stretch" as const,
      frameDivAlignItems: "flex-start" as const,
      frameDivWidth: undefined,
      frameDivHeight: undefined,
      guidingPrinciples: "Foundation",
      guidingPrinciplesAlignSelf: "unset" as const,
      chooseYourContextToExplore:
        "Know more about our building foundation and elements that helps create cohesive, consistent and seamless experience",
      chooseYourContextAlignSelf: "unset" as const,
      chooseYourContextDisplay: "inline-block" as const,
    },
    {
      frame58: "/Frame-582@2x.png",
      frameDivAlignSelf: "stretch" as const,
      frameDivAlignItems: "flex-start" as const,
      frameDivWidth: undefined,
      frameDivHeight: undefined,
      guidingPrinciples: "Components",
      guidingPrinciplesAlignSelf: "unset" as const,
      chooseYourContextToExplore:
        "Know more about our reusable component library that helps consistency in pattern and experience",
      chooseYourContextAlignSelf: "unset" as const,
      chooseYourContextDisplay: "inline-block" as const,
    },
  ]);
  const [frameComponent2Items] = useState([
    {
      foundationsLibrary: "Foundations Library",
      foundationsLibraryHeight: undefined,
      foundationsLibraryDisplay: undefined,
      gridSpacingTypographyColors:
        "Grid, spacing, typography, colors, icons, and tokens — all system-level visual styles.",
      caretRight: "/CaretRight.svg",
      showCaretRightIcon: false,
      download: "/download.svg",
      showDownloadIcon: true,
    },
    {
      foundationsLibrary: "Design Token Library",
      foundationsLibraryHeight: undefined,
      foundationsLibraryDisplay: undefined,
      gridSpacingTypographyColors:
        "Tokenized color and style definitions used for light/dark theming and scalable UI.",
      caretRight: "/download.svg",
      showCaretRightIcon: true,
      download: "/CaretRight.svg",
      showDownloadIcon: false,
    },
    {
      foundationsLibrary: "Design Components Library",
      foundationsLibraryHeight: undefined,
      foundationsLibraryDisplay: undefined,
      gridSpacingTypographyColors:
        "Core components used across HBK’s DAQ software, aligned with our React codebase.",
      caretRight: "/CaretRight.svg",
      showCaretRightIcon: false,
      download: "/download.svg",
      showDownloadIcon: true,
    },
  ]);
  return (
    <div className={styles.getStartedAboutGlobalDesig}>
      <Header />
      <main className={styles.bodyLayout}>
        <SideNavigation />
        <div className={styles.contentColumn}>
          <section className={styles.frameParent}>
            <div className={styles.frameGroup}> 
              <section className={styles.frameContainer}>
                <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/home-banner.svg"
                />
              </div>
              </section>
              <section className={styles.frameSection}>
                <div className={styles.hbkGlobalDesignSystemParent}>
                  <div className={styles.hbkGlobalDesignSystemParent}>
                    <h1 className={styles.hbkGlobalDesign}>
                      HBK Global Design System
                    </h1>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameWrapper4}>
                        <button className={styles.caretrightParent}>
                          <img
                            className={styles.caretrightIcon}
                            alt=""
                            src="/CaretRight.svg"
                          />
                          <div className={styles.exploreSystem}>
                            Explore System
                          </div>
                        </button>
                      </div>
                      <div className={styles.frameWrapper5}>
                        <button className={styles.caretrightGroup}>
                          <img
                            className={styles.caretrightIcon2}
                            alt=""
                            src="/CaretRight.svg"
                          />
                          <div className={styles.viewFigmaKit}>
                            View Figma Kit
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chooseYourContext}>
                    Build cohesive, frictionless experiences across every
                    platform. Delight customers at every touchpoint.
                  </div>
                </div>
                <div className={styles.chooseYourContextContainer}>
                  <p
                    className={styles.weWouldLove}
                  >{`HBK Global Design System is an open-source design system built for product teams across HBK, enabling designers and developers to create cohesive, well-crafted digital experiences. `}</p>
                  <p className={styles.theSystemCombines}>
                    The system combines working code, design tools,
                    comprehensive UX guidelines, and community-driven resources.
                    Rooted in continuous exploration and research, Global Design
                    system provides a complete toolkit of accessible, data-bound
                    components built on ReactJs—helping teams work more
                    efficiently and ship beautiful products faster.
                  </p>
                </div>
              </section>
            </div>
            <section className={styles.frameParent4}>
              {frameComponent1Items.map((item, index) => (
                <GlobaldesignSystem1
                  key={index}
                  frame58={item.frame58}
                  frameDivAlignSelf={item.frameDivAlignSelf}
                  frameDivAlignItems={item.frameDivAlignItems}
                  frameDivWidth={item.frameDivWidth}
                  frameDivHeight={item.frameDivHeight}
                  guidingPrinciples={item.guidingPrinciples}
                  guidingPrinciplesAlignSelf={item.guidingPrinciplesAlignSelf}
                  chooseYourContextToExplore={item.chooseYourContextToExplore}
                  chooseYourContextAlignSelf={item.chooseYourContextAlignSelf}
                  chooseYourContextDisplay={item.chooseYourContextDisplay}
                />
              ))}
            </section>
            <section className={styles.frameWrapper6}>
              <div className={styles.frameParent5}>
                <div className={styles.hbkGlobalDesignSystemParent}>
                  <div className={styles.resourcesParent}>
                    <h3 className={styles.resources}>Resources</h3>
                    <button className={styles.allResourcesParent}>
                      <h3 className={styles.allResources}>All resources</h3>
                      <img
                        className={styles.eastIcon}
                        loading="lazy"
                        alt=""
                        src="/east.svg"
                      />
                    </button>
                    <div className={styles.frameParent6}>
                      <div className={styles.frameWrapper4}>
                        <button className={styles.caretrightParent}>
                          <img
                            className={styles.caretrightIcon}
                            alt=""
                            src="/CaretRight.svg"
                          />
                          <div className={styles.exploreSystem2}>
                            Explore System
                          </div>
                        </button>
                      </div>
                      <div className={styles.frameWrapper5}>
                        <button className={styles.caretrightGroup}>
                          <img
                            className={styles.caretrightIcon2}
                            alt=""
                            src="/CaretRight.svg"
                          />
                          <div className={styles.viewFigmaKit2}>
                            View Figma Kit
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent7}>
                  {frameComponent2Items.map((item, index) => (
                    <GlobaldesignSystem2
                      key={index}
                      foundationsLibrary={item.foundationsLibrary}
                      foundationsLibraryHeight={item.foundationsLibraryHeight}
                      foundationsLibraryDisplay={item.foundationsLibraryDisplay}
                      gridSpacingTypographyColors={
                        item.gridSpacingTypographyColors
                      }
                      caretRight={item.caretRight}
                      showCaretRightIcon={item.showCaretRightIcon}
                      download={item.download}
                      showDownloadIcon={item.showDownloadIcon}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section className={styles.frameParent8}>
              <div className={styles.frameParent9}>
                <div className={styles.frameWrapper10}>
                  <div className={styles.contributeToUsParent}>
                    <h2 className={styles.contributeToUs}>Contribute to us</h2>
                  </div>
                </div>
                <div className={styles.chooseYourContextContainer2}>
                  <p
                    className={styles.weWouldLove}
                  >{`We would love to hear your thoughts and suggestions on Global Design System. `}</p>
                  <p className={styles.theSystemCombines}>
                    Feel free to reach out to the core team via email or write a
                    post on our Teams channel.
                  </p>
                </div>
              </div>
              <div className={styles.frameParent11}>
                <button className={styles.frameWrapper13}>
                  <div className={styles.caretrightParent4}>
                    <div className={styles.emailUs}>Email Us</div>
                  </div>
                </button>
                <button className={styles.frameWrapper14}>
                  <div className={styles.caretrightParent5}>
                    <div className={styles.joinOurTeams}>
                      Join our Teams Channel
                    </div>
                  </div>
                </button>
              </div>
            </section>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default GetStartedAboutGlobalDesignSystemCollapsed;
