import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./header.css";

export function ServiceCard({ icon: Icon, title, description, link }) {
  return (
    <div className="card service-card">
      <div className="card-icon">
        <Icon size={26} />
      </div>
      <h3>{title}</h3>
      <p className="card-desc">{description}</p>
      <Link to={link} className="card-link">
        En savoir plus <ChevronRight size={16} />
      </Link>
    </div>
  );
}

export default ServiceCard;