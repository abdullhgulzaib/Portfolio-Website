import React from "react";

export default function ReactIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Gradient for React Cyan */}
        <linearGradient id="reactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0077B6" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Glowing cyan effect */}
        <filter id="neonGlowCyan" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Outer Hexagon */}
      <polygon 
        points="50,15 80,32 80,68 50,85 20,68 20,32" 
        fill="url(#reactGrad)" 
        filter="url(#neonGlowCyan)"
      />
      
      {/* Inner Right Split (Glass effect) */}
      <polygon 
        points="50,15 80,32 80,68 50,85" 
        fill="#005B8C" 
        opacity="0.6"
      />

      {/* The React Atomic Rings and Core */}
      <g stroke="#FFFFFF" strokeWidth="4.5" fill="none" opacity="0.95">
        <ellipse cx="50" cy="50" rx="14" ry="32" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="14" ry="32" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="14" ry="32" transform="rotate(150 50 50)" />
      </g>
      <circle cx="50" cy="50" r="7" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}