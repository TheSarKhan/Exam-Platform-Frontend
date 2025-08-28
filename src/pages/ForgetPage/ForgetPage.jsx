import { useState } from "react";
import LoginImg from "../../assets/images/login.png";
import "./ForgetPage.css";
import backArrow from "../../assets/icons/back-arrow.png";
import { useForgetPasswordMutation } from "../../redux/services/api";
import { Link, useNavigate } from "react-router-dom";
function Forget() {
  const [email, setEmail] = useState("");
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async ev => {
    ev.preventDefault();
    setError("");
    try {
      if (email) {
        const res = await forgetPassword(email).unwrap();
        if (res?.status === 200 || res?.status === 201) {
          window.localStorage.setItem("email", email);
          navigate("/auth/otp");
        }
      }
    } catch (err) {
      if (err?.data) {
        setError(err.data.message);
      }
    }
  };
  return (
    <>
      <div className="d-flex min-vh-100 flex-md-column flex-lg-row">
        <div className="col-lg-6">
          <div className="login-img__container">
            <img src={LoginImg} alt="books" />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="content-container">
            <div className="content">
              <div className="content-header">
                <Link to="/auth/login" href="">
                  <img src={backArrow} alt="back-arrow" />
                </Link>
                <h1>Şifrəni unutmusan?</h1>
              </div>
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">E-mail </label>
                  <input onChange={ev => setEmail(ev.target.value)} className="form-input" type="email" placeholder="E-mailinizi qeyd edin" required={true} />
                </div>
                {error && (
                  <p className="text-start" style={{ color: "#E22F2F", fontFamily: "Inter", marginBottom: "12px", fontSize: "14px" }}>
                    {error}
                  </p>
                )}

                <div className="form-group">
                  <button className="submit_btn" type="submit">
                    {isLoading ? "Göndərilir..." : "Kod göndər"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Forget;
