import { useState } from "react";
import "./Header.css";
import searchIcon from "../../assets/icons/search-normal.png";
import profileIcon from "../../assets/icons/profile-circle.png";
import notificationIcon from "../../assets/icons/notification.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const store = useSelector(store => store.auth);
  const user = store.role;
  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container">
      <header className="header-container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">TESTUP</Link>
          </div>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <Link to="/">Ana Səhifə</Link>
              </li>
              <li>
                <Link to="/about">Haqqımızda</Link>
              </li>
              <li>
                <Link to="/exams">İmtahanlar</Link>
              </li>
              <li>
                <Link to="/contact">Əlaqə</Link>
              </li>
            </ul>
          </nav>

          <div className="right-side-content">
            {user ? (
              <div className="logged-in-container">
                <button className="icon-button">
                  <img src={searchIcon} alt="" />
                </button>
                <button className="icon-button">
                  <img src={notificationIcon} alt="" />
                </button>
                <button className="icon-button">
                  <img src={profileIcon} alt="" />
                </button>
                {/* <a href="#" className="logged-in-button">
                  Yeni imtahan yarat
                </a> */}
              </div>
            ) : (
              <div className="contact-button-container">
                <Link to="/auth/login" className="contact-button">
                  Daxil Ol
                </Link>
              </div>
            )}
          </div>

          <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <ul className="mobile-nav-links">
              <li>
                <Link to="/" onClick={handleMenuToggle}>
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleMenuToggle}>
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link to="/exams" onClick={handleMenuToggle}>
                  İmtahanlar
                </Link>
              </li>
              <li>
                <Link to="/about">Əlaqə</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <a href="#" onClick={handleMenuToggle} className="mobile-nav-link-with-icon">
                      <img src={searchIcon} alt="searchIcon" />
                      <span>Axtarış</span>
                    </a>
                  </li>
                  <li>
                    <input type="text" onClick={handleMenuToggle} className="mobile-nav-link-with-icon">
                      <img src={notificationIcon} alt="notificationIcon" />
                      <span>Bildirişlər</span>
                    </input>
                  </li>
                  <li>
                    <a href="#" onClick={handleMenuToggle} className="mobile-nav-link-with-icon">
                      <img src={profileIcon} alt="profileIcon" />

                      <span>Profil</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleMenuToggle} className="contact-button-mobile logged-in">
                      Yeni imtahan yarat
                    </a>
                  </li>
                </>
              ) : (
                <div className="contact-button-container">
                  <Link to="/auth/login" className="contact-button">
                    Daxil Ol
                  </Link>
                </div>
              )}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
