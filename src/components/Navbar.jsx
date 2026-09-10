import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        RM
      </Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-menu-btm" onClick={() => setMenuOpen(false)}>
            X
          </button>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
