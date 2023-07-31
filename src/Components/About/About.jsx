import React from "react";
import "./About.css";
import CER from "./CER";
import ME from "../../Assets/MyNewPic.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiFolder } from "react-icons/bi";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="aboutme-image">
            <img src={ME} alt="my new pic" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <BsAward className="about-icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>420</small>
            </article>

            <article className="about-card">
              <BiFolder className="about-icon" />
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>
          <p>
            I am From Koppal and I have Completed my basic Education in Koppal.
            <br />
            I have Completed My BE in JIT college Davanagere with a grade of
            6.56.
            <br />I have Completed <b className="bold">MERN Full Stack</b>
            Course in JSPIDER Basavanagudi Bengaluru
          </p>
          <CER />
        </div>
      </div>
    </section>
  );
}

export default About;
