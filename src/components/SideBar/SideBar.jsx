import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useTranslation } from 'react-i18next';

export const SideBar = () => {

  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active" : "normal"
            }
          >
            <button>{t('sideBar.main')}</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-page"}
            className={({ isActive }) =>
              isActive ? "active" : "normal"
            }
          >
            <button>{t('sideBar.my')}</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/review"}
            className={({ isActive }) =>
              isActive ? "active" : "normal"
            }
          >
            <button>{t('sideBar.review')}</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/edit-review"}
            className={({ isActive }) =>
              isActive ? "active" : "normal"
            }
          >
            <button>{t('sideBar.edit')}</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
