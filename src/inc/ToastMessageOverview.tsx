import { FunctionComponent, useState } from "react";
import styles from "./ButtonAnatomy.module.css";
import clsx from "clsx";

export type ContainerType = {
  className?: string;
  label?: string;
};

const buttonElements = [
  { id: 1, name: "Container", type: "Mandatory", description: "Holds all toast content and defines the background, spacing, and visual appearance." },
  { id: 2, name: "Status Icon", type: "Mandatory", description: "Represents the message type such as Success, Error, Warning, or Information." },
  { id: 3, name: "Text Container", type: "Mandatory", description: "Groups the title and body text together." },
  { id: 4, name: "Title", type: "Optional", description: "Provides a short summary of the notification." },
  { id: 5, name: "Body Text", type: "Mandatory", description: "Describes the notification or action in a concise manner." },
  { id: 6, name: "Close Icon", type: "Optional", description: "Allows users to dismiss the toast before it disappears automatically." },
];

const buttonTypes = [
  {
    name: "Success Toast",
    description: "Success toast messages confirm that a user action or system process has been completed successfully. They provide positive feedback, reassuring users that the requested operation was performed without any issues and that no further action is required.",
    examples: ["Profile updated.", "File uploaded successfully."],
    label: "Label",
    icon: "M8.33333 0C9.48611 0 10.5698 0.218424 11.5837 0.655924C12.5975 1.09342 13.4794 1.68738 14.2293 2.43734C14.9793 3.1873 15.5732 4.06918 16.0107 5.08301C16.4482 6.0969 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4482 10.5698 16.0107 11.5837C15.5732 12.5975 14.9793 13.4794 14.2293 14.2293C13.4794 14.9793 12.5975 15.5732 11.5837 16.0107C10.5698 16.4482 9.48611 16.6667 8.33333 16.6667C7.18056 16.6667 6.0969 16.4482 5.08301 16.0107C4.06918 15.5732 3.1873 14.9793 2.43734 14.2293C1.68738 13.4794 1.09342 12.5975 0.655924 11.5837C0.218424 10.5698 0 9.48611 0 8.33333C0 7.18056 0.218424 6.0969 0.655924 5.08301C1.09342 4.06918 1.68738 3.1873 2.43734 2.43734C3.1873 1.68738 4.06918 1.09342 5.08301 0.655924C6.0969 0.218424 7.18056 0 8.33333 0ZM6.66667 9.66634L4.50033 7.5L3.33333 8.66699L6.66667 12.0003L13.3333 5.33366L12.1663 4.16667L6.66667 9.66634Z",
    fill:"#2EA345",
    light:"#D6FBE0",
  },
  {
    name: "Error Toast",
    description: "Error toast messages notify users when an action cannot be completed due to a problem or system failure. They should clearly communicate that something went wrong and, where possible, guide users toward the next step or corrective action.",
    examples: ["Upload unsuccessful.", "Something went wrong."],
    label: "Label",
    icon: "M8.33333 0C9.48611 0 10.5698 0.218424 11.5837 0.655924C12.5975 1.09342 13.4794 1.68738 14.2293 2.43734C14.9793 3.1873 15.5732 4.06918 16.0107 5.08301C16.4482 6.0969 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4482 10.5698 16.0107 11.5837C15.5732 12.5975 14.9793 13.4794 14.2293 14.2293C13.4794 14.9793 12.5975 15.5732 11.5837 16.0107C10.5698 16.4482 9.48611 16.6667 8.33333 16.6667C7.18056 16.6667 6.0969 16.4482 5.08301 16.0107C4.06918 15.5732 3.1873 14.9793 2.43734 14.2293C1.68738 13.4794 1.09342 12.5975 0.655924 11.5837C0.218424 10.5698 0 9.48611 0 8.33333C0 7.18056 0.218424 6.0969 0.655924 5.08301C1.09342 4.06918 1.68738 3.1873 2.43734 2.43734C3.1873 1.68738 4.06918 1.09342 5.08301 0.655924C6.0969 0.218424 7.18056 0 8.33333 0ZM8.33333 7.16634L5.33366 4.16667L4.16667 5.33366L7.16634 8.33333L4.16667 11.333L5.33366 12.5L8.33333 9.50033L11.333 12.5L12.5 11.333L9.50033 8.33333L12.5 5.33366L11.333 4.16667L8.33333 7.16634Z",
    fill:"#C5281C",
    light:"#FFDAD9",
  },
  {
    name: "Warning Toast",
    description: "Warning toast messages inform users about situations that may require their attention before proceeding. They highlight potential issues or risks without interrupting the user's workflow, allowing them to take preventive action if needed.",
    examples: ["Storage is almost full.", "Session will expire soon."],
    label: "Label",
    icon: "M8.33333 12.5C8.56944 12.5 8.76736 12.4201 8.92708 12.2604C9.08681 12.1007 9.16667 11.9028 9.16667 11.6667C9.16667 11.4306 9.08681 11.2326 8.92708 11.0729C8.76736 10.9132 8.56944 10.8333 8.33333 10.8333C8.09722 10.8333 7.89931 10.9132 7.73958 11.0729C7.57986 11.2326 7.5 11.4306 7.5 11.6667C7.5 11.9028 7.57986 12.1007 7.73958 12.2604C7.89931 12.4201 8.09722 12.5 8.33333 12.5ZM7.5 9.16667H9.16667V4.16667H7.5V9.16667ZM8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667Z",
    fill:"#D9B544",
    light:"#FFF1C7",
  },
  {
    name: "Information Toast",
    description: "Information toast messages provide users with helpful updates about system events, ongoing processes, or general notifications. They are intended to keep users informed without requiring immediate interaction or disrupting their current task.",
    examples: ["New update available."],
    label: "Label",
    icon: "M8.33335 4.16675C8.09724 4.16675 7.89933 4.24661 7.7396 4.40633C7.57988 4.56605 7.50002 4.76397 7.50002 5.00008C7.50002 5.23619 7.57988 5.43411 7.7396 5.59383C7.89933 5.75355 8.09724 5.83342 8.33335 5.83342C8.56946 5.83342 8.76738 5.75355 8.9271 5.59383C9.08683 5.43411 9.16669 5.23619 9.16669 5.00008C9.16669 4.76397 9.08683 4.56605 8.9271 4.40633C8.76738 4.24661 8.56946 4.16675 8.33335 4.16675ZM9.16669 7.50008H7.50002L7.50002 12.5001H9.16669V7.50008ZM8.33335 8.2016e-05C9.48613 8.2016e-05 10.5695 0.218832 11.5834 0.656332C12.5972 1.09383 13.4792 1.68758 14.2292 2.43758C14.9792 3.18758 15.5729 4.06953 16.0104 5.08341C16.4479 6.0973 16.6667 7.18064 16.6667 8.33342C16.6667 9.48619 16.4479 10.5695 16.0104 11.5834C15.5729 12.5973 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.573 11.5834 16.0105C10.5695 16.448 9.48613 16.6667 8.33335 16.6667C7.18058 16.6667 6.09724 16.448 5.08335 16.0105C4.06946 15.573 3.18752 14.9792 2.43752 14.2292C1.68752 13.4792 1.09377 12.5973 0.656271 11.5834C0.218771 10.5695 2.09808e-05 9.48619 2.09808e-05 8.33342C2.09808e-05 7.18064 0.218771 6.0973 0.656271 5.08341C1.09377 4.06953 1.68752 3.18758 2.43752 2.43758C3.18752 1.68758 4.06946 1.09383 5.08335 0.656332C6.09724 0.218832 7.18058 8.2016e-05 8.33335 8.2016e-05Z",
    fill:"#2A73D4",
    light:"#DEF0FF",
  },
];

