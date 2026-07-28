import "./Achievement.css";
import { Link } from "react-router-dom";
import { FaTrophy, FaArrowLeft } from "react-icons/fa";
import Navbar from"../Navbar/Navbar"

function Achievement() {

  const achievements = [
    {
      year: "2026",
      title: "Esports",
      description: "Won various championships and made 4+ line-ups in guild"
    },
    {
      year: "2025",
      title: "3K YouTube Subscribers",
      description: "Reached our first major YouTube milestone."
    },
    {
      year: "2025",
      title: "Instagram",
      description: "Reached 2.5k on Instagram"
    },
    {
      year: "2024",
      title: "Team Founded",
      description: "Team Uranus officially began its journey."
    }
  ];

  return (
    <>
    <Navbar />
    <section className="achievement" data-aos="zoom-in">

      <div className="container">

        {/* Header */}

        <div className="page-header">

          <Link to="/" className="back-link">
            <FaArrowLeft />
            Back to Home
          </Link>

          <h2 className="section-title">
            OUR ACHIEVEMENTS
          </h2>

          <p className="achievement-text">
            Milestones that define our journey, growth, and commitment to excellence.
          </p>

        </div>

        {/* Achievement Cards */}

        <div className="achievement-grid">

          {achievements.map((item, index) => (

            <div className="achievement-card" key={index}>

              <div className="achievement-icon">
                <FaTrophy />
              </div>

              <span className="achievement-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
    </>
  );
}

export default Achievement;