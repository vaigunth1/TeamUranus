import "./Stats.css";

import Counter from "../Counter/Counter";

import {
  FaYoutube,
  FaInstagram,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

function Stats() {
  return (
    <section
  className="stats"
  data-aos="fade-up"
>

      <div className="container">

        <h2 className="section-title">
          LIVE COMMUNITY
        </h2>

        <p className="stats-subtitle">
          Real-time growth of Team Uranus across our gaming community.
        </p>

        <div className="stats-grid">

          <div className="stat-card">

            <FaYoutube className="stat-icon youtube" />

            <h3>
              <Counter end={3000} />+
            </h3>

            <span>YouTube Subscribers</span>

          </div>

          <div className="stat-card">

            <FaInstagram className="stat-icon instagram" />

            <h3>
              <Counter end={3000} />+
            </h3>

            <span>Instagram Followers</span>

          </div>

          <div className="stat-card">

            <FaUsers className="stat-icon members" />

            <h3>
              <Counter end={80} />
            </h3>

            <span>Guild Members</span>

          </div>

          <div className="stat-card">

            <FaTrophy className="stat-icon trophy" />

            <h3>
              <Counter end={20} />
            </h3>

            <span>Tournament Wins</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;