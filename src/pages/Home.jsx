import React, { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  Star,
  Zap,
  Award,
  Crown,
  MessageCircle,
  Mail,
  Clock,
  Heart,
  Target,
  Lightbulb,
  Palette,
  Code2,
  Megaphone,
  Smartphone,
  ArrowRight,
  Play,
  PhoneCall,
  Building2,
  Users,
  Rocket,
  Shield,
  ThumbsUp,
  Coffee,
  Brain,
  Layers,
  PenTool,
  Monitor,
  Radio,
  Film,
  Camera,
  Music,
  BookOpen,
  GraduationCap,
  Briefcase,
  BarChart
} from 'lucide-react';
import './home.css';

// ==========================================
// DONNÉES STATIQUES
// ==========================================
const services = [
  { 
    title: 'Stratégie', 
    icon: <Target size={26} />, 
    description: "Vision globale et plan d'action sur mesure pour votre marque",
    progress: 98,
    color: '#fbbf24',
    tags: ['Vision', 'Croissance', 'Innovation']
  },
  { 
    title: 'Création de Contenu', 
    icon: <Lightbulb size={26} />, 
    description: 'Storytelling et copywriting percutants qui captivent',
    progress: 95,
    color: '#f59e0b',
    tags: ['Storytelling', 'Copywriting', 'Engagement']
  },
  { 
    title: "Marketing d'Influence", 
    icon: <Megaphone size={26} />, 
    description: 'Amplification et communauté engagée pour votre marque',
    progress: 92,
    color: '#ec4899',
    tags: ['Influence', 'Community', 'Amplification']
  },
  { 
    title: 'Design & Branding', 
    icon: <Palette size={26} />, 
    description: 'Identité visuelle mémorable et impactante',
    progress: 96,
    color: '#8b5cf6',
    tags: ['Branding', 'Identité', 'Créativité']
  },
  { 
    title: 'Web & Digital', 
    icon: <Code2 size={26} />, 
    description: 'Expériences digitales immersives et performantes',
    progress: 94,
    color: '#3b82f6',
    tags: ['Web', 'Digital', 'Performance']
  },
  { 
    title: 'Studio Creative', 
    icon: <Smartphone size={26} />, 
    description: 'Production créative et technique de haute qualité',
    progress: 90,
    color: '#06b6d4',
    tags: ['Production', 'Créativité', 'Technique']
  }
];

const projects = [
  { 
    title: 'Luxury Brand Evolution', 
    description: "Refonte complète de l'identité visuelle et stratégie digitale", 
    metrics: '+67% engagement', 
    time: '4 semaines', 
    category: 'Branding',
    bg: 'linear-gradient(135deg, #6a2b85, #9a5bb8)'
  },
  { 
    title: 'Tech Startup Launch', 
    description: "Campagne d'influence et lancement produit viral", 
    metrics: '2M vues', 
    time: '6 semaines', 
    category: 'Influence',
    bg: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
  },
  { 
    title: 'Retail Experience', 
    description: "Design d'expérience client omnicanal innovant", 
    metrics: '+42% conversion', 
    time: '8 semaines', 
    category: 'Design',
    bg: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
  },
  { 
    title: 'Media Campaign', 
    description: 'Production audiovisuelle et stratégie média globale', 
    metrics: '+89% reach', 
    time: '5 semaines', 
    category: 'Studio',
    bg: 'linear-gradient(135deg, #f59e0b, #fbbf24)'
  }
];

const testimonials = [
  { 
    name: 'Sophie Martin', 
    role: 'Directrice Marketing, LVMH', 
    content: 'Une équipe exceptionnelle qui a su transformer notre vision en réalité. Les résultats ont dépassé toutes nos attentes.', 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&fm=webp', 
    rating: 5,
    company: 'LVMH'
  },
  { 
    name: 'Thomas Bernard', 
    role: 'CEO, TechStart', 
    content: 'La meilleure agence avec laquelle nous ayons travaillé. Créativité, professionnalisme et résultats concrets.', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&fm=webp', 
    rating: 5,
    company: 'TechStart'
  },
  { 
    name: 'Isabelle Dubois', 
    role: "Brand Director, L'Oréal", 
    content: 'Un partnership stratégique qui a propulsé notre marque au niveau supérieur. Je recommande vivement.', 
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&fm=webp', 
    rating: 5,
    company: "L'Oréal"
  }
];

