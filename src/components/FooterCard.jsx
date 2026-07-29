import React from 'react';
import '../styles/FooterCard.css'; 
import WhatsappIcon from "../components/ContactIcons/WhatsappIcon";
import LinkedinIcon from "../components/ContactIcons/LinkedinIcon";
import GithubIcon from "../components/SkillsIcons/GithubIcon";
import GmailIcon from "../components/ContactIcons/GmailIcon";


const FooterCard = () => {
  return (
    <div className="card">
      <span>Social</span>
      
      <a href="https://wa.me/923249331337" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsappIcon />
                </a>
           <a href="https://www.linkedin.com/in/abdullah-gulzaib-khan-072bb6398" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>

       <a href="https://github.com/abdullhgulzaib" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
    <a href="mailto:abdullahgulzaib69@gmail.com" aria-label="Gmail">
      <GmailIcon />
    </a>
      
    </div>
  );
}

export default FooterCard;