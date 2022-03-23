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

export const Header = () => {
  const themeToggle = () => {
    const appStyle = document.getElementById("main");
    appStyle.classList.toggle("dark");
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
      <div>
        <Button onClick={themeToggle} variant="dark">
          Dark/Light
        </Button>
      </div>
      <div>
        <DropdownButton title="Language" variant="secondary">
          <Dropdown.Item>Русский</Dropdown.Item>
          <Dropdown.Item>English</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <Link to={"/login"}>
          <Button>LogIn</Button>
        </Link>
      </div>
    </div>
  );
};
