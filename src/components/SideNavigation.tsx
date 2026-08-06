import { FunctionComponent, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import styles from "./SideNavigation.module.css";

export type SideNavigationType = {
  className?: string;
};
export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  icon?: string;
  disabled?: boolean;
  style?: string;

  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    "id": "get-started",
    "label": "Get Started",
    "icon": "get_started.svg",
    "subItems": [
      { "id": "get-started-1", "label": "About Global Design System", "path": "/design-system" },
      { "id": "get-started-2", "label": "Vision", "path": "/vision" },
      { "id": "get-started-3", "label": "Design Philosophy", "path": "/design-philosophy" },
      { "id": "get-started-4", "label": "Design", "path": "/design" },
      { "id": "get-started-5", "label": "Development", "path": "/development" },
      { "id": "get-started-6", "label": "Content Design", "style": "disabled" },
    ],
  },
  {
    "id": "Whats-new",
    "label": "What's New",
    "icon": "whats_new.svg",
    "style": "disabled"
  }
];
const designItems: MenuItem[] = [
  {
    "id": "foundations",
    "label": "Foundations",
    "icon": "foundations.svg",
    "subItems": [
      {
        "id": "foundations-1",
        "label": "Color",
        "path": "/color",
        "subItems": [
          { "id": "foundations-1-1", "label": "Product Strong Blue", "path": "/color-product-strong-blue" },
          { "id": "foundations-1-2", "label": "Product Teal Blue", "path": "/color-product-teal-blue" },
          { "id": "foundations-1-3", "label": "Product Grey Blue", "path": "/color-product-grey-blue" },
          { "id": "foundations-1-4", "label": "Product Dark Blue", "path": "/color-product-dark-blue" },
        ]
      },
      { "id": "foundations-2", "label": "Typography", "path": "/typography" },
      { "id": "foundations-3", "label": "Spacing", "path": "/spacing" },
      { "id": "foundations-4", "label": "Grid & Layout", "style": "disabled" },
      { "id": "foundations-5", "label": "Elevation", "style": "disabled" },
      { "id": "foundations-6", "label": "Icon", "style": "disabled" },
      // { "id": "foundations-6", "label": "Icon", "path": "/icon-library" }
      { "id": "foundations-7", "label": "Product Icon", "path": "/product-icon" },
      { "id": "foundations-8", "label": "Imagery", "style": "disabled" },
      { "id": "foundations-9", "label": "Illustration", "style": "disabled" },
    ],
  },
  {
    "id": "components",
    "label": "Components",
    "icon": "components.svg",
    "subItems": [
      { "id": "components-1", "label": "Avatar", "style": "disabled" },
      { "id": "components-2", "label": "Badges", "style": "disabled" },
      { "id": "components-3", "label": "Datagrid", "style": "disabled" },
      {
        "id": "components-4",
        "label": "Call to Actions",
        "subItems": [
          { "id": "components-4-1", "label": "Button", "path": "/button" },
          { "id": "components-4-2", "label": "Icon Button", "style": "disabled" },
        ]
      },
      {
        "id": "components-5",
        "label": "Form Elements",
        "subItems": [
          { "id": "components-5-1", "label": "Input Field", "path": "/input-field" },
          { "id": "components-5-2", "label": "Dropdown", "style": "disabled" },
          { "id": "components-5-3", "label": "Search Box", "style": "disabled" },
          { "id": "components-5-4", "label": "Date Picker", "style": "disabled" },
          { "id": "components-5-5", "label": "Datalist", "style": "disabled" },
          { "id": "components-5-6", "label": "Radio Button", "style": "disabled" },
          { "id": "components-5-7", "label": "Checkbox", "path": "/checkbox" },
          { "id": "components-5-8", "label": "Text Area", "style": "disabled" },
          { "id": "components-5-9", "label": "Toggle Switch", "style": "disabled" },
          { "id": "components-5-10", "label": "Upload Box", "style": "disabled" },
        ]
      },
      { "id": "components-6", "label": "Progress Indicator", "style": "disabled" },
      { "id": "components-7", "label": "Navigation", "style": "disabled" },
      { "id": "components-8", "label": "Toast Message", "path": "/toast-message" },
    ]
  },
  {
    "id": "patterns",
    "label": "Patterns",
    "icon": "pattern.svg",
    "style": "disabled",
    "subItems": [
      { "id": "patterns-1", "label": "Navigation", "style": "disabled" },
      { "id": "patterns-2", "label": "Modal Window", "style": "disabled" },
      { "id": "patterns-3", "label": "Registraion", "style": "disabled" },
    ],
  },
  {
    "id": "template",
    "label": "Template",
    "icon": "template.svg",
    "subItems": [
      { "id": "template-1", "label": "Sign In", "path": "/sign-in" },
      { "id": "template-2", "label": "Sign Up", "style": "disabled" },
      { "id": "template-3", "label": "Splash Screen", "path": "/splash-screen" },
      { "id": "template-4", "label": "Template White", "style": "disabled" },
      { "id": "template-5", "label": "Template Black", "style": "disabled" },
      { "id": "template-6", "label": "Template Blue", "style": "disabled" },
      {
        "id": "template-7",
        "label": "Data Visualisation",
        "style": "disabled",
        "subItems": [
          { "id": "template-7-1", "label": "Charts", "style": "disabled" },
          { "id": "template-7-2", "label": "Graphs", "style": "disabled" },
          { "id": "template-7-3", "label": "Tables", "style": "disabled" },
          { "id": "template-7-4", "label": "Dashboards", "style": "disabled" },
        ]
      },
    ],
  }
];
const docItems: MenuItem[] = [
  {
    "id": "guidelines",
    "label": "Guideliness",
    "icon": "guideline.svg",
    "style": "disabled",
    "subItems": [
      { "id": "guidelines-1", "label": "Accessibility", "style": "disabled" },
      { "id": "guidelines-2", "label": "Writing Style", "style": "disabled" },
      { "id": "guidelines-3", "label": "Brand Guidelines", "style": "disabled" },
    ],
  },
  {
    "id": "resources",
    "label": "Resources",
    "icon": "resource.svg",
    "style": "disabled",
    "subItems": [
      { "id": "resources-1", "label": "Figma Kit", "style": "disabled" },
      { "id": "resources-2", "label": "GitHub", "style": "disabled" },
      { "id": "resources-3", "label": "Documentation", "style": "disabled" },
      { "id": "resources-4", "label": "Changelog", "style": "disabled" },
    ],
  },
  {
    "id": "connect-with-us",
    "label": "Connect with Us",
    "icon": "connect.svg",
    "style": "disabled",
    "subItems": [
      { "id": "connect-with-us-1", "label": "Contact", "style": "disabled" },
      { "id": "connect-with-us-2", "label": "Community", "style": "disabled" },
      { "id": "connect-with-us-3", "label": "Support", "style": "disabled" },
    ],
  },
]

