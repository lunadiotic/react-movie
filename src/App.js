import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

import './App.css';

import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">
            Go! Watch some movies.
          </h1>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Admin Panel</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/movies/:id" element={<MoviesDetail/>} />
              <Route path="/movies" element={<Movies/>} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}


function MoviesDetail() {
  let { id } = useParams()
  return <h1>Movide ID {id}</h1>
}

export default App;
