import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import styles from "./Review.module.css";
import starIcon from "../../icons/star.svg";

export const Review = () => {
  const data = require("../../reviews.json");

  const review = data[0];
  const rating = review.rating;
  const averagedRating = (
    rating.reduce((a, b) => a + b) / rating.length
  ).toFixed(1);

  return (
    <div>
      <div>{review.title}</div>
      <div>{review.group}</div>
      <div>{review.tags.map((tag) => `#${tag}`)}</div>
      <div>{review.text}</div>
      <div className={styles.rating}>
        <img src={starIcon} alt=""></img>
        <div>{averagedRating}</div>
      </div>
      <div>
        <div>Оцените обзор</div>
        <ButtonGroup>
          <Button variant="outline-primary">
            <img src={starIcon} alt=""></img>
          </Button>
          <Button variant="outline-primary">
            <img src={starIcon} alt=""></img>
          </Button>
          <Button variant="outline-primary">
            <img src={starIcon} alt=""></img>
          </Button>
          <Button variant="outline-primary">
            <img src={starIcon} alt=""></img>
          </Button>
          <Button variant="outline-primary">
            <img src={starIcon} alt=""></img>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
