import PropTypes from 'prop-types';
import './MovieCard.css';

const Movie = ({ id, poster_path, title, enlargeCard, average_rating}) => {
  return (
    <article className="movie-card" onClick={() => enlargeCard(id)}>
      <img src={poster_path} alt={`${title} poster`}></img>
      <p>Rating: {average_rating.toFixed(1)}</p>
    </article>
  )
}

export default Movie

Movie.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  enlargeCard: PropTypes.func,
  average_rating: PropTypes.number
}