const stats = [
  { value: '150+', label: 'Projets réalisés', icon: Award, color: '#fbbf24', trend: '+25%', bg: 'rgba(251,191,36,0.1)' },
  { value: '98%', label: 'Clients satisfaits', icon: Heart, color: '#f59e0b', trend: '+12%', bg: 'rgba(245,158,11,0.1)' },
  { value: '45+', label: 'Experts créatifs', icon: Users, color: '#ec4899', trend: '+8%', bg: 'rgba(236,72,153,0.1)' },
  { value: '12+', label: 'Prix remportés', icon: Crown, color: '#8b5cf6', trend: '+3', bg: 'rgba(139,92,246,0.1)' }
];

// ==========================================
// COMPOSANTS ENFANTS
// ==========================================

// Hero avec slogan "Avec vous de bout en bout"
function SmartHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="smart-hero-premium" ref={heroRef}>
      {/* Background avec image et dégradé renforcé */}
      <div className="smart-hero-bg-premium">
        <div className="smart-hero-image-wrapper-premium">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80&fm=webp" 
            alt="Hero Background" 
            className="smart-hero-image-premium"
            loading="eager"
            fetchpriority="high"
          />
          {/* Dégradé renforcé sur l'image */}
          <div className="smart-hero-image-gradient-premium"></div>
        </div>
        
        {/* Effets de lumière */}
        <div className="smart-hero-light-premium" style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }} />
        <div className="smart-hero-light-premium-2" style={{ transform: `translate(${-mousePos.x * 15}px, ${-mousePos.y * 15}px)` }} />
      </div>

      {/* Contenu Hero */}
      <div className="smart-hero-content-premium">
        <div className="smart-hero-badge-premium">
          <Sparkles size={14} />
          <span>Agence créative depuis 2020</span>
          <span className="smart-hero-badge-dot-premium"></span>
          <span className="smart-hero-badge-rating-premium">★ 4.9/5</span>
        </div>

        <h1 className="smart-hero-title-premium">
          <span className="smart-hero-title-line-premium">Avec vous</span>
          <span className="smart-hero-title-highlight-premium">de bout en bout</span>
        </h1>

        <p className="smart-hero-subtitle-premium">
          Stratégie, création et innovation au service de votre marque. 
          Nous transformons vos idées en résultats concrets.
        </p>

        <div className="smart-hero-actions-premium">
          <button className="smart-hero-btn-primary-premium">
            <Zap size={18} />
            Commencer un projet
            <ArrowRight size={16} />
          </button>
          <button className="smart-hero-btn-secondary-premium">
            <Play size={18} />
            Nos services
          </button>
        </div>

        <div className="smart-hero-stats-premium">
          <div className="smart-hero-stat-premium">
            <span className="smart-hero-stat-number-premium">150+</span>
            <span className="smart-hero-stat-label-premium">Projets</span>
          </div>
          <div className="smart-hero-stat-divider-premium"></div>
          <div className="smart-hero-stat-premium">
            <span className="smart-hero-stat-number-premium">98%</span>
            <span className="smart-hero-stat-label-premium">Satisfaction</span>
          </div>
          <div className="smart-hero-stat-divider-premium"></div>
          <div className="smart-hero-stat-premium">
            <span className="smart-hero-stat-number-premium">45+</span>
            <span className="smart-hero-stat-label-premium">Experts</span>
          </div>
        </div>
      </div>

      {/* Éléments flottants */}
      <div className="smart-hero-float-premium smart-hero-float-1">
        <div className="smart-float-card-premium">
          <div className="smart-float-icon-premium"><TrendingUp size={16} /></div>
          <div>
            <span className="smart-float-value-premium">+67%</span>
            <span className="smart-float-label-premium">engagement</span>
          </div>
        </div>
      </div>
      <div className="smart-hero-float-premium smart-hero-float-2">
        <div className="smart-float-card-premium">
          <div className="smart-float-icon-premium"><Award size={16} /></div>
          <div>
            <span className="smart-float-value-premium">12</span>
            <span className="smart-float-label-premium">prix</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Marquee
