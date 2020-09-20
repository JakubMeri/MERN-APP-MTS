import React, { useState } from "react";
import "./Nav.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import Search from "../Search/Search";

function Nav({ location }) {
  const [toggleMenu, setToggle] = useState(false);
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <Link className="logo-link" to="/">
            ManageTHESkyes
          </Link>
        </div>

        <div className="nav-links-group">
          <Search location={location} />

          <NavLink exact activeClassName="active" className="nav-link" to="/">
            Domů
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/Kosmonauti"
          >
            Spravovat
          </NavLink>
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setToggle(!toggleMenu)}
        >
          {!toggleMenu ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </button>
      </nav>
      <div className={`mobile-menu ${!toggleMenu ? "closed" : "open"}`}>
        <NavLink
          exact
          activeClassName="active"
          className="nav-link-mobile"
          to="/"
          onClick={() => setToggle(!toggleMenu)}
        >
          Domů
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link-mobile"
          to="/Kosmonauti"
          onClick={() => setToggle(!toggleMenu)}
        >
          Spravovat
        </NavLink>
      </div>
    </>
  );
}

export default withRouter(Nav);
