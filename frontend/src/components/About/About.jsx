import "./About.css";
import Navbar from "../Navbar/Navbar";
import { FaDiscord } from "react-icons/fa";
import urns from "../../assets/icons/uranusimg.png";
import socialLinks from "../../Data/sociallinks";

import {
  FaGamepad,
  FaTrophy,
  FaUsers,
  FaBullseye,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      <section className="about" data-aos="fade-up">

        <div className="container">

          {/* Heading */}

          <div className="about-header">

            <p>

            <span className="page-tag">
              TEAM URANUS
            </span>
            </p>
            <p>

            <h1>ABOUT US</h1>
            </p>

            

          </div>

          {/* Main Section */}

          <div className="about-main">

            {/* Left */}

            <div className="about-left">

              <h2>
                Rise Beyond The Stars.
              </h2>

              <div className="about-description">

              <p>
                Founded in 2025, Team Uranus is a competitive gaming organization built on passion, teamwork, and the pursuit of excellence. What started as a small group of dedicated players has grown into an active esports community focused on competitive gameplay, content creation, and helping talented gamers reach their full potential..
              </p>

              <p>
                At Team Uranus, we believe success is built through discipline, consistency, and collaboration. Our members participate in guild wars, tournaments, ranked competitions, and community events while creating engaging gaming content for audiences across multiple platforms.
              </p>

              <p>
                Our mission is to build one of India's most respected gaming communities by providing a professional environment where players can improve their skills, represent the team with pride, and inspire others through dedication and sportsmanship
              </p>
              <p>
                As we continue to grow, Team Uranus remains committed to discovering new talent, supporting content creators, and creating opportunities for gamers to compete, connect, and achieve greater heights together
              </p>
              </div>

              <div className="about-features">

                <div>

                  <FaBullseye />

                  Competitive Esports

                </div>

                <div>

                  <FaRocket />

                  Content Creation

                </div>

                <div>

                  <FaShieldAlt />

                  Professional Community

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="about-right">

              <img
                src={urns}
                alt="Team Uranus"
              />

            </div>

          </div>

          <div className="hero-buttons">

          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn secondary"
          >
            
            Join Our Team Uranus
          </a>
          </div>

          {/* Cards */}

          <div className="about-cards">

            <div className="card">

              <FaGamepad className="icon" />

              <h3>Competitive Gaming</h3>

              <p>
                Daily scrims, ranked pushes, guild wars, and professional
                gameplay.
              </p>

            </div>

            <div className="card">

              <FaTrophy className="icon" />

              <h3>Tournaments</h3>

              <p>
                Participate in community tournaments and national esports
                events.
              </p>

            </div>

            <div className="card">

              <FaUsers className="icon" />

              <h3>Community</h3>

              <p>
                A family of gamers, creators, and esports enthusiasts growing
                together.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;