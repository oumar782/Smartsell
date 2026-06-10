import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

function ActionLink({ action, variant }) {
  if (!action) return null
  const className = `btn ${variant}`

  if (action.to) {
    return (
      <Link className={className} to={action.to}>
        {action.label}
      </Link>
    )
  }

  return (
    <a className={className} href={action.href ?? '#'}>
      {action.label}
    </a>
  )
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
  topBadge,
  bottomBadge
}) {
  return (
    <section className="hero hero-page">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-lines" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {eyebrow && (
            <div className="eyebrow">
              <span className="dot" />
              {eyebrow}
            </div>
          )}

          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>

          <div className="hero-buttons">
            <ActionLink action={primaryAction} variant="btn-primary" />
            <ActionLink action={secondaryAction} variant="btn-secondary" />
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-card">
            <img
              src={image ?? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&fit=crop'}
              alt={title}
            />
            <div className="image-overlay" />

            {topBadge && (
              <div className="floating-badge club-badge">
                {topBadge}
              </div>
            )}

            {bottomBadge && (
              <div className="floating-badge bottom-badge">
                <span className="green-dot" />
                <div className="badge-text">{bottomBadge}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
