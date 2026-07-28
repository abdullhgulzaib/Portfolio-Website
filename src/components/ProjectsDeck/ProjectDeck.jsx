import React, { useState, useCallback } from "react";
import GalaxyBackground from "./GalaxyBackground";
import CarouselStage from "./CarouselStage";
import { projects } from "./projectsData";
import "../../styles/ProjectsDeck.css"; 
const ProjectDeck = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  }, []);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeModal]);

  return (
    <section className="project-deck-section" id="projects">
      <GalaxyBackground />

      <div className="deck-content">
        <h2 className="deck-title">Featured Projects</h2>
        <p className="deck-subtitle">
          Drag to rotate • Hover to explore • Click to open
        </p>

        <CarouselStage projects={projects} onCardClick={openModal} />
      </div>

      {/* Fullscreen Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderColor: `${selectedProject.color}40`,
              boxShadow: `0 0 40px ${selectedProject.color}25, 0 20px 60px rgba(0,0,0,0.5)`,
            }}
          >
            <button className="modal-close" onClick={closeModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="modal-header">
              <div
                className="modal-glyph"
                style={{ background: `${selectedProject.color}15`, color: selectedProject.color }}
              >
                <ModalGlyph type={selectedProject.glyph} color={selectedProject.color} />
              </div>
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-tagline">{selectedProject.tagline}</p>
              </div>
            </div>

            {/* Overview */}
            <div className="modal-section">
              <h4>Overview</h4>
              <p>{selectedProject.overview}</p>
            </div>

            {/* Features */}
            <div className="modal-section">
              <h4>Key Features</h4>
              <ul>
                {selectedProject.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="modal-section">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="tech-tag" style={{ borderColor: `${selectedProject.color}40`, color: selectedProject.color }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="modal-section">
              <h4>Technical Challenge</h4>
              <p className="challenge-text">{selectedProject.challenge}</p>
            </div>

            {/* Actions */}
            <div className="modal-actions">
              {selectedProject.liveDemo ? (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="v-btn v-btn-primary"
                  style={{ background: selectedProject.color }}
                >
                  Live Demo
                </a>
              ) : (
                <span className="v-btn v-btn-disabled" title="Coming soon">
                  Demo Coming Soon
                </span>
              )}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="v-btn v-btn-secondary"
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ModalGlyph = ({ type, color }) => {
  const svgs = {
    camera: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" width="28" height="28"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
    briefcase: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" width="28" height="28"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
    layout: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" width="28" height="28"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    edit: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" width="28" height="28"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    cloud: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" width="28" height="28"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  };
  return svgs[type] || svgs.layout;
};

export default ProjectDeck;