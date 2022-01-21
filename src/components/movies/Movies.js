import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setMovies([
            {id: 1, title: 'Shark Tale'},
            {id: 2, title: 'Sing 2'},
            {id: 3, title: 'Frozen'},
        ])
    }, [])

    return (
        <>
            <h2>Choose Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Movies
