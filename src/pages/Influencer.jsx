import React, { useState } from 'react'
import '../App.css'
import './Influencer.css'
import PageHero from '../components/PageHero'
import { 
  Users, 
  Star, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share2, 
  Camera, 
  Video, 
  Music, 
  Briefcase, 
  MapPin,
  Award,
  Zap,
  Sparkles,
  ArrowRight,
  ChevronRight
  
} from 'lucide-react'

export default function Influencer(){
  const [activeTab, setActiveTab] = useState('marques')

  const influencers = [
    {
      id: 1,
      name: 'Mamadou Diallo',
      handle: '@mamadou_diallo',
      niche: 'Lifestyle & Fashion',
      followers: '45k',
      engagement: '4.8%',
      location: 'Conakry, Guinée',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop',
      platform: 'instagram',
      isTop: true
    },
    {
      id: 2,
      name: 'Aïssatou Camara',
      handle: '@aissatou_camara',
      niche: 'Beauté & Bien-être',
      followers: '32k',
      engagement: '5.2%',
      location: 'Conakry, Guinée',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop',
      platform: 'instagram',
      isTop: true
    },
    {
      id: 3,
      name: 'Ibrahima Sory',
      handle: '@ibrahima_sory',
      niche: 'Tech & Digital',
      followers: '28k',
      engagement: '3.9%',
      location: 'Conakry, Guinée',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop',
      platform: 'youtube',
      isTop: false
    },
    {
      id: 4,
      name: 'Fatoumata Barry',
      handle: '@fatoumata_barry',
      niche: 'Cuisine & Gastronomie',
      followers: '38k',
      engagement: '6.1%',
      location: 'Conakry, Guinée',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop',
      platform: 'instagram',
      isTop: true
    },
    {
      id: 5,
      name: 'Ousmane Kourouma',
      handle: '@ousmane_kourouma',
      niche: 'Sport & Fitness',
      followers: '22k',
      engagement: '4.3%',
      location: 'Conakry, Guinée',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop',
      platform: 'youtube',
      isTop: false
    },
    {
      id: 6,
      name: 'Mariam Traoré',
      handle: '@mariam_traore',
      niche: 'Mode & Style',
      followers: '52k',
      engagement: '5.7%',
      location: 'Conakry, Guinée',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&fit=crop',
      platform: 'instagram',
      isTop: true
    }
  ]

  const brands = [
    {
      id: 1,
      name: 'Orange Guinée',
      sector: 'Télécommunications',
      campaign: 'Orange Money Week',
      budget: '15 000 000 GNF',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop'
    },
    {
      id: 2,
      name: 'Nestlé Guinée',
      sector: 'Alimentation',
      campaign: 'Nestlé Café Tour',
      budget: '10 000 000 GNF',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80&fit=crop'
    },
    {
      id: 3,
      name: 'Ecobank Guinée',
      sector: 'Banque & Finance',
      campaign: 'Ecobank Digital Week',
      budget: '20 000 000 GNF',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&fit=crop'
    }
  ]

  const campaigns = [
    {
      id: 1,
      brand: 'Moov Africa',
      influencer: 'Mamadou Diallo',
      title: 'Moov Money Week',
      reach: '125k',
      engagement: '4.2%',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop'
    },
    {
      id: 2,
      brand: 'BICIGUI',
      influencer: 'Aïssatou Camara',
      title: 'BICIGUI & Moi',
      reach: '98k',
      engagement: '5.1%',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80&fit=crop'
    },
    {
      id: 3,
      brand: 'Star Guinée',
      influencer: 'Fatoumata Barry',
      title: 'Star Taste',
      reach: '210k',
      engagement: '6.8%',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&fit=crop'
    }
  ]

  
  return (
    <div className="influencer-page">
      <PageHero
        eyebrow="INFLUENCE"
        title="Des collaborations puissantes entre marques et créateurs en Guinée" 
        description="Nous pilotons les partenariats d'influence avec un focus sur l'engagement, la créativité et le ROI." 
        primaryAction={{ label: 'Découvrir le réseau', href: '#network' }}
        secondaryAction={{ label: 'Contact', href: '#contact' }}
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&fit=crop"
        topBadge="INFLUENCE ACTIVE"
        bottomBadge="Campagnes premium pour visibilité et conversion en Guinée."
      />

      <div className="influencer-container" id="network">
        {/* ===== STATS BANNER ===== */}
        <div className="influencer-stats-banner">
          <div className="influencer-stat-item">
            <span className="influencer-stat-number">50+</span>
            <span className="influencer-stat-label">Influenceurs</span>
          </div>
          <div className="influencer-stat-item">
            <span className="influencer-stat-number">30+</span>
            <span className="influencer-stat-label">Marques</span>
          </div>
          <div className="influencer-stat-item">
            <span className="influencer-stat-number">150+</span>
            <span className="influencer-stat-label">Campagnes</span>
          </div>
          <div className="influencer-stat-item">
            <span className="influencer-stat-number">4.9</span>
            <span className="influencer-stat-label">Note moyenne</span>
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div className="influencer-tabs">
          <button 
            className={`influencer-tab ${activeTab === 'marques' ? 'active' : ''}`}
            onClick={() => setActiveTab('marques')}
          >
            <Briefcase size={18} />
            <span>Pour les marques</span>
          </button>
          <button 
            className={`influencer-tab ${activeTab === 'createurs' ? 'active' : ''}`}
            onClick={() => setActiveTab('createurs')}
          >
            <Sparkles size={18} />
            <span>Pour les créateurs</span>
          </button>
          <button 
            className={`influencer-tab ${activeTab === 'campagnes' ? 'active' : ''}`}
            onClick={() => setActiveTab('campagnes')}
          >
            <TrendingUp size={18} />
            <span>Campagnes réussies</span>
          </button>
        </div>

        {/* ===== CONTENT BASED ON TAB ===== */}
        {activeTab === 'marques' && (
          <section className="influencer-section">
            <div className="influencer-section-header">
              <span className="influencer-badge">Marques</span>
              <h2 className="influencer-section-title">
                <span className="influencer-title-gradient">Trouvez l'influenceur idéal pour votre marque</span>
              </h2>
              <p className="influencer-section-subtitle">
                Accédez à notre réseau d'influenceurs guinéens qualifiés et lancé des campagnes qui marquent.
              </p>
            </div>

            <div className="influencer-grid">
              {influencers.map((influencer, i) => (
                <div key={influencer.id} className="influencer-card" style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className="influencer-card-image">
                    <img src={influencer.image} alt={influencer.name} loading="lazy" />
                    <div className="influencer-card-badges">
                      {influencer.isTop && (
                        <span className="influencer-top-badge">
                          <Award size={14} /> Top
                        </span>
                      )}
                     
                    </div>
                  </div>
                  <div className="influencer-card-content">
                    <div className="influencer-card-header">
                      <h3 className="influencer-card-name">{influencer.name}</h3>
                      <span className="influencer-card-handle">{influencer.handle}</span>
                    </div>
                    <div className="influencer-card-stats">
                      <div className="influencer-stat">
                        <Users size={14} />
                        <span>{influencer.followers}</span>
                      </div>
                      <div className="influencer-stat">
                        <Heart size={14} />
                        <span>{influencer.engagement}</span>
                      </div>
                      <div className="influencer-stat">
                        <MapPin size={14} />
                        <span>{influencer.location}</span>
                      </div>
                    </div>
                    <div className="influencer-card-niche">
                      <Zap size={14} />
                      <span>{influencer.niche}</span>
                    </div>
                    <button className="influencer-card-btn">
                      Collaborer <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'createurs' && (
          <section className="influencer-section">
            <div className="influencer-section-header">
              <span className="influencer-badge">Créateurs</span>
              <h2 className="influencer-section-title">
                <span className="influencer-title-gradient">Rejoignez le réseau d'influenceurs guinéens</span>
              </h2>
              <p className="influencer-section-subtitle">
                Transformez votre passion en opportunités rémunérées avec des marques qui partagent vos valeurs.
              </p>
            </div>

            <div className="influencer-join-grid">
              <div className="influencer-join-card">
                <div className="influencer-join-icon">
                  <Camera size={32} />
                </div>
                <h3 className="influencer-join-title">Contenus visuels</h3>
                <p className="influencer-join-description">
                  Photographie, vidéo et création de contenu pour des marques locales et internationales.
                </p>
              </div>
              <div className="influencer-join-card">
                <div className="influencer-join-icon">
                  <Star size={32} />
                </div>
                <h3 className="influencer-join-title">Ambassadeurs de marque</h3>
                <p className="influencer-join-description">
                  Devenez le visage de marques premium en Guinée et gagnez en visibilité.
                </p>
              </div>
              <div className="influencer-join-card">
                <div className="influencer-join-icon">
                  <TrendingUp size={32} />
                </div>
                <h3 className="influencer-join-title">Campagnes virales</h3>
                <p className="influencer-join-description">
                  Participez à des campagnes à fort impact avec des rémunérations attractives.
                </p>
              </div>
            </div>

            <div className="influencer-cta-card">
              <h3 className="influencer-cta-title">Prêt à rejoindre l'aventure ?</h3>
              <p className="influencer-cta-description">
                Plus de 50 créateurs guinéens ont déjà rejoint notre réseau. À vous maintenant !
              </p>
              <button className="influencer-cta-btn">
                <span>Rejoindre le réseau</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </section>
        )}

        {activeTab === 'campagnes' && (
          <section className="influencer-section">
            <div className="influencer-section-header">
              <span className="influencer-badge">Campagnes</span>
              <h2 className="influencer-section-title">
                <span className="influencer-title-gradient">Nos campagnes qui ont marqué la Guinée</span>
              </h2>
              <p className="influencer-section-subtitle">
                Découvrez les collaborations qui ont généré le plus d'impact et de résultats.
              </p>
            </div>

            <div className="influencer-campaigns-grid">
              {campaigns.map((campaign, i) => (
                <div key={campaign.id} className="influencer-campaign-card" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="influencer-campaign-image">
                    <img src={campaign.image} alt={campaign.title} loading="lazy" />
                  </div>
                  <div className="influencer-campaign-content">
                    <div className="influencer-campaign-header">
                      <h3 className="influencer-campaign-title">{campaign.title}</h3>
                      <span className="influencer-campaign-brand">{campaign.brand}</span>
                    </div>
                    <div className="influencer-campaign-meta">
                      <span className="influencer-campaign-influencer">
                        <Users size={14} /> {campaign.influencer}
                      </span>
                      <div className="influencer-campaign-stats">
                        <span className="influencer-campaign-stat">
                          <Users size={14} /> {campaign.reach}
                        </span>
                        <span className="influencer-campaign-stat">
                          <Heart size={14} /> {campaign.engagement}
                        </span>
                      </div>
                    </div>
                    <button className="influencer-campaign-btn">
                      Voir les résultats <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}