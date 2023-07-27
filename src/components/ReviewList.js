import React from "react";
import Stars from "./Stars";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {/* If there are no reviews, then a message will be displayed */}

      {reviews.length === 0 ? (
        <p className="card-text">No reviews yet.</p>
      ) : null}

      {/* If there are reviews, this will display a message */}

      {reviews.length > 0 && (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p className="review-text">{review.review}</p>
              <Stars rating={review.rating} interactive={false} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
