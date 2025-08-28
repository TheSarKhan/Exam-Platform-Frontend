import star from "../../assets/icons/blueStar.png";
import clock from "../../assets/icons/clockIcon.png";
import interrogationMark from "../../assets/icons/interrogation-mark.png";
import moreIconDots from "../../assets/icons/moreIconDots.png";
import exclamation from "../../assets/icons/exclamation.png";
import done from "../../assets/icons/greenDone.png";
import "./ExanCard.css";
import { Link } from "react-router-dom";
function ExamCard({ subject, rating, duration, questions, title, tags, price, butttonText, isChecked }) {
  return (
    <div className="exam-card">
      <div className="exam-card__header">
        <div className="subject-tags">
          <span className="subject-tag">{subject}</span>
        </div>
        <div className="more-options">
          {isChecked !== null && (isChecked ? <img width={26} src={done} alt="done" /> : <img width={24} src={exclamation} alt="exclamation" />)}
          <img src={moreIconDots} alt="moreIconDots" />
        </div>
      </div>
      <div className="exam-card__info">
        <div className="info-item">
          <img src={clock} alt="lock" />
          <span>{duration} dəq</span>
        </div>
        <div className="info-item">
          <img src={interrogationMark} alt="interrogationMark" />
          <span>{questions} sual</span>
        </div>
        <div className="rating">
          <img src={star} alt="star" />
          <span>{rating}</span>
        </div>
      </div>
      <h3 className="exam-card__title">{title}</h3>
      <div className="exam-card__tags">
        {tags.map((tag, index) => (
          <span key={index} className="exam-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="exam-card__footer">
        <Link to='/detail' className="details-button text-decoration-none">{butttonText}</Link>
        {/* <span className="price">{price} AZN</span> */}
      </div>
    </div>
  );
}

export default ExamCard;
