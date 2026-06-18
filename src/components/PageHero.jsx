import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

function ActionLink({ action, variant, icon }) {
  if (!action) return null;
  const className = `smartsell-btn ${variant}`;

  if (action.to) {
    return (
      <Link className={className} to={action.to}>
        {icon && <span className="smartsell-btn-icon">{icon}</span>}
        {action.label}
        <span className="smartsell-btn-glow" />
      </Link>
    );
  }

  return (
    <a className={className} href={action.href ?? '#'}>
      {icon && <span className="smartsell-btn-icon">{icon}</span>}
      {action.label}
      <span className="smartsell-btn-glow" />
    </a>
  );
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
  topBadge,
  bottomBadge,
  stats = [],
  gradient = 'default'
}) {
  const gradientClasses = {
    default: 'smartsell-hero-gradient-default',
    purple: 'smartsell-hero-gradient-purple',
    yellow: 'smartsell-hero-gradient-yellow',
    mixed: 'smartsell-hero-gradient-mixed'
  };

  return (
    <section className={`smartsell-page-hero ${gradientClasses[gradient] || gradientClasses.default}`}>
      {/* Background avec effets visuels */}
      <div className="smartsell-hero-bg-layer">
        <div className="smartsell-hero-orb smartsell-orb-1" />
        <div className="smartsell-hero-orb smartsell-orb-2" />
        <div className="smartsell-hero-orb smartsell-orb-3" />
        <div className="smartsell-hero-orb smartsell-orb-4" />
        <div className="smartsell-hero-grid" />
        <div className="smartsell-hero-shapes">
          <div className="smartsell-shape smartsell-shape-1" />
          <div className="smartsell-shape smartsell-shape-2" />
          <div className="smartsell-shape smartsell-shape-3" />
        </div>
      </div>

      <div className="smartsell-container smartsell-hero-container">
        <div className="smartsell-hero-content-wrapper">
          {/* Élément de décoration */}
          <div className="smartsell-hero-deco-line" />

          <div className="smartsell-hero-content">
            {eyebrow && (
              <div className="smartsell-hero-eyebrow">
                <span className="smartsell-eyebrow-dot" />
                <span className="smartsell-eyebrow-text">{eyebrow}</span>
                <span className="smartsell-eyebrow-line" />
              </div>
            )}

            <h1 className="smartsell-hero-title">
              <span dangerouslySetInnerHTML={{ __html: title }} />
              <span className="smartsell-title-underline" />
            </h1>

            <p className="smartsell-hero-description">
              {description}
              <span className="smartsell-description-highlight"></span>
            </p>

            <div className="smartsell-hero-actions">
              <ActionLink 
                action={primaryAction} 
                variant="smartsell-btn-primary"
                icon="→"
              />
              <ActionLink 
                action={secondaryAction} 
                variant="smartsell-btn-secondary"
                icon="✦"
              />
            </div>

            {stats && stats.length > 0 && (
              <div className="smartsell-hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="smartsell-stat-item">
                    <span className="smartsell-stat-number">{stat.number}</span>
                    <span className="smartsell-stat-label">{stat.label}</span>
                    {index < stats.length - 1 && <span className="smartsell-stat-divider" />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="smartsell-hero-visual-wrapper">
          <div className="smartsell-hero-visual">
            {/* Cadre décoratif */}
            <div className="smartsell-visual-frame">
              <div className="smartsell-frame-corner smartsell-corner-tl" />
              <div className="smartsell-frame-corner smartsell-corner-tr" />
              <div className="smartsell-frame-corner smartsell-corner-bl" />
              <div className="smartsell-frame-corner smartsell-corner-br" />
            </div>

            <div className="smartsell-hero-image-container">
              <div className="smartsell-image-glow" />
              <img
                src={image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&fit=crop'}
                alt={title.replace(/<[^>]*>/g, '')}
                className="smartsell-hero-image"
              />
              <div className="smartsell-image-overlay-gradient" />
              <div className="smartsell-image-overlay-pattern" />

              {topBadge && (
                <div className="smartsell-floating-badge smartsell-badge-top">
                  <div className="smartsell-badge-content">
                    <span className="smartsell-badge-icon"></span>
                    <span className="smartsell-badge-text">{topBadge}</span>
                  </div>
                  <div className="smartsell-badge-shine" />
                </div>
              )}

              {bottomBadge && (
                <div className="smartsell-floating-badge smartsell-badge-bottom">
                  <div className="smartsell-badge-content">
                    <span className="smartsell-status-dot" />
                    <div className="smartsell-badge-text-wrapper">
                      <span className="smartsell-badge-label">{bottomBadge}</span>
                      <span className="smartsell-badge-sub">En direct</span>
                    </div>
                  </div>
                  <div className="smartsell-badge-pulse" />
                </div>
              )}

              {/* Effet de particules */}
              <div className="smartsell-particles">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="smartsell-particle" 
                    style={{
                      '--smartsell-delay': `${i * 0.5}s`,
                      '--smartsell-x': `${(i % 3) * 30 - 30}px`,
                      '--smartsell-y': `${Math.floor(i / 3) * 40 - 40}px`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Effet de scroll indicator */}
      <div className="smartsell-scroll-indicator">
        <span className="smartsell-scroll-text">Scroll</span>
        <div className="smartsell-scroll-line">
          <div className="smartsell-scroll-progress" />
        </div>
      </div>
    </section>
  );
}