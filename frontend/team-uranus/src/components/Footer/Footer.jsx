import "./Footer.css";
import socialLinks from "../../data/socialLinks";
import { Link } from "react-router-dom";

import {
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Left */}

          <div>

            <Link to="/" className="footer-logo">

              TEAM <span>URANUS</span>

            </Link>

            <p>

              Rise Beyond The Stars.

              <br />

              Competitive Gaming • Content Creation • Community.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3>Quick Links</h3>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/players">Players</Link></li>

              <li><Link to="/achievements">Achievements</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Community */}

          <div>

            <h3>Community</h3>

            <ul>

              <li>
                <a
                  href={socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guild Recruitment
                </a>
              </li>

              <li>
                <a
                  href={socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Server
                </a>
              </li>

              <li>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>

              <li>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3>Follow Us</h3>

            <div className="footer-social">

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href={socialLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>

              

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 Team Uranus. All Rights Reserved.

          </p>

          <button onClick={scrollTop}>

            <FaArrowUp />

          </button>

        </div>

      </div>

    </footer>

  );
}

export default Footer;