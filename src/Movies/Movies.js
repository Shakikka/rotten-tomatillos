import Movie from '../MovieCard/MovieCard';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import './Movies.css';

const MovieContainer = ({enlargeCard, movies, currentMovie, goBack})=> {
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

  const selectedMovie = <SelectedMovie id={currentMovie.id} goBack={goBack}/>
  return (
    <div className="posters">
      {currentMovie.active ? selectedMovie : movieCards }
    </div>

  )
}
export default MovieContainer;