import React from 'react';
import './MovieCard.css';

const Movie = ({id, poster_path, backdrop_path, title, average_rating, release_date}) => {
  return (
    <article>
      <img src={poster_path} alt={`${title} poster`}></img>
    </article>
  )
}

export default Movie