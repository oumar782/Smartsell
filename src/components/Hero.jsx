import React, { useEffect, useRef } from 'react';
import './hero.css';

export default function Home() {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'ss-particle';
        particle.style.cssText = `
          left: ${10 + Math.random() * 80}%;
          top: ${10 + Math.random() * 80}%;
          --tx: ${(Math.random() - 0.5) * 70}px;
          --ty: ${-25 - Math.random() * 50}px;
          --dur: ${3 + Math.random() * 5}s;
          --delay: ${-Math.random() * 7}s;
          width: ${2 + Math.random() * 3}px;
          height: ${2 + Math.random() * 3}px;
        `;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-lines" />
        <div className="particles-container" ref={particlesRef} />
      </div>

      <div className="hero-container">
        {/* Côté gauche - Texte */}
        <div className="hero-content">
          <div className="eyebrow">
            <span className="dot"></span>
            AGENCE CRÉATIVE & STRATÉGIQUE
          </div>
          
          <h1 className="hero-title">
            Vendredi soir.<br />
            Le cerveau a<br />
            officiellement<br />
            <span className="highlight">démissionné.</span>
          </h1>
          
          <p className="hero-description">
            Pendant que votre cerveau se repose, le nôtre travaille déjà sur votre stratégie.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              À lundi
            </a>
            <a href="#services" className="btn btn-secondary">
              Explorer Smartsell
              <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="contact-info">
            <span className="phone">620 61 90 64</span>
            <span className="separator"></span>
            <span className="email">Contact@smartsell.pro</span>
          </div>
        </div>

        {/* Côté droit - Image avec badges */}
        <div className="hero-visual">
          <div className="image-card">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&fit=crop" 
              alt="Smartsell créative team"
            />
            <div className="image-overlay"></div>
            
            <div className="floating-badge club-badge">
              <span className="badge-icon"></span>
              CLUB CRÉATIF
            </div>
            
            <div className="floating-badge bottom-badge">
              <span className="green-dot"></span>
              <div className="badge-text">
                Stratégie active · <strong>24/7</strong><br />
                On s'occupe de tout.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}