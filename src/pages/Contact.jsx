import React, { useState } from 'react';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Building2,
  ChevronRight,
  Star,
  Award,
  Users,
  ThumbsUp
} from 'lucide-react';
import './contact.css'; // ✅ Chemin correct vers le CSS

// SVG logos officiels des réseaux sociaux
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    { icon: Phone, title: 'Téléphone', details: ['+224 622 45 67 89', '+224 622 45 67 90'], color: '#fbbf24' },
    { icon: Mail, title: 'Email', details: ['contact@smartsell.com', 'support@smartsell.com'], color: '#6a2b85' },
    { icon: MapPin, title: 'Adresse', details: ['Conakry, Guinée', 'Quartier Kaloum, Immeuble SMB'], color: '#ec4899' },
    { icon: Clock, title: 'Horaires', details: ['Lun - Ven: 8h00 - 18h00', 'Sam: 9h00 - 13h00'], color: '#3b82f6' }
  ];

  const stats = [
    { number: '150+', label: 'Projets réalisés', icon: Award },
    { number: '98%', label: 'Clients satisfaits', icon: ThumbsUp },
    { number: '45+', label: 'Experts créatifs', icon: Users },
    { number: '4.9/5', label: 'Note moyenne', icon: Star }
  ];

  const socialLinks = [
    { label: 'Facebook', url: '#', color: '#1877F2', IconComponent: FacebookIcon },
    { label: 'WhatsApp', url: '#', color: '#25D366', IconComponent: WhatsAppIcon },
    { label: 'Instagram', url: '#', color: '#E4405F', IconComponent: InstagramIcon },
    { label: 'Twitter / X', url: '#', color: '#000000', IconComponent: TwitterXIcon },
    { label: 'LinkedIn', url: '#', color: '#0A66C2', IconComponent: LinkedInIcon }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page" id="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="contact-hero-gradient"></div>
          <div className="contact-hero-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="contact-particle" style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 8 + 4 + 's'
              }} />
            ))}
          </div>
        </div>
        <div className="contact-hero-content">
          <div className="contact-hero-badge">
            <Sparkles size={14} />
            <span>Contactez-nous</span>
          </div>
          <h1 className="contact-hero-title">
            Parlons de votre <span className="contact-hero-highlight">projet</span>
          </h1>
          <p className="contact-hero-subtitle">
            Une équipe dédiée à vos côtés pour transformer vos idées en réalité.
            Contactez-nous dès aujourd'hui !
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="contact-stats">
        <div className="contact-stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="contact-stat-card">
                <div className="contact-stat-icon"><Icon size={24} /></div>
                <div className="contact-stat-number">{stat.number}</div>
                <div className="contact-stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Left - Contact Info */}
          <div className="contact-info-section">
            <div className="contact-info-header">
              <span className="contact-info-badge"> Informations</span>
              <h2>Restons en <span className="gradient-text">contact</span></h2>
              <p>Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets.</p>
            </div>

            <div className="contact-info-grid">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="contact-info-card">
                    <div className="contact-info-icon" style={{ color: item.color, background: `${item.color}15` }}>
                      <Icon size={22} />
                    </div>
                    <div className="contact-info-details">
                      <h4>{item.title}</h4>
                      {item.details.map((detail, i) => <p key={i}>{detail}</p>)}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-social-section">
              <h4>Suivez-nous</h4>
              <div className="contact-social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.IconComponent;
                  return (
                    <a key={index} href={social.url} aria-label={social.label} 
                       className="contact-social-link" style={{ '--social-color': social.color }} title={social.label}>
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <span className="contact-form-badge"> Envoyez-nous un message</span>
                <h3>Remplissez le <span className="gradient-text">formulaire</span></h3>
              </div>

              {isSubmitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon"><CheckCircle2 size={48} /></div>
                  <h3>Message envoyé !</h3>
                  <p>Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.</p>
                  <button className="contact-success-btn" onClick={() => setIsSubmitted(false)}>
                    Envoyer un autre message <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label><User size={16} /> Nom complet *</label>
                      <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label><Mail size={16} /> Email *</label>
                      <input type="email" name="email" placeholder="votre@email.com" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label><Phone size={16} /> Téléphone</label>
                      <input type="tel" name="phone" placeholder="+224 XX XX XX XX" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label><MessageSquare size={16} /> Sujet</label>
                      <input type="text" name="subject" placeholder="Sujet de votre message" value={formData.subject} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <label><MessageSquare size={16} /> Message *</label>
                    <textarea name="message" placeholder="Décrivez votre projet ou votre demande..." rows="5" value={formData.message} onChange={handleChange} className={errors.message ? 'error' : ''} />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>
                  <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (<><span className="spinner"></span> Envoi en cours...</>) : (<>Envoyer le message <Send size={16} /></>)}
                  </button>
                  <p className="contact-form-note"> Vos données sont confidentielles et protégées</p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="contact-map-section">
          <div className="contact-map-header">
            <span className="contact-map-badge"> Notre localisation</span>
            <h2>Où nous <span className="gradient-text">trouver</span></h2>
            <p>Visitez-nous à notre siège à Conakry pour discuter de vos projets</p>
          </div>
          <div className="contact-map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249243.46831719607!2d-13.78960795000001!3d9.5091667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xea00d29a30d1d3f%3A0xe6fa85ca95ea3b8b!2sConakry%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sfr!4v1700000000000"
              className="contact-map-iframe" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps - Smartsell Conakry" />
            <div className="contact-map-overlay">
              <div className="contact-map-card">
                <div className="contact-map-card-icon"><Building2 size={24} /></div>
                <h4>Smartsell Agency</h4>
                <p>Quartier Kaloum, Immeuble SMB</p>
                <p>Conakry, Guinée</p>
                <div className="contact-map-card-actions">
                  <a href="https://maps.google.com/maps?q=Conakry+Guinée" target="_blank" rel="noopener noreferrer" className="map-btn">
                    Itinéraire <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta-section">
          <div className="contact-cta-wrapper">
            <div className="contact-cta-content">
              <div className="contact-cta-badge"><Sparkles size={14} /> Prêt à collaborer ?</div>
              <h2>Commençons votre <span className="gradient-text">projet</span> ensemble</h2>
              <p>Bénéficiez d'un diagnostic stratégique gratuit et d'une consultation personnalisée</p>
              <div className="contact-cta-buttons">
                <a href="tel:+224622456789" className="contact-cta-btn-primary"><Phone size={18} /> Appelez-nous</a>
                <a href="mailto:contact@smartsell.com" className="contact-cta-btn-secondary"><Mail size={18} /> Écrivez-nous</a>
              </div>
            </div>
            <div className="contact-cta-decoration">
              <div className="contact-cta-shape"></div>
              <div className="contact-cta-shape-2"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}