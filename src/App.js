import React, { Component } from 'react';
import './App.css';
import { getMovies, getMovie } from './apiCalls.js'
import MovieContainer from './Movies/Movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {active: false, id: null, film: {}}
    }
  }

  componentDidMount() {
    getMovies()
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(error => alert(error.message))
  }

  goBack = () => {
    this.setState({
      currentMovie: { active: false, id: null } })
  }

  enlargeCard = (id) => {
    const foundMovie = this.state.movies.find(movie => movie.id === id)
    getMovie(foundMovie.id)
    .then(movie => this.setState({ currentMovie : {active: true, id: (movie.movie.id), film: movie.movie}}))
    .catch(error => alert(error.message))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Rotten Tomatillos
        </header>
        <MovieContainer movies={this.state.movies} currentMovie={this.state.currentMovie}
         enlargeCard={this.enlargeCard} goBack={this.goBack}/>
      </div>
    );
  }
}

export default App;