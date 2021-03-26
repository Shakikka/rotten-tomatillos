import { IoIosArrowDropleft } from "react-icons/io";
import './SelectedMovie.css'

const SelectedMovie = ({ goBack, foundMovie, currentVideos }) => {
    const style = {
        backgroundImage: `url(${foundMovie.backdrop_path})`
    }
    let videoKey = currentVideos[Math.floor(Math.random() * currentVideos.length)].key
    return(
        <article className="selected-movie" style={style}>
            <article className="movie-info">
            <IoIosArrowDropleft onClick={ () => goBack() } role="button" className="go-back"/>
                <h1 className="movie-title">{foundMovie.title}</h1>
                <i>{foundMovie.tagline}</i>
                <h2>{'Overview: ' + foundMovie.overview}</h2>
                <p>{'Average Rating: ' + foundMovie.average_rating}</p>
                <p>{'Released: ' + foundMovie.release_date}</p>
                <p>{'Budget: $' + foundMovie.budget}</p>
                <p>{'Genres: ' + foundMovie.genres}</p>
                <p>{'Revenue: $' + foundMovie.revenue}</p>
                <iframe
                    src={`https://www.youtube.com/embed/${videoKey}`}
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