import {
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./Header.css";
import searchIcon from "../../icons/search.svg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const themeToggle = () => {
    const appStyle = document.getElementById("main");
    appStyle.classList.toggle("dark");
  };

  const switchToRus = () => {
    i18n.changeLanguage("ru")
  } 
  const switchToEng = () => {
    i18n.changeLanguage("en")
  } 

  const { t, i18n } = useTranslation();

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
      <div>
        <Button onClick={themeToggle} variant="dark">
          {t('header.themeToggle')}
        </Button>
      </div>
      <div>
        <DropdownButton title={t('header.langToggle')} variant="secondary">
          <Dropdown.Item onClick={switchToRus}>Русский</Dropdown.Item>
          <Dropdown.Item onClick={switchToEng}>English</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <Link to={"/login"}>
          <Button>{t('header.authButton')}</Button>
        </Link>
      </div>
    </div>
  );
};
