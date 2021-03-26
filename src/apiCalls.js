const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';

const getMovies = () => {
  return fetch(baseURL)
  .then(response => response.json())
}

export default getMovies