import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

// import images
import avatar from './images/avatar_img.jpeg';
import avengers from './images/avengers_img.jpg';
import avwater from './images/avatar-water_img.jpg';
import titanic from './images/titanic_img.jpg'

// add movies from the movieList componenet
const moviesData = [
  {
    id: 1,
    title: 'Avatar',
    synopsis: 'Sci-fi/Action ‧ 2h 42m',
    imageUrl: avatar
  },

  {
    id: 2,
    title: 'Avengers: Endgame',
    synopsis: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    imageUrl: avengers 
  },

  {
    id: 3,
    title: 'Avatar: The Way of Water',
    synopsis: '2022 ‧ Sci-fi/Action ‧ 3h 12m',
    imageUrl: avwater
  },

  {
    id: 4,
    title: 'Titanic',
    synopsis: '1997 ‧ Romance/Drama ‧ 3h 14m',
    imageUrl: titanic
  },

];

const App = () => {
  return (
    <div>
      <h1 className='title'>Movie Reviews</h1>
      <h6 className='sub-title'>All Time Worldwide Box Office</h6>
      <MovieList movies={moviesData} />
    </div>
  );
};

export default App;