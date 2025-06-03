import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { sideNavItems } from "@/components/SideNav/SideNavItems";

const SideNav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside className="side-nav">
      <nav>
        <ul>
          {sideNavItems.map((item, index) => {
            switch (item.type) {
              case "headerLink":
                return (
                  <li key={index}>
                    {item.to && (
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `header-link ${isActive ? "active" : ""}`
                        }
                      >
                        {item.icon && <item.icon fontSize="small" />}
                        {t(item.label)}
                      </NavLink>
                    )}
                  </li>
                );

              case "sectionHeader":
                return (
                  <li key={index} className="section-header">
                    {t(item.label)}
                  </li>
                );

              case "link":
                return (
                  <li key={index}>
                    {item.to && (
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `link ${isActive ? "active" : ""}`
                        }
                      >
                        {item.icon && <item.icon fontSize="small" />}
                        {t(item.label)}
                      </NavLink>
                    )}
                  </li>
                );

              default:
                return null;
            }
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
