// pages/Influencer.jsx
import React, { useState } from 'react'
import { 
  Users, 
  Camera, 
  Share2,
  Target,
  Rocket,
  Zap,
  Star,
  Search,
  Filter,
  Clock,
  Eye,
  ChevronRight,
  TrendingUp,
  UserPlus,
  Briefcase,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Upload,
  Save,
  X,
  Menu,
  Home,
  FolderOpen,
  User,
  LogIn,
  UserPlus as UserPlusIcon,
  FileText,
  DollarSign,
  Calendar,
  MapPin,
  Heart,
  ThumbsUp,
  Award,
  Mail,
  Phone,
  Lock,
  User as UserIcon,
  Globe
} from 'lucide-react'
import PageHero from '../components/PageHero'
import './Influencer.css'

export default function Influencer() {
  // États pour les modals
  const [showModal, setShowModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showAnnonceModal, setShowAnnonceModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedAnnonce, setSelectedAnnonce] = useState(null)
  const [activeTab, setActiveTab] = useState('annonces')
  const [selectedProfile, setSelectedProfile] = useState('')
  const [registerStep, setRegisterStep] = useState(1)
  const [selectedRegisterProfile, setSelectedRegisterProfile] = useState('')
  
  // États pour le formulaire d'inscription
  const [registerForm, setRegisterForm] = useState({
    email: '',
    profileName: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  // États pour le formulaire d'annonce
  const [annonceForm, setAnnonceForm] = useState({
    title: '',
    description: '',
    profiles: [],
    budget: ''
  })

  // Données des annonces
  const annonces = [
    {
      id: 1,
      title: "Recherche des influenceurs pour une collaboration",
      description: "Nous recherchons des influenceurs pour une collaboration pour la promotion du Salon de la Logistique et de l'Automobile de Guinée (SALA 2026).",
      fullDescription: "Dans le cadre de la 5ème édition du Salon de la Logistique et de l'Automobile de Guinée (SALA 2026), nous recherchons des influenceurs passionnés par l'automobile et la logistique pour couvrir l'événement et créer du contenu engageant. Vous aurez accès exclusif aux stands, aux véhicules exposés et aux conférences. Nous attendons des photos, vidéos et stories de qualité professionnelle.",
      budget: "500milles à 1million GNF",
      status: "Ouverte",
      date: "1 jour",
      views: 53,
      profiles: ["Influenceur", "Créateur de contenu"],
      type: "Collaboration",
      entreprise: "SALA 2026",
      location: "Conakry, Guinée",
      deadline: "30 juin 2026"
    },
    {
      id: 2,
      title: "Collaborations Influenceurs & Créateurs",
      description: "Envie de faire connaître une nouveauté ? Nous cherchons des influenceurs et créateurs pour promouvoir un produit encore méconnu en Guinée.",
      fullDescription: "Nous lançons un nouveau produit innovant sur le marché guinéen et nous cherchons des influenceurs et créateurs de contenu pour nous aider à le faire connaître. Vous aurez l'opportunité de tester le produit en avant-première et de créer du contenu authentique. Nous recherchons des profils créatifs avec un bon engagement.",
      budget: "1million à 5millions GNF",
      status: "Ouverte",
      date: "4 jours",
      views: 104,
      profiles: ["Influenceur"],
      type: "Collaboration",
      entreprise: "Nouveauté Guinée",
      location: "Toute la Guinée",
      deadline: "15 juillet 2026"
    },
    {
      id: 3,
      title: "OPERA'S BRUNCH : Devenez nos partenaires !",
      description: "Rejoignez-nous pour notre événement spécial 'Opera's Brunch' le 20 juin 2026 à Opera Event's space.",
      fullDescription: "Opera's Brunch est un événement exclusif qui réunit les passionnés de gastronomie et de divertissement. Nous cherchons des créateurs de contenu pour couvrir l'événement, créer du contenu en direct et partager l'expérience avec leur communauté. Une occasion unique de vivre un moment d'exception.",
      budget: "500milles à 1million GNF",
      status: "Ouverte",
      date: "5 jours",
      views: 130,
      profiles: ["Influenceur", "Créateur de contenu"],
      type: "Événement",
      entreprise: "Opera Event's Space",
      location: "Conakry, Guinée",
      deadline: "18 juin 2026"
    },
    {
      id: 4,
      title: "Booster nos ventes",
      description: "Notre boutique lance des soldes et recherche un ou deux influenceurs pour informer leur communauté et attirer des clients.",
      fullDescription: "Notre boutique de vêtements lance une grande opération de soldes et nous recherchons des influenceurs pour promouvoir notre collection. Nous vendons des vêtements pour hommes et femmes, ainsi que des accessoires. Nous cherchons des profils avec un bon engagement et une communauté active.",
      budget: "1million à 5millions GNF",
      status: "Sélection terminée",
      date: "1 mois",
      views: 187,
      profiles: ["Influenceur", "Créateur de contenu"],
      type: "Ventes",
      entreprise: "Boutique Mode",
      location: "Conakry, Guinée",
      deadline: "Passé"
    },
    {
      id: 5,
      title: "Khadija shop : Recherche Influenceuse",
      description: "Je recherche une influenceuse pour faire la pub de mes habits pour femmes et les mettre en valeur auprès de sa communauté.",
      fullDescription: "Khadija Shop est une boutique de vêtements pour femmes qui cherche une influenceuse pour mettre en valeur sa collection. Nous recherchons une personne avec un bon sens de la mode, qui sait créer du contenu esthétique et qui a une communauté engagée. Une collaboration sur plusieurs posts est envisagée.",
      budget: "Moins de 500milles GNF",
      status: "Ouverte",
      date: "2 mois",
      views: 117,
      profiles: ["Influenceur"],
      type: "Mode",
      entreprise: "Khadija Shop",
      location: "Conakry, Guinée",
      deadline: "31 juillet 2026"
    }
  ]

  // Statistiques
  const stats = [
    { number: "500+", label: "Influenceurs" },
    { number: "200+", label: "Projets" },
    { number: "4.9/5", label: "Note moyenne" }
  ]

  // Avantages
  const avantages = [
    {
      icon: Upload,
      title: "Simple",
      description: "Publiez votre annonce en décrivant le profil d'influenceur que vous recherchez."
    },
    {
      icon: Zap,
      title: "Rapide",
      description: "Recevez des offres d'influenceurs et de créateurs de contenu disponibles."
    },
    {
      icon: CheckCircle,
      title: "Efficace",
      description: "Triez les propositions et sélectionnez l'offre du ou des profils qui vous intéressent."
    }
  ]

  // Types de missions
  const missions = [
    {
      icon: TrendingUp,
      title: "Campagnes de Marketing d'Influence",
      description: "Collaborez avec des influenceurs pour concevoir des campagnes qui engagent votre audience."
    },
    {
      icon: Camera,
      title: "Création de Contenu",
      description: "Faites appel à des influenceurs pour produire du contenu visuel et narratif."
    },
    {
      icon: Calendar,
      title: "Événements et Promotions",
      description: "Organisez des événements en ligne ou en personne avec des influenceurs."
    }
  ]

  // Gestionnaires d'événements
  const handleCreateProject = () => {
    setShowModal(true)
  }

  const handleRegister = () => {
    setRegisterStep(1)
    setSelectedRegisterProfile('')
    setShowRegisterModal(true)
  }

  const handleRegisterStep2 = () => {
    if (selectedRegisterProfile) {
      setRegisterStep(2)
    }
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    // Logique d'inscription
    alert('Inscription réussie ! Bienvenue sur Smartsell Influenceur !')
    setShowRegisterModal(false)
    setRegisterStep(1)
    setSelectedRegisterProfile('')
  }

  const handleFindInfluencer = () => {
    setShowAnnonceModal(true)
  }

  const handleAnnonceSubmit = (e) => {
    e.preventDefault()
    alert('Votre annonce a été publiée avec succès !')
    setShowAnnonceModal(false)
    setAnnonceForm({
      title: '',
      description: '',
      profiles: [],
      budget: ''
    })
  }

  const handleViewAnnonce = (annonce) => {
    setSelectedAnnonce(annonce)
    setShowDetailModal(true)
  }

  const handleProfileSelect = (profile) => {
    setSelectedRegisterProfile(profile)
  }

  const handleAnnonceProfileToggle = (profile) => {
    setAnnonceForm(prev => {
      const profiles = prev.profiles.includes(profile)
        ? prev.profiles.filter(p => p !== profile)
        : [...prev.profiles, profile]
      return { ...prev, profiles }
    })
  }

  // Composant pour afficher les étoiles
  const Stars = ({ count = 5 }) => (
    <div className="stars">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
      ))}
    </div>
  )

  return (
    <div className="influencer-page">
      {/* Navigation Header */}


      {/* Hero Section */}
      <section className="influencer-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Publiez votre <span className="highlight">premier projet</span> pour 0 GNF</h1>
            <p>Trouvez facilement l'influenceur idéal pour une collaboration</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleRegister}>
                S'inscrire maintenant
              </button>
              <button className="btn-secondary" onClick={handleFindInfluencer}>
                Trouver un influenceur
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" 
                alt="Influenceur" 
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="avantages-section">
        <div className="container">
          <div className="avantages-grid">
            {avantages.map((avantage, index) => {
              const Icon = avantage.icon
              return (
                <div key={index} className="avantage-card">
                  <div className="avantage-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{avantage.title}</h3>
                  <p>{avantage.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Annonces */}
      <section className="annonces-section">
        <div className="container">
          <div className="section-header">
            <h2>Annonces récentes</h2>
            <button className="btn-view-all" onClick={handleFindInfluencer}>
              Voir plus <ChevronRight size={18} />
            </button>
          </div>

          <div className="annonces-grid">
            {annonces.map((annonce) => (
              <div key={annonce.id} className="annonce-card">
                <div className="annonce-header">
                  <div className="annonce-status">
                    <span className={`status-badge ${annonce.status === 'Ouverte' ? 'status-open' : 'status-closed'}`}>
                      {annonce.status}
                    </span>
                    <span className="annonce-date">
                      <Clock size={14} />
                      Publiée il y a : {annonce.date}
                    </span>
                  </div>
                </div>
                <h3 className="annonce-title">{annonce.title}</h3>
                <p className="annonce-description">{annonce.description}</p>
                <div className="annonce-meta">
                  <div className="annonce-budget">
                    <DollarSign size={16} />
                    {annonce.budget}
                  </div>
                  <div className="annonce-views">
                    <Eye size={14} />
                    {annonce.views} fois
                  </div>
                </div>
                <div className="annonce-profiles">
                  {annonce.profiles.map((profile, idx) => (
                    <span key={idx} className="profile-tag">{profile}</span>
                  ))}
                </div>
                <button className="btn-view-annonce" onClick={() => handleViewAnnonce(annonce)}>
                  Voir l'annonce
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Boostez vos ventes et vos campagnes marketing grâce aux influenceurs qui vous correspondent</h2>
            <button className="btn-cta" onClick={handleRegister}>
              Essayer gratuitement
            </button>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="presentation-section">
        <div className="container">
          <div className="presentation-content">
            <div className="presentation-text">
              <h2>Rejoignez Smartsell, la plateforme qui connecte les influenceurs et les marques !</h2>
              <p>Smartsell est votre espace privilégié pour faire entendre votre voix et trouver des projets qui vous passionnent.</p>
              <p>Inscrivez-vous dès maintenant pour consulter les projets publiés et soumettre gratuitement vos offres.</p>
              <button className="btn-join" onClick={handleRegister}>
                Rejoindre la communauté
              </button>
            </div>
            <div className="presentation-image">
              <div className="image-placeholder">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80" 
                  alt="Communauté" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">COMMENT ÇA MARCHE</h2>
          <p className="section-subtitle">Recevez des offres d'influenceurs en moins de 5 minutes</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon"><Upload size={32} /></div>
              <h3>Lancez votre recherche d'influenceurs</h3>
              <p>Publiez votre besoin en décrivant le profil d'influenceur que vous recherchez.</p>
              <button className="step-btn" onClick={handleCreateProject}>Je poste une annonce</button>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon"><MessageCircle size={32} /></div>
              <h3>Recevez des propositions personnalisées</h3>
              <p>Attendez juste un instant pour recevoir des offres sur mesure de nano, micro, macro influenceurs ou all stars.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon"><Users size={32} /></div>
              <h3>Sélectionnez votre partenaire idéal</h3>
              <p>Utilisez le chat pour discuter avec les influenceurs et choisissez le profil qui correspond parfaitement à vos attentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de missions */}
      <section className="missions-section">
        <div className="container">
          <h2 className="section-title">Types de missions à confier aux Influenceurs</h2>
          <p className="section-subtitle">Les influenceurs offrent une expertise polyvalente pour promouvoir votre marque</p>
          
          <div className="missions-grid">
            {missions.map((mission, index) => {
              const Icon = mission.icon
              return (
                <div key={index} className="mission-card">
                  <div className="mission-icon"><Icon size={28} /></div>
                  <h3>{mission.title}</h3>
                  <p>{mission.description}</p>
                </div>
              )
            })}
          </div>
          
          <div className="missions-cta">
            <button className="btn-find" onClick={handleFindInfluencer}>Trouver des influenceurs</button>
            <button className="btn-offers" onClick={handleCreateProject}>Recevoir des offres</button>
          </div>
        </div>
      </section>


      {/* MODAL 1: Création d'annonce (Déposer un projet) */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Création d'une annonce</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-note">NB : Les liens et coordonnées ne sont pas autorisés dans l'annonce.</p>
              
              <form onSubmit={handleAnnonceSubmit}>
                <div className="form-group">
                  <label>Titre de votre annonce *</label>
                  <input 
                    type="text" 
                    placeholder="Exemple : Recherche d'influenceurs pour une collaboration" 
                    value={annonceForm.title}
                    onChange={(e) => setAnnonceForm({...annonceForm, title: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Détails de votre annonce *</label>
                  <textarea 
                    rows="4" 
                    placeholder="Exemple : Nous recherchons des influenceurs ou créateurs de contenu, principalement sur TikTok, avec un minimum de 30k d'abonnés. Objectif : promouvoir notre nouvelle gamme de produits fraîchement lancée."
                    value={annonceForm.description}
                    onChange={(e) => setAnnonceForm({...annonceForm, description: e.target.value})}
                    required
                  />
                  <span className="char-count">{annonceForm.description.length} / 500</span>
                </div>
                
                <div className="form-group">
                  <label>Profils recherchés *</label>
                  <div className="profile-selector">
                    {['Influenceur', 'Créateur de contenu', 'Agent', 'Agence', 'Marque', 'Acteur'].map((profile) => (
                      <button 
                        key={profile} 
                        type="button"
                        className={`profile-option ${annonceForm.profiles.includes(profile) ? 'selected' : ''}`}
                        onClick={() => handleAnnonceProfileToggle(profile)}
                      >
                        {profile}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Votre budget *</label>
                  <div className="budget-options">
                    {['Moins de 500milles GNF', '500milles à 1million GNF', '1million à 5millions GNF', 'Plus de 5millions GNF'].map((budget) => (
                      <button 
                        key={budget} 
                        type="button"
                        className={`budget-option ${annonceForm.budget === budget ? 'selected' : ''}`}
                        onClick={() => setAnnonceForm({...annonceForm, budget})}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button type="submit" className="btn-publish">Publier</button>
                  <button type="button" className="btn-save"><Save size={18} /> Enregistrer</button>
                </div>
              </form>
              <p className="modal-help">Enregistrez l'annonce si vous ne souhaitez pas publier maintenant, vous pourrez la modifier plus tard.</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Inscription - Étape 1 - Choix du profil */}
      {showRegisterModal && registerStep === 1 && (
        <div className="modal-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="modal-content register-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Inscrivez-vous gratuitement</h2>
              <button className="modal-close" onClick={() => setShowRegisterModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-subtitle">Inscrivez-vous et publiez des projets pour recevoir des propositions.</p>
              
              <div className="form-group">
                <label>Quel est votre profil ?</label>
                <p className="form-hint">Vous pourrez le modifier plus tard.</p>
                <div className="profile-grid">
                  {['Créateur de contenu', 'Influenceur', 'Acteur', 'Youtubeur', 'Agent', 'Agence', 'Marque', 'Porteur de projet'].map((profile) => (
                    <button 
                      key={profile} 
                      type="button"
                      className={`profile-option ${selectedRegisterProfile === profile ? 'selected' : ''}`}
                      onClick={() => handleProfileSelect(profile)}
                    >
                      {profile}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="btn-next" onClick={handleRegisterStep2} disabled={!selectedRegisterProfile}>
                  Étape suivante
                </button>
              </div>
              <p className="modal-login">Vous avez déjà un compte ? <a href="#">Connectez-vous</a></p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Inscription - Étape 2 - Formulaire complet */}
      {showRegisterModal && registerStep === 2 && (
        <div className="modal-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="modal-content register-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Inscription profil {selectedRegisterProfile}</h2>
              <button className="modal-close" onClick={() => setShowRegisterModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-login" style={{ textAlign: 'center', marginBottom: 20 }}>
                Vous avez déjà un compte ? <a href="#">Connectez-vous</a>
              </p>
              
              <form onSubmit={handleRegisterSubmit}>
                <div className="form-group">
                  <label>Adresse e-mail *</label>
                  <input 
                    type="email" 
                    placeholder="exemple@email.com"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Nom de profil *</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom de profil"
                    value={registerForm.profileName}
                    onChange={(e) => setRegisterForm({...registerForm, profileName: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Téléphone</label>
                  <input 
                    type="tel" 
                    placeholder="+224 XX XX XX XX"
                    value={registerForm.phone}
                    onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label>Mot de passe * (6 caractères minimum)</label>
                  <input 
                    type="password" 
                    placeholder="Votre mot de passe"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                    minLength="6"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Confirmer le mot de passe *</label>
                  <input 
                    type="password" 
                    placeholder="Confirmez votre mot de passe"
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group" style={{ marginBottom: 24 }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', fontWeight: 'normal' }}>
                    <input type="checkbox" required />
                    En créant votre compte, vous attestez avoir lu et accepté nos <a href="#" style={{ color: 'var(--primary)' }}>conditions générales d'utilisation</a>.
                  </label>
                </div>
                
                <button type="submit" className="btn-publish" style={{ width: '100%', padding: '14px' }}>
                  Créer mon compte
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Trouver un influenceur (Création d'annonce) */}
      {showAnnonceModal && (
        <div className="modal-overlay" onClick={() => setShowAnnonceModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Création d'une annonce</h2>
              <button className="modal-close" onClick={() => setShowAnnonceModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-note">NB : Les liens et coordonnées ne sont pas autorisés dans l'annonce.</p>
              
              <form onSubmit={handleAnnonceSubmit}>
                <div className="form-group">
                  <label>Titre de votre annonce *</label>
                  <input 
                    type="text" 
                    placeholder="Exemple : Recherche d'influenceurs pour une collaboration" 
                    value={annonceForm.title}
                    onChange={(e) => setAnnonceForm({...annonceForm, title: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Détails de votre annonce *</label>
                  <textarea 
                    rows="4" 
                    placeholder="Exemple : Nous recherchons des influenceurs ou créateurs de contenu, principalement sur TikTok, avec un minimum de 30k d'abonnés. Objectif : promouvoir notre nouvelle gamme de produits fraîchement lancée."
                    value={annonceForm.description}
                    onChange={(e) => setAnnonceForm({...annonceForm, description: e.target.value})}
                    required
                  />
                  <span className="char-count">{annonceForm.description.length} / 500</span>
                </div>
                
                <div className="form-group">
                  <label>Profils recherchés *</label>
                  <div className="profile-selector">
                    {['Influenceur', 'Créateur de contenu', 'Agent', 'Agence', 'Marque', 'Acteur'].map((profile) => (
                      <button 
                        key={profile} 
                        type="button"
                        className={`profile-option ${annonceForm.profiles.includes(profile) ? 'selected' : ''}`}
                        onClick={() => handleAnnonceProfileToggle(profile)}
                      >
                        {profile}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Votre budget *</label>
                  <div className="budget-options">
                    {['Moins de 500milles GNF', '500milles à 1million GNF', '1million à 5millions GNF', 'Plus de 5millions GNF'].map((budget) => (
                      <button 
                        key={budget} 
                        type="button"
                        className={`budget-option ${annonceForm.budget === budget ? 'selected' : ''}`}
                        onClick={() => setAnnonceForm({...annonceForm, budget})}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button type="submit" className="btn-publish">Publier</button>
                  <button type="button" className="btn-save"><Save size={18} /> Enregistrer</button>
                </div>
              </form>
              <p className="modal-help">Enregistrez l'annonce si vous ne souhaitez pas publier maintenant, vous pourrez la modifier plus tard.</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: Détail de l'annonce (Voir l'annonce) */}
      {showDetailModal && selectedAnnonce && (
        <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
          <div className="modal-content detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedAnnonce.title}</h2>
              <button className="modal-close" onClick={() => setShowDetailModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-status">
                <span className={`status-badge ${selectedAnnonce.status === 'Ouverte' ? 'status-open' : 'status-closed'}`}>
                  {selectedAnnonce.status}
                </span>
                <span className="detail-date">
                  <Clock size={14} /> Publiée il y a : {selectedAnnonce.date}
                </span>
              </div>
              
              <div className="detail-entreprise">
                <span className="detail-label">Entreprise</span>
                <p>{selectedAnnonce.entreprise}</p>
              </div>
              
              <div className="detail-description">
                <span className="detail-label">Description</span>
                <p>{selectedAnnonce.fullDescription}</p>
              </div>
              
              <div className="detail-meta">
                <div className="detail-item">
                  <DollarSign size={18} />
                  <div>
                    <span className="detail-label">Budget</span>
                    <p>{selectedAnnonce.budget}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <MapPin size={18} />
                  <div>
                    <span className="detail-label">Localisation</span>
                    <p>{selectedAnnonce.location}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <Calendar size={18} />
                  <div>
                    <span className="detail-label">Date limite</span>
                    <p>{selectedAnnonce.deadline}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <Eye size={18} />
                  <div>
                    <span className="detail-label">Vues</span>
                    <p>{selectedAnnonce.views} fois</p>
                  </div>
                </div>
              </div>
              
              <div className="detail-profiles">
                <span className="detail-label">Profils recherchés</span>
                <div className="annonce-profiles">
                  {selectedAnnonce.profiles.map((profile, idx) => (
                    <span key={idx} className="profile-tag">{profile}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="btn-publish" style={{ flex: 1 }}>
                  <MessageCircle size={18} /> Postuler maintenant
                </button>
                <button className="btn-save" onClick={() => setShowDetailModal(false)}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}