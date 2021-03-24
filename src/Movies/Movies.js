import React from 'react';
import Movie from '../MovieCard/MovieCard';
import './Movies.css';

const MovieContainer = props => {
  console.log(props)
  const movieCards = props.movies.movies.map(movie => {
    return (
      <Movie
      id = {movie.id}
      key = {movie.id}
      poster_path = {movie.poster_path}
      backdrop_path = {movie.backdrop_path}
      title = {movie.title}
      average_rating = {movie.average_rating}
      release_date = {movie.release_date}
      />
    )
  })

  return (
    <div className="posters">{movieCards}</div>
    
    )
}
export default MovieContainer;