import React from 'react'
import './webProjects.css'

export default function WebProjects() {
  const projects = [
    { 
      id: 1, 
      name: 'E-commerce fashion marketplace', 
      description: 'Plateforme multi-vendors avec paiement intégré et gestion d\'inventaire',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=600&q=80&fit=crop',
      category: 'E-commerce',
      year: '2024',
      tech: ['React', 'Node.js', 'Stripe']
    },
    { 
      id: 2, 
      name: 'Site corporate entreprise tech', 
      description: 'Portfolio et showcase de solutions cloud avec animations interactives',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop',
      category: 'Corporate',
      year: '2023',
      tech: ['Next.js', 'Tailwind', 'AWS']
    },
    { 
      id: 3, 
      name: 'Application mobile fitness', 
      description: 'App iOS/Android avec suivi d\'activité et planification d\'entraînement',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
      category: 'Mobile',
      year: '2024',
      tech: ['React Native', 'Firebase', 'GraphQL']
    },
    { 
      id: 4, 
      name: 'Plateforme SaaS analytics', 
      description: 'Dashboard collaboratif temps réel avec visualisation de données',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
      category: 'SaaS',
      year: '2023',
      tech: ['Vue.js', 'Django', 'WebSocket']
    },
    { 
      id: 5, 
      name: 'Refonte site média éditorial', 
      description: 'CMS headless avec gestion de contenu avancée et SEO optimisé',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80&fit=crop',
      category: 'Média',
      year: '2024',
      tech: ['Nuxt.js', 'Sanity', 'Vercel']
    },
    { 
      id: 6, 
      name: 'Progressive Web App agence', 
      description: 'PWA installable avec mode offline et push notifications',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
      category: 'PWA',
      year: '2023',
      tech: ['React', 'Workbox', 'IndexedDB']
    }
  ]

  return (
    <div className="web-projects-wrapper">
      <div className="web-projects-header">
        <div className="web-header-badge"> Innovation</div>
        <h2 className="web-projects-title">Projets Web</h2>
        <p className="web-projects-description">
          Développement, UX/UI et applications digitales — des solutions performantes et élégantes.
        </p>
      </div>

      <div className="web-projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="web-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="web-card-image-wrapper">
              <img 
                src={project.image} 
                alt={project.name}
                className="web-card-image"
                loading="lazy"
              />
              <div className="web-card-overlay">
                <div className="web-card-tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="web-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="web-card-badge">
                <span className="web-card-category">{project.category}</span>
                <span className="web-card-year">{project.year}</span>
              </div>
            </div>
            
            <div className="web-card-content">
              <h3 className="web-card-title">{project.name}</h3>
              <p className="web-card-description">{project.description}</p>
              <div className="web-card-actions">
                <button className="web-card-btn">
                  Découvrir
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="web-card-btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                    <path d="M12 5v4"/>
                  </svg>
                  Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}