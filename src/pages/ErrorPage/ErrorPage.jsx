import "./ErrorPage.css";
import errorImg from "../../assets/images/404error.png";
function ErrorPage() {
  return (
    <>
      <div className="container">
        <section className="error">
          <h3 className="error-title">Səhifə tapılmadı</h3>
          <div className="error-img-container">
            <img className="error-img" src={errorImg} alt="error-404" />
          </div>
        </section>
      </div>
    </>
  );
}

export default ErrorPage;
