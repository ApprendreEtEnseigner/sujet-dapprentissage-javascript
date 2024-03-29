import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}>
          <li>Accueil</li>
        </NavLink>

        <NavLink to="/about">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
