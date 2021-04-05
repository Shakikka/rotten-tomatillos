import React, { Component } from 'react';
import './App.css';
import { getMovies, getMovie, getTrailer } from '../../apiCalls.js';
import MovieContainer from '../Movies/Movies';
import { DragDropContext } from 'react-beautiful-dnd'
import { GiTortoise, GiAbstract091, GiFilmProjector, GiCircleClaws } from "react-icons/gi";
import "../../tortoise.svg"


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favorites: [],
      currentMovie: {active: false, id: null, film: {}, genres: ''},
      currentVideos: [],
      error: '',
      rows: {
        'newMovies': {
          id: 'newMovies',
          movieIds: [],
        },
        'favorites': {
          id: 'favorites',
          movieIds: [],
        }
      },
      rowOrder: ['newMovies', 'favorites']
    }
  }

  componentDidMount() {
    getMovies()
    .then(movies => {
       this.setState({ movies: movies.movies})
       this.setState({rows: {'newMovies': {movieIds: movies.movies.map(movie => movie.id),
         id: 'newMovies'}, 'favorites': {movieIds: this.state.favorites.map(movie => movie.id), id: 'favorites'}}})
      })
    .catch(error => this.setState({ error: `There is nothing here ${error.message}`}))
  }

  goBack = () => {
    this.setState({
      currentMovie: { active: false, id: null , film: {}} })
  }

  enlargeCard = (id) => {
      getMovie(id)
      .then(movie => this.setState({ currentMovie : {active: true, id: movie.movie.id, film: movie.movie, genres: movie.movie.genres.join(', ')}}))
      .catch(error => this.setState({ error: `We cannot find this movie ${error.message}` }))
      getTrailer(id)
      .then(trailer => {
        return this.setState({ currentVideos : trailer.videos})
      })
      .catch(error => this.setState({ error: `We can't find your trailer ${error.message}` }))
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = this.state.rows[source.droppableId];
    const finish = this.state.rows[destination.droppableId]

    if (start === finish) {

      const newMovies = Array.from(start.movieIds);
      newMovies.splice(source.index,  1);
      newMovies.splice(destination.index, 0, Number(draggableId));
      
      const newRow = {
        ...start,
        movieIds: newMovies
      }
      
      this.setState({rows: {
        ...this.state.rows,
        [newRow.id]: newRow
      }})
      return;
  }

  const startMovieIds = Array.from(start.movieIds)
  startMovieIds.splice(source.index, 1);
  const newStart = {
    ...start,
    movieIds: startMovieIds,
  }
  const finishMovieIds = Array.from(finish.movieIds)
  finishMovieIds.splice(destination.index, 0, Number(draggableId));
  const newFinish = {
    ...finish,
    movieIds: finishMovieIds
  }
  this.setState({rows: {...this.state.rows, [newStart.id]: newStart, [newFinish.id]: newFinish}})
  }

  matchByIds(ids) {
    if (ids) {
      return ids.map(id => this.state.movies.find(movie => movie.id === id))
    }
    
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          Rotten T<GiTortoise className="flipped"></GiTortoise>rtle Tales
          <div className="movie-logo">
            <GiFilmProjector className="camera"/>
            <GiAbstract091 className="App-logo reel1"/>
            <GiCircleClaws className="App-logo reel2"/>
          </div>
          </header>
          <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.error && <h2>{this.state.error}</h2>}
          <MovieContainer movies={this.matchByIds(this.state.rows.newMovies.movieIds)} currentMovie={this.state.currentMovie}
          enlargeCard={this.enlargeCard} goBack={this.goBack}
          currentVideos={this.state.currentVideos} 
          favorites={this.matchByIds(this.state.rows.favorites.movieIds)}/>
      </DragDropContext>
        </div>
    );
  }
}

export default App;