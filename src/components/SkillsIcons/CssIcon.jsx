import React from "react";

export default function CssIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Gradient for the CSS Shield matching the blue tech theme */}
        <linearGradient id="cssGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#264de4" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2965f1" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Subtle glowing blue effect */}
        <filter id="neonGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Outer Shield with Gradient and Glow */}
      <polygon 
        points="15,10 85,10 78,80 50,92 22,80" 
        fill="url(#cssGrad)" 
        filter="url(#neonGlowBlue)"
      />
      
      {/* Inner Right Shield (Classic CSS styling, slightly transparent) */}
      <polygon 
        points="50,16 78,16 72,75 50,84" 
        fill="#155BF9" 
        opacity="0.6"
      />

      {/* The White '3' Logo Path */}
      <path 
        d="M32 28 h36 l-1 11 h-24 l-0.5 5 h24 l-2.5 25 l-14 4 l-14 -4 l-0.5 -8 h9 l0.2 4 l5.3 1.5 l5.3 -1.5 l1 -9 h-21 z" 
        fill="#FFFFFF" 
        opacity="0.9"
      />
    </svg>
  );
}