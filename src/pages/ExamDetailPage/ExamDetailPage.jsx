import "./ExamDetailPage.css";
import starIcon from "../../assets/icons/star.png";
import examDetail from "../../assets/images/examDetail.png";
import chronometer from "../../assets/icons/chronometer.png";
import pay from "../../assets/icons/pay.png";
import test from "../../assets/icons/testDetail.png";
import { examData } from "../../staticDatas/examData";
import ExamCard from "../../components/ExamCard/ExamCard";

function ExamDetail() {
  const starCount = Array.from({ length: 4 });
  return (
    <>
      <div className="exam-details-container">
        <div className="container">
          <div className="exam-details-card">
            <div className="exam-details-card-left">
              <div className="card-header">
                <div className="rating-info">
                  <div className="stars">
                    {starCount.map((_, index) => (
                      <span key={index} className="star">
                        <img src={starIcon} alt="star" />
                      </span>
                    ))}
                  </div>
                  <span className="review-count">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99464 11.1719C10.0688 11.1719 12.6963 11.6377 12.6963 13.4985C12.6963 15.3594 10.0863 15.8385 6.99464 15.8385C3.91964 15.8385 1.29297 15.3769 1.29297 13.5152C1.29297 11.6535 3.90214 11.1719 6.99464 11.1719Z" stroke="black" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99484 8.51732C4.97651 8.51732 3.33984 6.88148 3.33984 4.86315C3.33984 2.84482 4.97651 1.20898 6.99484 1.20898C9.01234 1.20898 10.649 2.84482 10.649 4.86315C10.6565 6.87398 9.03151 8.50982 7.02068 8.51732H6.99484Z" stroke="black" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.7383 7.56839C14.0724 7.38089 15.0999 6.23589 15.1024 4.85005C15.1024 3.48422 14.1066 2.35089 12.8008 2.13672" stroke="black" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.4961 10.7773C15.7886 10.9698 16.6911 11.4232 16.6911 12.3565C16.6911 12.999 16.2661 13.4157 15.5794 13.6765" stroke="black" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    317 nəfər
                  </span>
                </div>

                <div className="exam-category">
                  <span className="tag">Buraxılış imtahanı</span>
                </div>
              </div>

              <div className="tag-list">
                <span className="tag-item">11-ci sinif</span>
                <span className="tag-item">Buraxılış imtahanı</span>
                <span className="tag-item">MİQ</span>
                <span className="tag-item">İnformasiya</span>
                <span className="tag-item">Buraxılış</span>
                <span className="tag-item">Magistratura</span>
                <span className="tag-item">İnformasiya</span>
              </div>

              <div className="exam-details-text">
                <h2 className="exam-title">Buraxılış imtahanı 2</h2>
                <ul className="exam-subjects">
                  <li className="subject-item">Azərbaycan dili</li>
                  <li className="subject-item">Riyaziyyat</li>
                  <li className="subject-item">İngilis dili</li>
                </ul>
              </div>

              <button className="cta-button">İmtahanı əldə et</button>
            </div>
            <div className="exam-details-card-right">
              <img src={examDetail} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="metrics-container">
          <div className="metric-item">
            <div className="metric-icon">
              <img src={chronometer} alt="time" />
            </div>
            <div className="metric-text">
              <p className="metric-label">İmtahanın vaxtı</p>
              <p className="metric-value">90 dəqiqə</p>
            </div>
          </div>

          <div className="metric-item">
            <div className="metric-icon">
              <img src={pay} alt="pay" />
            </div>
            <div className="metric-text">
              <p className="metric-label">İmtahanın qiyməti</p>
              <p className="metric-value">2.99 AZN</p>
            </div>
          </div>

          <div className="metric-item">
            <div className="metric-icon">
              <img src={test} alt="test" />
            </div>
            <div className="metric-text">
              <p className="metric-label">Sual sayı</p>
              <p className="metric-value">90 sual</p>
            </div>
          </div>
        </div>
        <div className="similar-exams">
          <h2 className="text-center similar-exams__header">Oxşar imtahanlar</h2>
          <div className="exams-content">
            {examData.map(exam => (
              <ExamCard key={exam.id} subject={exam.subject} rating={exam.rating} duration={exam.duration} questions={exam.questions} title={exam.title} tags={exam.tags} price={exam.price} butttonText={"İmtahana başla"} isChecked={exam.isChecked} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamDetail;
