import { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "../inc/Inputspecs.module.css";

export type ContainerType = {
  className?: string;
};

export interface SpecSection {
  title: string;
  value: string;
  style?: string;
  attributes?: SpecSection[];
  image?: string;
};

const specSections: SpecSection[] = [
  {
    "title": "Default",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Code", "value": "#D4D4D8", "style": "heighlight-text" }] },
    ],
    "image": "input-6.svg",
  },
  {
    "title": "Hover",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Weight", "value": "1", "style": "heighlight-text" }] },
    ],
    "image": "input-7.svg",
  },
  {
    "title": "Active",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Color", "value": "#71717A", "style": "heighlight-text" }] },
    ],
    "image": "input-8.svg",
  },
  {
    "title": "Pressed",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Code", "value": "#71717A", "style": "heighlight-text" }] },
    ],
    "image": "input-9.svg",
  },
  {
    "title": "Disabled",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Code", "value": "#121212, 24%", "style": "heighlight-text" }] },
    ],
    "image": "input-10.svg",
  },
];


const InputSpecsStates: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <section >
      <div className={styles.cardList}>
        {specSections.map((section) => (
          <article key={section.title} className={styles.specCard}>
            <div className={styles.infoColumn}>
              <div className={styles.titleRow}>
                <h3 className={styles.headingTitle}>{section.title}</h3>
              </div>
              <div className={styles.attributeList}>
                {section.attributes?.map((attribute, idx) => (
                  <div key={idx} className={styles.listItem}>
                    <div className={styles.titleRow}>
                      <span className={styles.accentDot} ><img src="./type-icon-3.svg"></img></span>
                      <h3 className={styles.subTitle}>{attribute.title}</h3>
                    </div>

                    {attribute.attributes?.map((attr) => (
                      <div
                        key={attr.title}
                        className={styles.attributeRow}
                      >
                        <span className={styles.attributeName}>
                          {attr.title}
                        </span>

                        <div className={styles.attributeValue}>
                          <span
                            className={clsx(
                              attr.style &&
                                styles[attr.style as keyof typeof styles]
                            )}
                          >
                            {attr.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.previewColumn}>
              <div className={styles.previewSurface}>
                <div className={styles.previewImage}>
                  <img src={section.image} ></img>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InputSpecsStates;
