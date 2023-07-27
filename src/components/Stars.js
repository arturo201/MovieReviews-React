import React from 'react';

const Stars = ({ rating, setRating, interactive = true }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span 
          key={index} 
          className={index < rating ? 'star-filled' : 'star-empty'} 
          onClick={interactive ? () => setRating(index + 1) : undefined}
        >
            {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default Stars;