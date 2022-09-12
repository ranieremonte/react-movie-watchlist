import React from "react"

export default function MovieCard({film}){
    return(
        <div className="card">
            <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${film.poster_path}`}
            alt={film.title + ' poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{film.title}</h3>
                <p className="card--small">RELEASE DATE: {film.release_date}</p>
                <p className="card--small">RATING: {film.vote_average}</p>
                <p className="card--desc">{film.overview}</p>
            </div>
        </div>
    )
}