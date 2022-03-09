export const Review = () => {
  const data = require("../../reviews.json");

  const review = data[0];
  const rating = review.rating
  const averagedRating = (rating.reduce((a, b) => a + b) / rating.length).toFixed(1)

  return (
    <div>
      <div>{review.title}</div>
      <div>{review.group}</div>
      <div>{review.tags.map((tag) => `#${tag}`)}</div>
      <div>{review.text}</div>
      <div>Оценки: {review.rating} Рейтинг: {averagedRating}</div>
    </div>
  );
};
