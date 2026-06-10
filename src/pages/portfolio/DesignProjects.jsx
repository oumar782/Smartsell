import React from 'react'
import './designProjects.css'
export default function DesignProjects() {
  const projects = [
    { 
      id: 1, 
      name: 'Identité visuelle Luxury Brand', 
      description: 'Branding complet pour marque premium de luxe',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80&fit=crop',
      category: 'Branding',
      year: '2024'
    },
    { 
      id: 2, 
      name: 'Campagne affiche tech startup', 
      description: 'Campagne graphique pour lancement produit',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&fit=crop',
      category: 'Campagne',
      year: '2023'
    },
    { 
      id: 3, 
      name: 'Packaging redesign cosmétique', 
      description: 'Refonte complète de packaging écologique',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80&fit=crop',
      category: 'Packaging',
      year: '2024'
    },
    { 
      id: 4, 
      name: 'Motion design intro vidéo', 
      description: 'Séquence animée 3D pour présentation',
      image: 'https://images.unsplash.com/photo-1536240474400-9294501c6028?w=600&q=80&fit=crop',
      category: 'Motion',
      year: '2023'
    },
    { 
      id: 5, 
      name: 'Illustration campagne saisonnière', 
      description: 'Série d\'illustrations éditorialisées',
      image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80&fit=crop',
      category: 'Illustration',
      year: '2024'
    },
    { 
      id: 6, 
      name: 'Charte graphique agence', 
      description: 'Guide visuel complet et système de design',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?w=600&q=80&fit=crop',
      category: 'Identité',
      year: '2023'
    },
    { 
      id: 7, 
      name: 'Design de couverture album', 
      description: 'Artwork et packaging pour sortie musicale',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80&fit=crop',
      category: 'Artwork',
      year: '2024'
    },
    { 
      id: 8, 
      name: 'Infographie data storytelling', 
      description: 'Visualisation de données complexes',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
      category: 'Data',
      year: '2023'
    },
    { 
      id: 9, 
      name: 'Poster événement culturel', 
      description: 'Affiche minimaliste pour festival',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80&fit=crop',
      category: 'Poster',
      year: '2024'
    }
  ]

  return (
    <div className="design-projects-wrapper">
      <div className="design-projects-header">
        <div className="design-header-badge"> Créations</div>
        <h2 className="design-projects-title">Projets Design</h2>
        <p className="design-projects-description">
          Créations visuelles, branding et direction artistique — chaque projet raconte une histoire unique.
        </p>
      </div>

      <div className="design-projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="design-card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="design-card-image-wrapper">
              <img 
                src={project.image} 
                alt={project.name}
                className="design-card-image"
                loading="lazy"
              />
              <div className="design-card-overlay">
                <div className="design-card-overlay-content">
                  <span className="design-card-category">{project.category}</span>
                  <span className="design-card-year">{project.year}</span>
                </div>
              </div>
            </div>
            
            <div className="design-card-content">
              <h3 className="design-card-title">{project.name}</h3>
              <p className="design-card-description">{project.description}</p>
              <button className="design-card-btn">
                Voir le projet
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}