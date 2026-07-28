import "./Hero.css";
import { FaYoutube, FaDiscord } from "react-icons/fa";
import socialLinks from "../../Data/sociallinks";
import icons from "../../assets/icons/uranusimg.png";

function Hero() {
  return (
    <section className="hero" data-aos="zoom-in">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <img src={icons} alt="Logo" className="logo-image2"/>

        <h1>
          WELCOME TO <span>TEAM</span> URANUS
        </h1>

        <p className="hero-desc">
          One Team. One Mission. Infinite Victories.
          <br />
          Competitive Gaming • Esports • Content Creation
        </p>

        {/* Buttons */}

        <div className="hero-buttons">

          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn secondary"
          >
            <FaDiscord />
            Join Our Discord Community
          </a>

          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn primary"
          >
            <FaYoutube />
            Watch on YouTube
          </a>

        </div>

        {/* Stats */}

        <div className="hero-stats">

          <div>
            <h2>3K+</h2>
            <span>Subscribers</span>
          </div>

          <div>
            <h2>3K+</h2>
            <span>Followers</span>
          </div>

          <div>
            <h2>80+</h2>
            <span>Guild Members</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;