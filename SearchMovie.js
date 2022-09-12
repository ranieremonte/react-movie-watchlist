import React, {useEffect, useState} from "react"
import MovieCard from "./MovieCard"

export default function SearchMovie(){
    const [query, setQuery] = useState('')
    const [movie, setMovie] = useState([])
    // useEffect(() => {
    //     const buscarMovies = async (e) =>{ 
    //     e.preventDefault
        
    //     const res = await fetch(url)
    //     const data = await re.json()
    //     console.log(data)
    //     }
    // }, [])
    const buscarMovies = async (e) =>{ 
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=f48b661fa4b54fb58864f1863a58ebe5&language=pt-BR&query=${query}&page=1&include_adult=false`
        
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data.results)
        }
      
    return(
        <>
            <form className="form" onSubmit={buscarMovies}>
                <label htmlFor="query" className="label"></label>
                <input 
                    className="input"
                    type="text" name="query"
                    placeholder="Pesquise um filme!"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <button type="submit" className="button">Buscar</button>
            </form>
            <div className="film-list">
                {movie.map(film => (
                     <MovieCard film={film} key={film.id}/>   
                ))}
            </div>
       </>         
    )
}