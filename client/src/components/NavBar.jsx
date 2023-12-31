import { Link } from "react-router-dom";
import learnLogo from "../assets/learnLogo.png";
import backgroundTile from "../assets/backgroundTile.png";
import { useState } from "react";
import "../App.css"; // Replace with the correct path to your CSS file

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
      <img
            className="navLogo"
            src={learnLogo}
            alt="learning techodyssey logo"
            width="200"
            height="300"
          />
          </div>
          <button className="hamburger" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className="nav-container">
          <div className={`nav-links ${isNavExpanded ? 'expanded' : ''}`}>
          <div className="background-container">
      <img
            className="backgroundTile"
            src={backgroundTile}
            alt="learning techodyssey logo"
          />
          </div>
            <Link to="/" onClick={closeNav}>Home</Link>
            <Link to="/blogs" onClick={closeNav}>Blog</Link>
            <Link to="/projects" onClick={closeNav}>Projects</Link>
            <Link to="/reviews" onClick={closeNav}>Reviews</Link>
            <Link to="/contact" onClick={closeNav}>Contact</Link>
            <a href="#" className="close" onClick={closeNav}></a>
      </div >
      </div>
    </nav>
  );
}
