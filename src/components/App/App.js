import React, { Component } from 'react';
import './App.css';
import { getMovies, getMovie, getTrailer } from './apiCalls.js'
import MovieContainer from './Movies/Movies';
// import { MdMovie } from "react-icons/md";
import { RiMovie2Line } from 'react-icons/ri';
import { GiFilmProjector } from 'react-icons/gi';
// import { Example } from './ThrowMe'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {active: false, id: null, film: {}},
      currentVideos: [],
      error: ''
    }
  }

  componentDidMount() {
    getMovies()
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(error => this.setState({ error: `There is nothing here ${error.message}`}))
  }

  goBack = () => {
    this.setState({
      currentMovie: { active: false, id: null , film: {}} })
  }

  enlargeCard = (id) => {
      getMovie(id)
      .then(movie => this.setState({ currentMovie : {active: true, id: (movie.movie.id), film: movie.movie}}))
      .catch(error => this.setState({ error: `We cannot find this movie ${error.message}` }))
      getTrailer(id)
      .then(trailer => {
        return this.setState({ currentVideos : trailer.videos})
      })
      .catch(error => this.setState({ error: `We can't find your trailer ${error.message}` }))
  }

  render() {
    return (
        <div className="App">
        <header className="App-header">Rotten T🍅matillos
            <GiFilmProjector className="movie-logo"/>
            <RiMovie2Line className="movie-logo App-logo"/>
          </header>
          <MovieContainer movies={this.state.movies} currentMovie={this.state.currentMovie}
          enlargeCard={this.enlargeCard} goBack={this.goBack}
          currentVideos={this.state.currentVideos}/>
          {this.state.error.length && <h2>{this.state.error}</h2>}
        </div>
    );
  }
}

export default App;