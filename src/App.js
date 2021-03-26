import React, { Component } from 'react';
import './App.css';
import getMovies from './apiCalls.js'
// import movieData from './movie-data';
import MovieContainer from './Movies/Movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {active: false, id: null}
    }
  }

  componentDidMount() {
    getMovies()
    .then(movies => this.setState({ movies: movies.movies }))
  }

  goBack = () => {
    this.setState({
      currentMovie: { active: false, id: null } })
  }

  enlargeCard = (id) => {
    const foundMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({ currentMovie: {active: true, id: id}});
    console.log(foundMovie);
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