import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
      setMovie({
          id: id,
          title: 'Some movie title',
          runtime: 150
      })
    }, [id]);
    
    return (
        <>
            <h2>{movie.title}</h2>
            <div className="card shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={400}
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                </svg>
            </div>
            <table className="table table-dark table-striped">
                <tbody>
                    <tr>
                        <th>Title:</th>
                        <td>{movie.title}</td>
                    </tr>
                    <tr>
                        <th>Run time:</th>
                        <td>{movie.runtime}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default MovieDetail;
