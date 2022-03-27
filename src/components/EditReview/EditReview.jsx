import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import styles from "./EditReview.module.css";
import { useTranslation } from "react-i18next";

export const EditReview = () => {
  const data = require("../../reviews.json");
  const { t } = useTranslation();

  const review = data[0];

  return (
    <div className={styles}>
      <Form>
        <Form.Group>
          <Form.Label>{t("edit.title")}</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("edit.group")}</Form.Label>
          <Form.Select>
            <option>Movie</option>
            <option>Games</option>
            <option>Music</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("edit.tags")}</Form.Label>
          <div>
            {review.tags.map((tag) => (
              <Form.Check inline label={`#${tag}`}></Form.Check>
            ))}
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            placeholder={t("edit.description")}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button variant="outline-primary">{t("edit.saveButton")}</Button>
        </Form.Group>
      </Form>
    </div>
  );
};
