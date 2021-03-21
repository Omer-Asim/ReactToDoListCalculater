import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <React.StrictMode>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/RegisterPage" className="nav-link">
                Register <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/toDoApp" className="nav-link">
                toDoApp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Calculater" className="nav-link">
                Calculater
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.StrictMode>
  );
};

export default Header;
