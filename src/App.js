import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

import './App.css';

import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import MovieDetail from './components/movies/MovieDetail';
import Categories from './components/categories/Categories';
import Nav from './components/layouts/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <main className="container">
        <div className="row">
          <div className="col-md-12">
            <Routes>
              <Route path="/movies/:id" element={<MovieDetail/>} />
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
      </main>
    </Router>
  );
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
