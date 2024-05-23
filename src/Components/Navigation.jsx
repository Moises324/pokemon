import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inActive");
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink
          className={({ isActive }) =>
            `navbar-brand ${setActiveClass({ isActive })}`
          }
          to="/"
        >
          <img
            src="https://cdn.vectorstock.com/i/1000v/74/05/pokemon-go-logo-icon-vector-23237405.jpg"
            alt="pokemon"
            className="logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${setActiveClass({ isActive })}`
                }
                to="/"
                aria-current="page"
                href="#"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${setActiveClass({ isActive })}`
                }
                to="/Pokemones"
              >
                Pokemon
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
