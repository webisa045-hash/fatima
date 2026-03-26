import React from 'react';
import { Mail, Globe, ExternalLink, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Fatima Farah Ali</h3>
        </div>
        <div className="footer-links">
          <a href="mailto:fatima@example.com" title="Email"><Mail size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" title="Website"><Globe size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" title="Links"><ExternalLink size={20} /></a>
          <a href="#" title="Location"><MapPin size={20} /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fatima Farah Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
