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
    "title": "Input Field",
    "value": "",
    "attributes": [
      { "title": "Input Field", "value": "",
        "attributes": [{ "title": "Width", "value": "240", "style": "heighlight-text" }],
      },
      { "title": "Label Icon", "value": "",
        "attributes": [{ "title": "Size", "value": "16", "style": "heighlight-text" }],
      },
      { "title": "Leading Icon", "value": "",
        "attributes": [{ "title": "Size", "value": "20", "style": "heighlight-text" },],
      },
      { "title": "Trailing Icon", "value": "",
        "attributes": [{ "title": "Size", "value": "20", "style": "heighlight-text" }],
      },
      { "title": "Validation Icon", "value": "",
        "attributes": [{ "title": "Size", "value": "14", "style": "heighlight-text" }],
      }
    ],
    "image": "input-5.svg",
  }
];


const InputSpecsSize: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <section >
      <div className={styles.cardList}>
        {specSections.map((section) => (
          <article key={section.title} className={styles.specCard}>
            <div className={styles.infoColumn}>
              <div className={styles.attributeList}>
                {section.attributes?.map((attribute) => (
                  <div className={styles.listItem}>
                    <div key={attribute.title} className={styles.titleRow}>
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
                <div className={clsx(styles.previewImage, styles.heightSet)}>
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

export default InputSpecsSize;
