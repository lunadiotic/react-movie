import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        GoMovie
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">
                                Movies
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">
                                Categories
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-primary" aria-current="page" to="/">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-secondary" to="/">
                                Register
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
