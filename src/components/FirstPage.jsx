import React, { useEffect, useRef } from 'react';
import '../styles/FirstPage.css';

const FirstPage = () => {
  const spotlightRef = useRef(null);
  const heroRef = useRef(null);

  // Typing loop effect
  useEffect(() => {
    const roles = [
      'Front-end Developer',
      'React Enthusiast',
      'Problem Solver',
      'Open Source Contributor',
      'Landing Page Designer',
      'Learning back-end Development',
    ];
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const typeLoop = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typewriter.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriter.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
      }

      timer = setTimeout(typeLoop, typeSpeed);
    };

    typeLoop();
    return () => clearTimeout(timer);
  }, []);

  // Mouse spotlight effect
  useEffect(() => {
    const hero = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!hero || !spotlight) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
      spotlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Scroll to Projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="Home" ref={heroRef} className="First_page">
      {/* Mouse spotlight */}
      <div className="spotlight" ref={spotlightRef}></div>

      <div className="container">
        <p className="line1">
          <span>Hello,</span> I'm
        </p>
        <p className="line2">Abdullah Gulzaib</p>
        <div className="line3">
          <span className="role-prefix">I am a </span>
          <span id="typewriter" className="typewriter-text"></span>
          <span className="cursor">|</span>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View My Work
          </button>
          <a
            href="/Abdullah_Gulzaib_CV (1).pdf"
            download
            className="btn btn-secondary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;