import React, { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  FileText, 
  Layers, 
  PenTool, 
  Users, 
  Monitor, 
  Radio, 
  Play, 
  ArrowRight, 
  PhoneCall, 
  Building2, 
  Sparkles,
  CheckCircle2,
  Star,
  Zap,
  Award,
  Crown,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Heart,
  Target,
  Lightbulb,
  Palette,
  Code2,
  Megaphone,
  Smartphone
} from 'lucide-react';
import Hero from '../components/Hero';

// ==========================================
// DONNÉES STATIQUES
// ==========================================
const services = [
  { title: 'Stratégie', icon: <Target size={26} />, description: "Vision globale et plan d'action sur mesure", progress: 98 },
  { title: 'Création de Contenu', icon: <Lightbulb size={26} />, description: 'Storytelling et copywriting percutants', progress: 95 },
  { title: "Marketing d'Influence", icon: <Megaphone size={26} />, description: 'Amplification et communauté engagée', progress: 92 },
  { title: 'Design & Branding', icon: <Palette size={26} />, description: 'Identité visuelle mémorable', progress: 96 },
  { title: 'Web & Digital', icon: <Code2 size={26} />, description: 'Expériences digitales immersives', progress: 94 },
  { title: 'Studio Creative', icon: <Smartphone size={26} />, description: 'Production créative et technique', progress: 90 }
];

const projects = [
  { title: 'Luxury Brand Evolution', description: "Refonte complète de l'identité visuelle et stratégie digitale", metrics: '+67% engagement', time: '4 semaines', category: 'Branding' },
  { title: 'Tech Startup Launch', description: "Campagne d'influence et lancement produit viral", metrics: '2M vues', time: '6 semaines', category: 'Influence' },
  { title: 'Retail Experience', description: "Design d'expérience client omnicanal", metrics: '+42% conversion', time: '8 semaines', category: 'Design' },
  { title: 'Media Campaign', description: 'Production audiovisuelle et stratégie média', metrics: '+89% reach', time: '5 semaines', category: 'Studio' }
];

const testimonials = [
  { name: 'Sophie Martin', role: 'Directrice Marketing, LVMH', content: 'Une équipe exceptionnelle qui a su transformer notre vision en réalité. Résultats au-delà de nos attentes !', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', rating: 5 },
  { name: 'Thomas Bernard', role: 'CEO, TechStart', content: 'La meilleure agence avec laquelle nous ayons travaillé. Créativité, professionnalisme et résultats concrets.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop', rating: 5 },
  { name: 'Isabelle Dubois', role: "Brand Director, L'Oréal", content: 'Un partnership stratégique qui a propulsé notre marque au niveau supérieur. Je recommande vivement !', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', rating: 5 }
];

const stats = [
  { value: '150+', label: 'Projets réalisés', icon: <Award size={24} />, color: '#fbbf24', trend: '+25%' },
  { value: '98%', label: 'Clients satisfaits', icon: <Heart size={24} />, color: '#f59e0b', trend: '+12%' },
  { value: '45+', label: 'Experts créatifs', icon: <Users size={24} />, color: '#ec4899', trend: '+8%' },
  { value: '12+', label: 'Prix remportés', icon: <Crown size={24} />, color: '#8b5cf6', trend: '+3' }
];

// ==========================================
// COMPOSANTS ENFANTS
// ==========================================

function NeuralBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let nodes = [];
    let particles = [];
    
    const NODE_COUNT = 80;
    const CONNECTION_DISTANCE = 180;
    const MOUSE_RADIUS = 200;
    
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    class NeuralNode {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = Math.random() * 2.5 + 1.5;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.color = `hsla(${45 + Math.random() * 15}, 80%, 60%, 0.5)`;
        this.glowColor = `hsla(${45 + Math.random() * 15}, 80%, 65%, 0.3)`;
      }
      
      update(mouseX, mouseY) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 2.5;
          const pushY = Math.sin(angle) * force * 2.5;
          this.vx += pushX;
          this.vy += pushY;
        }
        
        this.vx += (this.originalX - this.x) * 0.02;
        this.vy += (this.originalY - this.y) * 0.02;
        this.vx *= 0.94;
        this.vy *= 0.94;
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;
      }
      
      draw(ctx) {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const glowRadius = this.radius * (1 + pulse * 0.5);
        
        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.glowColor;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
        
        ctx.restore();
      }
    }
    
    const initNodes = () => {
      nodes = [];
      const cols = Math.ceil(Math.sqrt(NODE_COUNT));
      const rows = Math.ceil(NODE_COUNT / cols);
      const spacingX = canvas.width / (cols + 1);
      const spacingY = canvas.height / (rows + 1);
      
      for (let i = 0; i < NODE_COUNT; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = spacingX * (col + 1) + (Math.random() - 0.5) * 60;
        const y = spacingY * (row + 1) + (Math.random() - 0.5) * 60;
        nodes.push(new NeuralNode(x, y));
      }
    };
    
    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.12;
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, `rgba(251, 191, 36, ${opacity})`);
            gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.shadowBlur = 2;
            ctx.shadowColor = 'rgba(251, 191, 36, 0.2)';
            ctx.stroke();
          }
        }
      }
    };
    
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.3 + 0.1,
        color: `rgba(251, 191, 36, ${Math.random() * 0.2})`
      });
    }
    
    const animateParticles = () => {
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 1, 24, 0.96)');
      gradient.addColorStop(0.3, 'rgba(20, 8, 40, 0.94)');
      gradient.addColorStop(0.7, 'rgba(25, 10, 45, 0.94)');
      gradient.addColorStop(1, 'rgba(10, 1, 24, 0.96)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.shadowBlur = 0;
      
      for (let node of nodes) {
        node.update(mouseRef.current.x, mouseRef.current.y);
      }
      
      drawConnections();
      animateParticles();
      
      for (let node of nodes) {
        node.draw(ctx);
      }
      
      const radialGradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 250
      );
      radialGradient.addColorStop(0, 'rgba(251, 191, 36, 0.06)');
      radialGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
      radialGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      animationId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    
    resizeCanvas();
    initNodes();
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="smart-neural-canvas" />;
}

