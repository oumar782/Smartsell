import React, { useState } from 'react'
import '../App.css'
import './Elearning.css'
import PageHero from '../components/PageHero'

export default function Elearning(){
  const [activeVideo, setActiveVideo] = useState(null)
  const [hoveredCourse, setHoveredCourse] = useState(null)

  const courses = [
    {
      id: 1,
      title: 'Growth HACKS',
      duration: '2h',
      price: '49€',
      level: 'Intermédiaire',
      students: '1.2k',
      rating: '4.8',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop',
      description: 'Maîtrisez les stratégies de croissance rapide pour votre business'
    },
    {
      id: 2,
      title: 'Social Ads',
      duration: '3h',
      price: '79€',
      level: 'Avancé',
      students: '980',
      rating: '4.9',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80&fit=crop',
      description: 'Campagnes publicitaires performantes sur tous les réseaux sociaux'
    },
    {
      id: 3,
      title: 'Branding rapide',
      duration: '1h30',
      price: '39€',
      level: 'Débutant',
      students: '2.3k',
      rating: '4.7',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80&fit=crop',
      description: 'Créez une identité de marque mémorable en un temps record'
    },
    {
      id: 4,
      title: 'UX Basics',
      duration: '2h',
      price: '59€',
      level: 'Intermédiaire',
      students: '1.5k',
      rating: '4.6',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80&fit=crop',
      description: 'Les fondamentaux de l\'expérience utilisateur pour des produits qui convertissent'
    },
    {
      id: 5,
      title: 'Photo Studio',
      duration: '1h',
      price: '29€',
      level: 'Débutant',
      students: '3.1k',
      rating: '4.9',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=400&q=80&fit=crop',
      description: 'Techniques de photographie studio pour des résultats professionnels'
    },
    {
      id: 6,
      title: 'Podcast Prod',
      duration: '2h',
      price: '39€',
      level: 'Intermédiaire',
      students: '870',
      rating: '4.8',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77b6e8d?w=400&q=80&fit=crop',
      description: 'Produisez un podcast professionnel de A à Z'
    }
  ]

  const instructors = [
    { name: 'Sarah Chen', role: 'Growth Strategist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop' },
    { name: 'Marcus Dubois', role: 'Social Ads Expert', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fit=crop' },
    { name: 'Lena Park', role: 'Brand Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&fit=crop' }
  ]

  return (
    <div className="elearning-page">
      <PageHero
        eyebrow="E-LEARNING"
        title="Formations digitales conçues pour aller vite et marquer les esprits"
        description="Un catalogue de modules courts, concrets et visuels pour monter en compétences rapidement."
        primaryAction={{ label: 'Voir le catalogue', href: '#courses' }}
        secondaryAction={{ label: 'Contact', href: '#contact' }}
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop"
        topBadge="SAVOIR-FAIRE"
        bottomBadge="Des programmes actionnables pour les équipes et indépendants."
      />

      <div className="elearning-container" id="courses">
        {/* ===== STATS BANNER ===== */}
        <div className="elearning-stats-banner">
          <div className="elearning-stat-item">
            <span className="elearning-stat-number">12+</span>
            <span className="elearning-stat-label">Formations</span>
          </div>
          <div className="elearning-stat-item">
            <span className="elearning-stat-number">8.7k</span>
            <span className="elearning-stat-label">Étudiants</span>
          </div>
          <div className="elearning-stat-item">
            <span className="elearning-stat-number">4.8</span>
            <span className="elearning-stat-label">Note moyenne</span>
          </div>
          <div className="elearning-stat-item">
            <span className="elearning-stat-number">98%</span>
            <span className="elearning-stat-label">Satisfaction</span>
          </div>
        </div>

        {/* ===== CATALOGUE ===== */}
        <section className="elearning-section">
          <div className="elearning-section-header">
            <span className="elearning-badge">Catalogue</span>
            <h2 className="elearning-section-title">
              <span className="elearning-title-gradient">Des parcours conçus pour performer</span>
            </h2>
            <p className="elearning-section-subtitle">
              Choisissez la formation qui fait briller votre marque et vos équipes.
            </p>
          </div>

          <div className="elearning-grid">
            {courses.map((course, i) => (
              <article 
                key={course.id} 
                className="elearning-card"
                style={{ animationDelay: `${i * 0.08}s` }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="elearning-card-image-wrapper">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="elearning-card-image"
                    loading="lazy"
                  />
                  <div className="elearning-card-overlay">
                    <button 
                      className="elearning-card-play"
                      onClick={() => setActiveVideo(course.id)}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </button>
                  </div>
                  <div className="elearning-card-badges">
                    <span className="elearning-card-level">{course.level}</span>
                    <span className="elearning-card-rating">★ {course.rating}</span>
                  </div>
                </div>

                <div className="elearning-card-content">
                  <div className="elearning-card-header">
                    <h4 className="elearning-card-title">{course.title}</h4>
                    <span className="elearning-card-price">{course.price}</span>
                  </div>
                  <p className="elearning-card-description">{course.description}</p>
                  <div className="elearning-card-meta">
                    <span className="elearning-card-duration">⏱ {course.duration}</span>
                    <span className="elearning-card-students">👥 {course.students}</span>
                  </div>
                  <button className="elearning-card-btn">
                    <span>Accéder à la formation</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== INSTRUCTEURS ===== */}
        <section className="elearning-section">
          <div className="elearning-section-header">
            <span className="elearning-badge">Experts</span>
            <h2 className="elearning-section-title">
              <span className="elearning-title-gradient">Nos formateurs</span>
            </h2>
            <p className="elearning-section-subtitle">
              Apprenez avec les meilleurs experts de leur domaine.
            </p>
          </div>

          <div className="elearning-instructors-grid">
            {instructors.map((instructor, i) => (
              <div 
                key={i} 
                className="elearning-instructor-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="elearning-instructor-image-wrapper">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="elearning-instructor-image"
                    loading="lazy"
                  />
                </div>
                <h4 className="elearning-instructor-name">{instructor.name}</h4>
                <p className="elearning-instructor-role">{instructor.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== POURQUOI NOUS ===== */}
        <section className="elearning-section">
          <div className="elearning-section-header">
            <span className="elearning-badge">Pourquoi nous</span>
            <h2 className="elearning-section-title">
              <span className="elearning-title-gradient">Une approche unique</span>
            </h2>
            <p className="elearning-section-subtitle">
              Des formations qui allient théorie et pratique pour des résultats immédiats.
            </p>
          </div>

          <div className="elearning-features-grid">
            <div className="elearning-feature-card">
              <div className="elearning-feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6V4M12 6v2M12 6h8M12 6H4"/>
                  <path d="M4 10h16"/>
                  <path d="M4 14h16"/>
                  <path d="M4 18h16"/>
                </svg>
              </div>
              <h3 className="elearning-feature-title">Contenu interactif</h3>
              <p className="elearning-feature-description">Vidéos, quiz, exercices pratiques et projets concrets pour une apprentissage actif.</p>
            </div>

            <div className="elearning-feature-card">
              <div className="elearning-feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="elearning-feature-title">Formats courts</h3>
              <p className="elearning-feature-description">Des modules de 1 à 3 heures pour apprendre efficacement sans perdre de temps.</p>
            </div>

            <div className="elearning-feature-card">
              <div className="elearning-feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="elearning-feature-title">Support coaching</h3>
              <p className="elearning-feature-description">Accès à une communauté et à des sessions de coaching pour transformer vos compétences.</p>
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="elearning-cta-section">
          <div className="elearning-cta-content">
            <h2 className="elearning-cta-title">
              <span className="elearning-title-gradient">Prêt à passer au niveau supérieur ?</span>
            </h2>
            <p className="elearning-cta-description">
              Rejoignez plus de 8 700 étudiants qui ont déjà transformé leur carrière avec nos formations.
            </p>
            <div className="elearning-cta-buttons">
              <button className="elearning-cta-primary">
                <span>Commencer maintenant</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="elearning-cta-secondary">
                <span>Voir les offres</span>
              </button>
            </div>
          </div>
        </section>

        {/* ===== MODAL VIDÉO ===== */}
        {activeVideo && (
          <div className="elearning-video-modal" onClick={() => setActiveVideo(null)}>
            <div className="elearning-video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="elearning-video-close" onClick={() => setActiveVideo(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div className="elearning-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="elearning-video-iframe"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}