import {
  FunctionComponent,
  useEffect, useState
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

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ item }) => {
  const location = useLocation();

  const hasChildren = item.subItems && item.subItems.length > 0;

  const childActive = item.subItems?.some(
    (child) =>
      location.pathname === child.path ||
      child.subItems?.some((sub) => sub.path === location.pathname)
  );

  const [open, setOpen] = useState(childActive);

  useEffect(() => {
    if (childActive) {
      setOpen(true);
    }
  }, [childActive]);

  return (
    <div className={clsx(styles.sidebarItem, { [styles.open]: open,})}>
      <div className={styles.sidebarTitle} onClick={() => setOpen(!open)}>
        {item.path ? (
          <NavLink
            to={item.path!}
            onClick={(e) => {
              if (item.style === "disabled") {
                e.preventDefault();
              }
            }}
            className={({ isActive }) =>
              clsx(styles.sidebarLink, {
                [styles.active]: isActive,
                [styles.disabled]: item.style === "disabled",
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
            className={styles.toggleBtn}
          >
            <img
              src="/caretRight_icon.svg"
              className={open ? styles.rotate : ""}
            />
          </button>
        )}
      </div>

      {hasChildren && open && (
        <div className={styles.sidebarContent}>
          {item.subItems!.map((child) => (
            <SidebarItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;