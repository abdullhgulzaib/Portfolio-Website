import React from "react";

export default function AgLogo({ width = "90px", height = "auto" }) {
  return (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 50"
      width={width}
      height={height}
      className="ag-logo"
    >
      <defs>
        {/* Silver to Cyber-Purple gradient for a sleek, metallic tech look */}
        <linearGradient id="agGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" /> 
          <stop offset="40%" stopColor="#b76bff" />
          <stop offset="100%" stopColor="#7a22b8" /> 
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="url(#agGrad)"
        fontFamily="Orbitron, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="46"
        letterSpacing="-3"
      >
        AG
      </text>
    </svg>
  );
}