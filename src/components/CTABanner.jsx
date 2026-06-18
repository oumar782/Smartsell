import { Link } from "react-router-dom";
import { Zap, ChevronRight } from "lucide-react";
import "./header.css";

export function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="cta-content">
        <h2>Prêt à booster votre croissance ?</h2>
        <p>Obtenez un audit gratuit de votre stratégie digitale en moins de 48h</p>
        <Link to="/contact" className="btn btn-accent">
          <Zap size={18} />
          Audit gratuit
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default CTABanner;