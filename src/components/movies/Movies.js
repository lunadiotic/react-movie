import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Movies.css'

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
            <h2 className='h2 mb-4'>Choose Movies</h2>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                
                {movies.map((movie) => (
                    <div className="col" key={movie.id}>
                        <div className="card shadow-sm">
                            <svg
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height={200}
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                            </svg>
                            <div className="card-body">
                                <Link className="h3 movie-title" to={`/movies/${movie.id}`}>{movie.title}</Link>
                                <p className="card-text">
                                    2022
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default Movies
