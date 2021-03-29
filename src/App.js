import React, { Component } from 'react';
import './App.css';
import { getMovies, getMovie, getTrailer } from './apiCalls.js'
import MovieContainer from './Movies/Movies';
import { MdMovie } from "react-icons/md"


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {active: false, id: null, film: {}},
      currentVideos: []
    }
  }

  componentDidMount() {
    getMovies()
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(error => alert(error.message))
  }

  goBack = () => {
    this.setState({
      currentMovie: { active: false, id: null , film: {}} })
  }

  enlargeCard = (id) => {
      getMovie(id)
      .then(movie => this.setState({ currentMovie : {active: true, id: (movie.movie.id), film: movie.movie}}))
      .catch(error => alert(error.message))
      getTrailer(id)
      .then(trailer => {
        return this.setState({ currentVideos : trailer.videos})
      })
      .catch(error => alert(error.message))
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">Rotten Tomatillos
          <MdMovie className="movie-logo"/>
          </header>
          <MovieContainer movies={this.state.movies} currentMovie={this.state.currentMovie}
          enlargeCard={this.enlargeCard} goBack={this.goBack}
          currentVideos={this.state.currentVideos}/>
        </div>
    );
  }
}

export default App;