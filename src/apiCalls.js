const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';

export const getMovies = () => {
  return fetch(baseURL)
  .then(checkForError)
}

export const getMovie = (id) => {

  return fetch(baseURL + "/" + String(id))
  .then(checkForError)
}

export const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Run for your life!');
  } else {
    return response.json();
  }
}
