import { useState } from 'react';
import "../styles/Contact.css"; 
// 1. Keep your imports
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Disable button during submission
    
    const formData = new FormData(event.target);
    formData.append("access_key", "5c889400-e0dd-4255-86e6-d0ade35adfc5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        // 2. Trigger the successful pop-up alert
        toast.success("Message submitted successfully!");
        event.target.reset(); // Clears out your form inputs
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <>
      {/* 3. Drop the Toaster component at the top level so alerts can inject on screen */}
      <Toaster position="top-center" reverseOrder={false} />

      <form className="contact-form" onSubmit={onSubmit}>
        <h3 className="form-title">Send a Message</h3>
        
        <div className="form-row">
          <div className="input-group">
            {/* Added: name="name" */}
            <input type="text" id="name" name="name" required placeholder=" " />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="input-group">
            {/* Added: name="email" */}
            <input type="email" id="email" name="email" required placeholder=" " />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>

        <div className="input-group">
          {/* Added: name="subject" */}
          <input type="text" id="subject" name="subject" required placeholder=" " />
          <label htmlFor="subject">Subject</label>
        </div>

        <div className="input-group">
          {/* Added: name="message" */}
          <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
          <label htmlFor="message">Comments / Questions</label>
        </div>

        {/* Updated: Button disables itself while uploading data */}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </>
  );
}