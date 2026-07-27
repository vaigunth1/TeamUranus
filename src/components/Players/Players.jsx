import "./Players.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCrown } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

import kira from "../../assets/images/kira.jpeg";
import maddy from "../../assets/images/maddy.jpeg";
import draco from "../../assets/images/draco.jpeg";
import suk from "../../assets/images/suk.jpeg";
import prince from "../../assets/images/prince.jpeg";
import zeta from "../../assets/images/zeta.jpeg";
import zenin from "../../assets/images/zenin.jpeg";

function Players() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/players");
        setMembers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlayers();
  }, []);

  const imageMap = {
    "kira.jpeg": kira,
    "maddy.jpeg": maddy,
    "draco.jpeg": draco,
    "suk.jpeg": suk,
    "prince.jpeg": prince,
    "zeta.jpeg": zeta,
    "zenin.jpeg": zenin,
  };

  const founder = members.find(
    (member) => member.category === "Founder"
  );

  const managers = members.filter(
    (member) => member.category === "Manager"
  );

  const players = members.filter(
    (member) => member.category === "Player"
  );

  return (
    <>
      <Navbar />

      <section className="players" data-aos="zoom-in">

        <div className="container">

          {/* Header */}

          <div className="players-header">

            <Link to="/" className="back-link">
              <FaArrowLeft />
            </Link>

            <span className="page-tag">
              TEAM URANUS
            </span>

            <h1>OUR TEAM</h1>

            <p>
              Meet the official members behind Team Uranus.
            </p>

          </div>

          {/* Founder */}

          {founder && (
            <section className="team-section">

              <h2 className="team-heading">
                Founder
              </h2>

              <div className="founder-wrapper">

                <div className="founder-card">

                  <div className="founder-image">

                    <img
                      src={imageMap[founder.image]}
                      alt={founder.name}
                    />

                  </div>

                  <div className="founder-content">

                    <h3>{founder.name}</h3>

                    <h5>{founder.name2}</h5>

                    <span className="founder-role">
                      {founder.role}
                    </span>

                    <p>
                      Founder of Team Uranus and the visionary behind building a
                      strong gaming and esports community.
                    </p>

                  </div>

                </div>

              </div>

            </section>
          )}

          {/* Managers */}

          <section className="team-section">

            <h2 className="team-heading">
              Management
            </h2>

            <div className="manager-grid">

              {managers.map((manager) => (

                <div
                  className="manager-card"
                  key={manager._id}
                >

                  <img
                    src={imageMap[manager.image]}
                    alt={manager.name}
                  />

                  <h3>{manager.name}</h3>

                  <h5>{manager.name2}</h5>

                  <span>{manager.role}</span>

                </div>

              ))}

            </div>

          </section>

          {/* Players */}

          <section className="team-section">

            <h2 className="team-heading">
              Competitive Roster
            </h2>

            <div className="players-grid">

              {players.map((player) => (

                <div
                  className="player-card"
                  key={player._id}
                >

                  <div className="player-image">

                    <img
                      src={imageMap[player.image]}
                      alt={player.name}
                    />

                  </div>

                  <div className="player-content">

                    <span className="badge">

                      <FaCrown />

                      {player.badge}

                    </span>

                    <h3>{player.name}</h3>

                    <span className="player-role">
                      {player.role}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </div>

      </section>
    </>
  );
}

export default Players;