import React, { useState } from 'react'
import './shooting.css'
import { Camera, Mic, Package, Target, Building2, Utensils, Briefcase, Shirt } from 'lucide-react'

export default function ShootingProjects() {
  const [hoveredId, setHoveredId] = useState(null)

  const projects = [
    { 
      id: 1, 
      name: 'Campagne lifestyle marque cosmétique', 
      description: 'Shooting en studio et extérieur pour marque de soins premium',
      image: 'https://images.unsplash.com/photo-1556228720-1957be83f06b?w=600&q=80&fit=crop',
      category: 'Lifestyle',
      year: '2024',
      type: 'Studio & Extérieur',
      icon: Camera
    },
    { 
      id: 2, 
      name: 'Portrait série musiciens', 
      description: 'Séance photo format maxi pour magazine culturel',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80&fit=crop',
      category: 'Portrait',
      year: '2023',
      type: 'Éditorial',
      icon: Mic
    },
    { 
      id: 3, 
      name: 'Shooting produit e-commerce', 
      description: 'Centaines de produits en 360° pour marketplace',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&fit=crop',
      category: 'Produit',
      year: '2024',
      type: 'E-commerce',
      icon: Package
    },
    { 
      id: 4, 
      name: 'Événement corporate reportage', 
      description: 'Couverture photo live conférence et networking',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80&fit=crop',
      category: 'Événement',
      year: '2023',
      type: 'Reportage',
      icon: Target
    },
    { 
      id: 5, 
      name: 'Shooting immobilier luxury', 
      description: 'Photographie et drone pour patrimoine haut de gamme',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&fit=crop',
      category: 'Immobilier',
      year: '2024',
      type: 'Drone & Architecture',
      icon: Building2
    },
    { 
      id: 6, 
      name: 'Campagne food styling gastronomie', 
      description: 'Mise en scène culinaire fine dining pour restaurant étoilé',
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80&fit=crop',
      category: 'Food',
      year: '2023',
      type: 'Gastronomie',
      icon: Utensils
    },
    { 
      id: 7, 
      name: 'Portrait équipe entreprise', 
      description: 'Headshots professionnels et images d\'équipe pour corporate',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&fit=crop',
      category: 'Corporate',
      year: '2024',
      type: 'Portrait',
      icon: Briefcase
    },
    { 
      id: 8, 
      name: 'Shooting mode tendance', 
      description: 'Collection et look-book pour collection couture',
      image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=600&q=80&fit=crop',
      category: 'Mode',
      year: '2023',
      type: 'Look-book',
      icon: Shirt
    }
  ]

  return (
    <div className="shooting-projects-wrapper">
      <div className="shooting-projects-header">
        <div className="shooting-header-badge">
          <Camera size={16} />
          <span>Création visuelle</span>
        </div>
        <h2 className="shooting-projects-title">Projets Shooting</h2>
        <p className="shooting-projects-description">
          Photographie, vidéo et production audiovisuelle — capturer l'instant, sublimer l'émotion.
        </p>
      </div>

      <div className="shooting-projects-grid">
        {projects.map((project, index) => {
          const IconComponent = project.icon
          return (
            <div 
              key={project.id} 
              className="shooting-card"
              style={{ animationDelay: `${index * 0.08}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="shooting-card-inner">
                <div className="shooting-card-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="shooting-card-image"
                    loading="lazy"
                  />
                  <div className="shooting-card-image-overlay">
                    <div className="shooting-card-gradient-overlay"></div>
                    <div className="shooting-card-badge">
                      <span className="shooting-card-icon-wrapper">
                        <IconComponent size={16} />
                      </span>
                      <span className="shooting-card-category">{project.category}</span>
                      <span className="shooting-card-year">{project.year}</span>
                    </div>
                    <div className="shooting-card-type">
                      <span>{project.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="shooting-card-content">
                  <h3 className="shooting-card-title">{project.name}</h3>
                  <p className="shooting-card-description">{project.description}</p>
                  
                  <div className="shooting-card-actions">
                    <button className="shooting-card-btn-primary">
                      <span>Voir la galerie</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                    <button className="shooting-card-btn-secondary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polygon points="10 8 16 12 10 16 10 8"/>
                      </svg>
                      <span>BTS</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`shooting-card-glow ${hoveredId === project.id ? 'active' : ''}`}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}