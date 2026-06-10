import React, { useState } from 'react'
import '../App.css'
import './News.css'
import PageHero from '../components/PageHero'
import { 
  Search, 
  Clock, 
  Tag, 
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
  Filter,
  X
} from 'lucide-react'

export default function News(){
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { id: 'all', label: 'Toute l\'actu' },
    { id: 'ia', label: 'IA & Tech' },
    { id: 'social', label: 'Social Media' },
    { id: 'growth', label: 'Growth' },
    { id: 'branding', label: 'Branding' },
    { id: 'marketing', label: 'Marketing' }
  ]

  const articles = [
    {
      id: 1,
      title: 'L\'IA générative redéfinit les stratégies marketing en 2026',
      summary: 'Comment les entreprises utilisent l\'IA pour créer des campagnes hyper-personnalisées à grande échelle.',
      category: 'ia',
      date: '19 mai 2026',
      author: 'Sophie Martin',
      readTime: '6 min',
      views: '12.4k',
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
      date: '18 mai 2026',
      author: 'Marcus Dubois',
      readTime: '4 min',
      views: '8.7k',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&fit=crop',
      isTrending: true,
      content: 'Les réseaux sociaux continuent de se réinventer à un rythme effréné. Si TikTok domine toujours les classements, Instagram et LinkedIn ont opéré des transformations majeures pour rester compétitifs.\n\nCette année, on observe une tendance forte vers l\'authenticité : les contenus spontanés et "bruts" surperforment les productions trop léchées. Les marques qui réussissent sont celles qui acceptent de montrer leurs coulisses, leurs erreurs et leurs apprentissages.\n\nLes algorithmes ont également évolué vers une distribution plus équitable, donnant leur chance aux petits créateurs. C\'est le moment idéal pour revoir votre stratégie sociale.'
    },
    {
      id: 3,
      title: 'Growth Hacking : 5 techniques pour 2026',
      summary: 'Les stratégies de croissance les plus efficaces pour les startups et les entreprises établies.',
      category: 'growth',
      date: '17 mai 2026',
      author: 'Lena Park',
      readTime: '8 min',
      views: '5.2k',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
      content: 'Le growth hacking n\'est plus un concept réservé aux startups. Les entreprises de toutes tailles adoptent maintenant ces méthodes pour accélérer leur développement.\n\nVoici les 5 techniques qui donnent les meilleurs résultats en 2026 :\n\n1. L\'automatisation des entonnoirs de vente\n2. Le marketing de référencement entre pairs\n3. Les stratégies d\'acquisition basées sur l\'IA\n4. L\'optimisation continue des taux de conversion\n5. Les programmes de fidélisation gamifiés\n\nChacune de ces techniques a été testée et validée par des centaines d\'entreprises.'
    },
    {
      id: 4,
      title: 'Branding : Comment construire une marque qui dure',
      summary: 'Les principes fondamentaux du branding qui traversent les décennies.',
      category: 'branding',
      date: '16 mai 2026',
      author: 'Sarah Chen',
      readTime: '5 min',
      views: '9.1k',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop',
      isTrending: true,
      content: 'Dans un monde où tout va vite, construire une marque qui dure demande du temps et de la cohérence. Les marques qui traversent les décennies partagent des caractéristiques communes : une vision claire, des valeurs authentiques et une capacité d\'évolution constante.\n\nCet article explore les fondamentaux du branding qui restent pertinents quelles que soient les tendances du moment. Nous verrons comment des marques comme Nike, Apple ou Chanel ont su maintenir leur essence tout en se réinventant.\n\nLe secret ? Une connexion émotionnelle avec leur audience, qui dépasse la simple transaction commerciale.'
    },
    {
      id: 5,
      title: 'Le marketing d\'influence en 2026 : ce qui change',
      summary: 'Micro-influenceurs, authenticité et ROI : les nouvelles règles du jeu.',
      category: 'marketing',
      date: '15 mai 2026',
      author: 'Emma Thompson',
      readTime: '7 min',
      views: '6.8k',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&fit=crop',
      content: 'Le marketing d\'influence a connu une transformation majeure. Les macro-influenceurs cèdent la place aux micro-influenceurs (10k-50k followers) qui génèrent des taux d\'engagement bien supérieurs.\n\nEn 2026, l\'authenticité est devenue le critère n°1. Les audiences sont devenues très exigeantes et repèrent instantanément les collaborations non authentiques.\n\nCet article détaille les meilleures pratiques pour lancer une campagne d\'influence réussie, avec des exemples concrets et des ROI chiffrés.'
    },
    {
      id: 6,
      title: 'Les outils IA indispensables pour les créatifs',
      summary: 'Midjourney, Runway, ChatGPT : comment les utiliser pour booster votre créativité.',
      category: 'ia',
      date: '14 mai 2026',
      author: 'John Chen',
      readTime: '4 min',
      views: '10.2k',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
      isTrending: true,
      content: 'Les outils d\'IA générative ont révolutionné le travail des créatifs. Midjourney pour l\'image, Runway pour la vidéo, ChatGPT pour le texte : ces outils sont devenus des assistants indispensables.\n\nNous avons testé et comparé les meilleurs outils du marché, et nous partageons nos recommandations pour chaque type de besoin créatif.\n\nDe la génération d\'idées à la production finale, l\'IA permet aujourd\'hui de travailler plus vite et plus efficacement.'
    },
    {
      id: 7,
      title: 'Social Ads : Optimisez vos campagnes en 2026',
      summary: 'Les meilleures pratiques pour maximiser votre ROI sur Facebook, Instagram et TikTok.',
      category: 'social',
      date: '13 mai 2026',
      author: 'David Miller',
      readTime: '6 min',
      views: '4.3k',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&fit=crop',
      content: 'La publicité sur les réseaux sociaux est devenue plus complexe et plus performante. Avec l\'introduction de nouveaux formats et d\'algorithmes plus intelligents, les possibilités sont immenses.\n\nNous avons analysé les campagnes de plus de 50 entreprises pour identifier les pratiques qui génèrent le meilleur ROI en 2026.\n\nDécouvrez comment optimiser vos budgets publicitaires pour chaque plateforme.'
    },
    {
      id: 8,
      title: 'La stratégie de contenu qui convertit',
      summary: 'Comment créer du contenu qui engage, fidélise et convertit.',
      category: 'marketing',
      date: '12 mai 2026',
      author: 'Marie K.',
      readTime: '5 min',
      views: '7.6k',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
      content: 'Le contenu reste le roi, mais la stratégie qui l\'accompagne est désormais la clé du succès. Nous avons identifié 3 piliers fondamentaux pour une stratégie de contenu qui convertit :\n\n1. La segmentation précise de l\'audience\n2. L\'alignement avec le parcours client\n3. La mesure continue de l\'impact\n\nCet article vous donne les outils pour mettre en place cette stratégie dans votre entreprise.'
    },
    {
      id: 9,
      title: 'Le futur du travail hybride',
      summary: 'Comment les entreprises réinventent leurs modes de collaboration.',
      category: 'growth',
      date: '11 mai 2026',
      author: 'Dr. Anna Lee',
      readTime: '8 min',
      views: '3.9k',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&fit=crop',
      content: 'Le travail hybride n\'est plus une option mais une réalité pour la majorité des entreprises. Cette transformation pose des défis en termes de collaboration, de culture d\'entreprise et de productivité.\n\nNous avons étudié les modèles hybrides qui fonctionnent le mieux et partageons les bonnes pratiques pour réussir cette transition.\n\nDe la technologie à la gestion des équipes, découvrez comment créer un environnement de travail hybride performant.'
    }
  ]

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  const featuredArticle = articles.find(a => a.isFeatured)

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  return (
    <div className="news-page">
      <PageHero
        eyebrow="NEWS"
        title="Les tendances digital & tech décryptées par Smartsell"
        description="Analyse, actu et inspirations pour garder une longueur d'avance dans un univers qui accélère."
        primaryAction={{ label: 'S’abonner', href: '#newsletter' }}
        secondaryAction={{ label: 'Voir les articles', href: '#articles' }}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop"
        topBadge="ACTUALITÉ"
        bottomBadge="Infos créatives et digitales, sélectionnées chaque semaine."
      />

      <div className="news-container" id="articles">
        {/* ===== STATS BANNER ===== */}
        <div className="news-stats-banner">
          <div className="news-stat-item">
            <span className="news-stat-number">50+</span>
            <span className="news-stat-label">Articles</span>
          </div>
          <div className="news-stat-item">
            <span className="news-stat-number">12k</span>
            <span className="news-stat-label">Lecteurs</span>
          </div>
          <div className="news-stat-item">
            <span className="news-stat-number">4.8</span>
            <span className="news-stat-label">Note moyenne</span>
          </div>
          <div className="news-stat-item">
            <span className="news-stat-number">30+</span>
            <span className="news-stat-label">Experts</span>
          </div>
        </div>

        {/* ===== ARTICLE À LA UNE ===== */}
        {featuredArticle && (
          <section className="news-featured-section">
            <div className="news-featured-article">
              <div className="news-featured-image">
                <img src={featuredArticle.image} alt={featuredArticle.title} loading="lazy" />
                <div className="news-featured-badge">À la une</div>
              </div>
              <div className="news-featured-content">
                <div className="news-featured-meta">
                  <span className="news-featured-category">{featuredArticle.category}</span>
                  <span className="news-featured-date">{featuredArticle.date}</span>
                </div>
                <h2 className="news-featured-title">{featuredArticle.title}</h2>
                <p className="news-featured-summary">{featuredArticle.summary}</p>
                <div className="news-featured-footer">
                  <div className="news-featured-author">
                    <User size={16} />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="news-featured-actions">
                    <button 
                      className="news-featured-btn"
                      onClick={() => handleArticleClick(featuredArticle)}
                    >
                      Lire l'article <ArrowRight size={16} />
                    </button>
                    <button className="news-featured-bookmark">
                      <Bookmark size={18} />
                    </button>
                    <button className="news-featured-share">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== FILTRES CATÉGORIES ===== */}
        <div className="news-category-nav">
          <div className="news-category-scroll">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`news-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="news-search">
            <Search size={18} className="news-search-icon" />
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              className="news-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* ===== GRILLE ARTICLES ===== */}
        <div className="news-grid">
          {filteredArticles.map((article, i) => (
            <article 
              key={article.id} 
              className="news-article"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="news-article-image">
                <img src={article.image} alt={article.title} loading="lazy" />
                <div className="news-article-overlay">
                  <span className="news-article-category">{article.category}</span>
                  {article.isTrending && (
                    <span className="news-article-trending">
                      <TrendingUp size={14} /> Tendance
                    </span>
                  )}
                </div>
              </div>
              <div className="news-article-content">
                <div className="news-article-header">
                  <h3 className="news-article-title">{article.title}</h3>
                  <button className="news-article-bookmark">
                    <Bookmark size={18} />
                  </button>
                </div>
                <p className="news-article-summary">{article.summary}</p>
                <div className="news-article-footer">
                  <div className="news-article-meta">
                    <span className="news-article-author">{article.author}</span>
                    <span className="news-article-date">
                      <Calendar size={14} /> {article.date}
                    </span>
                    <span className="news-article-readtime">
                      <Clock size={14} /> {article.readTime}
                    </span>
                  </div>
                  <div className="news-article-actions">
                    <button 
                      className="news-article-btn"
                      onClick={() => handleArticleClick(article)}
                    >
                      Lire <ChevronRight size={14} />
                    </button>
                    <button className="news-article-share">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ===== NEWSLETTER ===== */}
        <section className="news-newsletter" id="newsletter">
          <div className="news-newsletter-content">
            <div className="news-newsletter-icon">
              <MessageCircle size={40} />
            </div>
            <h2 className="news-newsletter-title">Ne manquez aucun article</h2>
            <p className="news-newsletter-description">
              Recevez chaque semaine notre sélection des meilleurs articles directement dans votre boîte mail.
            </p>
            <form className="news-newsletter-form">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="news-newsletter-input"
              />
              <button type="button" className="news-newsletter-btn">
                S'abonner <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* ===== MODAL DE LECTURE ===== */}
      {isModalOpen && selectedArticle && (
        <div className="news-modal" onClick={closeModal}>
          <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="news-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="news-modal-header">
              <div className="news-modal-image">
                <img src={selectedArticle.image} alt={selectedArticle.title} loading="lazy" />
              </div>
              <div className="news-modal-info">
                <div className="news-modal-meta">
                  <span className="news-modal-category">{selectedArticle.category}</span>
                  <span className="news-modal-date">{selectedArticle.date}</span>
                </div>
                <h2 className="news-modal-title">{selectedArticle.title}</h2>
                <div className="news-modal-author">
                  <User size={16} />
                  <span>{selectedArticle.author}</span>
                  <span className="news-modal-readtime">
                    <Clock size={14} /> {selectedArticle.readTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="news-modal-body">
              <p className="news-modal-content-text">{selectedArticle.content}</p>
            </div>
            <div className="news-modal-footer">
              <div className="news-modal-actions">
                <button className="news-modal-btn">
                  <Heart size={18} /> J'aime
                </button>
                <button className="news-modal-btn">
                  <MessageCircle size={18} /> Commenter
                </button>
                <button className="news-modal-btn">
                  <Share2 size={18} /> Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}