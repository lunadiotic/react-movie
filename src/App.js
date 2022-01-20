import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

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

function Home(){
  return <h1>Home</h1>
}
function Movies(){
  return <h1>Movies</h1>
}
function Admin(){
  return <h1>Admin</h1>
}

export default App;
