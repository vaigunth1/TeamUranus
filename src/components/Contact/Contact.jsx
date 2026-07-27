import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaDiscord,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bx94g7s",
        "template_36lgsf8",
        form,
        "G96MKxPe1M0Gmewpa"
      )
      .then(() => {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <>
      <Navbar />

      <section className="contact" data-aos="zoom-in">
        <div className="container">

          <h2 className="section-title">
            CONTACT MISSION CONTROL
          </h2>

          <p className="contact-subtitle">
            Join Team Uranus, collaborate with us, or reach out for
            tournaments, sponsorships, and partnerships.
          </p>

          <div className="contact-wrapper">

            {/* Left Side */}

            <div className="contact-info">

              <div className="info-card">

                <FaEnvelope className="info-icon" />

                <div>

                  <h3>Email</h3>

                  <a href="mailto:teamuranus@gmail.com">
                    teamuranus@gmail.com
                  </a>

                </div>

              </div>

              <div className="info-card">

                <FaDiscord className="info-icon" />

                <div>

                  <h3>Discord</h3>

                  <a
                    href="https://discord.gg/teamuranus"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join Server
                  </a>

                </div>

              </div>

              <div className="info-card">

                <FaMapMarkerAlt className="info-icon" />

                <div>

                  <h3>Location</h3>

                  <p>India</p>

                </div>

              </div>

              <div className="social-row">

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://discord.gg/teamuranus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                </a>

              </div>

            </div>

            {/* Right Side */}

            <div className="contact-form">

              {success && (

                <div className="success-message">

                  <h3>🚀 Message Sent Successfully!</h3>

                  <p>
                    Thank you for contacting Team Uranus.
                    We will get back to you as soon as possible.
                  </p>

                </div>

              )}

              <form onSubmit={sendEmail}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit">

                  <FaPaperPlane />

                  <span>Send Message</span>

                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;