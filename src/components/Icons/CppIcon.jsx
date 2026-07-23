import React from "react";

export default function CppIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Gradient for C++ Deep Blue */}
        <linearGradient id="cppGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00599C" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#002D54" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Glowing deep blue effect */}
        <filter id="neonGlowDarkBlue" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Outer Octagon */}
      <polygon 
        points="30,15 70,15 85,50 70,85 30,85 15,50" 
        fill="url(#cppGrad)" 
        filter="url(#neonGlowDarkBlue)"
      />
      
      {/* Inner Right Split (Glass effect) */}
      <polygon 
        points="50,15 70,15 85,50 70,85 50,85" 
        fill="#002244" 
        opacity="0.6"
      />

      {/* The 'C' */}
      <path 
        d="M 52 35 C 32 35 32 65 52 65" 
        fill="none" 
        stroke="#FFFFFF" 
        strokeWidth="7" 
        strokeLinecap="round" 
        opacity="0.95"
      />
      
      {/* The First '+' */}
      <path d="M 57 50 H 67 M 62 45 V 55" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" opacity="0.95"/>
      
      {/* The Second '+' */}
      <path d="M 70 50 H 80 M 75 45 V 55" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" opacity="0.95"/>
    </svg>
  );
}