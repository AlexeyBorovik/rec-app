import { Button, Form } from "react-bootstrap";
import styles from "./Auth.module.css";

import googleIcon from "./../../icons/google.svg"
import tgIcon from "./../../icons/telegram.svg"

export const Auth = () => {
  return (
      <Form className={styles.login}>
        <Form.Text>Вход</Form.Text>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Label>Пароль</Form.Label>
        <Form.Control></Form.Control>
        <Form.Group>
          <Button>Войти</Button>
        </Form.Group>
        <Form.Group className={styles.socials}>
          <Button variant="outline-primary"><img src={googleIcon} alt=""></img></Button>
          <Button variant="outline-primary"><img src={tgIcon} alt=""></img></Button>
        </Form.Group>
      </Form>
  );
};
