import "./Banner.css";
import banner from "../../assets/images/banner.png";
import teacherBanner from "../../assets/images/teacherBanner.png";
import studentBanner from "../../assets/images/studentBanner.png";

function Banner({ user }) {
  if (!user) {
    return (
      <section className="promo-container">
        <div className="promo-content">
          <h1 className="promo-heading">Hər zaman, hər yerdə öyrən!</h1>
          <p className="promo-text">Gündəlik planlar, bildirişlər və motivasiya mesajları ilə öyrənməni vərdişə çevir. Bildirişlər və motivasiya mesajları ilə öyrənməni vərdişə çevir</p>
          <button className="promo-button">
            Qeydiyyatdan keç
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.7402 15.5307L14.2602 12.0007L10.7402 8.4707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="promo-illustration">
          <img src={banner} alt="Banner" />
        </div>
      </section>
    );
  }
  if (user === "TEACHER") {
    return (
      <section className="promo-container">
        <div className="promo-content">
          <h1 className="promo-heading">İmtahan hazırlamaq heç bu qədər asan olmamışdı!</h1>
          <p className="promo-text">Gündəlik planlar, bildirişlər və motivasiya mesajları ilə öyrənməni vərdişə çevir. Bildirişlər və motivasiya mesajları ilə öyrənməni vərdişə çevir</p>
          <button className="promo-button">Şagirdlərin üçün imtahan qur</button>
        </div>
        <div className="promo-illustration">
          <img src={teacherBanner} alt="Teacher Banner" />
        </div>
      </section>
    );
  }
  return (
    <section className="promo-container">
      <div className="promo-content">
        <h1 className="promo-heading">Ən yeni imtahanları kəşf et!</h1>
        <p className="promo-text">Gündəlik planlar, bildirişlər və motivasiya mesajları ilə öyrənməni vərdişə çevir. Bildirişlər və motivasiya mesajları ilə öyrənməni vərdişə çevir</p>
        <button className="promo-button">Hədəfinə addım at</button>
      </div>
      <div className="promo-illustration">
        <img src={studentBanner} alt="Student Banner" />
      </div>
    </section>
  );
}

export default Banner;
