import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      <div className="container hero-inner">
        <div className="hero-eyebrow">
          Agence digitale nouvelle génération
        </div>
        
        <h1>
          Transformez votre <span className="accent">croissance</span> <br />
          avec Smartsell
        </h1>
        
        <p className="hero-sub">
          Nous créons des expériences digitales qui convertissent. 
          Design, développement et stratégie, le tout en un seul endroit.
        </p>
        
        <div className="hero-ctas">
          <Link to="/contact" className="btn btn-primary">
            <Zap size={18} />
            Démarrer un projet
          </Link>
          <Link to="/services" className="btn btn-outline">
            Voir nos services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;