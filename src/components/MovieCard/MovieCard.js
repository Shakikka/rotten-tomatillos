// import React from 'react';
import './MovieCard.css';

const Movie = ({ id, poster_path, title, enlargeCard, average_rating}) => {
  return (
    <article className="movie-card" onClick={() => enlargeCard(id)}>
      <img src={poster_path} alt={`${title} poster`}></img>
      <p>Rating: {average_rating.toFixed(1)}</p>
    </article>
  )
}

export default Movie