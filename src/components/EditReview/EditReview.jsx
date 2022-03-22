import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export const EditReview = () => {
  const data = require("../../reviews.json");

  const review = data[0];

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose group of your review</Form.Label>
          <Form.Select>
            <option>Movie</option>
            <option>Games</option>
            <option>Music</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose a tags:</Form.Label>
          {review.tags.map((tag) => (
            <Form.Check inline label={`#${tag}`}></Form.Check>
          ))}
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type your review"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button variant="outline-primary">Save</Button>
        </Form.Group>
      </Form>
    </div>
  );
};
