import movieData from '../movie-data'

const SelectedMovie = ({id}) => {
    const foundMovie = movieData.movies.find(movie => movie.id === id)
    return(
        <article>
            <button>Back</button>
            <img src={foundMovie.backdrop_path} alt={foundMovie.title + 'image'}/>
            <p>{foundMovie.title}</p>
            <p>{foundMovie.average_rating}</p>
            <p>{foundMovie.release_date}</p>
            <img src={foundMovie.poster_path} alt={foundMovie.title + 'poster'}/>
        </article>
    )
}

export default SelectedMovie;