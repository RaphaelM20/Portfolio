import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const toggleRef = useRef(null);

  // Close the menu whenever the route changes.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="nav-logo" aria-label="Raphael Moreira, home">
          <span className="nav-logo-mark" aria-hidden="true">
            RM
          </span>
          <span className="nav-logo-name" aria-hidden="true">
            Raphael Moreira
          </span>
        </Link>

        <div className="nav-actions">
          <nav aria-label="Main">
            <ul className="nav-links">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <button
            ref={toggleRef}
            type="button"
            className="icon-button menu-button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        <ul className="container">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