const navigationItems = [
  { id: "anatomy-of-a-toast", label: "Anatomy of a Toast Message" },
  { id: "types-of-toast", label: "Types of Toast Messages" },
  { id: "best-practices", label: "Best Practices" },
];

const ToastMessageOverview: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [activeNav, setActiveNav] = useState("anatomy-of-a-toast");
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
  return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      <div className={styles.page}>
        <div className={styles.content}>
          <section className={styles.section} id="anatomy-of-a-toast">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Anatomy of a Toast Message</h3>
              <p className={styles.sectionText}>
                Toast messages follow a consistent structure with mandatory and optional elements to ensure clear communication while maintaining a lightweight and non-intrusive experience.
              </p>
            </div>
            <div className={styles.previewCard}>
              <div className={clsx(styles.previewSurface, styles.toastwidth)}>
                <img src="/toast-anatomy.svg" alt="Toast Anatomy" className={styles.previewImage} />
              </div>
            </div>
            <div className={styles.sectionHeader}>
              <h3 className={styles.headingTitle}>Elements of a Toast Message</h3>
              <div className={styles.tableWrap}>
                <div className={styles.tableHeader}>
                  <span className={styles.colNo}>S.No.</span>
                  <span className={styles.colElement}>Element</span>
                  <span className={styles.colType}>Element Type</span>
                  <span className={styles.colDesc}>Description</span>
                </div>
                {buttonElements.map((element) => (
                  <div key={element.id} className={styles.tableRow}>
                    <span className={styles.colNo}>{element.id}</span>
                    <span className={styles.colElement}>{element.name}</span>
                    <span className={styles.colType}>{element.type}</span>
                    <span className={styles.colDesc}>{element.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className={styles.divider} />
          <section className={styles.section} id="types-of-toast">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Types of Toast Messages</h3>
              <p className={styles.sectionText}>
                Toast messages communicate different system states using appropriate colors and icons while maintaining a consistent layout.
              </p>
            </div>
            <div className={styles.typesSection}>
              {buttonTypes.map((type, idx) => (
                <div className={styles.sectiontwo}>
                  <div className={styles.typeBlock} key={idx}>
                    <h3 className={styles.typeName}>{type.name}</h3>
                    <p className={styles.typeDescription}>{type.description}</p>
                    <div className={styles.examplesList}>
                      {type.examples.map((example, i) => (
                        <span className={styles.exampleBadge} key={i}>
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.buttonSection}>
                    <div className={styles.buttonBox}>
                      <div className={styles.toastBox} style={{ backgroundColor: type.light, borderColor: type.fill }}>
                        <button className={styles.toastButton} type="button" aria-label={type.label}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#121212"/></svg></button>
                        <div className={styles.toastIcon}>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={type.icon} fill={type.fill} /></svg>
                        </div>
                        <div className={styles.toastContent}>
                          <div className={styles.toastTitle}>Title</div>
                          <div className={styles.toastDescription}>Body text appears here</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className={styles.divider} />
          <section className={styles.section} id="best-practices">
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Best Practices</h3>
            </div>
            <div className={styles.dosDontsGrid}>
              <div className={styles.dosCard}>
                <div className={styles.cardTitle}>
                  Do
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use short and meaningful messages.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Display one clear outcome per toast.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Use appropriate status colors and icons.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Keep the body text concise and actionable.</li>
                  <li><span className={styles.bullet}><img alt="green-check" src="/green-check.svg"/></span> Auto-dismiss informational messages after a few seconds.</li>
                </ul>
              </div>
              <div className={styles.dontsCard}>
                <div className={styles.cardTitle}>
                  Don’t
                </div>
                <ul className={styles.list}>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not display lengthy paragraphs inside a toast.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not stack too many toast messages simultaneously.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not use toast messages for critical confirmations or destructive actions.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not rely only on color; always include an appropriate status icon.</li>
                  <li><span className={styles.bullet}><img alt="red-close" src="/red-close.svg"/></span> Do not block user interaction with a toast notification.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <aside className={styles.sideNav}>
          {navigationItems.map((item) => (
            <div
              key={item.id}
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

export default ToastMessageOverview;
