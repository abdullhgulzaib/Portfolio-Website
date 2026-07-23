import React from "react";

export default function HtmlIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#E34F26" /* Classic HTML5 Orange */
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ width: "100%", height: "100%", filter: "drop-shadow(0px 0px 4px rgba(227, 79, 38, 0.6))" }}
    >
      {/* Outer Shield */}
      <path d="M3.5 3l1.5 14.5L12 21l7-3.5L20.5 3h-17z" />
      {/* Inner '5' */}
      <path d="M16.5 7.5h-9l.5 4.5h8l-.5 5-3.5 1.5-3.5-1.5-.25-2.5" />
    </svg>
  );
}