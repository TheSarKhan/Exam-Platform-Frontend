import "./PaymentForm.css";
import payriffLogo from "../../assets/images/payriffLogo.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
import { useState } from "react";
const PaymentForm = () => {
  const [expiryDate, setExpiryDate] = useState("");

  const handleExpiryDateChange = e => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 4) {
      value = value.slice(0, 4);
    }
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpiryDate(value);
  };
  return (
    <div className="payment-container">
      <div className="header-section">
        <a href="#" className="back-link">
          <img src={arrowLeft} alt="arrowLeft" />
          Geri qayıt
        </a>
      </div>

      <div className="main-content">
        <div className="order-details-panel">
          <div className="">
            <img width={150} src={payriffLogo} alt="payriffLogo" className="payriffLogo" />
            <h2 className="panel-title">Ödəniş məlumatları</h2>
          </div>
          <div className="detail-item">
            <span className="detail-label">Sifarişin məbləği</span>
            <span className="detail-value">1.99 AZN</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Sifariş nömrəsi</span>
            <span className="detail-value">34660140</span>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="save-card" className="checkbox-input" />
            <label htmlFor="save-card" className="checkbox-label">
              Kartı yadda saxla
            </label>
          </div>
        </div>

        <div className="card-details-panel">
          <h2 className="panel-title">Kart məlumatlarını daxil edin</h2>
          <form className="card-form">
            <div className="payment-form-group">
              <label htmlFor="cardNumber" className="form-label">
                Kartın nömrəsi
              </label>
              <input type="text" id="cardNumber" className="payment-form-input" placeholder="Tam halını qeyd edin" />
            </div>
            <div className="form-row">
              <div className="payment-form-group">
                <label htmlFor="expiryDate" className="form-label">
                  MM/YY
                </label>
                <input type="text" id="expiryDate" className="payment-form-input" placeholder="MM/YY" value={expiryDate} onChange={handleExpiryDateChange} />
              </div>
              <div className="payment-form-group">
                <label htmlFor="cvv" className="form-label">
                  CVV2
                </label>
                <input type="text" id="cvv" className="payment-form-input" placeholder="****" />
              </div>
            </div>
            <div className="payment-form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" className="payment-form-input" placeholder="example@gmail.com" />
            </div>
            <button type="submit" className="payment-submit-button payment-submit-button--pay">
              Ödə
            </button>
            <button type="button" className="payment-submit-button payment-submit-button--reject">
              İmtina etmək
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
