import React from "react";

export default function JsIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Gradient for the JS Square matching the yellow/gold tech theme */}
        <linearGradient id="jsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7DF1E" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#D4B800" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Subtle glowing yellow/gold effect */}
        <filter id="neonGlowYellow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Outer Square with Gradient and Glow */}
      <polygon 
        points="20,20 80,20 80,80 20,80" 
        fill="url(#jsGrad)" 
        filter="url(#neonGlowYellow)"
      />
      
      {/* Inner Right Square (Slightly transparent for the two-tone glass effect) */}
      <polygon 
        points="50,20 80,20 80,80 50,80" 
        fill="#CBA000" 
        opacity="0.6"
      />

      {/* The White 'J' Logo Path (Blocky/Futuristic) */}
      <path 
        d="M 46 32 V 68 H 28 V 52 H 36 V 60 H 38 V 32 Z" 
        fill="#FFFFFF" 
        opacity="0.9"
      />

      {/* The White 'S' Logo Path (Blocky/Futuristic) */}
      <path 
        d="M 72 32 H 54 V 54 H 64 V 60 H 54 V 68 H 72 V 46 H 62 V 40 H 72 Z" 
        fill="#FFFFFF" 
        opacity="0.9"
      />
    </svg>
  );
}