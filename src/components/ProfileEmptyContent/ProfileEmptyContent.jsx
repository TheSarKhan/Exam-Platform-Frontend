import "./ProfileEmptyContent.css";
import profileEmptyImage from "../../assets/images/profileEmptyContent.png";
function ProfileEmptyContent() {
  return (
    <>
      <div className="exam-placeholder-container">
        <div className="text-content">Yazdığınız bütün imtahanların burada görünəcək</div>
        <div className="image-content">
          <img src={profileEmptyImage} alt="Placeholder for exams" />
        </div>
        <button className="start-exam-button">İmtahanlara başla</button>
      </div>
    </>
  );
}

export default ProfileEmptyContent;
