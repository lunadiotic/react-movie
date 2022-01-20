import React, { useEffect, useState } from 'react'

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setMovies([
            {id: 1, title: 'Shark Tale'},
            {id: 2, title: 'Sing 2'},
            {id: 3, title: 'Frozen'},
        ])
    })

    return (
        <>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Movies
