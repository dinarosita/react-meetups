import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo32 from "./favicon-32x32.png";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo32} alt="Logo" />{" "}
        React Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
