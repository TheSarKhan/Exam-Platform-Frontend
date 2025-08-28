import checkIcon from "../../assets/icons/checkFlowerIcon.png";
import "./PricingCard.css"
function PricingCard({ plan, price, features, buttonText, isPrimary }) {
  return (
    
    <div className={`pricing-card ${isPrimary ? "primary" : ""}`}>
      <div className="pricing-header">
        <h3 className="plan-name">{plan}</h3>
        <p className="plan-price">{price}</p>
      </div>
      <ul className="features-list row">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <img src={checkIcon} alt="chech-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="plan-button">{buttonText}</button>
    </div>
  );
}

export default PricingCard;
