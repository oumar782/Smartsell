import React from 'react';
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
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Stratégie digitale 360',
      description: 'Vision globale, planning éditorial, KPI et roadmap sur mesure.',
      icon: Target,
      link: '/services/strategie-digitale'
    },
    {
      title: 'Création de contenu',
      description: 'Vidéo, photo, copywriting, motion design pour captiver vos audiences.',
      icon: Camera,
      link: '/services/creation-contenu'
    },
    {
      title: 'Gestion influenceurs',
      description: 'Sourcing, briefs, négociation et analyse de performance.',
      icon: Users,
      link: '/services/gestion-influenceurs'
    },
    {
      title: 'Design & Branding',
      description: 'Identité visuelle, charte graphique, UI/UX et direction artistique.',
      icon: Palette,
      link: '/services/design-branding'
    },
    {
      title: 'Développement web',
      description: 'Sites, apps, e-commerce, CMS sur mesure et performance.',
      icon: Code2,
      link: '/services/developpement-web'
    },
    {
      title: 'Conseil tech & digital',
      description: 'Audit, transformation digitale, architecture cloud et cybersécurité.',
      icon: Zap,
      link: '/services/conseil-tech'
    },
    {
      title: 'Production audio',
      description: 'Podcast, jingles, voix-off et sound design pour vos contenus.',
      icon: Mic,
      link: '/services/production-audio'
    },
    {
      title: 'Formation & e-learning',
      description: 'Modules interactifs, LMS, certifications et montée en compétences.',
      icon: GraduationCap,
      link: '/services/formation-elearning'
    }
  ];

  const whyItems = [
    {
      title: 'Créativité',
      description: 'Des idées originales qui donnent de l\'impact au message.',
      icon: Sparkles
    },
    {
      title: 'Agilité',
      description: 'Des livrables rapides et une souplesse d\'exécution sur mesure.',
      icon: Zap
    },
    {
      title: 'Performance',
      description: 'Une logique ROI et des campagnes pensées pour convertir.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="services-page">
      <PageHero
        eyebrow="SERVICES"
        title="Nos services créatifs pour une marque qui ne passe pas inaperçue"
        description="Un mix stratégique de contenu, design, influence, web et formation pour construire une expérience digitale puissante."
        primaryAction={{ label: 'Demander un devis', href: '#contact' }}
        secondaryAction={{ label: 'Voir le portfolio', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80&fit=crop"
        topBadge="EXPERTISE 24/7"
        bottomBadge="Créativité, performance et contenus premium."
      />

      <div className="container">
        {/* Section 1 : Services */}
        <section className="section services-section">
          <div className="section-header">
            <span className="badge">STRATÉGIE & CRÉATION</span>
            <h2>Offres taillées pour des marques ambitieuses</h2>
            <p>Choisissez les services qui renforcent votre attractivité et votre conversion.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-icon-wrapper">
                    <IconComponent className="service-icon" size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="service-stat">+90% satisfaction</span>
                    <a href={service.link} className="service-link">
                      Découvrir
                      <ArrowRight className="service-arrow" size={18} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2 : Pourquoi nous */}
        <section className="section why-section">
          <div className="section-header">
            <span className="badge">POURQUOI NOUS</span>
            <h2>Une approche hybride, digitale et haut de gamme</h2>
            <p>Des équipes expertes et un écosystème complet pour chaque phase de développement.</p>
          </div>

          <div className="why-grid">
            {whyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="why-card">
                  <div className="why-icon-wrapper">
                    <IconComponent className="why-icon" size={32} strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3 : CTA Découvrir nos réalisations */}
        <section className="section cta-section">
          <div className="cta-content">
            <h2>Découvrez nos réalisations</h2>
            <p>Explorez nos projets les plus inspirants et voyez comment nous transformons les ambitions en succès digitaux.</p>
            <a href="/portfolio" className="cta-button">
              Voir le portfolio
              <ArrowRight className="cta-arrow" size={20} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}