function SmartMarquee() {
  const items = ["Stratégie", "Création", "Web", "Shooting", "Podcast", "Influence", "E-learning", "Branding", "Campagnes", "Performance"];
  return (
    <div className="smart-marquee-wrapper">
      <div className="smart-marquee-container">
        <div className="smart-marquee-track">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="smart-marquee-item">
              <span className={i % 2 ? "smart-marquee-text-gradient" : "smart-marquee-text"}>{t}</span>
              <Sparkles className="smart-marquee-icon" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmartProjectCard({ project, index }) {
  const images = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  ];
  
  return (
    <div className="smart-project-card" style={{ '--card-index': index }}>
      <div className="smart-project-image-container">
        <img src={images[index % images.length]} alt={project.title} className="smart-project-image" />
        <div className="smart-project-overlay">
          <span className="smart-project-category">{project.category}</span>
        </div>
        <div className="smart-project-shine"></div>
      </div>
      <div className="smart-project-content">
        <h4 className="smart-project-title">{project.title}</h4>
        <p className="smart-project-description">{project.description}</p>
        <div className="smart-project-stats">
          <div className="smart-stat-badge">
            <TrendingUp size={14} />
            <span>{project.metrics}</span>
          </div>
          <div className="smart-stat-badge">
            <Clock size={14} />
            <span>{project.time}</span>
          </div>
        </div>
        <button className="smart-project-btn">
          Voir le projet <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function SmartServiceCard({ service, index }) {
  const icons = {
    'Stratégie': <Target size={26} />,
    'Création de Contenu': <Lightbulb size={26} />,
    "Marketing d'Influence": <Megaphone size={26} />,
    'Design & Branding': <Palette size={26} />,
    'Web & Digital': <Code2 size={26} />,
    'Studio Creative': <Smartphone size={26} />
  };
  
  return (
    <div className="smart-service-card" style={{ '--card-index': index }}>
      <div className="smart-service-icon-wrapper">
        <div className="smart-service-icon-bg"></div>
        {icons[service.title] || service.icon}
        <div className="smart-service-icon-pulse"></div>
      </div>
      <h3 className="smart-service-title">{service.title}</h3>
      <p className="smart-service-description">{service.description}</p>
      <div className="smart-service-progress">
        <div className="smart-service-progress-bar" style={{ width: `${service.progress}%` }}></div>
      </div>
      <div className="smart-service-stats">
        <span className="smart-stat-number">{service.progress}+</span>
        <span className="smart-stat-label">projets réussis</span>
      </div>
    </div>
  );
}

// ==========================================
// COMPOSANT PRINCIPAL EXPORTÉ
// ==========================================
export default function SmartSell() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('smart-visible');
            if (entry.target.classList.contains('smart-cta-wrapper')) {
              createParticles(entry.target);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    const elements = document.querySelectorAll('.smart-reveal');
    elements.forEach((el) => observer.observe(el));

    const handleMouseMove = (e) => {
      if (cursorRef.current && window.innerWidth > 768) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(testimonialInterval);
    };
  }, []);

  const createParticles = (element) => {
    const particles = element.querySelectorAll('.smart-particle');
    particles.forEach(particle => particle.remove());
    
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'smart-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particle.style.animationDuration = Math.random() * 3 + 2 + 's';
      particle.style.width = Math.random() * 6 + 2 + 'px';
      particle.style.height = particle.style.width;
      element.appendChild(particle);
      
      setTimeout(() => {
        if (element.contains(particle)) {
          particle.remove();
        }
      }, 5000);
    }
  };

  return (
    <>
      <NeuralBackground />
      
      <div ref={cursorRef} className="smart-custom-cursor">
        <div className="smart-cursor-dot"></div>
        <div className="smart-cursor-ring"></div>
      </div>
      
      <Hero />

      <SmartMarquee />

      <div className="smart-container">
        {/* Stats Section */}
        <div className="smart-stats-grid smart-reveal">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="smart-stat-card" 
              style={{ '--card-index': i, '--stat-color': stat.color }}
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="smart-stat-icon" style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)` }}>
                {stat.icon}
              </div>
              <div className="smart-stat-value">
                <span className="smart-stat-number">{stat.value}</span>
                <span className="smart-stat-trend">{stat.trend}</span>
              </div>
              <div className="smart-stat-label">{stat.label}</div>
              <div className="smart-stat-progress" style={{ '--progress': `${(i + 1) * 25}%` }}></div>
              {hoveredStat === i && <div className="smart-stat-glow" style={{ background: `radial-gradient(circle, ${stat.color}40, transparent)` }}></div>}
            </div>
          ))}
        </div>

        {/* Services Section */}
        <section className="smart-section smart-reveal">
          <div className="smart-section-header">
            <span className="smart-badge">
              <Sparkles size={12} /> Notre expertise
            </span>
            <h2 className="smart-section-title">
              Des <span className="smart-gradient-text">compétences</span> qui font la différence
            </h2>
            <p className="smart-section-subtitle">6 domaines d'expertise pour transformer votre vision en succès</p>
          </div>
          
          <div className="smart-services-grid">
            {services.map((service, i) => (
              <SmartServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="smart-section smart-reveal">
          <div className="smart-section-header">
            <span className="smart-badge">
              <TrendingUp size={12} /> Portfolio
            </span>
            <h2 className="smart-section-title">
              Nos <span className="smart-gradient-text">réalisations</span> récentes
            </h2>
            <p className="smart-section-subtitle">Découvrez nos projets les plus marquants</p>
          </div>

          <div className="smart-projects-grid">
            {projects.map((project, i) => (
              <SmartProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Showreel Section */}
        <section className="smart-section smart-reveal">
          <div className="smart-showreel">
            <div className="smart-showreel-content">
              <span className="smart-badge">🎬 Showreel 2026</span>
              <h2 className="smart-showreel-title">Découvrez notre <span className="smart-gradient-text">créativité</span> en action</h2>
              <button className="smart-play-btn-large">
                <div className="smart-play-pulse"></div>
                <Play size={28} fill="currentColor" />
              </button>
            </div>
            <div className="smart-showreel-background">
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=600&fit=crop" alt="Showreel" />
              <div className="smart-showreel-overlay"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="smart-section smart-reveal">
          <div className="smart-section-header">
            <span className="smart-badge">
              <MessageCircle size={12} /> Témoignages
            </span>
            <h2 className="smart-section-title">
              Ce que nos <span className="smart-gradient-text">clients</span> disent
            </h2>
          </div>

          <div className="smart-testimonials">
            <div className="smart-testimonials-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, i) => (
                <div key={i} className="smart-testimonial-card">
                  <div className="smart-testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="smart-testimonial-quote">“</div>
                  </div>
                  <div className="smart-testimonial-content">
                    <div className="smart-testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                    <p className="smart-testimonial-text">"{testimonial.content}"</p>
                    <h4 className="smart-testimonial-name">{testimonial.name}</h4>
                    <p className="smart-testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="smart-testimonials-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`smart-testimonial-dot ${activeTestimonial === i ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="smart-section smart-reveal">
          <div className="smart-section-header">
            <span className="smart-badge">
              <Building2 size={12} /> Nos partenaires
            </span>
            <h2 className="smart-section-title">
              Ils nous <span className="smart-gradient-text">font confiance</span>
            </h2>
          </div>

          <div className="smart-partners-grid">
            {[
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/LVMH_logo.svg/2560px-LVMH_logo.svg.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nestl%C3%A9.svg/2560px-Nestl%C3%A9.svg.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Decathlon_Logo.svg/2560px-Decathlon_Logo.svg.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/L%27Or%C3%A9al_logo.svg/2560px-L%27Or%C3%A9al_logo.svg.png'
            ].map((partner, i) => (
              <div key={i} className="smart-partner-card">
                <img src={partner} alt={`Partner ${i + 1}`} className="smart-partner-logo" />
                <div className="smart-partner-glow"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="smart-section smart-reveal">
          <div className="smart-section-header">
            <span className="smart-badge">
              <FileText size={12} /> Blog & Insights
            </span>
            <h2 className="smart-section-title">
              Derniers <span className="smart-gradient-text">articles</span>
            </h2>
          </div>

          <div className="smart-blog-grid">
            {[
              { title: 'Les tendances digitales 2026', desc: 'Découvrez les innovations qui façonneront le marketing demain', date: '15 Jan 2026', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', readTime: '5 min' },
              { title: 'Guide du branding moderne', desc: 'Comment créer une identity de marque mémorable', date: '10 Jan 2026', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop', readTime: '8 min' },
              { title: "L'avenir du marketing d'influence", desc: 'Stratégies innovantes pour 2026', date: '5 Jan 2026', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop', readTime: '6 min' }
            ].map((article, i) => (
              <div key={i} className="smart-blog-card">
                <div className="smart-blog-image">
                  <img src={article.image} alt={article.title} />
                  <div className="smart-blog-date">{article.date}</div>
                  <div className="smart-blog-readtime">{article.readTime}</div>
                </div>
                <div className="smart-blog-content">
                  <h4 className="smart-blog-title">{article.title}</h4>
                  <p className="smart-blog-desc">{article.desc}</p>
                  <button className="smart-blog-btn">
                    Lire l'article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="smart-section smart-reveal">
          <div className="smart-newsletter">
            <div className="smart-newsletter-content">
              <div className="smart-newsletter-icon">
                <Mail size={32} />
              </div>
              <h3>Restez informé des <span className="smart-gradient-text">dernières tendances</span></h3>
              <p>Recevez nos insights et études de cas exclusives</p>
              <form className="smart-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Votre email" required />
                <button type="submit">
                  S'abonner <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="smart-cta-wrapper smart-reveal">
          <div className="smart-cta-premium">
            <div className="smart-cta-bg-effects">
              <div className="smart-cta-glow-1"></div>
              <div className="smart-cta-glow-2"></div>
              <div className="smart-cta-glow-3"></div>
            </div>
            <div className="smart-cta-content">
              <div className="smart-cta-badge">
                <Sparkles size={14} /> Offre exclusive
              </div>
              <h3 className="smart-cta-title">
                Prêt à <span className="smart-gradient-text">propulser</span> votre marque ?
              </h3>
              <p className="smart-cta-description">
                Bénéficiez d'un diagnostic stratégique gratuit et d'une consultation personnalisée
              </p>
              <div className="smart-cta-benefits">
                <div><CheckCircle2 size={16} /> Diagnostic gratuit</div>
                <div><CheckCircle2 size={16} /> Sans engagement</div>
                <div><CheckCircle2 size={16} /> Réponse sous 24h</div>
                <div><CheckCircle2 size={16} /> Stratégie sur mesure</div>
              </div>
              <form className="smart-cta-form" onSubmit={(e) => e.preventDefault()}>
                <div className="smart-input-wrapper">
                  <PhoneCall size={18} />
                  <input type="tel" placeholder="Votre numéro de téléphone" required />
                  <div className="smart-input-border"></div>
                </div>
                <button type="submit" className="smart-cta-btn">
                  Me faire rappeler <ArrowRight size={16} />
                </button>
              </form>
              <p className="smart-cta-note">🔒 Vos données sont confidentielles et protégées</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}