import Movie from '../MovieCard/MovieCard';
import SelectedMovie from '../SelectedMovie/SelectedMovie.js';
import './Movies.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const MovieContainer = ({enlargeCard, movies, currentMovie, goBack, currentVideos})=> {
  const movieCards = movies.map(movie => {
    return (
      <Link to={`/${movie.title}`}>
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
      </Link>
    )
  })

  const selectedMovie = <SelectedMovie id={currentMovie.id} goBack={goBack} 
  foundMovie={currentMovie.film} currentVideos={currentVideos}/>
  return (
    <Router>
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={movieCards}/>
            <Route exact path={`/${currentMovie.title}`} component={selectedMovie}/>
          </Switch>
        )}
      />
    </Router>

    /* <section className="movie-container">
      {!currentMovie.active && <h1>New Movies</h1>}
      {currentMovie.active ? selectedMovie : <div className="posters">{movieCards}</div>}
    </section> */

  )
}
export default MovieContainer;