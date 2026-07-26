import React from "react";
import "../styles/Contact.css"; 
import WhatsappIcon from "../components/ContactIcons/WhatsappIcon"
import LinkedinIcon from "../components/ContactIcons/LinkedinIcon"
import InstagramIcon from "../components/ContactIcons/InstagramIcon"
import GmailIcon from "../components/ContactIcons/GmailIcon"
import GithubIcon from "../components/SkillsIcons/GithubIcon"
import ContactForm from "./Form";
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      {/* Title */}
      <div className="Title_Form_container">
 <h2 className="contact title">Ready to build something amazing together?</h2>

      <div className="contact-container">
        
        {/* Left Side: Contact Info */}
        <div className="contact-info">
       <div className="contact-icons">
        <a href="https://wa.me/923249331337" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
       <a href="https://www.linkedin.com/in/abdullah-gulzaib-khan-072bb6398" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
       </div>
       <div className="contact-icons">
         <a href="https://github.com/abdullhgulzaib" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
<a href="mailto:abdullahgulzaib69@gmail.com" aria-label="Gmail">
  <GmailIcon />
</a>
       </div>
       <div className="contact-icons">
          <a href="https://www.instagram.com/abdul_.gulzaibi?igsh=Y3d1dG16Z2s0bWdj" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
       </div>
       
          
         
        </div>

        {/* Right Side: The Glassmorphism Form */}
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>

      </div>
      </div>
     

      {/* Bottom: The Interactive Map */}
      {/* <div className="contact-map">
        <iframe
          title="Multan Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74601449195!2d71.39121768800174!3d30.181458925206236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33da1dfc1b3f%3A0x6b45a0b2dc5d6e27!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </section>
  );
}