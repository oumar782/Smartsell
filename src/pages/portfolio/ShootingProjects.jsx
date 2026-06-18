import React from 'react'
import { Camera, Video, Image as ImageIcon, ArrowRight } from 'lucide-react'

// Données d'exemple pour les projets Shooting
const shootingProjects = [
  {
    id: 1,
    title: 'Campagne Mode Élégance',
    category: 'Studio',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
    description: 'Shooting photo haute couture pour collection printemps-été.',
    fullDescription: 'Une campagne photographique mêlant élégance et modernité. Direction artistique soignée avec des mises en scène minimalistes et luxueuses.',
    stats: [
      { number: '120', label: 'Photos' },
      { number: '8', label: 'Looks' },
      { number: '5', label: 'Jours de shoot' }
    ]
  },
  {
    id: 2,
    title: 'Vidéo Corporate',
    category: 'Vidéo',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
    description: 'Film institutionnel pour une entreprise innovante.',
    fullDescription: 'Un film corporate dynamique qui raconte l\'histoire de l\'entreprise, ses valeurs et sa vision. Images aériennes et interviews percutantes.',
    stats: [
      { number: '3min', label: 'Durée' },
      { number: '4', label: 'Lieux' },
      { number: '2M', label: 'Vues' }
    ]
  }
]

// Fonction pour obtenir l'icône en fonction de la catégorie
const getCategoryIcon = (category) => {
  switch(category) {
    case 'Studio':
      return <Camera size={16} />
    case 'Vidéo':
      return <Video size={16} />
    default:
      return <ImageIcon size={16} />
  }
}

export default function ShootingProjects({ onOpenModal }) {
  return (
    <div className="smartsell-shooting-projects">
      <div className="smartsell-shooting-projects-header">
        <span className="smartsell-shooting-projects-badge">
          <Camera size={16} />
          Shooting
        </span>
        <h3 className="smartsell-shooting-projects-title">
          Créations <span className="smartsell-gradient-text">visuelles</span>
        </h3>
        <p className="smartsell-shooting-projects-subtitle">
          Des images et vidéos qui capturent l\'essence de votre marque.
        </p>
      </div>

      <div className="smartsell-shooting-grid">
        {shootingProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="smartsell-shooting-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onOpenModal(project)}
          >
            <div className="smartsell-shooting-card-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="smartsell-shooting-card-image"
              />
              <div className="smartsell-shooting-card-glow" />
              <div className="smartsell-shooting-card-badge">
                <span className="smartsell-shooting-card-badge-text">{project.category}</span>
                <span className="smartsell-shooting-card-year">{project.year}</span>
              </div>
              <span className="smartsell-shooting-card-type">
                {project.category === 'Studio' ? '📷 Studio' : '🎬 Vidéo'}
              </span>
            </div>
            <div className="smartsell-shooting-card-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                {getCategoryIcon(project.category)}
                <span style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', opacity: 0.6 }}>
                  {project.category}
                </span>
              </div>
              <h4 className="smartsell-shooting-card-title">{project.title}</h4>
              <p className="smartsell-shooting-card-description">{project.description}</p>
              <button className="smartsell-shooting-card-btn">
                Explorer <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}