import React from "react";

export default function JavaIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Gradient for Java Orange/Red */}
        <linearGradient id="javaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8981D" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#A62C00" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Glowing orange effect */}
        <filter id="neonGlowJava" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Outer Circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="38" 
        fill="url(#javaGrad)" 
        filter="url(#neonGlowJava)"
      />
      
      {/* Inner Right Split (Glass effect) */}
      <path 
        d="M 50 12 A 38 38 0 0 1 50 88 Z" 
        fill="#731900" 
        opacity="0.6"
      />

      {/* Coffee Cup Base */}
      <path 
        d="M 36 55 C 36 72 58 72 58 55 V 45 H 36 Z" 
        fill="#FFFFFF" 
        opacity="0.95"
      />
      
      {/* Cup Handle */}
      <path 
        d="M 58 48 C 68 48 68 60 58 60" 
        fill="none" 
        stroke="#FFFFFF" 
        strokeWidth="4" 
        strokeLinecap="round" 
        opacity="0.95"
      />

      {/* Cup Saucer */}
      <ellipse cx="47" cy="74" rx="16" ry="2.5" fill="#FFFFFF" opacity="0.95" />

      {/* Steam Squiggles */}
      <path d="M 41 38 Q 37 34 41 30 T 41 22" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.95"/>
      <path d="M 47 38 Q 43 34 47 30 T 47 22" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.95"/>
      <path d="M 53 38 Q 49 34 53 30 T 53 22" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.95"/>
    </svg>
  );
}