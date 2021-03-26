import Movie from '../MovieCard/MovieCard';
import SelectedMovie from '../SelectedMovie/SelectedMovie.js';
import './Movies.css';

const MovieContainer = ({enlargeCard, movies, currentMovie, goBack, currentVideos})=> {
  const movieCards = movies.map(movie => {
    return (
      <Movie
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        enlargeCard={enlargeCard}
      />
    )
  })

  const selectedMovie = <SelectedMovie id={currentMovie.id} goBack={goBack} 
  foundMovie={currentMovie.film} currentVideos={currentVideos}/>
  return (
    <section className="movie-container">
      {!currentMovie.active && <h1>New Movies</h1>}
      {currentMovie.active ? selectedMovie : <div className="posters">{movieCards}</div>}
    </section>

  )
}
export default MovieContainer;