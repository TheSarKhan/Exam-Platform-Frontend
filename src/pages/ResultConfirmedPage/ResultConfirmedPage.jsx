import "./ResultConfirmedPage.css";
import doneIcon from "../../assets/icons/greenDone.png";
function ResultConfirmedPage() {
  return (
    <>
      <div className="container">
        <section className="box">
          <div className="box-container">
            <div className="box-container__img">
              <img src={doneIcon} alt="confirm-icon" className="box-container__icon" />
            </div>
            <h3 className="box-container__title">Sizin nəticəniz təsdiq edildi</h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default ResultConfirmedPage;
