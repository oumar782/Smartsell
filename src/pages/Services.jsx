import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './Services.css';
import PageHero from '../components/PageHero';
import {
  Target,
  Camera,
  Users,
  Palette,
  Code2,
  Zap,
  Mic,
  GraduationCap,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Award,
  Star,
  Clock,
  Shield,
  BarChart3,
  Globe,
  ChevronRight
} from 'lucide-react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Intersection Observer pour les animations au scroll
  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach((key) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );
      
      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key]);
        observers[key] = observer;
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  // Animation de compteur pour les stats
  const [countedStats, setCountedStats] = useState({});
  
  useEffect(() => {
    const stats = [
      { key: 'projects', target: 200, suffix: '+' },
      { key: 'satisfaction', target: 98, suffix: '%' },
      { key: 'support', target: 24, suffix: '/7' }
    ];

    stats.forEach((stat) => {
      if (isVisible['stats']) {
        let current = 0;
        const increment = Math.ceil(stat.target / 60);
        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(interval);
          }
          setCountedStats(prev => ({
            ...prev,
            [stat.key]: current + stat.suffix
          }));
        }, 20);
      }
    });
  }, [isVisible]);

  const services = [
    {
      title: 'Stratégie digitale 360',
      description: 'Vision globale, planning éditorial, KPI et roadmap sur mesure pour une croissance durable.',
      icon: Target,
      link: '/services/strategie-digitale',
      color: '#fbbf24',
      bgGradient: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.05))',
      stats: '+150% de ROI',
      delay: 0,
      tags: ['Stratégie', 'Analyse', 'ROI']
    },
    {
      title: 'Création de contenu',
      description: 'Vidéo, photo, copywriting, motion design pour captiver vos audiences et renforcer votre marque.',
      icon: Camera,
      link: '/services/creation-contenu',
      color: '#ec4899',
      bgGradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.05))',
      stats: '+200% d\'engagement',
      delay: 0.1,
      tags: ['Vidéo', 'Photo', 'Motion']
    },
    {
      title: 'Gestion influenceurs',
      description: 'Sourcing, briefs, négociation et analyse de performance pour des collaborations gagnantes.',
      icon: Users,
      link: '/services/gestion-influenceurs',
      color: '#8b5cf6',
      bgGradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))',
      stats: '4.8/5 satisfaction',
      delay: 0.2,
      tags: ['Influence', 'KOL', 'Stratégie']
    },
    {
      title: 'Design & Branding',
      description: 'Identité visuelle, charte graphique, UI/UX et direction artistique pour une image de marque forte.',
      icon: Palette,
      link: '/services/design-branding',
      color: '#06b6d4',
      bgGradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.05))',
      stats: 'Prix du design 2024',
      delay: 0.3,
      tags: ['UI/UX', 'Branding', 'Créatif']
    },
    {
      title: 'Développement web',
      description: 'Sites, apps, e-commerce, CMS sur mesure avec une performance et une sécurité optimales.',
      icon: Code2,
      link: '/services/developpement-web',
      color: '#10b981',
      bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))',
      stats: '99.9% uptime',
      delay: 0.4,
      tags: ['Web', 'Apps', 'CMS']
    },
    {
      title: 'Conseil tech & digital',
      description: 'Audit, transformation digitale, architecture cloud et cybersécurité pour votre entreprise.',
      icon: Zap,
      link: '/services/conseil-tech',
      color: '#f59e0b',
      bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))',
      stats: '100+ projets',
      delay: 0.5,
      tags: ['Cloud', 'Sécurité', 'Audit']
    },
    {
      title: 'Production audio',
      description: 'Podcast, jingles, voix-off et sound design pour enrichir vos contenus et marquer les esprits.',
      icon: Mic,
      link: '/services/production-audio',
      color: '#ef4444',
      bgGradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))',
      stats: 'Studio pro',
      delay: 0.6,
      tags: ['Podcast', 'Sound', 'Jingles']
    },
    {
      title: 'Formation & e-learning',
      description: 'Modules interactifs, LMS, certifications et montée en compétences pour vos équipes.',
      icon: GraduationCap,
      link: '/services/formation-elearning',
      color: '#8b5cf6',
      bgGradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))',
      stats: '500+ apprenants',
      delay: 0.7,
      tags: ['E-learning', 'Certification', 'LMS']
    }
  ];

  const whyItems = [
    {
      title: 'Créativité illimitée',
      description: 'Des idées originales qui transforment votre message en expérience mémorable.',
      icon: Sparkles,
      color: '#fbbf24'
    },
    {
      title: 'Agilité & Réactivité',
      description: 'Des livrables rapides et une souplesse d\'exécution qui s\'adaptent à vos besoins.',
      icon: Zap,
      color: '#ec4899'
    },
    {
      title: 'Performance mesurable',
      description: 'Une logique ROI et des campagnes optimisées pour convertir et fidéliser.',
      icon: TrendingUp,
      color: '#10b981'
    }
  ];

  const expertiseItems = [
    { icon: Award, label: 'Experts certifiés', value: '15+ ans d\'expérience', delay: 0 },
    { icon: Star, label: 'Clients satisfaits', value: '98% de recommandation', delay: 0.1 },
    { icon: Clock, label: 'Livraison rapide', value: 'Délais respectés', delay: 0.2 },
    { icon: Shield, label: 'Sécurité garantie', value: 'Données protégées', delay: 0.3 },
    { icon: BarChart3, label: 'Résultats concrets', value: '+200% de croissance', delay: 0.4 },
    { icon: Globe, label: 'Présence internationale', value: '3 pays', delay: 0.5 }
  ];

  return (
    <div className="smartsell-services-page">
      <PageHero
        eyebrow="SERVICES PREMIUM"
        title="Des solutions créatives pour une marque <span class='highlight'>hors du commun</span>"
        description="Un mix stratégique de contenu, design, influence, web et formation pour construire une expérience digitale puissante et mémorable."
        primaryAction={{ label: ' Démarrer un projet', href: '#contact' }}
        secondaryAction={{ label: ' Voir nos réalisations', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80&fit=crop"
        topBadge=" Agence de l'année 2024"
        bottomBadge=" Créativité, performance et contenus premium"
        stats={[
          { number: countedStats.projects || '200+', label: 'Projets' },
          { number: countedStats.satisfaction || '98%', label: 'Satisfaction' },
          { number: countedStats.support || '24/7', label: 'Support' }
        ]}
        gradient="mixed"
      />

      <div className="smartsell-container">
        {/* Section 1 : Nos Services */}
        <section 
          className={`smartsell-section smartsell-services-section ${isVisible.services ? 'smartsell-visible' : ''}`}
          ref={el => sectionRefs.current.services = el}
        >
          <div className="smartsell-section-header">
            <div className="smartsell-header-badge smartsell-badge-float">
              <span className="smartsell-badge-icon">✦</span>
              <span>EXPERTISE & CRÉATION</span>
            </div>
            <h2 className="smartsell-section-title">
              Des offres sur mesure pour des 
              <span className="smartsell-gradient-text"> marques ambitieuses</span>
            </h2>
            <p className="smartsell-section-subtitle">Chaque service est conçu pour renforcer votre attractivité, votre conversion et votre impact.</p>
            <div className="smartsell-header-decoration">
              <span className="smartsell-deco-line" />
              <span className="smartsell-deco-diamond">◆</span>
              <span className="smartsell-deco-line" />
            </div>
          </div>

          <div className="smartsell-services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isHovered = hoveredCard === index;
              return (
                <div 
                  key={index} 
                  className={`smartsell-service-card ${isHovered ? 'smartsell-hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    '--smartsell-card-delay': `${service.delay}s`,
                    '--smartsell-card-color': service.color,
                    '--smartsell-card-bg': service.bgGradient
                  }}
                >
                  <div className="smartsell-card-glow" />
                  <div className="smartsell-card-shine" />
                  <div className="smartsell-card-border-track" />
                  
                  <div className="smartsell-service-icon-wrapper" style={{ background: service.bgGradient }}>
                    <IconComponent className="smartsell-service-icon" size={28} strokeWidth={1.5} />
                    <div className="smartsell-icon-ring" />
                    <div className="smartsell-icon-pulse" />
                  </div>
                  
                  <h3 className="smartsell-service-title">{service.title}</h3>
                  <p className="smartsell-service-description">{service.description}</p>
                  
                  <div className="smartsell-service-tags">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="smartsell-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="smartsell-service-stats">
                    <span className="smartsell-stat-pill">
                      <span className="smartsell-stat-dot" />
                      {service.stats}
                    </span>
                  </div>
                  
                  <div className="smartsell-service-footer">
                    <a href={service.link} className="smartsell-service-link">
                      <span>Découvrir</span>
                      <ArrowRight className="smartsell-service-arrow" size={18} />
                    </a>
                    <span className="smartsell-service-number">0{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2 : Pourquoi Nous */}
        <section 
          className={`smartsell-section smartsell-why-section ${isVisible.why ? 'smartsell-visible' : ''}`}
          ref={el => sectionRefs.current.why = el}
        >
          <div className="smartsell-section-header">
            <div className="smartsell-header-badge smartsell-badge-float">
              <span className="smartsell-badge-icon">◆</span>
              <span>POURQUOI NOUS CHOISIR</span>
            </div>
            <h2 className="smartsell-section-title">
              Une approche hybride, 
              <span className="smartsell-gradient-text"> digitale et haut de gamme</span>
            </h2>
            <p className="smartsell-section-subtitle">Des équipes expertes et un écosystème complet pour chaque phase de votre développement.</p>
          </div>

          <div className="smartsell-why-grid">
            {whyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="smartsell-why-card" style={{ '--smartsell-why-color': item.color }}>
                  <div className="smartsell-why-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="smartsell-why-icon-wrapper">
                    <IconComponent className="smartsell-why-icon" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="smartsell-why-title">{item.title}</h3>
                  <p className="smartsell-why-description">{item.description}</p>
                  <div className="smartsell-why-arrow">
                    <ChevronRight size={20} />
                  </div>
                  <div className="smartsell-why-glow" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3 : Chiffres clés */}
        <section 
          className={`smartsell-section smartsell-expertise-section ${isVisible.expertise ? 'smartsell-visible' : ''}`}
          ref={el => sectionRefs.current.expertise = el}
        >
          <div className="smartsell-expertise-grid">
            {expertiseItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="smartsell-expertise-item"
                  style={{ '--smartsell-expertise-delay': `${item.delay}s` }}
                >
                  <div className="smartsell-expertise-icon-wrapper">
                    <IconComponent className="smartsell-expertise-icon" size={24} strokeWidth={1.5} />
                  </div>
                  <div className="smartsell-expertise-content">
                    <span className="smartsell-expertise-value">{item.value}</span>
                    <span className="smartsell-expertise-label">{item.label}</span>
                  </div>
                  <div className="smartsell-expertise-progress">
                    <div className="smartsell-expertise-bar" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4 : CTA Final */}
        <section 
          className={`smartsell-section smartsell-cta-section ${isVisible.cta ? 'smartsell-visible' : ''}`}
          ref={el => sectionRefs.current.cta = el}
        >
          <div className="smartsell-cta-wrapper">
            <div className="smartsell-cta-particles">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="smartsell-cta-particle" 
                  style={{ 
                    '--smartsell-px': `${Math.random() * 100}%`,
                    '--smartsell-py': `${Math.random() * 100}%`,
                    '--smartsell-delay': `${Math.random() * 4}s`,
                    '--smartsell-size': `${3 + Math.random() * 5}px`,
                    '--smartsell-duration': `${4 + Math.random() * 4}s`
                  }} 
                />
              ))}
            </div>
            
            <div className="smartsell-cta-content">
              <span className="smartsell-cta-badge smartsell-badge-float">🚀 PRÊT À DÉMARRER ?</span>
              <h2 className="smartsell-cta-title">Transformez votre <span className="smartsell-gradient-text">vision en réalité</span></h2>
              <p className="smartsell-cta-description">Découvrez comment nos services peuvent propulser votre marque vers de nouveaux sommets. Un projet, une ambition, parlons-en.</p>
              
              <div className="smartsell-cta-actions">
                <a href="/contact" className="smartsell-cta-button smartsell-cta-primary">
                  <span>Commencer un projet</span>
                  <ArrowRight className="smartsell-cta-arrow" size={20} />
                  <span className="smartsell-btn-ripple" />
                </a>
                <a href="/portfolio" className="smartsell-cta-button smartsell-cta-secondary">
                  <span>Voir nos réalisations</span>
                  <Globe className="smartsell-cta-arrow" size={20} />
                  <span className="smartsell-btn-ripple" />
                </a>
              </div>
              
              <div className="smartsell-cta-trust">
                <span className="smartsell-trust-item">
                  <span className="smartsell-trust-check">✓</span> Aucun engagement
                </span>
                <span className="smartsell-trust-dot">•</span>
                <span className="smartsell-trust-item">
                  <span className="smartsell-trust-check">✓</span> Devis gratuit
                </span>
                <span className="smartsell-trust-dot">•</span>
                <span className="smartsell-trust-item">
                  <span className="smartsell-trust-check">✓</span> Support 24/7
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Effet de curseur personnalisé */}
      <div className="smartsell-cursor-glow" />
    </div>
  );
}