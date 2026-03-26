import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Globe, TrendingUp } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const profileImageFront = `${import.meta.env.BASE_URL}fatima1.jpg`;
  const profileImageBack = `${import.meta.env.BASE_URL}fatima3.jpg`;

  return (
    <div className="home fade-in">
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Welcome to <span className="highlight">Fatima's</span> World</h1>
            <p>
              Aspiring Business Professional with a passion for strategic management, 
              marketing, and community development. Currently pursuing a Bachelor's in 
              Business Administration in Somalia.
            </p>
            <div className="hero-btns">
              <Link to="/about" className="btn-primary">
                Learn More About Me <ArrowRight size={18} inline-style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/contact" className="btn-outline">Get In Touch</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front grey-blob">
                  <img src={profileImageFront} alt="Fatima Farah Ali" className="profile-img" />
                </div>
                <div className="flip-card-back grey-blob">
                  <img src={profileImageBack} alt="Fatima Farah Ali" className="profile-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="features section">
        <div className="container">
          <div className="section-title">
            <h2>My Journey</h2>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><Star color="var(--primary-grey)" size={32} /></div>
              <h3>Leadership</h3>
              <p>Developing strong leadership skills through academic excellence and community initiatives.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><TrendingUp color="var(--primary-grey)" size={32} /></div>
              <h3>Business Insight</h3>
              <p>Analyzing market trends and business strategies to drive sustainable growth.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Globe color="var(--primary-grey)" size={32} /></div>
              <h3>Community</h3>
              <p>Dedicated to contributing positively to the socio-economic development of Somalia.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
