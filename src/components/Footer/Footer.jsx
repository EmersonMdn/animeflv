import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="/" className="footer-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="footer-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="footer-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="footer-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/">Anime</a>
          <a href="/">Manga</a>
          <a href="/">Contacto</a>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; 2023 ANIM - Created by Emerson Medina, Front end developer.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
