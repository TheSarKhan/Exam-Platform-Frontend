import { useEffect, useRef, useState } from "react";
import LoginImg from "../../assets/images/login.png";
import "./OTPPage.css";
import backArrow from "../../assets/icons/back-arrow.png";
import { useForgetPasswordMutation, useVerifyCodeMutation } from "../../redux/services/api";

import { useDispatch } from "react-redux";
import { setEmailState } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

function OTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(120);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const inputRefs = useRef([]);
  const isFormValid = otp.every(digit => digit !== "");
  const [verifyCode, { isLoading }] = useVerifyCodeMutation();
  const [error, setError] = useState("");
  const [forgetPassword] = useForgetPasswordMutation();
  const dispatch = useDispatch();
  const email = window.localStorage.getItem("email");
  const navigate = useNavigate();
  useEffect(() => {
    if (isTimerActive) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setIsTimerActive(false);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isTimerActive]);

  const handleResend = async () => {
    setCountdown(120);
    setIsTimerActive(true);
    try {
      if (email) {
        const res = await forgetPassword(email).unwrap();
        if (res?.status === 200 || res?.status === 201) {
          dispatch(setEmailState(email));
        }
      }
    } catch (err) {
      if (err?.data) {
        setError(err.data);
      } else {
        setError("Bir xəta yarandı");
      }
      console.log(err);
    }
  };

  const handleChange = (index, event) => {
    const { value } = event.target;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    const code = otp.join("");
    if (code.length === 4) {
      try {
        const res = await verifyCode({ email, code }).unwrap();
        console.log(res);

        if (res?.status === 200 || res?.status === 201) {
          localStorage.setItem("uuid", res.data);
          navigate("/auth/reset-password");
        }
      } catch (err) {
        if (err?.data) {
          setError(err.data.message);
          console.log(err.data.message);
        } else {
          setError("Bir xəta yarandı");
        }
      }
    } else {
      console.log("4 xanalı kod daxil elə");
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
                <Link to="/auth/forget-password" href="">
                  <img src={backArrow} alt="back-arrow" />
                </Link>
                <h1 className="text-start">Zəhmət olmasa mailinizi yoxlayın</h1>
              </div>
              <p className="otp-email">
                Kod <span className="otp-email__text">{email}</span> hesabına göndərildi
              </p>
              <form onSubmit={handleSubmit}>
                <div className="otp-inputs">
                  {otp.map((value, index) => (
                    <input key={index} type="tel" maxLength="1" value={value} onChange={e => handleChange(index, e)} onKeyDown={e => handleKeyDown(index, e)} className="otp-input" ref={el => (inputRefs.current[index] = el)} autoFocus={index === 0} />
                  ))}
                </div>
                {error && (
                  <p className="text-start" style={{ color: "#E22F2F", fontFamily: "Inter", marginBottom: "12px", fontSize: "14px" }}>
                    {error}
                  </p>
                )}

                <button className="submit_btn" type="submit" disabled={!isFormValid}>
                  {isLoading ? "Təsdiqlənir..." : "Təsdiqlə"}
                </button>
              </form>
              <div className="resend-container">
                <button onClick={handleResend} disabled={countdown && countdown != 0} className="resend_btn">
                  Kodu yenidən göndər
                </button>
                <span>{`${String(Math.floor(countdown / 60)).padStart(2, "0")}:${String(countdown % 60).padStart(2, "0")}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OTP;
