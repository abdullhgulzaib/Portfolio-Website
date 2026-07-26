import { useState } from 'react';
import "../styles/Contact.css"; 
import toast, { Toaster } from 'react-hot-toast';

// 1. Import your brand new button component
import SubmitButton from './SubmitButton'; 

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); 
    
    const formData = new FormData(event.target);
    formData.append("access_key", "5c889400-e0dd-4255-86e6-d0ade35adfc5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Message submitted successfully!");
        event.target.reset(); 
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      // Small timeout added here so users can actually see the "Sent" animation finish!
      setTimeout(() => setIsSubmitting(false), 2000); 
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form className="contact-form" onSubmit={onSubmit}>
        <h3 className="form-title">Send a Message</h3>
        
        <div className="form-row">
          <div className="input-group">
            <input type="text" id="name" name="name" required placeholder=" " />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="input-group">
            <input type="email" id="email" name="email" required placeholder=" " />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>

        <div className="input-group">
          <input type="text" id="subject" name="subject" required placeholder=" " />
          <label htmlFor="subject">Subject</label>
        </div>

        <div className="input-group">
          <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
          <label htmlFor="message">Comments / Questions</label>
        </div>

        
        <SubmitButton isSubmitting={isSubmitting} />

      </form>
    </>
  );
}