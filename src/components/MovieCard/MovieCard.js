import PropTypes from 'prop-types';
import './MovieCard.css';
import {Draggable} from 'react-beautiful-dnd'

const Movie = ({ id, poster_path, title, enlargeCard, average_rating, index, isFav }) => {
  return (
    <Draggable
        draggableId={isFav? 'fav' + String(id) : String(id)}
        index={index}>
          {(provided) => ( <article className="movie-card" 
          onClick={() => enlargeCard(id)}ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <img src={poster_path} alt={`${title} poster`}></img>
          <p>Rating: {average_rating.toFixed(1)}</p>
        </article>
          )}
    </Draggable>
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