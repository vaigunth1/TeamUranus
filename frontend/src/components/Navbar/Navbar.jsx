import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/uranusimg.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

        <NavLink to="/" className="logo">

          <img
            src={logo}
            alt="Team Uranus Logo"
            className="logo-image"
          />

          <span>
            TEAM <span className="logo-highlight">URANUS</span>
          </span>

        </NavLink>

        {/* Navigation */}

        <ul className="nav-links">

          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/players">
              Our Team
            </NavLink>
          </li>

          <li>
            <NavLink to="/achievements">
              Achievements
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;