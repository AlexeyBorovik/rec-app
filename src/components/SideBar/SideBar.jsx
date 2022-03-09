import { NavLink } from "react-router-dom";
import style from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? style.active : style.normal)}
        >
          MainPage
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/my-page"}
          className={({ isActive }) => (isActive ? style.active : style.normal)}
        >
          MyPage
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/review"}
          className={({ isActive }) => (isActive ? style.active : style.normal)}
        >
          review
        </NavLink>
      </div>
    </div>
  );
};
