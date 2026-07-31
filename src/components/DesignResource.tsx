import { FunctionComponent, useState } from "react";
import DesignTables from "./DesignTables";
import styles from "./DesignResource.module.css";

const DesignResource: FunctionComponent = () => {
  const [frameComponent11Items] = useState([
    {
      hBKDesignComponentsLibrary: "HBK Design Components Library",
      hBKDesignComponentsHeight: "unset" as const,
      hBKDesignComponentsDisplay: "unset" as const,
      coreComponentsUsedAcrossHB:
        "Core components used across HBK’s DAQ software, aligned with our React codebase.",
    },
    {
      hBKDesignComponentsLibrary: "HBK Foundations Library",
      hBKDesignComponentsHeight: "unset" as const,
      hBKDesignComponentsDisplay: "unset" as const,
      coreComponentsUsedAcrossHB:
        "Grid, spacing, typography, colors, icons, and tokens — all system-level visual styles.",
    },
    {
      hBKDesignComponentsLibrary: "HBK Paint Styles (Design Tokens)",
      hBKDesignComponentsHeight: "unset" as const,
      hBKDesignComponentsDisplay: "unset" as const,
      coreComponentsUsedAcrossHB:
        "Tokenized color and style definitions used for light/dark theming and scalable UI.",
    },
    {
      hBKDesignComponentsLibrary: "HBK Design Tokens Plugin",
      hBKDesignComponentsHeight: "unset" as const,
      hBKDesignComponentsDisplay: "unset" as const,
      coreComponentsUsedAcrossHB:
        "Apply and swap design tokens directly in Figma. Includes dark mode previewing and legacy color migration tools.",
    },
    {
      hBKDesignComponentsLibrary: "HBK Accessibility Annotations Kit",
      hBKDesignComponentsHeight: "unset" as const,
      hBKDesignComponentsDisplay: "unset" as const,
      coreComponentsUsedAcrossHB:
        "Label structure, semantics, and interaction expectations for dev handoff.",
    },
    {
      hBKDesignComponentsLibrary: "Legacy HBK Design System Library",
      hBKDesignComponentsHeight: "unset" as const,
      hBKDesignComponentsDisplay: "unset" as const,
      coreComponentsUsedAcrossHB:
        "Older HBK components and styles (non-tokenized), still in use in some products.",
    },
  ]);
  return (
    <div className={styles.frameParent}>
      <section className={styles.hbkFigmaResourcesInternalParent}>
        <h3 className={styles.hbkFigmaResources}>
          HBK Figma resources (internal only)
        </h3>
        <main className={styles.accessThePrivateHbkFigmaLParent}>
          <div className={styles.accessThePrivate}>
            Access the private HBK Figma libraries and tools used across our DAQ
            products. These are tailored to match the production component
            codebase and ensure visual and functional consistency.
          </div>
          <div className={styles.frameGroup}>
            {frameComponent11Items.map((item, index) => (
              <DesignTables
                key={index}
                hBKDesignComponentsLibrary={item.hBKDesignComponentsLibrary}
                hBKDesignComponentsHeight={item.hBKDesignComponentsHeight}
                hBKDesignComponentsDisplay={item.hBKDesignComponentsDisplay}
                coreComponentsUsedAcrossHB={item.coreComponentsUsedAcrossHB}
              />
            ))}
            
          </div>
        </main>
      </section>
    </div>
  );
};

export default DesignResource;
