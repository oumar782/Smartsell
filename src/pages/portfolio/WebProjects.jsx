import React from 'react'
import { Globe, Database, Code, ArrowRight } from 'lucide-react'

// Données d'exemple pour les projets Web
const webProjects = [
  {
    id: 1,
    title: 'E-commerce Luxury',
    category: 'E-commerce',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
    description: 'Plateforme e-commerce haut de gamme pour marque de luxe.',
    fullDescription: 'Une expérience d\'achat fluide et élégante avec des animations raffinées, un panier intelligent et un paiement sécurisé.',
    techs: ['React', 'Node.js', 'Stripe'],
    stats: [
      { number: '1500+', label: 'Produits' },
      { number: '30%', label: 'Conversion' },
      { number: '99.9%', label: 'Uptime' }
    ]
  },
  {
    id: 2,
    title: 'Application Dashboard',
    category: 'App',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    description: 'Dashboard analytique pour startups SaaS.',
    fullDescription: 'Un dashboard moderne avec des visualisations de données en temps réel, des rapports personnalisables et une interface ultra-réactive.',
    techs: ['React', 'D3.js', 'WebSocket'],
    stats: [
      { number: '10K+', label: 'Utilisateurs' },
      { number: '50+', label: 'Métriques' },
      { number: '2s', label: 'Temps réponse' }
    ]
  }
]

// Fonction pour obtenir l'icône en fonction de la catégorie
const getCategoryIcon = (category) => {
  switch(category) {
    case 'E-commerce':
      return <Globe size={16} />
    case 'App':
      return <Database size={16} />
    default:
      return <Code size={16} />
  }
}

export default function WebProjects({ onOpenModal }) {
  return (
    <div className="smartsell-web-projects">
      <div className="smartsell-web-projects-header">
        <span className="smartsell-web-projects-badge">
          <Globe size={16} />
          Web
        </span>
        <h3 className="smartsell-web-projects-title">
          Solutions <span className="smartsell-gradient-text">digitales</span>
        </h3>
        <p className="smartsell-web-projects-subtitle">
          Des expériences web innovantes qui transforment vos idées en réalité.
        </p>
      </div>

      <div className="smartsell-web-grid">
        {webProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="smartsell-web-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onOpenModal(project)}
          >
            <div className="smartsell-web-card-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="smartsell-web-card-image"
              />
              <div className="smartsell-web-card-badges">
                <span className="smartsell-web-card-tag">{project.category}</span>
                <span className="smartsell-web-card-year">{project.year}</span>
              </div>
              <div className="smartsell-web-card-overlay">
                <div className="smartsell-web-card-tech">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="smartsell-web-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="smartsell-web-card-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                {getCategoryIcon(project.category)}
                <span style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', opacity: 0.6 }}>
                  {project.category}
                </span>
              </div>
              <h4 className="smartsell-web-card-title">{project.title}</h4>
              <p className="smartsell-web-card-description">{project.description}</p>
              <button className="smartsell-web-card-btn">
                Découvrir <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}