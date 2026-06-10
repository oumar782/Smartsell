import React from 'react'
import '../App.css'
import './Portfolio.css'
import { Link, Routes, Route } from 'react-router-dom'
import PageHero from '../components/PageHero'
import DesignProjects from './portfolio/DesignProjects'
import WebProjects from './portfolio/WebProjects'
import ShootingProjects from './portfolio/ShootingProjects'

export default function Portfolio(){
  return (
    <div className="portfolio-page-wrapper">
      <PageHero
        eyebrow="PORTFOLIO"
        title="Des projets visuels et digitaux qui marquent les esprits"
        description="Parcourez des réalisations créatives construites pour capter l'attention, renforcer l'image et générer de la croissance."
        primaryAction={{ label: 'Voir les services', to: '/services' }}
        secondaryAction={{ label: 'Contact', href: '#contact' }}
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&fit=crop"
        topBadge="RECENT WORK"
        bottomBadge="Branding, web, studio et influence."
      />

      <div className="portfolio-container-smart">
        <section className="portfolio-section-smart">
          <div className="portfolio-section-header portfolio-animate-on-scroll">
            <span className="portfolio-badge portfolio-badge-animate">Catégories</span>
            <h2 className="portfolio-section-title portfolio-title-animate">Explorez le portfolio par univers</h2>
            <p className="portfolio-section-subtitle portfolio-subtitle-animate">Design, web et shooting — nos meilleurs cas pour chaque besoin.</p>
          </div>

          <nav className="portfolio-nav-row-modern portfolio-nav-animate">
            <Link to="/portfolio" className="portfolio-btn-ghost portfolio-btn-hover">Design</Link>
            <Link to="/portfolio/web" className="portfolio-btn-ghost portfolio-btn-hover">Projets Web</Link>
            <Link to="/portfolio/shooting" className="portfolio-btn-ghost portfolio-btn-hover">Shooting</Link>
          </nav>

          <div className="portfolio-routes-wrapper portfolio-content-animate">
            <Routes>
              <Route path="/" element={<DesignProjects />} />
              <Route path="/web" element={<WebProjects />} />
              <Route path="/shooting" element={<ShootingProjects />} />
            </Routes>
          </div>
        </section>
      </div>
    </div>
  )
}