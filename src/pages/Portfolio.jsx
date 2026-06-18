import React, { useState } from 'react'
import '../App.css'
import './Portfolio.css'
import { Link, Routes, Route } from 'react-router-dom'
import { X, ExternalLink, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import DesignProjects from './portfolio/DesignProjects'
import WebProjects from './portfolio/WebProjects'
import ShootingProjects from './portfolio/ShootingProjects'

// Composant Modal global pour le portfolio
function PortfolioModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="smartsell-portfolio-modal" onClick={onClose}>
      <div className="smartsell-portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="smartsell-portfolio-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="smartsell-portfolio-modal-image">
          <img src={project.image} alt={project.title} />
          <div className="smartsell-portfolio-modal-badges">
            <span className="smartsell-portfolio-modal-badge">{project.category}</span>
            <span className="smartsell-portfolio-modal-badge">{project.year}</span>
          </div>
        </div>

        <div className="smartsell-portfolio-modal-body">
          <div className="smartsell-portfolio-modal-header">
            <div className="smartsell-portfolio-modal-meta">
              <span className="smartsell-portfolio-modal-category">{project.category}</span>
              <span className="smartsell-portfolio-modal-year"> {project.year}</span>
            </div>
            <h2 className="smartsell-portfolio-modal-title">{project.title}</h2>
          </div>

          <div className="smartsell-portfolio-modal-description">
            <p>{project.fullDescription || project.description}</p>
          </div>

          {project.stats && (
            <div className="smartsell-portfolio-modal-stats">
              {project.stats.map((stat, index) => (
                <div key={index} className="smartsell-portfolio-modal-stat">
                  <span className="smartsell-portfolio-modal-stat-number">{stat.number}</span>
                  <span className="smartsell-portfolio-modal-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="smartsell-portfolio-modal-actions">
            <button className="smartsell-portfolio-modal-btn primary">
              <ExternalLink size={18} />
              Voir le projet
            </button>
            <button className="smartsell-portfolio-modal-btn secondary">
              <Mail size={18} />
              Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="smartsell-portfolio-page">
      <PageHero
        eyebrow="PORTFOLIO"
        title="Des projets visuels et digitaux qui <span class='highlight'>marquent les esprits</span>"
        description="Parcourez des réalisations créatives construites pour capter l'attention, renforcer l'image et générer de la croissance."
        primaryAction={{ label: 'Voir les services', to: '/services' }}
        secondaryAction={{ label: 'Contact', href: '#contact' }}
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&fit=crop"
        topBadge="RECENT WORK"
        bottomBadge="Branding, web, studio et influence."
        stats={[
          { number: '50+', label: 'Projets' },
          { number: '30+', label: 'Clients' },
          { number: '4.9', label: 'Note moyenne' }
        ]}
        gradient="mixed"
      />

      <div className="smartsell-portfolio-container">
        <section className="smartsell-portfolio-section">
          <div className="smartsell-portfolio-section-header">
            <span className="smartsell-portfolio-badge smartsell-badge-float">
              <span className="smartsell-badge-dot" />
              Catégories
            </span>
            <h2 className="smartsell-portfolio-section-title">
              Explorez le portfolio par <span className="smartsell-gradient-text">univers</span>
            </h2>
            <p className="smartsell-portfolio-section-subtitle">
              Design, web et shooting — nos meilleurs cas pour chaque besoin.
            </p>
            <div className="smartsell-portfolio-header-decoration">
              <span className="smartsell-portfolio-deco-line" />
              <span className="smartsell-portfolio-deco-diamond">◆</span>
              <span className="smartsell-portfolio-deco-line" />
            </div>
          </div>

          <nav className="smartsell-portfolio-nav">
            <Link to="/portfolio" className="smartsell-portfolio-nav-link">
              <span className="smartsell-nav-icon"></span> Design
            </Link>
            <Link to="/portfolio/web" className="smartsell-portfolio-nav-link">
              <span className="smartsell-nav-icon"></span> Projets Web
            </Link>
            <Link to="/portfolio/shooting" className="smartsell-portfolio-nav-link">
              <span className="smartsell-nav-icon"></span> Shooting
            </Link>
          </nav>

          <div className="smartsell-portfolio-routes">
            <Routes>
              <Route path="/" element={<DesignProjects onOpenModal={handleOpenModal} />} />
              <Route path="/web" element={<WebProjects onOpenModal={handleOpenModal} />} />
              <Route path="/shooting" element={<ShootingProjects onOpenModal={handleOpenModal} />} />
            </Routes>
          </div>
        </section>
      </div>

      {/* Modal global */}
      <PortfolioModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  )
}