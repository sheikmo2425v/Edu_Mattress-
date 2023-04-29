import { useState } from "react";

function Rating({ maxRating }) {
  const [rating, setRating] = useState(0);

  function handleRatingChange(newRating) {
    setRating(newRating);
  }

  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span
        key={i}
        className={`star ${i <= rating ? "filled" : "empty"}`}
        onClick={() => handleRatingChange(i)}
      >
        ★
      </span>
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
