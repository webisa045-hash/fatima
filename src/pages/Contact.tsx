import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact fade-in container section">
      <div className="section-title">
        <h2>Get In Touch</h2>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any collaborations or professional inquiries.</p>
          
          <div className="info-list">
            <div className="info-item">
              <Mail color="var(--deep-pink)" size={24} />
              <div>
                <h4>Email</h4>
                <p>fatima@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone color="var(--deep-pink)" size={24} />
              <div>
                <h4>Phone</h4>
                <p>+252 XX XXX XXX</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin color="var(--deep-pink)" size={24} />
              <div>
                <h4>Location</h4>
                <p>Puntland, Somalia</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Send Message <Send size={18} inline-style={{ marginLeft: '8px' }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
