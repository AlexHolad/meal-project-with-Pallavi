import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="list">
        <li>
          <Link to="/meals">
            <h2>Go To Meals</h2>
          </Link>
        </li>
        <li>
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
