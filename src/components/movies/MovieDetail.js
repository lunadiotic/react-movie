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
            <h2>Movie: {movie.title}</h2>
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
