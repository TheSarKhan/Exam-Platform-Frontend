import arrowLeft from "../../assets/icons/arrow-left.png";
import ig from "../../assets/icons/igBorderBlue.png";
import wp from "../../assets/icons/wpBorderBlue.png";
import tg from "../../assets/icons/tgBorderBlue.png";
import fb from "../../assets/icons/fbBorderBlue.png";
import contactImage from "../../assets/images/contactImage.png";
import "./ContactPage.css";
function ContactPage() {
  return (
    <div className="container">
      <section className="contact-container">
        <div className="contact-info-panel">
          {/* <a href="#" className="back-link">
            <img src={arrowLeft} alt="arrowLeft" />
            Geri qayıt
          </a> */}
          <h2 className="section-title">Bizimlə əlaqə</h2>
          <h1 className="main-heading">Sizə kömək etmək üçün burdayıq!</h1>
          <p className="description">Burada suallarınızı, təkliflərinizi və rəyinizi bizimlə bölüşə bilərsiniz</p>

          <div className="contact-details">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M20.1388 16.8032C20.1388 17.1332 20.0655 17.4723 19.9097 17.8023C19.7538 18.1323 19.5522 18.444 19.2863 18.7373C18.8372 19.2323 18.3422 19.5898 17.783 19.819C17.233 20.0482 16.6372 20.1673 15.9955 20.1673C15.0605 20.1673 14.0613 19.9473 13.0072 19.4982C11.953 19.049 10.8988 18.444 9.85384 17.6832C8.79968 16.9132 7.80051 16.0607 6.84717 15.1165C5.90301 14.1632 5.05051 13.164 4.28967 12.119C3.53801 11.074 2.93301 10.029 2.49301 8.99315C2.05301 7.94815 1.83301 6.94898 1.83301 5.99565C1.83301 5.37232 1.94301 4.77648 2.16301 4.22648C2.38301 3.66732 2.73134 3.15398 3.21717 2.69565C3.80384 2.11815 4.44551 1.83398 5.12384 1.83398C5.38051 1.83398 5.63717 1.88898 5.86634 1.99898C6.10467 2.10898 6.31551 2.27398 6.48051 2.51232L8.60718 5.50982C8.77218 5.73898 8.89134 5.94982 8.97384 6.15148C9.05634 6.34398 9.10218 6.53648 9.10218 6.71065C9.10218 6.93065 9.03801 7.15065 8.90968 7.36148C8.79051 7.57232 8.61634 7.79232 8.39634 8.01232L7.69967 8.73648C7.59884 8.83732 7.55301 8.95648 7.55301 9.10315C7.55301 9.17648 7.56218 9.24065 7.58051 9.31398C7.60801 9.38732 7.63551 9.44232 7.65384 9.49732C7.81884 9.79982 8.10301 10.194 8.50634 10.6707C8.91884 11.1473 9.35884 11.6332 9.83551 12.119C10.3305 12.6048 10.8072 13.054 11.293 13.4665C11.7697 13.8698 12.1638 14.1448 12.4755 14.3098C12.5213 14.3282 12.5763 14.3557 12.6405 14.3832C12.7138 14.4107 12.7872 14.4198 12.8697 14.4198C13.0255 14.4198 13.1447 14.3648 13.2455 14.264L13.9422 13.5765C14.1713 13.3473 14.3913 13.1732 14.6022 13.0632C14.813 12.9348 15.0238 12.8707 15.253 12.8707C15.4272 12.8707 15.6105 12.9073 15.8122 12.9898C16.0138 13.0723 16.2247 13.1915 16.4538 13.3473L19.488 15.5015C19.7263 15.6665 19.8913 15.859 19.9922 16.0881C20.0838 16.3173 20.1388 16.5465 20.1388 16.8032Z"
                  stroke="#292D32"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
              <p>+9940553232323</p>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                <path d="M1.83082 17.515H5.4032V8.83926L0.299805 5.01172V15.984C0.299805 16.8312 0.986211 17.515 1.83082 17.515Z" fill="#4285F4" />
                <path d="M17.6514 17.515H21.2237C22.0709 17.515 22.7548 16.8286 22.7548 15.984V5.01172L17.6514 8.83926" fill="#34A853" />
                <path d="M17.6514 2.20528V8.83969L22.7548 5.01215V2.97079C22.7548 1.07743 20.5935 -0.00193453 19.0803 1.13357" fill="#FBBC04" />
                <path d="M5.40332 8.8395V2.20508L11.5274 6.79814L17.6515 2.20508V8.8395L11.5274 13.4326" fill="#EA4335" />
                <path d="M0.299805 2.97079V5.01215L5.4032 8.83969V2.20528L3.97425 1.13357C2.45854 -0.00193453 0.299805 1.07743 0.299805 2.97079Z" fill="#C5221F" />
              </svg>
              <p>academix@gmail.com</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="fb" />
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <img src={tg} alt="tg" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="ig" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <img src={wp} alt="w]" />
            </a>
          </div>
        </div>

        <div className="contact-illustration-panel">
          <img src={contactImage} alt="contactImage" />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
