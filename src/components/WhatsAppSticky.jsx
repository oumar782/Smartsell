import { MessageCircle } from "lucide-react";
import "./whatsAppSticky.css";

export function WhatsAppSticky() {
  return (
    <a 
      href="https://wa.me/224622456789" 
      className="wa-sticky" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="wa-text">WhatsApp</span>
      <span className="wa-pulse"></span>
    </a>
  );
}

export default WhatsAppSticky;