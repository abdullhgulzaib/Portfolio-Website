import React, { useState, useRef, useEffect, useCallback } from "react";
import "../../styles/ProjectsDeck.css"; 

const CarouselStage = ({ projects, onCardClick }) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const startXRef = useRef(0);
  const rotationRef = useRef(0);
  const autoRotateRef = useRef(true);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  const CARD_COUNT = projects.length;
  const ANGLE_STEP = 360 / CARD_COUNT;
  const RADIUS = 220; // Distance from center

  // Auto-rotation loop
  useEffect(() => {
    const animate = (time) => {
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (autoRotateRef.current && !isDragging) {
        rotationRef.current += 0.05 * (dt / 16);
        setRotation(rotationRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDragging]);

  // Mouse / Touch handlers
  const handlePointerDown = useCallback((e) => {
    setIsDragging(true);
    autoRotateRef.current = false;
    startXRef.current = e.clientX || e.touches?.[0]?.clientX;
    rotationRef.current = rotation;
  }, [rotation]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const delta = (clientX - startXRef.current) * 0.4;
    rotationRef.current = rotationRef.current + delta;
    startXRef.current = clientX;
    setRotation(rotationRef.current);
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      // Resume auto-rotate after 2.5s
      setTimeout(() => {
        autoRotateRef.current = true;
      }, 2500);
    }
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  const getCardStyle = (index) => {
    const angle = index * ANGLE_STEP;
    const isHovered = hoveredIndex === index;
    const baseTransform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
    const hoverTransform = isHovered ? ` translateZ(50px) scale(1.08)` : "";
    
    return {
      transform: `${baseTransform}${hoverTransform}`,
      transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      zIndex: isHovered ? 10 : 1,
    };
  };

  const getGlowStyle = (color) => ({
    boxShadow: hoveredIndex !== null
      ? `0 0 30px ${color}40, 0 0 60px ${color}20, inset 0 0 20px ${color}15`
      : `0 0 15px ${color}30, 0 0 30px ${color}10`,
    borderColor: `${color}60`,
  });

  return (
    <div
      className="stage"
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* Glowing platform ring */}
      <div className="platform-ring" />

      {/* 3D Carousel */}
      <div
        className="carousel"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="vault-card"
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => !isDragging && onCardClick(project)}
          >
            <div
              className="vault-card-inner"
              style={getGlowStyle(project.color)}
            >
              {/* Screenshot Placeholder */}
              <div className="card-visual" style={{ borderColor: `${project.color}30` }}>
                <ProjectGlyph type={project.glyph} color={project.color} />
              </div>

              {/* Info */}
              <div className="card-info">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-stack">
                  {project.techStack.join(" • ")}
                </p>
                <div className="card-actions">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="v-btn v-btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="v-btn v-btn-secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              background: projects[0]?.color || "#a855f7",
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* Inline SVG glyphs for each project type */
const ProjectGlyph = ({ type, color }) => {
  const glyphs = {
    camera: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    layout: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    edit: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  };

  return (
    <div className="glyph-wrapper">
      {glyphs[type] || glyphs.layout}
    </div>
  );
};

export default CarouselStage;