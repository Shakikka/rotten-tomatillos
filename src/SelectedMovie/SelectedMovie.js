import { IoIosArrowDropleft } from "react-icons/io";

const SelectedMovie = ({ id, goBack, foundMovie }) => {
    return(
        <article>
            <IoIosArrowDropleft onClick={ () => goBack() } role="button"/>
            <img src={foundMovie.backdrop_path} alt={foundMovie.title + 'image'}/>
            <p>{foundMovie.title}</p>
            <p>{'Average Rating: ' + foundMovie.average_rating}</p>
            <p>{'Released: ' + foundMovie.release_date}</p>
            <p>{'Budget: $' + foundMovie.budget}</p>
            <p>{'Genres: ' + foundMovie.genres}</p>
            <p>{'Overview: ' + foundMovie.overview}</p>
            <p>{'Revenue: $' + foundMovie.revenue}</p>
            <p>{foundMovie.tagline}</p>
            <img src={foundMovie.poster_path} alt={foundMovie.title + 'poster'}/>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${foundMovie.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </article>
    )
}

export default SelectedMovie;