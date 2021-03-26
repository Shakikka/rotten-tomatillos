const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';

export const getMovies = () => {
  return fetch(baseURL)
  .then(checkForError)
  .catch(error => alert(error.message))
}

export const getMovie = (id) => {

  return fetch(baseURL + "/" + String(id))
  .then(checkForError)
  .catch(error => console.log(error.message))
}

export const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Run for your life!');
  } else {
    return response.json();
  }
}
