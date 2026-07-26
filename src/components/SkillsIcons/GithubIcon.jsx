import React from "react";

export default function GithubIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Gradient for the GitHub Circle matching a cyber-purple theme */}
        <linearGradient id="githubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A63D2" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#4C366B" stopOpacity="0.4" />
        </linearGradient>
        
        {/* Subtle glowing purple effect */}
        <filter id="neonGlowPurple" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Outer Circle with Gradient and Glow */}
      <circle 
        cx="50" 
        cy="50" 
        r="40" 
        fill="url(#githubGrad)" 
        filter="url(#neonGlowPurple)"
      />
      
      {/* Inner Right Semi-Circle (Slightly transparent) */}
      <path 
        d="M50 10 A40 40 0 0 1 50 90 Z" 
        fill="#3A2559" 
        opacity="0.6"
      />

      {/* The White GitHub Octocat Logo Path */}
      <path 
        d="M50 24 C35 24 23 36 23 51 C23 63 31 73 41 77 C42 77 43 76 43 75 V69 C36 71 34 66 34 66 C33 63 30 62 30 62 C27 60 30 60 30 60 C33 60 35 63 35 63 C38 68 43 66 45 65 C45 63 47 62 48 61 C40 60 33 57 33 48 C33 45 34 43 36 41 C36 41 35 38 36 35 C36 35 38 34 43 38 C45 37 48 37 50 37 C52 37 55 37 57 38 C62 34 64 35 64 35 C65 38 64 41 64 41 C66 43 67 45 67 48 C67 57 59 60 52 61 C53 62 55 64 55 67 V75 C55 76 55 77 57 77 C68 73 76 63 76 51 C76 36 64 24 50 24 Z" 
        fill="#FFFFFF" 
        opacity="0.95"
      />
    </svg>
  );
}