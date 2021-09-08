import React from "react";
import FooterLink from "./../FooterLink/FooterLink.jsx";
import Header from "./../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="Data Analyst | Teacher | Badminton Player | Artist | Biotechnologist"
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Data Analyst</h3>
          <p className="about-details">
            Data Analyst with more then 2 years of experience in the field of
            Medical sciences and Medicine{" "}
          </p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">Teacher</h3>
          <p className="about-details">
            Teaching is my passion, till now, I've taught many of students about
            Biology, History and Biotechnology.{" "}
          </p>

          {/* Sub section 3 */}
          <h3 className="about-sub-head">Art lover</h3>
          <p className="about-details">
            I'm obsessed with making things and even more obsessed with making
            things better. I've been in the business of creating since i hung my
            first painting on the wall when i was 7.{" "}
            
          </p>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAdress="/projects"
      />
      {/* Vector Frame! */}
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  );
};

export default About;
