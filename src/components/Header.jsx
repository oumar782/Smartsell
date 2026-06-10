import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../assets/logo.jpeg';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <header className={`ss-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="brand">
          <div className="logo-container">
            {!imgError ? (
              <img 
                src={logo}
                alt="Smartsell Logo"
                className="logo-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="logo-fallback">
                <span className="brand-gradient">SMARTSELL</span>
                <span className="brand-dot">.</span>
              </div>
            )}
            {/* Nom à côté du logo */}
            <div className="brand-name">
              <span className="brand-gradient">SMARTSELL</span>
              <span className="brand-dot">.</span>
            </div>
          </div>
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <div className="nav-links">
            <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <div className="dropdown">
              <Link to="/portfolio" className="dropdown-trigger">
                Portfolio <span className="arrow">▾</span>
              </Link>
              <div className="dropdown-menu">
                <Link to="/portfolio/design" onClick={() => setOpen(false)}>Design</Link>
                <Link to="/portfolio/web" onClick={() => setOpen(false)}>Projets Web</Link>
                <Link to="/portfolio/shooting" onClick={() => setOpen(false)}>Shooting</Link>
              </div>
            </div>
            <Link to="/elearning" onClick={() => setOpen(false)}>E‑learning</Link>
            <Link to="/podcast" onClick={() => setOpen(false)}>Podcast</Link>
            <Link to="/influencer" onClick={() => setOpen(false)}>Influencer</Link>
            <Link to="/news" onClick={() => setOpen(false)}>News</Link>
          </div>
          
          <div className="nav-footer">
            <div className="nav-contact">
              <span className="contact-small"> 620 61 90 64</span>
              <span className="contact-small"> Contact@smartsell.pro</span>
            </div>
          </div>
        </nav>

        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={`burger-line ${open ? 'open' : ''}`} />
          <span className={`burger-line ${open ? 'open' : ''}`} />
          <span className={`burger-line ${open ? 'open' : ''}`} />
        </button>
      </div>
    </header>
  );
}