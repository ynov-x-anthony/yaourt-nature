// Interface pour typer les props reçus dans le composant Movie.
interface MovieProps {
    id: number
    imgURL: string
    title: string
    length: number
    desc: string
}

function Movie({imgURL, title, length, desc}: MovieProps) {
    return (
        <div className="movie-container">
            <img src={imgURL} />
            <h1>{title}</h1>
            <p className="length-caption">{length} Minutes</p>
            <p className="desc-caption">{desc}</p>
        </div>      
    )
}

export default Movie