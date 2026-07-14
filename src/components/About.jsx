import React from "react";
import "../styles/About.css";
import MyImg from "../assets/my_img.png";
import HTML_logo from "../assets/html_logo.png";
import CSS_logo from "../assets/css_logo.png";
import JS_logo from "../assets/js_logo.png";
import REACT_logo from "../assets/react.png";

const About = () => {
  return (
    <div className="about_page">
      <div className="main_container">
        <div className="introduction_block">
          <div className="introduction">
            <p className="line1">About Me</p>
            <p className="line2">
              Hey, I'm <span>Abdullah Gulzaib</span> — a passionate
              <span> Front-End Developer</span> from
              <span> Pakistan</span>. I turn ideas into clean, responsive, and
              pixel-perfect web experiences using HTML, CSS, JavaScript, and
              React. I completed my <span> matric</span> in <span> 2023</span>{" "}
              and
              <span> Intermidiate (ICS)</span> in <span> 2025</span> from
              district
              <span> Layyah, Punjab.</span>Currently pursuing BS Computer
              Science (CS) at{" "}
              <span>Air University(Main Campus), Islamabad</span>, I love
              crafting user interfaces that are fast, beautiful, and intuitive.
              I'm new at this skill and <span>gainning experience</span> from
              interacting with people and making some projects and committed to
              delivering high-quality work on time and exceeding client
              expectations.
            </p>
          </div>
          <div className="pic">
            <img src={MyImg} alt="My Picture" />
          </div>
        </div>
        <div className="skill_block">
          <p className="line1">My Skills</p>
          <div className="outer_skill_div">
            <div className="skill">
              <img src={HTML_logo} />
            </div>
            <div className="skill">
              <img src={CSS_logo} />
            </div>
            <div className="skill">
              <img src={JS_logo} />
            </div>
            <div className="skill">
              <img src={REACT_logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
