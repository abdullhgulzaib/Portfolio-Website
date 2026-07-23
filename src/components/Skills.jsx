import React, { useState } from "react";
// import "../styles/Skills.css";
import "../styles/Skills.css";

import HtmlIcon from "./Icons/HtmlIcon";
import CssIcon from "./Icons/CssIcon";
import JsIcon from "./Icons/JsIcon";
import GitIcon from "./Icons/GitIcon";
import GithubIcon from "./Icons/GithubIcon";
import ReactIcon from "./Icons/ReactIcon";
import CppIcon from "./Icons/CppIcon";
import JavaIcon from "./Icons/JavaIcon";



const skills = [
  {
    id: 1,
    name: "React.js",
    icon: <ReactIcon />,
    subtitle: "Front-End",
    description:
      "Building dynamic, responsive user interfaces and single-page applications using modern hooks and components.",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <JsIcon />,
    subtitle: "ES6+",
    description:
      "Writing clean, scalable front-end logic, DOM manipulation, and asynchronous programming.",
  },
  {
    id: 3,
    name: "HTML",
    icon: <HtmlIcon />, 
    subtitle: "Web Fundamentals",
    description:
      "Structuring semantic, accessible markup as the foundation for every page and component.",
  },
  {
    id: 7,
    name: "CSS",
    icon: <CssIcon />, 
    subtitle: "Web Fundamentals",
    description:
      "Crafting pixel-perfect, responsive layouts and styling using modern CSS3, Flexbox, and Grid.",
  },
  {
    id: 4,
    name: "C++",
    icon: <CppIcon />,
    subtitle: "OOP",
    description:
      "Implementing strong Object-Oriented Programming concepts, including templates, virtual functions, and operator overloading.",
  },
  {
    id: 5,
    name: "Java",
    icon: <JavaIcon />,
    subtitle: "DSA",
    description:
      "Practicing complex Data Structures and Algorithms, pattern solving, and core logic building.",
  },
  {
    id: 6,
    name: "Git",
    icon: <GitIcon />,
    subtitle: "Version Control",
    description:
      "Managing local repositories, branching workflows, commits, and merges using GitBash.",
  },
  {
    id: 8,
    name: "GitHub",
    icon: <GithubIcon />,
    subtitle: "Collaboration",
    description:
      "Hosting repositories, opening pull requests, and collaborating on code with others.",
  },
];

const gridPosition = {
  3: { col: 0, row: 0 }, // HTML
  7: { col: 0, row: 1 }, // CSS
  2: { col: 1, row: 0 }, // JavaScript
  5: { col: 1, row: 1 }, // Java
  1: { col: 2, row: 0 }, // React
  4: { col: 2, row: 1 }, // C++
  6: { col: 3, row: 0 }, // Git
  8: { col: 3, row: 1 }, // GitHub
};

const NUM_COLUMNS = 4;

const HEX_WIDTH = 200;
const HEX_HEIGHT = 175;
const COL_SPACING = HEX_WIDTH * 0.75;
const ROW_OFFSET = HEX_HEIGHT / 2;

function getHexStyle(id) {
  const { col, row } = gridPosition[id];
  const x = col * COL_SPACING;
  const y = row * HEX_HEIGHT + (col % 2 === 1 ? ROW_OFFSET : 0);
  return { left: `${x}px`, top: `${y}px` };
}

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSelect = (skill) => {
    setActiveSkill((current) => (current?.id === skill.id ? current : skill));
  };

  const handleLeave = () => {
    setActiveSkill(null);
  };

  return (
    <section id="Skills" className="skills-section">
      <h2 className="skills-title">MY TECH STACK</h2>

      <div className="skills-content">
        <div
          className="hex-grid"
          style={{
            
            "--hex-width": `${HEX_WIDTH}px`,
            "--hex-height": `${HEX_HEIGHT}px`,
            width: `${COL_SPACING * (NUM_COLUMNS - 1) + HEX_WIDTH}px`,
            height: `${HEX_HEIGHT * 2 + ROW_OFFSET}px`,
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`hex-item ${
                activeSkill?.id === skill.id ? "hex-active" : ""
              }`}
              style={getHexStyle(skill.id)}
              onMouseEnter={() => handleSelect(skill)}
              onMouseLeave={handleLeave}
              onFocus={() => handleSelect(skill)}
              onBlur={handleLeave}
              onClick={() => handleSelect(skill)}
              tabIndex={0}
              role="button"
              aria-label={skill.name}
            >
              <div className="hex-shape">
               <div className="hex-icon">
  {typeof skill.icon === "string" ? (
    <img
      src={skill.icon}
      alt={skill.name}
      className="custom-skill-icon"
    />
  ) : (
    <div className="custom-skill-icon">
      {skill.icon}
    </div>
  )}
</div>
                {/* <span className="hex-name">{skill.name}</span> */}
              </div>
            </div>
          ))}
        </div>

        <div className={`info-card ${activeSkill ? "info-card-visible" : ""}`}>
          {activeSkill ? (
            <>
              <div className="info-card-header">
             <div className="card-icon">
  {typeof activeSkill.icon === "string" ? (
    <img
      src={activeSkill.icon}
      alt={activeSkill.name}
      className="custom-skill-icon"
    />
  ) : (
    <div className="custom-skill-icon">
      {activeSkill.icon}
    </div>
  )}
</div>
                <div>
                  <h3>{activeSkill.name}</h3>
                  <span className="info-card-subtitle">
                    {activeSkill.subtitle}
                  </span>
                </div>
              </div>
              <p>{activeSkill.description}</p>
            </>
          ) : (
            <p className="info-card-placeholder">
              Hover (or tap) a skill to see the details.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}