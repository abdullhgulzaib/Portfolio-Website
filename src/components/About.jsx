import React from "react";
import "../styles/About.css";
import MyImg from "../assets/my_img.png";
import HTML_logo from "../assets/html_logo.png";
// import CSS_logo from "../assets/css_logo.png";
import JS_logo from "../assets/js_logo.png";
import REACT_logo from "../assets/react.png";

const About = () => {
  return (
    <div id="About" className="about_page">
      <div className="main_container">
        <div className="introduction_block">
          <div className="introduction">
            <p className="line1">About Me</p>
            <p className="line2">
               Hey, I'm <span>Abdullah Gulzaib</span> — a passionate{" "}
  <span>Front-End Developer</span> based in <span>Pakistan</span>. I specialize
  in turning complex problems into clean, responsive, and pixel-perfect web
  experiences.
  Currently pursuing a BS in <span>Computer Science</span> at{" "}
  <span>Air University, Islamabad</span>, I have built a strong technical
  foundation that goes beyond the surface level. While my primary focus lies in
  crafting dynamic user interfaces using{" "}
  <span>HTML, CSS, JavaScript, and React</span>, my academic and personal
  projects have equipped me with a deep understanding of software engineering
  principles. I have robust experience applying Object-Oriented Programming
  concepts in <span>C/C++</span> and implementing Data Structures & Algorithms
  utilizing <span>Java</span>.
  I am a continuous learner who loves bridging the gap between strong
  computational logic and beautiful, user-centric design. I am highly motivated,
  detail-oriented, and committed to writing clean, <span>scalable code</span>{" "}
  while exceeding client and team expectations.
            </p>
          </div>
          <div className="pic">
            <img src={MyImg} alt="My Picture" />
          </div>
        </div>
        {/* <div className="skill_block">
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
        </div> */}
      </div>
    </div>
  );
};

export default About;
