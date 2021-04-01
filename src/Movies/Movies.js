import Movie from '../MovieCard/MovieCard';
import SelectedMovie from '../SelectedMovie/SelectedMovie.js';
import './Movies.css';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel from '@brainhubeu/react-carousel';
import { Link, Route, Switch } from 'react-router-dom';
// import { pulse } from 'react-animations';

const MovieContainer = ({enlargeCard, movies, currentMovie, goBack, currentVideos}) => {
  const movieCards = (
  <Carousel className="posters"
  arrows 
  thumbnails
  slidesPerPage={5}
  infinite
  offset={40}
  itemWidth={200}
  >{
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
    })}</Carousel>
  )

  const selectedMovie = (id) => {
    if (currentVideos.length) {
      return <SelectedMovie id={currentMovie.id} goBack={goBack} 
      foundMovie={currentMovie.film} currentVideos={currentVideos}/>
    } else {
      enlargeCard(id)
    }
  }

  const favoriteMovies = () => {
    const favArr = [movies[0], movies[1]];
    const favCards = favArr.map(fav => {
      if (fav) {
        return <Link to={`/${fav.id}`} key={fav.id}>
      <Movie
        id={fav.id}
        poster_path={fav.poster_path}
        backdrop_path={fav.backdrop_path}
        title={fav.title}
        average_rating={fav.average_rating}
        release_date={fav.release_date}
        enlargeCard={enlargeCard}
        />
    </Link>
  }
    })
    return <Carousel
    arrows 
    slidesPerPage={5}
    offset={40}
    itemWidth={200}>
    {favCards}
    </Carousel>
  }

  return (
    <Route
      render={({ location }) => (
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' children={() => <section className="movie-container">New Movies{movieCards}Favorites{favoriteMovies()}</section>}/>
          <Route exact path="/:id" children={() => <section className="movie-container">{selectedMovie(location.pathname.split('/')[1])}</section>}/>
        </Switch>
      )}>
    </Route>

  )
}

export default MovieContainer;