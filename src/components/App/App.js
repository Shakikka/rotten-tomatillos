import React, { Component } from 'react';
import './App.css';
import { getMovies, getMovie, getTrailer } from '../../apiCalls.js';
import MovieContainer from '../Movies/Movies';
import { DragDropContext } from 'react-beautiful-dnd'
import { GiTortoise, GiAbstract091, GiFilmProjector, GiCircleClaws } from "react-icons/gi";
import {dragEnd} from '../../drag-and-drop'
import "../../tortoise.svg"


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favorites: [],
      currentMovie: {},
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
      }
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

  numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  enlargeCard = (id) => {
      this.getMovie(id)
  }

  getMovie = (id) => {
    Promise.all([getMovie(id), getTrailer(id)])
      .then(results => {
        const info = results[0].movie
        const trailer = results[1].videos
        this.setState({
          currentMovie: {
            active: true, average_rating: info.average_rating,
            backdrop_path: info.backdrop_path,
            budget: this.numberWithCommas(info.budget),
            genres: info.genres.join(', '), id: info.id,
            overview: info.overview,
            poster_path: info.poster_path,
            release_date: info.release_date,
            revenue: this.numberWithCommas(info.revenue),
            runtime: info.runtime, tagline: info.tagline,
            title: info.title
          },
          currentVideos: trailer
        })
      })
      .catch(error => this.setState({ error: `We cannot find this movie ${error.message}` }))
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination || (destination.droppableId === source.droppableId &&
      destination.index === source.index)
      ) {
        return;
      } else {
        this.setState(dragEnd(destination, source, draggableId, this.state))

      }
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
          {this.state.error.includes('nothing') && <h2>{this.state.error}</h2>}
          <DragDropContext onDragEnd={this.onDragEnd}>
            <MovieContainer movies={this.matchByIds(this.state.rows.newMovies.movieIds)} currentMovie={this.state.currentMovie}
            enlargeCard={this.enlargeCard}
            currentVideos={this.state.currentVideos} 
            favorites={this.matchByIds(this.state.rows.favorites.movieIds)} error={this.state.error}/>
          </DragDropContext>
        </div>
    );
  }
}

export default App;