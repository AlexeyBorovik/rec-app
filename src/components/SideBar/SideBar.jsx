import { NavLink } from "react-router-dom";
import "./SideBar.css";

export const SideBar = () => {
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
            <button>MainPage</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-page"}
            className={({ isActive }) =>
              isActive ? "active" : "normal"
            }
          >
            <button>MyPage</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/review"}
            className={({ isActive }) =>
              isActive ? "active" : "normal"
            }
          >
            <button>review</button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/edit-review"}
            className={({ isActive }) =>
              isActive ? "active" : "normal"
            }
          >
            <button>Editreview</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
