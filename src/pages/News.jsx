import React, { useState } from 'react'
import '../App.css'
import './News.css'
import PageHero from '../components/PageHero'
import { 
  Search, 
  Clock, 
  ChevronRight, 
  Share2, 
  Bookmark, 
  TrendingUp,
  Calendar,
  User,
  Eye,
  Heart,
  MessageCircle,
  ArrowRight,
  X,
  Sparkles,
  Bot,
  Users,
  Rocket,
  Palette,
  BarChart3,
  Star,
  Mail,
  CheckCircle,
  Play,
  Headphones,
  FileText,
  Lock,
  Crown,
  Zap,
  Send,
  Loader,
  Award,
  Video
} from 'lucide-react'

export default function News() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeType, setActiveType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [likedArticles, setLikedArticles] = useState([])
  const [bookmarkedArticles, setBookmarkedArticles] = useState([])
  const [isPremiumUser, setIsPremiumUser] = useState(false)
  const [showSubscription, setShowSubscription] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [subscriptionData, setSubscriptionData] = useState({
    name: '',
    email: '',
    plan: 'premium',
    acceptTerms: false
  })
  const [requestData, setRequestData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: ['articles', 'videos', 'podcasts', 'formations']
  })

  const categories = [
    { id: 'all', label: 'Toute l\'actu', icon: Sparkles },
    { id: 'ia', label: 'IA & Tech', icon: Bot },
    { id: 'social', label: 'Social Media', icon: Users },
    { id: 'growth', label: 'Growth', icon: Rocket },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'marketing', label: 'Marketing', icon: BarChart3 }
  ]

  const contentTypes = [
    { id: 'all', label: 'Tout', icon: FileText },
    { id: 'article', label: 'Articles', icon: FileText },
    { id: 'video', label: 'Vidéos', icon: Play },
    { id: 'podcast', label: 'Podcasts', icon: Headphones }
  ]

  const subscriptionPlans = [
    {
      id: 'free',
      name: 'Gratuit',
      price: '0€',
      period: '/mois',
      features: [
        'Accès aux articles gratuits',
        '5 articles par mois',
        'Newsletter hebdomadaire',
        'Commentaires limités'
      ],
      icon: FileText,
      color: 'var(--fg-muted)',
      badge: null
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '9,99€',
      period: '/mois',
      features: [
        'Accès illimité à tous les contenus',
        'Vidéos et podcasts exclusifs',
        'Formation mensuelle offerte',
        'Support prioritaire 24/7',
        'Badge Premium',
        'Téléchargement hors ligne',
        'Accès anticipé aux nouveautés'
      ],
      icon: Crown,
      color: 'var(--violet)',
      badge: ' Populaire'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '29,99€',
      period: '/mois',
      features: [
        'Tout Premium inclus',
        'Consultation personnalisée',
        'Accès aux événements exclusifs',
        'Compte multi-utilisateurs (5)',
        'API d\'accès aux données',
        'Rapports personnalisés',
        'Mentorat mensuel'
      ],
      icon: Award,
      color: 'var(--yellow)',
      badge: ' Entreprise'
    }
  ]

  const articles = [
    {
      id: 1,
      title: 'L\'IA générative redéfinit les stratégies marketing en 2026',
      summary: 'Comment les entreprises utilisent l\'IA pour créer des campagnes hyper-personnalisées à grande échelle.',
      category: 'ia',
      type: 'article',
      date: '19 mai 2026',
      author: 'Sophie Martin',
      readTime: '6 min',
      views: '12.4k',
      likes: 342,
      comments: 28,
      isPremium: false,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
      isTrending: true,
      isFeatured: true,
      content: 'Dans un paysage numérique en constante évolution, l\'intelligence artificielle générative s\'impose comme un tournant décisif pour le marketing. Les entreprises qui ont su intégrer ces technologies dans leur stratégie constatent des résultats spectaculaires : des campagnes hyper-personnalisées, un ROI multiplié par 3, et une réduction significative des coûts de production de contenu.\n\nNotre analyse montre que l\'IA générative permet désormais de créer des messages marketing adaptés à chaque segment d\'audience en temps réel, avec un niveau de personnalisation qui était impossible à atteindre jusqu\'à présent. Les géants du secteur comme Amazon, Netflix et Google investissent massivement dans ces technologies, et les PME commencent à suivre le mouvement.\n\nDécouvrez dans cet article comment transformer votre stratégie marketing avec l\'IA générative.'
    },
    {
      id: 2,
      title: 'Le nouveau visage des réseaux sociaux en 2026',
      summary: 'TikTok, Instagram, LinkedIn : quelles plateformes dominent et comment s\'adapter.',
      category: 'social',
      type: 'video',
      date: '18 mai 2026',
      author: 'Marcus Dubois',
      readTime: '4 min',
      views: '8.7k',
      likes: 256,
      comments: 19,
      isPremium: false,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&fit=crop',
      isTrending: true,
      content: 'Les réseaux sociaux continuent de se réinventer à un rythme effréné. Si TikTok domine toujours les classements, Instagram et LinkedIn ont opéré des transformations majeures pour rester compétitifs.\n\nCette année, on observe une tendance forte vers l\'authenticité : les contenus spontanés et "bruts" surperforment les productions trop léchées. Les marques qui réussissent sont celles qui acceptent de montrer leurs coulisses, leurs erreurs et leurs apprentissages.\n\nLes algorithmes ont également évolué vers une distribution plus équitable, donnant leur chance aux petits créateurs. C\'est le moment idéal pour revoir votre stratégie sociale.'
    },
    {
      id: 3,
      title: 'Growth Hacking : 5 techniques pour 2026',
      summary: 'Les stratégies de croissance les plus efficaces pour les startups et les entreprises établies.',
      category: 'growth',
      type: 'article',
      date: '17 mai 2026',
      author: 'Lena Park',
      readTime: '8 min',
      views: '5.2k',
      likes: 189,
      comments: 14,
      isPremium: true,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
      content: 'Le growth hacking n\'est plus un concept réservé aux startups. Les entreprises de toutes tailles adoptent maintenant ces méthodes pour accélérer leur développement.\n\nVoici les 5 techniques qui donnent les meilleurs résultats en 2026 :\n\n1. L\'automatisation des entonnoirs de vente\n2. Le marketing de référencement entre pairs\n3. Les stratégies d\'acquisition basées sur l\'IA\n4. L\'optimisation continue des taux de conversion\n5. Les programmes de fidélisation gamifiés\n\nChacune de ces techniques a été testée et validée par des centaines d\'entreprises.'
    },
    {
      id: 4,
      title: 'Branding : Comment construire une marque qui dure',
      summary: 'Les principes fondamentaux du branding qui traversent les décennies.',
      category: 'branding',
      type: 'podcast',
      date: '16 mai 2026',
      author: 'Sarah Chen',
      readTime: '5 min',
      views: '9.1k',
      likes: 412,
      comments: 31,
      isPremium: false,
      audioUrl: 'https://example.com/podcast.mp3',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop',
      isTrending: true,
      content: 'Dans un monde où tout va vite, construire une marque qui dure demande du temps et de la cohérence. Les marques qui traversent les décennies partagent des caractéristiques communes : une vision claire, des valeurs authentiques et une capacité d\'évolution constante.\n\nCet article explore les fondamentaux du branding qui restent pertinents quelles que soient les tendances du moment. Nous verrons comment des marques comme Nike, Apple ou Chanel ont su maintenir leur essence tout en se réinventant.\n\nLe secret ? Une connexion émotionnelle avec leur audience, qui dépasse la simple transaction commerciale.'
    },
    {
      id: 5,
      title: 'Le marketing d\'influence en 2026 : ce qui change',
      summary: 'Micro-influenceurs, authenticité et ROI : les nouvelles règles du jeu.',
      category: 'marketing',
      type: 'video',
      date: '15 mai 2026',
      author: 'Emma Thompson',
      readTime: '7 min',
      views: '6.8k',
      likes: 234,
      comments: 22,
      isPremium: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&fit=crop',
      content: 'Le marketing d\'influence a connu une transformation majeure. Les macro-influenceurs cèdent la place aux micro-influenceurs (10k-50k followers) qui génèrent des taux d\'engagement bien supérieurs.\n\nEn 2026, l\'authenticité est devenue le critère n°1. Les audiences sont devenues très exigeantes et repèrent instantanément les collaborations non authentiques.\n\nCet article détaille les meilleures pratiques pour lancer une campagne d\'influence réussie, avec des exemples concrets et des ROI chiffrés.'
    },
    {
      id: 6,
      title: 'Les outils IA indispensables pour les créatifs',
      summary: 'Midjourney, Runway, ChatGPT : comment les utiliser pour booster votre créativité.',
      category: 'ia',
      type: 'article',
      date: '14 mai 2026',
      author: 'John Chen',
      readTime: '4 min',
      views: '10.2k',
      likes: 567,
      comments: 45,
      isPremium: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
      isTrending: true,
      content: 'Les outils d\'IA générative ont révolutionné le travail des créatifs. Midjourney pour l\'image, Runway pour la vidéo, ChatGPT pour le texte : ces outils sont devenus des assistants indispensables.\n\nNous avons testé et comparé les meilleurs outils du marché, et nous partageons nos recommandations pour chaque type de besoin créatif.\n\nDe la génération d\'idées à la production finale, l\'IA permet aujourd\'hui de travailler plus vite et plus efficacement.'
    },
    {
      id: 7,
      title: 'Social Ads : Optimisez vos campagnes en 2026',
      summary: 'Les meilleures pratiques pour maximiser votre ROI sur Facebook, Instagram et TikTok.',
      category: 'social',
      type: 'video',
      date: '13 mai 2026',
      author: 'David Miller',
      readTime: '6 min',
      views: '4.3k',
      likes: 167,
      comments: 12,
      isPremium: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&fit=crop',
      content: 'La publicité sur les réseaux sociaux est devenue plus complexe et plus performante. Avec l\'introduction de nouveaux formats et d\'algorithmes plus intelligents, les possibilités sont immenses.\n\nNous avons analysé les campagnes de plus de 50 entreprises pour identifier les pratiques qui génèrent le meilleur ROI en 2026.\n\nDécouvrez comment optimiser vos budgets publicitaires pour chaque plateforme.'
    },
    {
      id: 8,
      title: 'La stratégie de contenu qui convertit',
      summary: 'Comment créer du contenu qui engage, fidélise et convertit.',
      category: 'marketing',
      type: 'podcast',
      date: '12 mai 2026',
      author: 'Marie K.',
      readTime: '5 min',
      views: '7.6k',
      likes: 289,
      comments: 23,
      isPremium: false,
      audioUrl: 'https://example.com/podcast2.mp3',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
      content: 'Le contenu reste le roi, mais la stratégie qui l\'accompagne est désormais la clé du succès. Nous avons identifié 3 piliers fondamentaux pour une stratégie de contenu qui convertit :\n\n1. La segmentation précise de l\'audience\n2. L\'alignement avec le parcours client\n3. La mesure continue de l\'impact\n\nCet article vous donne les outils pour mettre en place cette stratégie dans votre entreprise.'
    },
    {
      id: 9,
      title: 'Le futur du travail hybride',
      summary: 'Comment les entreprises réinventent leurs modes de collaboration.',
      category: 'growth',
      type: 'video',
      date: '11 mai 2026',
      author: 'Dr. Anna Lee',
      readTime: '8 min',
      views: '3.9k',
      likes: 145,
      comments: 18,
      isPremium: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&fit=crop',
      content: 'Le travail hybride n\'est plus une option mais une réalité pour la majorité des entreprises. Cette transformation pose des défis en termes de collaboration, de culture d\'entreprise et de productivité.\n\nNous avons étudié les modèles hybrides qui fonctionnent le mieux et partageons les bonnes pratiques pour réussir cette transition.\n\nDe la technologie à la gestion des équipes, découvrez comment créer un environnement de travail hybride performant.'
    }
  ]

  // Filtrer par catégorie
  const categoryFiltered = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  // Filtrer par type de contenu
  const typeFiltered = activeType === 'all'
    ? categoryFiltered
    : categoryFiltered.filter(article => article.type === activeType)

  // Filtrer par recherche
  const searchedArticles = searchQuery 
    ? typeFiltered.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : typeFiltered

  const featuredArticle = articles.find(a => a.isFeatured)

  const handleArticleClick = (article) => {
    if (article.isPremium && !isPremiumUser) {
      setShowSubscription(true)
      return
    }
    setSelectedArticle(article)
    setIsModalOpen(true)
    setIsPlaying(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
    setIsPlaying(false)
  }

  const toggleLike = (id) => {
    setLikedArticles(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const toggleBookmark = (id) => {
    setBookmarkedArticles(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const isLiked = (id) => likedArticles.includes(id)
  const isBookmarked = (id) => bookmarkedArticles.includes(id)

  const getCategoryIcon = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId)
    return cat ? cat.icon : Sparkles
  }

  const getTypeIcon = (type) => {
    const typeObj = contentTypes.find(t => t.id === type)
    return typeObj ? typeObj.icon : FileText
  }

  const getTypeLabel = (type) => {
    const typeObj = contentTypes.find(t => t.id === type)
    return typeObj ? typeObj.label : type
  }

  const handleSubscriptionSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsPremiumUser(true)
      setShowSubscription(false)
      setFormSuccess(true)
      setTimeout(() => setFormSuccess(false), 3000)
    }, 1500)
  }

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setShowRequestForm(false)
      setFormSuccess(true)
      setTimeout(() => setFormSuccess(false), 3000)
    }, 1500)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="smartsell-news-page">
      <PageHero
        eyebrow=" NEWS"
        title="Les tendances digital & tech <span class='highlight'>décryptées</span> par Smartsell"
        description="Analyse, actu et inspirations pour garder une longueur d'avance dans un univers qui accélère."
        primaryAction={{ label: 'S\'abonner', href: '#newsletter' }}
        secondaryAction={{ label: 'Voir les articles', href: '#articles' }}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop"
        topBadge="ACTUALITÉ"
        bottomBadge="Infos créatives et digitales, sélectionnées chaque semaine."
        stats={[
          { number: '50+', label: 'Articles' },
          { number: '12k', label: 'Lecteurs' },
          { number: '4.8', label: 'Note moyenne' },
          { number: '30+', label: 'Experts' }
        ]}
        gradient="mixed"
      />

      <div className="smartsell-news-container" id="articles">
        {/* ===== STATS BANNER ===== */}
        <div className="smartsell-news-stats-banner">
          <div className="smartsell-news-stat-item">
            <span className="smartsell-news-stat-number">50+</span>
            <span className="smartsell-news-stat-label">Articles</span>
          </div>
          <div className="smartsell-news-stat-item">
            <span className="smartsell-news-stat-number">12k</span>
            <span className="smartsell-news-stat-label">Lecteurs</span>
          </div>
          <div className="smartsell-news-stat-item">
            <span className="smartsell-news-stat-number">4.8</span>
            <span className="smartsell-news-stat-label">Note moyenne</span>
          </div>
          <div className="smartsell-news-stat-item">
            <span className="smartsell-news-stat-number">30+</span>
            <span className="smartsell-news-stat-label">Experts</span>
          </div>
          <div className="smartsell-news-stat-item smartsell-news-stat-premium">
            <span className="smartsell-news-stat-number">
              {isPremiumUser ? '' : ''}
            </span>
            <span className="smartsell-news-stat-label">
              {isPremiumUser ? 'Premium' : 'Abonnement'}
            </span>
          </div>
        </div>

        {/* ===== ARTICLE À LA UNE ===== */}
        {featuredArticle && (
          <section className="smartsell-news-featured-section">
            <div className="smartsell-news-featured-article">
              <div className="smartsell-news-featured-image">
                <img src={featuredArticle.image} alt={featuredArticle.title} loading="lazy" />
                <div className="smartsell-news-featured-badge">
                  <Star size={14} />
                  À la une
                </div>
                <div className="smartsell-news-featured-type-badge">
                  {(() => {
                    const TypeIcon = getTypeIcon(featuredArticle.type)
                    return <TypeIcon size={14} />
                  })()}
                  {getTypeLabel(featuredArticle.type)}
                </div>
                <div className="smartsell-news-featured-shine" />
              </div>
              <div className="smartsell-news-featured-content">
                <div className="smartsell-news-featured-meta">
                  <span className="smartsell-news-featured-category">
                    {(() => {
                      const Icon = getCategoryIcon(featuredArticle.category)
                      return <Icon size={14} />
                    })()}
                    {featuredArticle.category}
                  </span>
                  <span className="smartsell-news-featured-date">{featuredArticle.date}</span>
                  {featuredArticle.isPremium && (
                    <span className="smartsell-news-featured-premium">
                      <Lock size={12} /> Premium
                    </span>
                  )}
                </div>
                <h2 className="smartsell-news-featured-title">{featuredArticle.title}</h2>
                <p className="smartsell-news-featured-summary">{featuredArticle.summary}</p>
                <div className="smartsell-news-featured-footer">
                  <div className="smartsell-news-featured-author">
                    <User size={16} />
                    <span>{featuredArticle.author}</span>
                    <span className="smartsell-news-featured-readtime">
                      <Clock size={14} /> {featuredArticle.readTime}
                    </span>
                  </div>
                  <div className="smartsell-news-featured-actions">
                    <button 
                      className="smartsell-news-featured-btn"
                      onClick={() => handleArticleClick(featuredArticle)}
                    >
                      {featuredArticle.isPremium && !isPremiumUser ? (
                        <>Débloquer <Lock size={16} /></>
                      ) : (
                        <>Lire l'article <ArrowRight size={16} /></>
                      )}
                    </button>
                    <button 
                      className={`smartsell-news-featured-bookmark ${isBookmarked(featuredArticle.id) ? 'active' : ''}`}
                      onClick={() => toggleBookmark(featuredArticle.id)}
                    >
                      <Bookmark size={18} />
                    </button>
                    <button className="smartsell-news-featured-share">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== FILTRES ===== */}
        <div className="smartsell-news-filters">
          <div className="smartsell-news-category-nav">
            <div className="smartsell-news-category-scroll">
              {categories.map((cat) => {
                const Icon = cat.icon
                return (
                  <button
                    key={cat.id}
                    className={`smartsell-news-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <Icon size={16} className="smartsell-news-category-icon" />
                    {cat.label}
                    {activeCategory === cat.id && (
                      <span className="smartsell-news-category-active-dot" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="smartsell-news-type-filters">
            {contentTypes.map((type) => {
              const TypeIcon = type.icon
              return (
                <button
                  key={type.id}
                  className={`smartsell-news-type-btn ${activeType === type.id ? 'active' : ''}`}
                  onClick={() => setActiveType(type.id)}
                >
                  <TypeIcon size={14} />
                  {type.label}
                </button>
              )
            })}
          </div>

          <div className="smartsell-news-search">
            <Search size={18} className="smartsell-news-search-icon" />
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              className="smartsell-news-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="smartsell-news-search-clear"
                onClick={() => setSearchQuery('')}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ===== GRILLE ARTICLES ===== */}
        <div className="smartsell-news-grid">
          {searchedArticles.length > 0 ? (
            searchedArticles.map((article, i) => {
              const CategoryIcon = getCategoryIcon(article.category)
              const TypeIcon = getTypeIcon(article.type)
              const isLocked = article.isPremium && !isPremiumUser
              
              return (
                <article 
                  key={article.id} 
                  className={`smartsell-news-article ${article.isTrending ? 'trending' : ''} ${article.isPremium ? 'premium' : ''} ${isLocked ? 'locked' : ''}`}
                  style={{ '--smartsell-article-delay': `${i * 0.06}s` }}
                >
                  <div className="smartsell-news-article-image">
                    <img src={article.image} alt={article.title} loading="lazy" />
                    <div className="smartsell-news-article-overlay">
                      <span className="smartsell-news-article-category">
                        <CategoryIcon size={12} />
                        {article.category}
                      </span>
                      <div className="smartsell-news-article-badges">
                        <span className="smartsell-news-article-type">
                          <TypeIcon size={12} />
                          {getTypeLabel(article.type)}
                        </span>
                        {article.isPremium && (
                          <span className="smartsell-news-article-premium-badge">
                            <Lock size={12} /> Premium
                          </span>
                        )}
                        {article.isTrending && (
                          <span className="smartsell-news-article-trending">
                            <TrendingUp size={14} /> Tendance
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="smartsell-news-article-shine" />
                    
                    {isLocked && (
                      <div className="smartsell-news-article-lock-overlay">
                        <Lock size={32} />
                        <span>Contenu premium</span>
                        <button 
                          className="smartsell-news-article-unlock-btn"
                          onClick={() => setShowSubscription(true)}
                        >
                          S'abonner pour débloquer
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="smartsell-news-article-content">
                    <div className="smartsell-news-article-header">
                      <h3 className="smartsell-news-article-title">{article.title}</h3>
                      <button 
                        className={`smartsell-news-article-bookmark ${isBookmarked(article.id) ? 'active' : ''}`}
                        onClick={() => toggleBookmark(article.id)}
                      >
                        <Bookmark size={18} />
                      </button>
                    </div>
                    <p className="smartsell-news-article-summary">{article.summary}</p>
                    <div className="smartsell-news-article-footer">
                      <div className="smartsell-news-article-meta">
                        <span className="smartsell-news-article-author">{article.author}</span>
                        <span className="smartsell-news-article-date">
                          <Calendar size={14} /> {article.date}
                        </span>
                        <span className="smartsell-news-article-readtime">
                          <Clock size={14} /> {article.readTime}
                        </span>
                      </div>
                      <div className="smartsell-news-article-actions">
                        <button 
                          className={`smartsell-news-article-btn ${isLocked ? 'locked' : ''}`}
                          onClick={() => handleArticleClick(article)}
                        >
                          {isLocked ? (
                            <><Lock size={14} /> Débloquer</>
                          ) : (
                            <>Lire <ChevronRight size={14} /></>
                          )}
                        </button>
                        <button className="smartsell-news-article-share">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })
          ) : (
            <div className="smartsell-news-empty">
              <span className="smartsell-news-empty-icon">🔍</span>
              <h3>Aucun article trouvé</h3>
              <p>Essayez de modifier votre recherche ou vos filtres.</p>
            </div>
          )}
        </div>

        {/* ===== NEWSLETTER ===== */}
        <section className="smartsell-news-newsletter" id="newsletter">
          <div className="smartsell-news-newsletter-particles">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="smartsell-news-newsletter-particle" 
                style={{ 
                  '--smartsell-px': `${Math.random() * 100}%`,
                  '--smartsell-py': `${Math.random() * 100}%`,
                  '--smartsell-delay': `${Math.random() * 3}s`,
                  '--smartsell-size': `${3 + Math.random() * 4}px`
                }} 
              />
            ))}
          </div>
          <div className="smartsell-news-newsletter-content">
            <div className="smartsell-news-newsletter-icon">
              <Mail size={40} />
            </div>
            <h2 className="smartsell-news-newsletter-title">Ne manquez aucun article</h2>
            <p className="smartsell-news-newsletter-description">
              Recevez chaque semaine notre sélection des meilleurs articles directement dans votre boîte mail.
            </p>
            <form className="smartsell-news-newsletter-form">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="smartsell-news-newsletter-input"
              />
              <button type="button" className="smartsell-news-newsletter-btn">
                S'abonner <ArrowRight size={18} />
              </button>
            </form>
            <div className="smartsell-news-newsletter-trust">
              <span className="smartsell-news-trust-item">
                <CheckCircle size={14} /> Pas de spam
              </span>
              <span className="smartsell-news-trust-dot">•</span>
              <span className="smartsell-news-trust-item">
                <CheckCircle size={14} /> Désinscription facile
              </span>
              <span className="smartsell-news-trust-dot">•</span>
              <span className="smartsell-news-trust-item">
                <CheckCircle size={14} /> Contenu exclusif
              </span>
            </div>
          </div>
        </section>

        {/* ===== MODAL D'ABONNEMENT ===== */}
        {showSubscription && (
          <div className="smartsell-news-modal smartsell-news-subscription-modal" onClick={() => setShowSubscription(false)}>
            <div className="smartsell-news-modal-content smartsell-news-subscription-content" onClick={(e) => e.stopPropagation()}>
              <button className="smartsell-news-modal-close" onClick={() => setShowSubscription(false)}>
                <X size={24} />
              </button>
              
              <div className="smartsell-news-subscription-header">
                <div className="smartsell-news-subscription-icon">
                  <Crown size={48} />
                </div>
                <h2>Accédez à tous les contenus premium</h2>
                <p>Choisissez l'offre qui vous correspond et débloquez l'intégralité de notre contenu.</p>
              </div>

              <div className="smartsell-news-subscription-plans">
                {subscriptionPlans.map((plan) => {
                  const PlanIcon = plan.icon
                  return (
                    <div 
                      key={plan.id} 
                      className={`smartsell-news-subscription-plan ${plan.id === 'premium' ? 'premium' : ''} ${plan.id === 'pro' ? 'pro' : ''}`}
                    >
                      {plan.badge && (
                        <div className="smartsell-news-subscription-badge">{plan.badge}</div>
                      )}
                      <div className="smartsell-news-subscription-plan-icon">
                        <PlanIcon size={32} />
                      </div>
                      <h3>{plan.name}</h3>
                      <div className="smartsell-news-subscription-price">
                        {plan.price}
                        <span>{plan.period}</span>
                      </div>
                      <ul>
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>
                            <CheckCircle size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button 
                        className={`smartsell-news-subscription-btn ${plan.id === 'free' ? 'secondary' : 'primary'}`}
                        onClick={() => {
                          if (plan.id === 'free') {
                            setIsPremiumUser(false)
                            setShowSubscription(false)
                          } else {
                            setSubscriptionData(prev => ({ ...prev, plan: plan.id }))
                            handleSubscriptionSubmit(new Event('submit'))
                          }
                        }}
                        disabled={plan.id === 'free'}
                      >
                        {plan.id === 'free' ? (
                          'Actuel'
                        ) : (
                          <>
                            <Zap size={16} /> S'abonner
                          </>
                        )}
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="smartsell-news-subscription-footer">
                <p>Essai gratuit de 7 jours. Annulation à tout moment.</p>
                <button 
                  className="smartsell-news-subscription-request"
                  onClick={() => {
                    setShowSubscription(false)
                    setShowRequestForm(true)
                  }}
                >
                  <Send size={16} /> Besoin d'un devis personnalisé ?
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== MODAL FORMULAIRE DE DEMANDE ===== */}
        {showRequestForm && (
          <div className="smartsell-news-modal smartsell-news-request-modal" onClick={() => setShowRequestForm(false)}>
            <div className="smartsell-news-modal-content smartsell-news-request-content" onClick={(e) => e.stopPropagation()}>
              <button className="smartsell-news-modal-close" onClick={() => setShowRequestForm(false)}>
                <X size={24} />
              </button>
              
              <div className="smartsell-news-request-header">
                <div className="smartsell-news-request-icon">
                  <Send size={40} />
                </div>
                <h2>Formulaire de demande</h2>
                <p>Décrivez-nous vos besoins, nous vous répondrons dans les 24h.</p>
              </div>

              <form className="smartsell-news-request-form" onSubmit={handleRequestSubmit}>
                <div className="smartsell-news-request-group">
                  <label>Nom complet *</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    value={requestData.name}
                    onChange={(e) => setRequestData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="smartsell-news-request-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com" 
                    value={requestData.email}
                    onChange={(e) => setRequestData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="smartsell-news-request-group">
                  <label>Entreprise</label>
                  <input 
                    type="text" 
                    placeholder="Nom de votre entreprise" 
                    value={requestData.company}
                    onChange={(e) => setRequestData(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>

                <div className="smartsell-news-request-group">
                  <label>Quels contenus vous intéressent ?</label>
                  <div className="smartsell-news-request-checkboxes">
                    {['articles', 'videos', 'podcasts', 'formations'].map((item) => (
                      <label key={item} className="smartsell-news-request-checkbox">
                        <input 
                          type="checkbox" 
                          checked={requestData.interest.includes(item)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRequestData(prev => ({
                                ...prev,
                                interest: [...prev.interest, item]
                              }))
                            } else {
                              setRequestData(prev => ({
                                ...prev,
                                interest: prev.interest.filter(i => i !== item)
                              }))
                            }
                          }}
                        />
                        <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="smartsell-news-request-group">
                  <label>Message *</label>
                  <textarea 
                    placeholder="Décrivez votre projet, vos besoins et vos attentes..."
                    rows="4"
                    value={requestData.message}
                    onChange={(e) => setRequestData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="smartsell-news-request-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Envoi en cours... <Loader size={18} className="smartsell-news-spinner" /></>
                  ) : (
                    <>Envoyer la demande <Send size={18} /></>
                  )}
                </button>

                {formSuccess && (
                  <div className="smartsell-news-request-success">
                    <CheckCircle size={20} />
                    Votre demande a bien été envoyée. Nous vous répondrons rapidement !
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        {/* ===== MODAL DE LECTURE ===== */}
        {isModalOpen && selectedArticle && (
          <div className="smartsell-news-modal" onClick={closeModal}>
            <div className="smartsell-news-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="smartsell-news-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              
              {/* Vidéo en grand plan */}
              {selectedArticle.type === 'video' && selectedArticle.videoUrl && (
                <div className="smartsell-news-modal-video-fullscreen">
                  <div className="smartsell-news-modal-video-wrapper">
                    <div className="smartsell-news-modal-video-preview">
                      <img 
                        src={selectedArticle.image} 
                        alt={selectedArticle.title} 
                        className="smartsell-news-modal-video-thumbnail"
                      />
                      <div className="smartsell-news-modal-video-overlay">
                        <button 
                          className="smartsell-news-modal-video-play-btn"
                          onClick={togglePlay}
                        >
                          <Play size={48} />
                        </button>
                      </div>
                    </div>
                    {isPlaying && (
                      <iframe
                        src={selectedArticle.videoUrl}
                        title="Video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="smartsell-news-modal-video-iframe"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Podcast intégré */}
              {selectedArticle.type === 'podcast' && selectedArticle.audioUrl && (
                <div className="smartsell-news-modal-podcast">
                  <div className="smartsell-news-modal-podcast-player">
                    <div className="smartsell-news-modal-podcast-icon">
                      <Headphones size={32} />
                    </div>
                    <div className="smartsell-news-modal-podcast-info">
                      <span className="smartsell-news-modal-podcast-title">Écouter le podcast</span>
                      <span className="smartsell-news-modal-podcast-duration">Durée: {selectedArticle.readTime}</span>
                    </div>
                    <button className="smartsell-news-modal-podcast-play">
                      <Play size={24} />
                    </button>
                  </div>
                </div>
              )}

              <div className="smartsell-news-modal-header">
                <div className="smartsell-news-modal-info">
                  <div className="smartsell-news-modal-meta">
                    <span className="smartsell-news-modal-category">
                      {(() => {
                        const Icon = getCategoryIcon(selectedArticle.category)
                        return <Icon size={14} />
                      })()}
                      {selectedArticle.category}
                    </span>
                    <span className="smartsell-news-modal-date">{selectedArticle.date}</span>
                    {selectedArticle.isPremium && (
                      <span className="smartsell-news-modal-premium">
                        <Lock size={12} /> Premium
                      </span>
                    )}
                  </div>
                  <h2 className="smartsell-news-modal-title">{selectedArticle.title}</h2>
                  <div className="smartsell-news-modal-author">
                    <User size={16} />
                    <span>{selectedArticle.author}</span>
                    <span className="smartsell-news-modal-readtime">
                      <Clock size={14} /> {selectedArticle.readTime}
                    </span>
                    <span className="smartsell-news-modal-views">
                      <Eye size={14} /> {selectedArticle.views}
                    </span>
                  </div>
                </div>
              </div>

              <div className="smartsell-news-modal-body">
                <p className="smartsell-news-modal-content-text">{selectedArticle.content}</p>
              </div>

              <div className="smartsell-news-modal-footer">
                <div className="smartsell-news-modal-actions">
                  <button 
                    className={`smartsell-news-modal-btn ${isLiked(selectedArticle.id) ? 'active' : ''}`}
                    onClick={() => toggleLike(selectedArticle.id)}
                  >
                    <Heart size={18} /> 
                    {isLiked(selectedArticle.id) ? 'J\'aime' : 'Aimer'}
                    <span className="smartsell-news-modal-count">{selectedArticle.likes}</span>
                  </button>
                  <button className="smartsell-news-modal-btn">
                    <MessageCircle size={18} /> Commenter
                    <span className="smartsell-news-modal-count">{selectedArticle.comments}</span>
                  </button>
                  <button className="smartsell-news-modal-btn">
                    <Share2 size={18} /> Partager
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}