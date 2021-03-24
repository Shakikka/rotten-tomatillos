import logo from './logo.svg';
import './App.css';
import movieData from './movie-data';
import MovieContainer from './Movies/Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">Rotten Tomatillos
      </header>
      <MovieContainer movies={movieData}/>
    </div>
  );
}

export default App;
