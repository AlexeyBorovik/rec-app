import { Button, Form } from "react-bootstrap";
import styles from "./Auth.module.css";
import { useTranslation } from 'react-i18next';

import googleIcon from "./../../icons/google.svg"
import tgIcon from "./../../icons/telegram.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Context";

export const Auth = () => {

  const { t } = useTranslation();

  const auth = useContext(AuthContext)

  const [ user, setUser ] = useState({
    name: "",
    email: "",
    password: "",
  });


  const onChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const LogInHandler = () => {
    auth.signIn(user.name)
  }

  return (
      <Form validated className={styles.login}>
        <Form.Text>{t('auth.login.title')}</Form.Text>
        <Form.Group>
          <Form.Label>{t('auth.login.name')}</Form.Label>
          <Form.Control onChange={onChangeHandler} name="name"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('auth.login.email')}</Form.Label>
          <Form.Control onChange={onChangeHandler} name="email" type="email"></Form.Control>
        </Form.Group>
        <Form.Label>{t('auth.login.password')}</Form.Label>
        <Form.Control onChange={onChangeHandler} name="password" type="password"></Form.Control>
        <Form.Group>
          <Button onClick={LogInHandler}>{t('auth.login.button')}</Button>
        </Form.Group>
        <Form.Group className={styles.socials}>
          <Button variant="outline-primary"><img src={googleIcon} alt=""></img></Button>
          <Button variant="outline-primary"><img src={tgIcon} alt=""></img></Button>
        </Form.Group>
      </Form>
  );
};
