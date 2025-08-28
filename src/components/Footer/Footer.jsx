import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import fb from "../../assets/icons/fb.png";
import tg from "../../assets/icons/tg.png";
import wp from "../../assets/icons/wp.png";
import ig from "../../assets/icons/ig.png";
function Footer() {
  return (
    <div className="container">
      <footer className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">TESTUP</h2>
          <div className="footer-nav">
            <Link to='/about'>Haqqımızda</Link>
            <Link to='/exams'>İmtahanlar</Link>
            <Link to='/contact'>Əlaqə</Link>
          </div>

          <div className="social-media-section">
            <p className="social-media-text">Bizi izləyin</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="fb" />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <img src={tg} alt="" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={ig} alt="" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <img src={wp} alt="" />
              </a>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="copyright-container">
            <p>TESTUP Group MMC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
