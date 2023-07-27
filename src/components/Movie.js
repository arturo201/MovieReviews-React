import React, { useState } from "react";
import Stars from './Stars';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, movieImage }) => {
    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    const addReview = (reviewObj) => {
        const newReview = { reviewText: reviewObj.review, rating: reviewObj.rating };
        setReviews((prevReviews) => [...prevReviews, newReview]);
      };
      
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    return (
        <div className='cards'>
      <div className='card'>
        <div className="card-content-top">
          <div className="movie-image-container">
            <img className='movie-image' src={movieImage} alt={movie.title + ' Poster'} />
          </div>
          <h3 className='movie-title'>{movie.title}</h3>
          <p className='movie-syn'>{movie.synopsis}</p>
          <p className='review-title'>Reviews:</p>
        </div>
        <div className="card-content-middle">
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div className='review' key={index}>
                <p className='review-text'>{review.reviewText}</p>
                <Stars rating={review.rating} interactive={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="card-content-bottom">
          <button className='review-button' onClick={openModal}>Write a Review</button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <ReviewForm onReviewSubmit={addReview} onClose={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;