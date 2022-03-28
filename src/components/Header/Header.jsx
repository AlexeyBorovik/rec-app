import {
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./Header.css";
import searchIcon from "../../icons/search.svg";
import lightIcon from "../../icons/brightness-high-fill.svg";
import darkIcon from "../../icons/moon.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AuthContext } from "../../Context";

export const Header = () => {
  const themeToggle = () => {
    const appStyle = document.getElementById("main");
    appStyle.classList.toggle("dark");
  };

  const switchToRus = () => {
    i18n.changeLanguage("ru");
  };
  const switchToEng = () => {
    i18n.changeLanguage("en");
  };

  const { t, i18n } = useTranslation();

  const auth = useContext(AuthContext);
  const logOutHandler = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div>
        <InputGroup>
          <InputGroup.Text>
            <img src={searchIcon} alt=""></img>
          </InputGroup.Text>
          <FormControl></FormControl>
        </InputGroup>
      </div>
      <div className="toggle">
        <img className="light-icon" src={lightIcon} alt=""></img>
        <input
          type="checkbox"
          className="toggle-button"
          onClick={themeToggle}
        ></input>
        <img className="dark-icon" src={darkIcon} alt=""></img>
      </div>
      <div>
        <DropdownButton
          title={t("header.langToggle")}
          variant="outline-primary"
        >
          <Dropdown.Item onClick={switchToRus}>Русский</Dropdown.Item>
          <Dropdown.Item onClick={switchToEng}>English</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        {auth.name ? (
          <div>
          <span>{t("header.authSpan") + auth.name}</span> 
          <div> <Button onClick={logOutHandler}>{t("header.logOutBtn")}</Button> </div>
          </div>
        ) : (
          <Link to={"/login"}>
            <Button>{t("header.authButton")}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
