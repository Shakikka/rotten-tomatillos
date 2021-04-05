import { IoIosArrowDropleft } from "react-icons/io";
import './SelectedMovie.css';
import { Link } from 'react-router-dom';
import  PropTypes from 'prop-types';


const SelectedMovie = ({ genres, budget, revenue, foundMovie, currentVideos }) => {
    const style = {
        backgroundImage: `url(${foundMovie.backdrop_path})`
    }
    let videoKey = currentVideos[Math.floor(Math.random() * currentVideos.length)]
    if (videoKey) videoKey = videoKey.key;
    return(
        <article className="selected-movie" style={style}>
            <article className="movie-info">
                <Link to='/'>
                    <IoIosArrowDropleft role="button" className="go-back"/>
                </Link>
                <h1 className="movie-title">{foundMovie.title}</h1>
                <i>{foundMovie.tagline}</i>
                <h2>{'Overview: ' + foundMovie.overview}</h2>
                <p>{'Average Rating: ' + parseFloat(foundMovie.average_rating).toFixed(1)}</p>
                <p>{'Released: ' + foundMovie.release_date}</p>
                <p>{'Budget: $' + budget}</p>
                <p>{'Genres: ' + genres}</p>
                <p>{'Revenue: $' + revenue}</p>
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoKey}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    seamless
                />
            </article>
                <img src={foundMovie.poster_path} alt={foundMovie.title + 'poster'} className="poster"/>
        </article>
    )
}

export default SelectedMovie;

SelectedMovie.propTypes = {
    foundMovie: PropTypes.object,
    currentVideos: PropTypes.array
}
