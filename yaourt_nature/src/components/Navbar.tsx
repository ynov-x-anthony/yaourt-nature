// On crée une interface pour pouvoir typer le props 'moviesList' reçu dans NavBar.
interface MovieProps {
    id: number
    imgURL: string
    title: string
    length: number
    desc: string
}

// Interface qui type les props recçus par NavBar.
interface NavbarProps {
    moviesList: MovieProps[]
    setMovieId: (movieId: number) => void
}

// Création du composant NavBar.
function Navbar({moviesList, setMovieId}: NavbarProps) {
    return (
        <nav className="navbar">
            {/* moviesList.map permet de parcourir la liste des films reçue dans les props.
            Cela nous permet de créer les boutons de la NavBar avec l'id de chaque film qui, au clic, changeront
            le state de la valeur moveId dans App.tsx grâce à setMovieId.*/}
            {moviesList.map((movie) => (
            <button className="movie-select-btn" key={movie.title} type='button' onClick={() => setMovieId(movie.id)}>{movie.id}</button>
            ))}
        </nav>
    )
}

export default Navbar;