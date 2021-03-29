import React from 'react';
import './MovieCard.css';

const Movie = ({ poster_path, title }) => {
  return (
    <article className="movie-card">
      <img src={poster_path} alt={`${title} poster`}></img>
    </article>
  )
}

export default Movie