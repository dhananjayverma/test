import {
  FunctionComponent,
  MouseEvent,
  useEffect,
  useState
} from "react";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./SidebarItem.module.css";

export interface SidebarItemType {
  id: string;
  label: string;
  path?: string;
  icon?: string;
  style?: string;
  subItems?: SidebarItemType[];
}

interface SidebarItemProps {
  item: SidebarItemType;
}

const hasActivePath = (item: SidebarItemType, pathname: string): boolean =>
  item.path === pathname ||
  Boolean(item.subItems?.some((child) => hasActivePath(child, pathname)));

const closeMobileSidebar = () => {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    const sidebar = document.getElementById("sidebar_nav");
    if (sidebar) {
      sidebar.style.display = "none";
    }
  }
};

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ item }) => {
  const location = useLocation();

  const hasChildren = Boolean(item.subItems?.length);
  const disabled = item.style === "disabled";

  const itemActive = hasActivePath(item, location.pathname);
  const childActive = Boolean(
    item.subItems?.some((child) => hasActivePath(child, location.pathname))
  );

  const [open, setOpen] = useState(childActive);

  useEffect(() => {
    if (childActive) {
      setOpen(true);
    }
  }, [childActive]);

  const toggleOpen = () => {
    if (hasChildren && !disabled) {
      setOpen((current) => !current);
    }
  };

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();

    if (disabled) {
      event.preventDefault();
      return;
    }

    if (hasChildren) {
      setOpen(true); // Open the dropdown when the link is clicked
    }

    closeMobileSidebar();
  };

  return (
    <div className={clsx(styles.sidebarItem, { [styles.open]: open,})}>
      <div
        className={styles.sidebarTitle}
        onClick={toggleOpen}
        role={hasChildren && !disabled ? "button" : undefined}
        tabIndex={hasChildren && !disabled ? 0 : undefined}
        onKeyDown={(event) => {
          if ((event.key === "Enter" || event.key === " ") && hasChildren && !disabled) {
            event.preventDefault();
            toggleOpen();
          }
        }}
      >
        {item.path ? (
          <NavLink
            to={item.path!}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              clsx(styles.sidebarLink, {
                [styles.active]: isActive,
                [styles.disabled]: disabled,
              })
            }
          >
            {item.icon && <img src={item.icon} alt="" />}
            <span>{item.label}</span>
          </NavLink>
        ) : (
          <span
            className={clsx(styles.sidebarLink, item.style && styles[item.style])}
          >
            {item.icon && <img src={item.icon} />}
            <span>{item.label}</span>
          </span>
        )}

        {hasChildren && (
          <button
            type="button"
            className={styles.toggleBtn}
            aria-expanded={open}
            aria-label={`${open ? "Collapse" : "Expand"} ${item.label}`}
            disabled={disabled}
            onClick={(event) => {
              event.stopPropagation();
              toggleOpen();
            }}
          >
            <img
              src="/caretRight_icon.svg"
              alt=""
              className={open ? styles.rotate : ""}
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <div
          className={clsx(styles.sidebarContent, {
            [styles.sidebarContentOpen]: open,
          })}
        >
          <div className={styles.sidebarContentInner}>
            {item.subItems!.map((child) => (
              <SidebarItem key={child.id} item={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