function SmartMarquee() {
  const items = ["Stratégie", "Création", "Web", "Shooting", "Podcast", "Influence", "E-learning", "Branding", "Campagnes", "Performance"];
  return (
    <div className="smart-marquee-premium">
      <div className="smart-marquee-container-premium">
        <div className="smart-marquee-track-premium">
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i} className="smart-marquee-item-premium">
              <span className={i % 2 ? "smart-marquee-text-gradient-premium" : "smart-marquee-text-premium"}>{t}</span>
              <Sparkles className="smart-marquee-icon-premium" size={14} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Service Card
function SmartServiceCard({ service, index }) {
  return (
    <div className="smart-service-card-premium" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="smart-service-card-glow-premium" style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}40, transparent 70%)` }} />
      <div className="smart-service-icon-wrapper-premium" style={{ color: service.color }}>
        <div className="smart-service-icon-bg-premium" style={{ background: `${service.color}20` }} />
        {service.icon}
        <div className="smart-service-icon-pulse-premium" style={{ borderColor: `${service.color}40` }} />
      </div>
      <h3 className="smart-service-title-premium">{service.title}</h3>
      <p className="smart-service-description-premium">{service.description}</p>
      <div className="smart-service-tags-premium">
        {service.tags.map((tag, i) => (
          <span key={i} className="smart-service-tag-premium">{tag}</span>
        ))}
      </div>
      <div className="smart-service-progress-premium">
        <div className="smart-service-progress-bar-premium" style={{ width: `${service.progress}%`, background: service.color }} />
      </div>
      <div className="smart-service-stats-premium">
        <span className="smart-stat-number-premium" style={{ color: service.color }}>{service.progress}%</span>
        <span className="smart-stat-label-premium">taux de succès</span>
      </div>
    </div>
  );
}

// Project Card
function SmartProjectCard({ project, index }) {
  const images = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&fm=webp',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&fm=webp',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&fm=webp',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&fm=webp'
  ];

  return (
    <div className="smart-project-card-premium" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="smart-project-image-container-premium">
        <img src={images[index % images.length]} alt={project.title} className="smart-project-image-premium" loading="lazy" />
        <div className="smart-project-overlay-premium" style={{ background: project.bg }}>
          <span className="smart-project-category-premium">{project.category}</span>
        </div>
        <div className="smart-project-shine-premium"></div>
      </div>
      <div className="smart-project-content-premium">
        <div className="smart-project-header-premium">
          <h4 className="smart-project-title-premium">{project.title}</h4>
          <div className="smart-project-metrics-premium">
            <TrendingUp size={14} />
            <span>{project.metrics}</span>
          </div>
        </div>
        <p className="smart-project-description-premium">{project.description}</p>
        <div className="smart-project-footer-premium">
          <div className="smart-project-time-premium">
            <Clock size={14} />
            <span>{project.time}</span>
          </div>
          <button className="smart-project-btn-premium">
            Voir le projet <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPOSANT PRINCIPAL
// ==========================================
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('smart-visible-premium');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.smart-reveal-premium');
    elements.forEach((el) => observer.observe(el));

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="smartsell-home-premium">
      {/* Hero avec slogan */}
      <SmartHero />

      {/* Marquee */}
      <SmartMarquee />

      <div className="smart-container-premium">
        {/* Stats Section */}
        <section className="smart-section-premium">
          <div className="smart-stats-grid-premium">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={i} 
                  className="smart-stat-card-premium smart-reveal-premium" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="smart-stat-icon-premium" style={{ background: stat.bg, color: stat.color }}>
                    <Icon size={24} />
                  </div>
                  <div className="smart-stat-value-premium">
                    <span className="smart-stat-number-premium" style={{ color: stat.color }}>{stat.value}</span>
                    <span className="smart-stat-trend-premium">{stat.trend}</span>
                  </div>
                  <div className="smart-stat-label-premium">{stat.label}</div>
                  {hoveredStat === i && <div className="smart-stat-glow-premium" style={{ background: `radial-gradient(circle, ${stat.color}40, transparent)` }} />}
                </div>
              );
            })}
          </div>
        </section>

        {/* Services Section */}
        <section className="smart-section-premium">
          <div className="smart-section-header-premium smart-reveal-premium">
            <div className="smart-section-badge-premium">
              <Sparkles size={14} /> Notre expertise
            </div>
            <h2 className="smart-section-title-premium">
              Des <span className="smart-gradient-text-premium">compétences</span> qui font la différence
            </h2>
            <p className="smart-section-subtitle-premium">
              6 domaines d'expertise pour transformer votre vision en succès
            </p>
          </div>
          
          <div className="smart-services-grid-premium">
            {services.map((service, i) => (
              <SmartServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="smart-section-premium">
          <div className="smart-section-header-premium smart-reveal-premium">
            <div className="smart-section-badge-premium">
              <TrendingUp size={14} /> Portfolio
            </div>
            <h2 className="smart-section-title-premium">
              Nos <span className="smart-gradient-text-premium">réalisations</span> récentes
            </h2>
            <p className="smart-section-subtitle-premium">
              Découvrez nos projets les plus marquants
            </p>
          </div>

          <div className="smart-projects-grid-premium">
            {projects.map((project, i) => (
              <SmartProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Showreel Section */}
        <section className="smart-section-premium smart-reveal-premium">
          <div className="smart-showreel-premium">
            <div className="smart-showreel-content-premium">
              <div className="smart-showreel-badge-premium">🎬 Showreel 2026</div>
              <h2 className="smart-showreel-title-premium">
                Découvrez notre <span className="smart-gradient-text-premium">créativité</span>
              </h2>
              <button className="smart-play-btn-premium">
                <div className="smart-play-pulse-premium"></div>
                <Play size={28} fill="currentColor" />
              </button>
            </div>
            <div className="smart-showreel-background-premium">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=600&fit=crop&fm=webp" 
                alt="Showreel" 
                loading="lazy"
              />
              <div className="smart-showreel-overlay-premium"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="smart-section-premium">
          <div className="smart-section-header-premium smart-reveal-premium">
            <div className="smart-section-badge-premium">
              <MessageCircle size={14} /> Témoignages
            </div>
            <h2 className="smart-section-title-premium">
              Ce que nos <span className="smart-gradient-text-premium">clients</span> disent
            </h2>
          </div>

          <div className="smart-testimonials-premium smart-reveal-premium">
            <div className="smart-testimonials-track-premium" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, i) => (
                <div key={i} className="smart-testimonial-card-premium">
                  <div className="smart-testimonial-image-premium">
                    <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                    <div className="smart-testimonial-quote-premium">“</div>
                    <div className="smart-testimonial-company-premium">{testimonial.company}</div>
                  </div>
                  <div className="smart-testimonial-content-premium">
                    <div className="smart-testimonial-rating-premium">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                    <p className="smart-testimonial-text-premium">"{testimonial.content}"</p>
                    <h4 className="smart-testimonial-name-premium">{testimonial.name}</h4>
                    <p className="smart-testimonial-role-premium">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="smart-testimonials-dots-premium">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`smart-testimonial-dot-premium ${activeTestimonial === i ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="smart-section-premium">
          <div className="smart-section-header-premium smart-reveal-premium">
            <div className="smart-section-badge-premium">
              <Building2 size={14} /> Nos partenaires
            </div>
            <h2 className="smart-section-title-premium">
              Ils nous <span className="smart-gradient-text-premium">font confiance</span>
            </h2>
          </div>

          <div className="smart-partners-grid-premium smart-reveal-premium">
            {[
              { name: 'LVMH', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/LVMH_logo.svg/2560px-LVMH_logo.svg.png' },
              { name: 'Nestlé', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nestl%C3%A9.svg/2560px-Nestl%C3%A9.svg.png' },
              { name: 'Decathlon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Decathlon_Logo.svg/2560px-Decathlon_Logo.svg.png' },
              { name: "L'Oréal", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/L%27Or%C3%A9al_logo.svg/2560px-L%27Or%C3%A9al_logo.svg.png' }
            ].map((partner, i) => (
              <div key={i} className="smart-partner-card-premium">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="smart-partner-logo-premium" 
                  loading="lazy"
                />
                <div className="smart-partner-glow-premium"></div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="smart-cta-wrapper-premium smart-reveal-premium">
          <div className="smart-cta-premium">
            <div className="smart-cta-bg-effects-premium">
              <div className="smart-cta-glow-premium-1"></div>
              <div className="smart-cta-glow-premium-2"></div>
              <div className="smart-cta-glow-premium-3"></div>
            </div>
            <div className="smart-cta-content-premium">
              <div className="smart-cta-badge-premium">
                <Rocket size={16} /> Offre exclusive
              </div>
              <h3 className="smart-cta-title-premium">
                Prêt à <span className="smart-gradient-text-premium">propulser</span> votre marque ?
              </h3>
              <p className="smart-cta-description-premium">
                Bénéficiez d'un diagnostic stratégique gratuit
              </p>
              <div className="smart-cta-benefits-premium">
                <div><CheckCircle2 size={16} /> Diagnostic gratuit</div>
                <div><CheckCircle2 size={16} /> Sans engagement</div>
                <div><CheckCircle2 size={16} /> Réponse sous 24h</div>
                <div><CheckCircle2 size={16} /> Stratégie sur mesure</div>
              </div>
              <form className="smart-cta-form-premium" onSubmit={(e) => e.preventDefault()}>
                <div className="smart-input-wrapper-premium">
                  <PhoneCall size={18} />
                  <input type="tel" placeholder="Votre numéro" required />
                  <div className="smart-input-border-premium"></div>
                </div>
                <button type="submit" className="smart-cta-btn-premium">
                  Me rappeler <ArrowRight size={16} />
                </button>
              </form>
              <p className="smart-cta-note-premium"> Vos données sont confidentielles</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}