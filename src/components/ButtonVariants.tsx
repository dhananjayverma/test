import { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "../inc/BtnSpecifications.module.css";

export type ContainerType = {
  className?: string;
};

export interface SpecSection {
  title: string;
  value: string;
  style?: string;
  image?: string;
  attributes?: SpecSection[];
};

const specSections: SpecSection[] = [
  {
    "title": "Primary Button",
    "value": "",
    "attributes": [
      { "title": "Button", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Background color", "value": "#006C8E", "style": "heighlight-text" }] },
      { "title": "Button Text", "value": "", "image": "Type-icon1.svg",
        "attributes": [{"title": "Text color", "value": "#FFFFFF", "style": "heighlight-text" },
                        {"title": "Text Style", "value": "Label/S", "style": "heighlight-text" }
        ] },
      { "title": "Icon", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Icon color", "value": "#FFFFFF", "style": "heighlight-text" }] },
    ],
    "image": "btn-2.svg",
  },
  {
    "title": "Secondary Button",
    "value": "",
    "attributes": [
      { "title": "Button", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Border Color", "value": "#006C8E", "style": "heighlight-text" },
                        {"title": "Border Weight", "value": "1", "style": "heighlight-text" }
        ] },
      { "title": "Button Text", "value": "", "image": "Type-icon1.svg",
        "attributes": [{"title": "Text color", "value": "#006C8E", "style": "heighlight-text" },
                        {"title": "Text Style", "value": "Label/S", "style": "heighlight-text" }
        ] },
      { "title": "Icon", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Icon color", "value": "#006C8E", "style": "heighlight-text" }] },
    ],
    "image": "btn-3.svg",
  },
  {
    "title": "Tertiary Button",
    "value": "",
    "attributes": [
      { "title": "Button Text", "value": "", "image": "Type-icon1.svg",
        "attributes": [{"title": "Text color", "value": "#006C8E", "style": "heighlight-text" },
                        {"title": "Text Style", "value": "Label/S", "style": "heighlight-text" }
        ] },
      { "title": "Icon", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Icon color", "value": "#006C8E", "style": "heighlight-text" }] },
    ],
    "image": "btn-4.svg",
  },
  {
    "title": "Hyperlink",
    "value": "",
    "attributes": [
      { "title": "Button Text", "value": "", "image": "Type-icon1.svg",
        "attributes": [{"title": "Text color", "value": "#006C8E", "style": "heighlight-text" },
                        {"title": "Text Style", "value": "Label/S-Underline", "style": "heighlight-text" }
        ] },
      { "title": "Icon", "value": "", "image": "Type-icon.svg",
        "attributes": [{"title": "Icon color", "value": "#006C8E", "style": "heighlight-text" }] },
    ],
    "image": "btn-5.svg",
  }
];


const ButtonVariant: FunctionComponent<ContainerType> = ({ className = "" }) => {
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
                {section.attributes?.map((attribute) => (
                  <div className={styles.listItem}>
                    <div key={attribute.title} className={styles.titleRow}>
                      <span className={styles.accentDot} ><img src={attribute.image}></img></span>
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

export default ButtonVariant;
