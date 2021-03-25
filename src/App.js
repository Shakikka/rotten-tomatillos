import React, { Component } from 'react';
import './App.css';
import movieData from './movie-data';
import MovieContainer from './Movies/Movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      currentMovie: {}
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Rotten Tomatillos
        </header>
        <MovieContainer movies={this.state.movies} />
      </div>
    );
  }
}

export default App;