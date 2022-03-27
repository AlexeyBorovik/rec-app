import { Button, Form } from "react-bootstrap";
import styles from "./Auth.module.css";
import { useTranslation } from 'react-i18next';

import googleIcon from "./../../icons/google.svg"
import tgIcon from "./../../icons/telegram.svg"

export const Auth = () => {

  const { t } = useTranslation();

  return (
      <Form className={styles.login}>
        <Form.Text>{t('auth.login.title')}</Form.Text>
        <Form.Group>
          <Form.Label>{t('auth.login.email')}</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Label>{t('auth.login.password')}</Form.Label>
        <Form.Control></Form.Control>
        <Form.Group>
          <Button>{t('auth.login.button')}</Button>
        </Form.Group>
        <Form.Group className={styles.socials}>
          <Button variant="outline-primary"><img src={googleIcon} alt=""></img></Button>
          <Button variant="outline-primary"><img src={tgIcon} alt=""></img></Button>
        </Form.Group>
      </Form>
  );
};
