import React from 'react'
import { Palette, Package, Image, ArrowRight } from 'lucide-react'

// Données d'exemple pour les projets Design
const designProjects = [
  {
    id: 1,
    title: 'Identité Visuelle Luxe',
    category: 'Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=600&q=80',
    description: 'Création d\'une identité visuelle complète pour une marque de luxe.',
    fullDescription: 'Une identité visuelle raffinée qui capture l\'essence du luxe et de l\'élégance. Design minimaliste avec des touches dorées et une typographie sophistiquée.',
    tags: ['Branding', 'Luxe', 'Identité'],
    stats: [
      { number: '15+', label: 'Éléments' },
      { number: '4', label: 'Semaines' },
      { number: '100%', label: 'Satisfaction' }
    ]
  },
  {
    id: 2,
    title: 'Packaging Premium',
    category: 'Packaging',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=600&q=80',
    description: 'Design packaging innovant pour une gamme de produits bio.',
    fullDescription: 'Un packaging élégant et éco-responsable qui met en valeur la qualité des produits. Utilisation de matériaux durables et d\'un design épuré.',
    tags: ['Packaging', 'Éco-design', 'Premium'],
    stats: [
      { number: '5', label: 'Produits' },
      { number: '70%', label: 'Réduction plastique' },
      { number: '4.8', label: 'Note client' }
    ]
  },
  {
    id: 3,
    title: 'Campagne Print',
    category: 'Print',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    description: 'Campagne publicitaire print pour une marque de mode.',
    fullDescription: 'Une campagne print alliant photographie artistique et design graphique moderne. Mise en scène élégante avec une direction artistique pointue.',
    tags: ['Print', 'Publicité', 'Mode'],
    stats: [
      { number: '12', label: 'Visuels' },
      { number: '8', label: 'Magazines' },
      { number: '2M', label: 'Impressions' }
    ]
  }
]

// Fonction pour obtenir l'icône en fonction de la catégorie
const getCategoryIcon = (category) => {
  switch(category) {
    case 'Branding':
      return <Palette size={16} />
    case 'Packaging':
      return <Package size={16} />
    case 'Print':
      return <Image size={16} />
    default:
      return <Palette size={16} />
  }
}

export default function DesignProjects({ onOpenModal }) {
  return (
    <div className="smartsell-design-projects">
      <div className="smartsell-design-projects-header">
        <span className="smartsell-design-projects-badge">
          <Palette size={16} />
          Design
        </span>
        <h3 className="smartsell-design-projects-title">
          Créations <span className="smartsell-gradient-text">visuelles</span>
        </h3>
        <p className="smartsell-design-projects-subtitle">
          Des designs qui racontent une histoire et captivent votre audience.
        </p>
      </div>

      <div className="smartsell-design-grid">
        {designProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="smartsell-design-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onOpenModal(project)}
          >
            <div className="smartsell-design-card-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="smartsell-design-card-image"
              />
              <div className="smartsell-design-card-shine" />
              <div className="smartsell-design-card-overlay">
                <div className="smartsell-design-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="smartsell-design-card-tag">{tag}</span>
                  ))}
                </div>
                <span className="smartsell-design-card-year">{project.year}</span>
              </div>
            </div>
            <div className="smartsell-design-card-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                {getCategoryIcon(project.category)}
                <span style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', opacity: 0.6 }}>
                  {project.category}
                </span>
              </div>
              <h4 className="smartsell-design-card-title">{project.title}</h4>
              <p className="smartsell-design-card-description">{project.description}</p>
              <button className="smartsell-design-card-btn">
                Voir le projet <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}