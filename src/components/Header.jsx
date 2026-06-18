import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  Home,
  Briefcase,
  Code,
  Newspaper,
  TrendingUp,
  FolderOpen,
  User,
  Zap,
  X,
  Mic,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Globe,
  Camera,
  MessageCircle,
  Video
} from "lucide-react";
import "./header.css";

// Import du logo depuis le projet
import logoLight from "../assets/1.png";
import logoDark from "../assets/2.png";

export function Header() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("ss-theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem("ss-theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll vers le haut à chaque changement de page
  useEffect(() => {
    // Scroll vers le haut avec animation fluide
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]); // Déclenché à chaque changement de route

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { to: "/", label: "Accueil", icon: Home },
    { to: "/services", label: "Services", icon: Briefcase },
    { to: "/elearning", label: "Compétences", icon: Code },
    { to: "/influenceur", label: "Influenceur", icon: TrendingUp },
    { to: "/portfolio", label: "Portfolio", icon: FolderOpen },
    { to: "/news", label: "News", icon: Newspaper },
    { to: "/contact", label: "Contact", icon: User },
  ];

  const isActive = (to) => {
    if (to === "/") return pathname === to;
    return pathname.startsWith(to);
  };

  const toggleBanner = () => {
    setShowBanner(!showBanner);
  };

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = () => {
    setOpen(false); // Fermer le menu mobile
  };

  return (
    <header className={`site-header-wrapper ${!showBanner ? 'no-banner' : ''}`}>
      {/* Bannière supérieure - collée au header */}
      <div className={`top-banner ${!showBanner ? 'hidden' : ''}`}>
        <div className="top-banner-inner">
          <div className="top-banner-left">
            <div className="top-banner-item">
              <Phone size={14} />
              <a href="tel:+224622456789">+224 622 45 67 89</a>
            </div>
            <div className="top-banner-divider"></div>
            <div className="top-banner-item">
              <Mail size={14} />
              <a href="mailto:contact@smartsell.com">contact@smartsell.com</a>
            </div>
            <div className="top-banner-divider"></div>
            <div className="top-banner-item">
              <MapPin size={14} />
              <span>Conakry, Guinée</span>
            </div>
            <div className="top-banner-divider"></div>
            <div className="top-banner-item">
              <Clock size={14} />
              <span>Lun - Ven: 8h - 18h</span>
            </div>
          </div>
          
          <div className="top-banner-right">
            <button className="top-banner-close" onClick={toggleBanner} aria-label="Fermer la bannière">
              <X size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Header principal - collé à la bannière */}
      <div className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">
              <img 
                src={theme === "light" ? logoLight : logoDark} 
                alt="Smartsell" 
                className="brand-logo"
              />
            </span>
            <span className="brand-text">Smartsell</span>
          </Link>
          
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <Link 
                key={l.to} 
                to={l.to} 
                className={`nav-link ${isActive(l.to) ? "active" : ""}`}
                onClick={handleLinkClick}
              >
                <span className="nav-icon-wrapper">
                  <l.icon size={16} className="nav-icon" />
                </span>
                <span className="nav-label">{l.label}</span>
                {isActive(l.to) && <span className="nav-indicator" />}
              </Link>
            ))}
          </nav>
          
          <div className="nav-cta">
            <button
              className="theme-toggle"
              aria-label="Changer le thème"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <span className="theme-icon-wrapper">
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </span>
            </button>
          
            <button className="mobile-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
              <span className="menu-icon">
                {open ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;