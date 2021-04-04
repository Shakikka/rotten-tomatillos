import Movie from '../MovieCard/MovieCard';
import SelectedMovie from '../SelectedMovie/SelectedMovie.js';
import './Movies.css';
import '@brainhubeu/react-carousel/lib/style.css';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
// import Carousel from '@brainhubeu/react-carousel';
// import { useRef } from 'react';
// import { pulse } from 'react-animations';

const MovieContainer = ({enlargeCard, movies, currentMovie, currentVideos, favorites}) => {

  // const wrapper = useRef(null)

  const buildMovieCards = (movies) => {
    return movies.map((movie, index) => {
      if (movie) {
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
                index={index}
              />
        </Link>
            )
          }        
        })
    }

  
  const movieCards = (
   
  <Droppable
    droppableId="newMovies"
    direction="horizontal"
    >
  {(provided) => 
    <div 
    className="posters"
      ref={provided.innerRef}
    {...provided.droppableProps}>
      {buildMovieCards(movies)}
      {provided.placeholder}
    </div>
      }
  </Droppable>
  )

  const selectedMovie = (id) => {
    if (currentVideos.length) {
      return <SelectedMovie id={currentMovie.id} foundMovie={currentMovie.film}
       currentVideos={currentVideos}/>
    } else if (/^\d+$/.test(id) && id.length === 6) {
      enlargeCard(id)
    } else {
      return <Link to='/'><h2> 404: You must be lost. Please try again</h2></Link>
    }
  }

  // const checkID = (id) => {
  //   return movies.find(movie => movie.id === id)
  // }
  

  const favoriteMovies = () => {
    const favCards = buildMovieCards(favorites, true);
    return (
    <Droppable
    droppableId="favorites"
    direction="horizontal"
    >
    {(provided) => <div
    className="posters"
    ref={provided.innerRef}
    {...provided.droppableProps}>
    {favCards}
    {provided.placeholder}
    </div>}
      </Droppable>
  )
  }

  return (
    <Route
      render={({ location }) => (
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' children={() => <section className="movie-container">New Movies{movieCards}Favorites{favoriteMovies()}</section>}/>
          <Route exact path="/:id" children={() => <section className="movie-container">{selectedMovie(location.pathname.split('/')[1])}</section>}/>
          <Route render={()=> <Link to='/'><h2> 404: You must be lost. Please try again</h2></Link>}/>
        </Switch>
      )}>
    </Route>

  )
}

export default MovieContainer;

MovieContainer.propTypes = {
  enlargeCard: PropTypes.func,
  movies: PropTypes.array,
  currentMovie: PropTypes.object,
  goBack: PropTypes.func,
  currentVideos: PropTypes.array
};