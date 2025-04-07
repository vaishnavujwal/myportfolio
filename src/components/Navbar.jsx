import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-logo">Ujjwal Vaishnav</div>


      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes className="menu-close" /> : <FaBars className="menu-open" />}
      </div>


      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-80} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



