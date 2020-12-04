import React from "react";
import Link from "./Link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div style={{ width: "100vh" }} className="ui secondary pointing menu">
      <div className="ui container">
        <div className="navbar">
          <Link href="/home" className="linkToPage">
            home
          </Link>
          <Link href="/projects" className="linkToPage">
            projects
          </Link>
          <Link href="/contact" className="linkToPage">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
