import React from 'react';
// import '../styles/ScrollUpIcon.css'; 
import '../../styles/ScrollUpIcon.css';

export default function ScrollUpIcon({ size = 45 }) {
  // This function smoothly scrolls the user back to the very top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-up-wrapper" onClick={scrollToTop} title="Back to Top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className="scroll-up-svg"
      >
        {/* 1. Base Solid Circle (Your Cyber-Purple) */}
        <circle cx="32" cy="32" r="32" fill="#b76bff" />
        
        {/* 2. The Two-Tone Vertical Split (Darkens the right half just like the social icons) */}
        <path d="M32 0 A32 32 0 0 1 32 64 Z" fill="black" opacity="0.15" />
        
        {/* 3. Solid White Arrow Up */}
        <path 
          fill="#ffffff" 
          d="M32 15 L14 33 L19 38 L28 29 V49 H36 V29 L45 38 L50 33 Z"
        />
      </svg>
    </div>
  );
}