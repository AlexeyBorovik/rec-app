import { NavLink } from "react-router-dom";
import style from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? style.active : style.normal
            }
          >
            <button>MainPage</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-page"}
            className={({ isActive }) =>
              isActive ? style.active : style.normal
            }
          >
            <button>MyPage</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/review"}
            className={({ isActive }) =>
              isActive ? style.active : style.normal
            }
          >
            <button>review</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
