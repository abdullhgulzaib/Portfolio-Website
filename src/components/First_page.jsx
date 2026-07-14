// src/components/First_page.jsx
import React from 'react';
import '../styles/First_page.css';
import firstpagebg from '../assets/first_page_img.png';

const First_page = () => {
  return (
    <div
      className="First_page"
      style={{
        backgroundImage: `url(${firstpagebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container">
        <p className="line1">
          <span>Hello,</span> I'm
        </p>
        <p className="line2">Abdullah Gulzaib</p>
        <p className="line3">Front-end-developer</p>
      </div>
    </div>
  );
};

export default First_page;