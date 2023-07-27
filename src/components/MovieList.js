import React from "react";
import Movie from './Movie';

const MovieList = ({ movies }) => {
    return (
        <div className="container">
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} movieImage={movie.imageUrl} />
            ))}
        </div>
    );
};

export default MovieList;