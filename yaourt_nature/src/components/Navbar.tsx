interface MovieProps {
    id: number
    imgURL: string
    title: string
    length: number
    desc: string
}

interface NavbarProps {
    moviesList: MovieProps[]
    setMovieId: (movieId: number) => void
}

function Navbar({moviesList, setMovieId}: NavbarProps) {
    return (
        <nav className="navbar">
            {moviesList.map ((movie) => (
            <button className="movie-select-btn" key={movie.title} type='button' onClick={() => setMovieId(movie.id)}>{movie.id}</button>
            ))}
        </nav>
    )
}

export default Navbar;