import React, { useState } from 'react';
import Stars from './Stars';

const ReviewForm = ({ onClose, onReviewSubmit }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    onReviewSubmit({ review: reviewText, rating });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3 className='modal-title'>Write a Review</h3>
        <textarea
          rows="4"
          cols="50"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here"
        />
        <div className="modal-rating">
          <span className='modal-rating-title'>Rate the movie:</span>
          <Stars rating={rating} setRating={setRating} />
        </div>
        <button className='modal-button' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ReviewForm;