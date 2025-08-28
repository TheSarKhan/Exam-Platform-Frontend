import { useEffect, useState } from "react";
import LoginImg from "../../assets/images/login.png";
import "./LoginPage.css";
import openEye from "../../assets/icons/openEye.png";
import closeEye from "../../assets/icons/closeEye.png";
import backArrow from "../../assets/icons/back-arrow.png";
// import { useRegisterMutation } from "../../redux/services/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";

function Login() {
  const [passShow, setPassShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();

  const { loading, error, role, accessToken } = useSelector(state => state.auth);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  useEffect(() => {
    if (accessToken && role) {
      console.log("girdi");
      if (role === "TEACHER") {
        navigate("/teacher/dashboard");
      } else if (role === "STUDENT") {
        navigate("/student/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [accessToken, role, navigate]);
  const toggleEye = () => {
    setPassShow(!passShow);
  };

  return (
    <>
      {/* <div className="container"> */}
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
                <Link to='/' >
                  <img src={backArrow} alt="back-arrow" />
                </Link>
                <h1>Daxil Ol</h1>
              </div>
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">E-mail </label>
                  <input onChange={ev => setEmail(ev.target.value)} className="form-input" type="email" placeholder="E-mailinizi qeyd edin" required={true} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Şifrə </label>
                  <div className="password-container">
                    <input onChange={ev => setPassword(ev.target.value)} required={true} className="w-100 form-input" type={passShow ? "text" : "password"} placeholder="Şifrəni yazın" />
                    <img className="showpassword_icon" onClick={toggleEye} src={passShow ? openEye : closeEye} alt="eye-icon" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="text-end">
                    <Link to="/auth/forget-password" className="forget_link">
                      Şifrəni unutmusan?
                    </Link>
                  </div>
                </div>
                <div className="form-group">
                  <button className="submit_btn" type="submit">
                    Daxil Ol
                  </button>
                </div>
              </form>
              <div className="form-group text-center mt-3">
                <p>
                  Hesabın yoxdur?
                  <Link to="/auth/register" className="login_link mx-1" href="">
                    Qeydiyyatdan keç
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default Login;
