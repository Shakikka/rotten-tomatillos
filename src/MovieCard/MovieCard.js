import React from 'react';
import './MovieCard.css';

const Movie = ({ id, poster_path, title, enlargeCard }) => {
  return (
    <article className="movie-card" onClick={() => enlargeCard(id)}>
      <img src={poster_path} alt={`${title} poster`}></img>
    </article>
  )
}

export default Movie