const closeSidebar = (): void => {
  const sidebar = document.getElementById("sidebar_nav");
  if (sidebar) {
    sidebar.style.setProperty("display", "none", "important");
  }
};

const SideNavigation: FunctionComponent<SideNavigationType> = ({
  className = "",
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        const sidebar = document.getElementById("sidebar_nav");
        if (sidebar) {
          sidebar.style.display = "";
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={[styles.sideNavigation, className].join(" ")}
      id="sidebar_nav"
    >
      <div className={styles.close_sidenav}><img onClick={closeSidebar} className={styles.image} alt="Close" src="/close-icon.png" /></div>
      <div className={styles.getStarted}>
        <div className={styles.elementContainer}>
          <div className={styles.designElements}>About Design System</div>
        </div>
      </div>
      <nav className={styles.menuList}>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
          />
        ))}
      </nav>
      <div className={styles.getStarted}>
        <div className={styles.elementContainer}>
          <div className={styles.designElements}>Design Elements</div>
        </div>
      </div>
      <nav className={styles.menuList}>
        {designItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
          />
        ))}
      </nav>
      <div className={styles.getStarted}>
        <div className={styles.elementContainer}>
          <div className={styles.designElements}>Documentation</div>
        </div>
      </div>
      <nav className={styles.menuList}>
        {docItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
          />
        ))}
      </nav>
    </section>
  );
};

export default SideNavigation;
