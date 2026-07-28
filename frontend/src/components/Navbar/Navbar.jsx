import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/icons/uranusimg.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">

      <Link to="/" className="logo">
        <img
  src={logo}
  alt="Team Uranus"
  className="logo-image"
/>
        <h2>TEAM URANUS</h2>
      </Link>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
  <Link to="/" onClick={() => setMenuOpen(false)}>
    Home
  </Link>
</li>

        <li>
  <Link to="/about" onClick={() => setMenuOpen(false)}>
    About
  </Link>
</li>

<li>
  <Link to="/players" onClick={() => setMenuOpen(false)}>
    Our Team
  </Link>
</li>

<li>
  <Link to="/achievements" onClick={() => setMenuOpen(false)}>
    Achievements
  </Link>
</li>

<li>
  <Link to="/contact" onClick={() => setMenuOpen(false)}>
    Contact
  </Link>
</li>
      </ul>
      </div>

    </nav>
  );
}

export default Navbar;