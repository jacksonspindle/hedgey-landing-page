import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="item item1">
        <Link to={"/home"}>Hedgey Labs</Link>
      </div>
      <div className="item item2">
        <div className="item-content-1">
          <Link to={"/pre-token"}>Pre-token</Link>
          <Link to={"/drops"}>Drops</Link>
          <Link to={"/careers"}>Careers</Link>
        </div>
        <div className="item-content-2">
          <Link to={"/login"}>Log In</Link>
          <Link className="get-started-btn" to={"/get-started"}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
