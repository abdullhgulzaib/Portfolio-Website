import React from "react";

export default function GitIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Gradient for the Git Diamond matching the brand orange/red */}
        <linearGradient id="gitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1502F" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C53015" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Glowing orange effect */}
        <filter id="neonGlowOrange" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Outer Diamond with Gradient and Glow */}
      <polygon 
        points="50,10 90,50 50,90 10,50" 
        fill="url(#gitGrad)" 
        filter="url(#neonGlowOrange)"
      />
      
      {/* Inner Right Diamond (Slightly transparent for the two-tone glass effect) */}
      <polygon 
        points="50,10 90,50 50,90" 
        fill="#A6220B" 
        opacity="0.6"
      />

      {/* Branch Lines */}
      <line x1="42" y1="34" x2="42" y2="66" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
      <line x1="42" y1="66" x2="62" y2="46" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />

      {/* Node Circles */}
      <circle cx="42" cy="30" r="7.5" fill="#FFFFFF" />
      <circle cx="42" cy="70" r="7.5" fill="#FFFFFF" />
      <circle cx="62" cy="42" r="7.5" fill="#FFFFFF" />
    </svg>
  );
}