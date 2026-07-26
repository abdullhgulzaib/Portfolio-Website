import React from "react";

export default function GmailIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        <linearGradient id="gmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA4335" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#B31412" stopOpacity="0.4" />
        </linearGradient>
        <filter id="glowGm" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Glass Base */}
      <circle cx="50" cy="50" r="40" fill="url(#gmGrad)" filter="url(#glowGm)" />
      
      {/* Inner Right Glass Split */}
      <path d="M50 10 A40 40 0 0 1 50 90 Z" fill="#820C0A" opacity="0.6" />

      {/* 100% Exact Official Gmail Brand Path */}
      <g transform="translate(23.6, 23.6) scale(2.2)" fill="#FFFFFF" opacity="0.95">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 10.68l8.073-7.187C21.691 2.279 24 3.434 24 5.457z"/>
      </g>
    </svg>
  );
}