import React from "react";

export default function InstagramIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F56040" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#E1306C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#833AB4" stopOpacity="0.4" />
        </linearGradient>
        <filter id="glowIg" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Base */}
      <circle cx="50" cy="50" r="40" fill="url(#igGrad)" filter="url(#glowIg)" />
      
      {/* Glass Split */}
      <path d="M50 10 A40 40 0 0 1 50 90 Z" fill="#5B0054" opacity="0.4" />

      {/* Instagram Camera Outline */}
      <rect x="30" y="30" width="40" height="40" rx="10" stroke="#FFFFFF" strokeWidth="5" fill="none" opacity="0.95" />
      <circle cx="50" cy="50" r="9" stroke="#FFFFFF" strokeWidth="5" fill="none" opacity="0.95" />
      <circle cx="61.5" cy="38.5" r="3" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}