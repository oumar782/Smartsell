import '../App.css'
export default function Footer(){
  return (
    <footer className="ss-footer" id="contact">
      <div className="footer-inner">
        <div>
          <div className="brand">SMARTSELL</div>
          <p className="muted">Contact — 620 61 90 64 • Contact@smartsell.pro</p>
        </div>
        <div className="links">
          <a href="#">Mentions</a>
          <a href="#">CGV</a>
          <a href="#">Presse</a>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Smartsell — Tous droits réservés.</div>
    </footer>
  )
}
