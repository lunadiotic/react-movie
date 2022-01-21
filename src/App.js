import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

import './App.css';

import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import Categories from './components/categories/Categories';
import Nav from './components/layouts/Nav';

function App() {
  return (
    <Router>
      <Nav/>
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
                  <Link to="/categories">Categories</Link>
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
              <Route exact path="/categories">
                <Route path="drama" element={<Categories title="Drama"/>} />
                <Route path="comedy" element={<Categories title="Comedy"/>} />
                <Route index={true} element={<CategoryPage/>}/>
              </Route>
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

function CategoryPage() {
  let { pathname } = useLocation()
  return (
    <>
      <h2>Categories</h2>
      <ul>
        <li><Link to={`${pathname}/comedy`}>Comedy</Link></li>
        <li><Link to={`${pathname}/drama`}>Drama</Link></li>
      </ul>
    </>
  )
}

export default App;
