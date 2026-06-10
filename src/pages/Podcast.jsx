import React, { useState } from 'react'
import '../App.css'
import './Podcast.css'
import PageHero from '../components/PageHero'
import { 
  Home, 
  Video, 
  PlaySquare, 
  Radio, 
  Bell, 
  Heart,
  User,
  Search,
  Bookmark,
  ChevronDown,
  X,
  Play,
  Mic,
  Headphones,
  Clock,
  Calendar,
  Star,
  Share2,
  Download
} from 'lucide-react'

export default function Podcast(){
  const [activeMenu, setActiveMenu] = useState('accueil')
  const [commentText, setCommentText] = useState('')
  const [showComments, setShowComments] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: Home },
    { id: 'videos', label: 'Nos vidéos', icon: Video },
    { id: 'series', label: 'Nos séries', icon: PlaySquare },
    { id: 'direct', label: 'En direct', icon: Radio },
    { id: 'podcast', label: 'Podcast', icon: Mic },
    { id: 'abonnements', label: 'Abonnements', icon: Bell },
  ]

  const mainVideo = {
    id: 'main',
    title: 'QUI SE CACHE DERRIÈRE LES ATTAQUES AU MALI ?',
    description: 'Dans cette CHRONIQUE, nous revenons sur l\'attaque coordonnée qui a frappé plusieurs villes du Mali, l\'alliance troublante entre le JNIM et le FLM, ainsi que les informations autour de la mort du ministre malien de la Défense...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop',
    date: '19 mai 2026',
    duration: '16min',
    type: 'Gratuite',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }

  const recentVideos = [
    {
      id: 1,
      title: '100 Tabous',
      category: 'Documentaire',
      image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=80&fit=crop',
      duration: '45 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Immigration clandestine',
      category: 'Documentaire',
      image: 'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=400&q=80&fit=crop',
      duration: '52 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Reportage Mali',
      category: 'Reportage',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop',
      duration: '38 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Chronique politique',
      category: 'Chronique',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&fit=crop',
      duration: '25 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ]

  const podcastEpisodes = [
    {
      id: 1,
      title: 'Le futur du marketing digital',
      description: 'Comment les marques peuvent se réinventer à l\'ère de l\'IA.',
      duration: '42 min',
      date: '18 mai 2026',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop',
      audioUrl: '#',
      guests: 'Sarah Chen'
    },
    {
      id: 2,
      title: 'Stratégies de croissance pour 2026',
      description: 'Les leviers pour accélérer votre développement.',
      duration: '35 min',
      date: '15 mai 2026',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80&fit=crop',
      audioUrl: '#',
      guests: 'Marcus Dubois'
    },
    {
      id: 3,
      title: 'L\'art de la persuasion',
      description: 'Techniques pour convaincre sans manipuler.',
      duration: '28 min',
      date: '12 mai 2026',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80&fit=crop',
      audioUrl: '#',
      guests: 'Lena Park'
    },
    {
      id: 4,
      title: 'Innovation responsable',
      description: 'Les enjeux éthiques de la technologie moderne.',
      duration: '52 min',
      date: '8 mai 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&fit=crop',
      audioUrl: '#',
      guests: 'Dr. Anna Lee'
    }
  ]

  const liveStreams = [
    {
      id: 1,
      title: 'Débat : L\'avenir de l\'Afrique',
      description: 'Table ronde avec des experts du développement.',
      date: '20 mai 2026',
      time: '19h00',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&fit=crop',
      status: 'À venir'
    },
    {
      id: 2,
      title: 'Direct : Élections au Mali',
      description: 'Suivi en temps réel des résultats.',
      date: '22 mai 2026',
      time: '18h00',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop',
      status: 'En direct'
    },
    {
      id: 3,
      title: 'Interview exclusive : Mamadou Diallo',
      description: 'Rencontre avec l\'entrepreneur engagé.',
      date: '25 mai 2026',
      time: '20h00',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop',
      status: 'À venir'
    }
  ]

  const seriesList = [
    {
      id: 1,
      title: 'Chronique de la semaine',
      episodes: 12,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop',
      category: 'Politique'
    },
    {
      id: 2,
      title: 'Documentaire',
      episodes: 8,
      image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=80&fit=crop',
      category: 'Société'
    },
    {
      id: 3,
      title: 'Reportage',
      episodes: 6,
      image: 'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=400&q=80&fit=crop',
      category: 'International'
    },
    {
      id: 4,
      title: 'Interview',
      episodes: 15,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&fit=crop',
      category: 'Culture'
    }
  ]

  const subscriptions = [
    {
      id: 1,
      title: 'Plan Essentiel',
      price: '9,99€/mois',
      features: ['Accès à tous les épisodes', 'Qualité audio HD', 'Sans publicité'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop'
    },
    {
      id: 2,
      title: 'Plan Premium',
      price: '19,99€/mois',
      features: ['Tout le contenu essentiel', 'Accès aux direct', 'Téléchargement illimité', 'Contenu exclusif'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80&fit=crop',
      isPopular: true
    },
    {
      id: 3,
      title: 'Plan Pro',
      price: '29,99€/mois',
      features: ['Tout le contenu premium', 'Accès illimité', 'Téléchargement HD', 'Support prioritaire', 'Contenu exclusif'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80&fit=crop'
    }
  ]

  const comments = [
    {
      id: 1,
      name: 'Nagalo Arsène',
      initial: 'N',
      date: 'il y a 19 jours',
      text: 'Que cela a son âge d\'or.'
    },
    {
      id: 2,
      name: 'Daniel Moullom',
      initial: 'D',
      date: 'il y a 19 jours',
      text: 'Monsieur Amang, merci pour la chronique mais vous devez absolument approfondir. La question de peau n\'a jamais unifié. Acceptons également que un gouvernement même mal élu n\'acceptera jamais de reconnaître un coup d\'état car ce serait ouvrir la boîte de Pandore sur le continent le plus hétéroclite qui soit.'
    },
    {
      id: 3,
      name: 'Marie K.',
      initial: 'M',
      date: 'il y a 12 jours',
      text: 'Excellent travail d\'investigation. J\'attends la suite avec impatience !'
    }
  ]

  const handleVideoClick = (video) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  // ===== RENDER FUNCTIONS =====
  const renderAccueil = () => (
    <>
      <section className="afomedia-video-section">
        <div className="afomedia-video-grid">
          <div className="afomedia-video-player-wrapper">
            <div className="afomedia-video-player">
              <div className="afomedia-video-placeholder">
                <img 
                  src={mainVideo.image} 
                  alt={mainVideo.title}
                  className="afomedia-video-thumbnail"
                />
                <div className="afomedia-video-play-overlay">
                  <button 
                    className="afomedia-video-play-btn"
                    onClick={() => handleVideoClick(mainVideo)}
                  >
                    <Play size={48} />
                  </button>
                </div>
                <div className="afomedia-video-info">
                  <span className="afomedia-video-date">📅 {mainVideo.date}</span>
                  <span className="afomedia-video-duration">🕐 {mainVideo.duration}</span>
                  <span className="afomedia-video-type">{mainVideo.type}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`afomedia-comments-wrapper ${showComments ? 'visible' : 'hidden'}`}>
            <div className="afomedia-comments-header">
              <h3 className="afomedia-comments-title">Commentaires</h3>
              <button 
                className="afomedia-comments-close"
                onClick={() => setShowComments(!showComments)}
              >
                <X size={16} />
                <span>fermer</span>
              </button>
            </div>
            <div className="afomedia-comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="afomedia-comment-item">
                  <div className="afomedia-comment-avatar">
                    <span>{comment.initial}</span>
                  </div>
                  <div className="afomedia-comment-content">
                    <div className="afomedia-comment-header">
                      <span className="afomedia-comment-name">{comment.name}</span>
                      <span className="afomedia-comment-date">{comment.date}</span>
                    </div>
                    <p className="afomedia-comment-text">{comment.text}</p>
                    <div className="afomedia-comment-actions">
                      <button className="afomedia-comment-reply">Répondre</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="afomedia-comment-input">
              <textarea 
                placeholder="Laisser votre avis..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="afomedia-comment-textarea"
              />
              <button className="afomedia-comment-submit">Soumettre</button>
            </div>
          </div>
        </div>

        <div className="afomedia-video-title-section">
          <h1 className="afomedia-video-main-title">
            {mainVideo.title}
          </h1>
          <p className="afomedia-video-description">
            {mainVideo.description}
          </p>
        </div>
      </section>

      <section className="afomedia-recent-section">
        <div className="afomedia-recent-header">
          <h2 className="afomedia-recent-title">Les vidéos les plus récentes</h2>
          <div className="afomedia-recent-nav">
            <button className="afomedia-recent-nav-btn">‹</button>
            <button className="afomedia-recent-nav-btn">›</button>
          </div>
        </div>
        <div className="afomedia-recent-grid">
          {recentVideos.map((video) => (
            <div key={video.id} className="afomedia-recent-card">
              <div className="afomedia-recent-image">
                <img src={video.image} alt={video.title} loading="lazy" />
                <div className="afomedia-recent-overlay">
                  <button 
                    className="afomedia-recent-play"
                    onClick={() => handleVideoClick(video)}
                  >
                    <Play size={24} />
                  </button>
                </div>
                <span className="afomedia-recent-badge">{video.category}</span>
              </div>
              <div className="afomedia-recent-content">
                <h4 className="afomedia-recent-card-title">{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )

  const renderVideos = () => (
    <section className="afomedia-recent-section">
      <div className="afomedia-recent-header">
        <h2 className="afomedia-recent-title">Toutes nos vidéos</h2>
        <div className="afomedia-recent-nav">
          <button className="afomedia-recent-nav-btn">‹</button>
          <button className="afomedia-recent-nav-btn">›</button>
        </div>
      </div>
      <div className="afomedia-recent-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'}}>
        {[...recentVideos, ...recentVideos].map((video, index) => (
          <div key={`${video.id}-${index}`} className="afomedia-recent-card">
            <div className="afomedia-recent-image">
              <img src={video.image} alt={video.title} loading="lazy" />
              <div className="afomedia-recent-overlay">
                <button 
                  className="afomedia-recent-play"
                  onClick={() => handleVideoClick(video)}
                >
                  <Play size={24} />
                </button>
              </div>
              <span className="afomedia-recent-badge">{video.category}</span>
            </div>
            <div className="afomedia-recent-content">
              <h4 className="afomedia-recent-card-title">{video.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  const renderSeries = () => (
    <section className="afomedia-recent-section">
      <div className="afomedia-recent-header">
        <h2 className="afomedia-recent-title">Nos séries</h2>
      </div>
      <div className="afomedia-recent-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'}}>
        {seriesList.map((series) => (
          <div key={series.id} className="afomedia-recent-card">
            <div className="afomedia-recent-image">
              <img src={series.image} alt={series.title} loading="lazy" />
              <div className="afomedia-recent-overlay">
                <button className="afomedia-recent-play">
                  <Play size={24} />
                </button>
              </div>
              <span className="afomedia-recent-badge">{series.category}</span>
            </div>
            <div className="afomedia-recent-content">
              <h4 className="afomedia-recent-card-title">{series.title}</h4>
              <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '4px'}}>
                {series.episodes} épisodes
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  const renderDirect = () => (
    <section className="afomedia-recent-section">
      <div className="afomedia-recent-header">
        <h2 className="afomedia-recent-title">En direct</h2>
      </div>
      <div className="afomedia-recent-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'}}>
        {liveStreams.map((stream) => (
          <div key={stream.id} className="afomedia-recent-card">
            <div className="afomedia-recent-image">
              <img src={stream.image} alt={stream.title} loading="lazy" />
              <div className="afomedia-recent-overlay">
                <button className="afomedia-recent-play">
                  <Radio size={24} />
                </button>
              </div>
              <span className="afomedia-recent-badge" style={{
                background: stream.status === 'En direct' ? 'rgba(239,68,68,0.9)' : 'rgba(251,191,36,0.9)'
              }}>
                {stream.status}
              </span>
            </div>
            <div className="afomedia-recent-content">
              <h4 className="afomedia-recent-card-title">{stream.title}</h4>
              <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '4px'}}>
                {stream.date} • {stream.time}
              </p>
              <p style={{color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '2px'}}>
                {stream.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  const renderPodcast = () => (
    <section className="afomedia-recent-section">
      <div className="afomedia-recent-header">
        <h2 className="afomedia-recent-title">Nos épisodes podcast</h2>
        <div className="afomedia-recent-nav">
          <button className="afomedia-recent-nav-btn">‹</button>
          <button className="afomedia-recent-nav-btn">›</button>
        </div>
      </div>
      <div className="afomedia-recent-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'}}>
        {podcastEpisodes.map((episode) => (
          <div key={episode.id} className="afomedia-recent-card">
            <div className="afomedia-recent-image">
              <img src={episode.image} alt={episode.title} loading="lazy" />
              <div className="afomedia-recent-overlay">
                <button className="afomedia-recent-play">
                  <Headphones size={24} />
                </button>
              </div>
            </div>
            <div className="afomedia-recent-content">
              <h4 className="afomedia-recent-card-title">{episode.title}</h4>
              <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '4px'}}>
                🕐 {episode.duration} • 📅 {episode.date}
              </p>
              <p style={{color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '2px'}}>
                Avec {episode.guests}
              </p>
              <div style={{display: 'flex', gap: '8px', marginTop: '10px'}}>
                <button className="afomedia-recent-play" style={{
                  width: '36px', height: '36px', padding: 0, background: 'rgba(251,191,36,0.2)',
                  borderColor: 'rgba(251,191,36,0.3)'
                }}>
                  <Play size={16} />
                </button>
                <button className="afomedia-recent-play" style={{
                  width: '36px', height: '36px', padding: 0, background: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}>
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  const renderAbonnements = () => (
    <section className="afomedia-recent-section">
      <div className="afomedia-recent-header">
        <h2 className="afomedia-recent-title">Nos offres d'abonnement</h2>
        <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '4px'}}>
          Choisissez le plan qui correspond à vos besoins
        </p>
      </div>
      <div className="afomedia-recent-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'}}>
        {subscriptions.map((plan) => (
          <div key={plan.id} className="afomedia-recent-card" style={{
            borderColor: plan.isPopular ? '#fbbf24' : 'rgba(251,191,36,0.06)',
            background: plan.isPopular ? 'rgba(251,191,36,0.05)' : 'rgba(15,10,25,0.5)'
          }}>
            <div className="afomedia-recent-image" style={{height: '140px'}}>
              <img src={plan.image} alt={plan.title} loading="lazy" />
              {plan.isPopular && (
                <span className="afomedia-recent-badge" style={{
                  background: '#fbbf24', color: '#0a0a0f', fontWeight: '700'
                }}>
                  Populaire
                </span>
              )}
            </div>
            <div className="afomedia-recent-content">
              <h4 className="afomedia-recent-card-title">{plan.title}</h4>
              <p style={{color: '#fbbf24', fontSize: '1.2rem', fontWeight: '700', margin: '4px 0'}}>
                {plan.price}
              </p>
              <ul style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', padding: '0', margin: '8px 0', listStyle: 'none'}}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{padding: '2px 0'}}>
                    <span style={{color: '#4ade80', marginRight: '6px'}}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="afomedia-recent-play" style={{
                width: '100%', height: '40px', borderRadius: '20px', marginTop: '12px',
                background: plan.isPopular ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'rgba(255,255,255,0.1)',
                border: 'none', color: plan.isPopular ? '#0a0a0f' : '#ffffff',
                fontWeight: '600', cursor: 'pointer'
              }}>
                S'abonner
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  // ===== RENDER CONTENT BASED ON ACTIVE MENU =====
  const renderContent = () => {
    switch(activeMenu) {
      case 'accueil':
        return renderAccueil()
      case 'videos':
        return renderVideos()
      case 'series':
        return renderSeries()
      case 'direct':
        return renderDirect()
      case 'podcast':
        return renderPodcast()
      case 'abonnements':
        return renderAbonnements()
      default:
        return renderAccueil()
    }
  }

  return (
    <div className="podcast-page-afomedia">
      <PageHero
        eyebrow="PODCAST"
        title="Le format audio qui fait vibrer les marques" 
        description="Interviews, décryptages et stratégies sonores pour donner de la voix à votre univers." 
        primaryAction={{ label: 'Écouter maintenant', href: '#episodes' }}
        secondaryAction={{ label: 'S’abonner', href: '#contact' }}
        image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80&fit=crop"
        topBadge="STUDIO LIVE"
        bottomBadge="Idées fortes pour des conversations impactantes."
      />

      <div className="afomedia-container">
        {/* ===== SIDEBAR ===== */}
        <aside className="afomedia-sidebar">
          <div className="afomedia-sidebar-header">
            <div className="afomedia-logo">
              <span className="afomedia-logo-text">AFO</span>
            </div>
          </div>
          <nav className="afomedia-sidebar-nav">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  className={`afomedia-sidebar-item ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  <Icon size={20} className="afomedia-sidebar-icon" />
                  <span className="afomedia-sidebar-label">{item.label}</span>
                </button>
              )
            })}
          </nav>
          <div className="afomedia-sidebar-footer">
            <button className="afomedia-sidebar-more">
              <span>Voir plus</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="afomedia-main">
          {/* ===== TOP BAR ===== */}
          <header className="afomedia-topbar">
            <div className="afomedia-topbar-left">
              <button className="afomedia-topbar-icon-btn">
                <Bookmark size={20} />
              </button>
              <button className="afomedia-topbar-icon-btn">
                <Search size={20} />
              </button>
            </div>
            <div className="afomedia-topbar-right">
              <button className="afomedia-donate-btn">
                Faire un don <Heart size={16} className="afomedia-donate-icon" />
              </button>
              <button className="afomedia-account-btn">
                Mon compte <User size={16} className="afomedia-account-icon" />
              </button>
              <button className="afomedia-lang-btn">FR</button>
              <button className="afomedia-theme-btn">☀️</button>
            </div>
          </header>

          {/* ===== CONTENT ===== */}
          {renderContent()}
        </main>
      </div>

      {/* ===== MODAL VIDÉO ===== */}
      {isModalOpen && selectedVideo && (
        <div className="afomedia-video-modal" onClick={closeModal}>
          <div className="afomedia-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="afomedia-video-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="afomedia-video-modal-player">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="afomedia-video-modal-iframe"
              />
            </div>
            <div className="afomedia-video-modal-info">
              <h3 className="afomedia-video-modal-title">{selectedVideo.title}</h3>
              {selectedVideo.duration && (
                <span className="afomedia-video-modal-duration">🕐 {selectedVideo.duration}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}