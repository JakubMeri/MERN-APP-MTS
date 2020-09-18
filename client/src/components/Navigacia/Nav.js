import React from "react";
import "./Nav.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import Search from "../Search/Search";

function Nav({ location }) {
  return (
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
        <NavLink activeClassName="active" className="nav-link" to="/Kosmonauti">
          Spravovat
        </NavLink>
      </div>
    </nav>
  );
}

export default withRouter(Nav);
