interface MovieProps {
    "id": number,
    "imgURL"?: string,
    "title": string,
    "length": number,
    "desc": string
}

function Movie({imgURL, title, length, desc}: MovieProps) {
    return (
        <>
            <img src={imgURL} />
            <h1>{title}</h1>
            <p>{length} Minutes</p>
            <p>{desc}</p>
        </>      
    )
}

export default Movie