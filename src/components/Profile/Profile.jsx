import React, { useState } from "react";
import examPageIcon from "../../assets/icons/examPaperIcon.png";
import wallet from "../../assets/icons/wallet.png";
import settingIcon from "../../assets/icons/settingsIcon.png";
import logoutIcon from "../../assets/icons/logout.png";
import ExamCard from "../ExamCard/ExamCard";
import "./Profile.css";
function Profile() {
  const [activeTab, setActiveTab] = useState("examlar");

  const renderContent = () => {
    switch (activeTab) {
      case "examlar":
        return (
          <div className="main-content">
            <div className="content-header">
              <h2>Bütün imtahanlarım</h2>
              <div className="tabs">
                <span className="tab-link active">Admindən alınan imtahanlar</span>
                <span className="tab-link">Müəllimin göndərdiyi imtahanlar</span>
              </div>
            </div>
            <div className="exam-list">
              <ExamCard title="İnformatika" description="İnformasiyanın saxlanılması və ötürülməsi" buttons={["Nəticəmə bax", "Yenidən bax"]} />
              <ExamCard title="İnformatika" description="İnformasiyanın saxlanılması və ötürülməsi" buttons={["Nəticəmə bax", "Yenidən bax"]} />
            </div>
          </div>
        );
      case "alis-tarixcesi":
        return (
          <div className="main-content">
            <h3>Alış tarixçəsi Content</h3>
          </div>
        );
      case "tenzimləmələr":
        return (
          <div className="main-content">
            <h3>Tənzimləmələr Content</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page-container">
      <main className="main-layout">
        <aside className="sidebar">
          <button className="back-button">← Geri qayıt</button>
          <div className="profile-info">
            <img src="https://placehold.co/100x100" alt="Profile" className="profile-image" />
            <h2 className="profile-name">Teyran Nağıyeva</h2>
            <p className="profile-role">Şagird</p>
          </div>
          <nav className="sidebar-nav">
            <a href="#" className={`nav-item ${activeTab === "examlar" ? "active" : ""}`} onClick={() => setActiveTab("examlar")}>
              <img src={examPageIcon} alt="" />
              <span>İmtahanlarım</span>
            </a>
            <a href="#" className={`nav-item ${activeTab === "alis-tarixcesi" ? "active" : ""}`} onClick={() => setActiveTab("alis-tarixcesi")}>
              <img src={wallet} alt="" />
              <span>Alış tarixçəsi</span>
            </a>
            <a href="#" className={`nav-item ${activeTab === "tenzimləmələr" ? "active" : ""}`} onClick={() => setActiveTab("tenzimləmələr")}>
              <img src={settingIcon} alt="" />
              <span>Tənzimləmələr</span>
            </a>
          </nav>
          <a href="#" className="nav-item sign-out-btn">
            <img src={logoutIcon} alt="" />
            <span>Hesabdan çıx</span>
          </a>
        </aside>

        <section className="content-section">{renderContent()}</section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <span>Haqqımızda</span>
          <span>İmtahanlar</span>
          <span>Əlaqə</span>
        </div>
        <div className="social-links">
          <span>Bizi izləyin</span>
          {/* Social media icons here */}
        </div>
        <p className="copyright">Akademix Group MMC</p>
      </footer>
    </div>
  );
}

export default Profile;
