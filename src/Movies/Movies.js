import Movie from '../MovieCard/MovieCard';
import SelectedMovie from '../SelectedMovie/SelectedMovie.js';
import './Movies.css';
import { Link, Route, Switch } from 'react-router-dom';
// import { pulse } from 'react-animations';

const MovieContainer = ({enlargeCard, movies, currentMovie, goBack, currentVideos}) => {
  const movieCards = (<div className="posters">{
    movies.map(movie => {
      return (
        <Link to={`/${movie.id}`} key={movie.id}>
          <Movie
            id={movie.id}
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            average_rating={movie.average_rating}
            release_date={movie.release_date}
            enlargeCard={enlargeCard}
          />
        </Link>
      )
    })}</div>
  )

  const selectedMovie = (id) => {
    if (currentVideos.length) {
      return <SelectedMovie id={currentMovie.id} goBack={goBack} 
      foundMovie={currentMovie.film} currentVideos={currentVideos}/>
    } else {
      enlargeCard(id)
    }
  }

  return (
    <Route
      render={({ location }) => (
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' children={() => <section className="movie-container">New Movies{movieCards}</section>}/>
          <Route exact path="/:id" children={() => <section className="movie-container">{selectedMovie(location.pathname.split('/')[1])}</section>}/>
        </Switch>
      )}>
    </Route>

  )
}

export default MovieContainer;