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
    "title": "Input",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Code", "value": "#D4D4D8", "style": "heighlight-text" }] },
    ],
    "image": "input-1.svg",
  },
  {
    "title": "Filled",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Color", "value": "#71717A", "style": "heighlight-text" }] },
      { "title": "Placeholder", "value": "",
        "attributes": [{"title": "Text Style", "value": "Label/S", "style": "heighlight-text" }] },
    ],
    "image": "input-2.svg",
  },
  {
    "title": "Password",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Color", "value": "#71717A", "style": "heighlight-text" }] },
      { "title": "Placeholder", "value": "",
        "attributes": [{"title": "Text Decoration", "value": "None", "style": "heighlight-text" },
                        {"title": "Letter Spacing", "value": "15", "style": "heighlight-text" },
                        {"title": "Font Size", "value": "20", "style": "heighlight-text" },
                        {"title": "Font Weight", "value": "Semi Bold", "style": "heighlight-text" },
                        {"title": "Line Height", "value": "28", "style": "heighlight-text" }
        ] },
    ],
    "image": "input-3.svg",
  },
  {
    "title": "Validation Text Container",
    "value": "",
    "attributes": [
      { "title": "Input Container", "value": "",
        "attributes": [{"title": "Border Code", "value": "#C5281C", "style": "heighlight-text" }] },
    ],
    "image": "input-4.svg",
  }
];


const InputSpecsVariant: FunctionComponent<ContainerType> = ({ className = "" }) => {
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
                <div className={clsx(styles.previewImage, styles.height300)}>
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

export default InputSpecsVariant;
