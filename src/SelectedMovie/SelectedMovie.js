import { IoIosArrowDropleft } from "react-icons/io";

const SelectedMovie = ({ id, goBack, movies }) => {
    const foundMovie = movies.find(movie => movie.id === id)
    return(
        <article>
            <IoIosArrowDropleft onClick={ () => goBack() } role="button"/>
            <img src={foundMovie.backdrop_path} alt={foundMovie.title + 'image'}/>
            <p>{foundMovie.title}</p>
            <p>{foundMovie.average_rating}</p>
            <p>{foundMovie.release_date}</p>
            <img src={foundMovie.poster_path} alt={foundMovie.title + 'poster'}/>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/IpSK2CsKULg`}
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