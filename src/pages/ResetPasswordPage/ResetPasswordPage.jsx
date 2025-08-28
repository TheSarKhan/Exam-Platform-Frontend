import { useState } from "react";
import LoginImg from "../../assets/images/login.png";
import "./ResetPasswordPage.css";
import openEye from "../../assets/icons/openEye.png";
import closeEye from "../../assets/icons/closeEye.png";
import backArrow from "../../assets/icons/back-arrow.png";
import { useResetPasswordMutation } from "../../redux/services/api";
// import { useNavigate } from "react-router-dom";
import doneIcon from "../../assets/icons/greenDone.png";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function ResetPassword() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    paddingTop: "60px",
    paddingBottom: "60px",
    bgcolor: "background.paper",
    border: "2px solid #1865f2",
    boxShadow: 24,
    px: 4,
    borderRadius: "8px",
  };
  const [passShow, setPassShow] = useState(false);
  const [rePassShow, setRePassShow] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [ResetPassword, { isLoading }] = useResetPasswordMutation();
  const [open, setOpen] = useState(false);
  const email = localStorage.getItem("email");
  const uuid = localStorage.getItem("uuid");

  const [error, setError] = useState("");

  const toggleEye = () => {
    setPassShow(!passShow);
  };
  const toggleEye2 = () => {
    setRePassShow(!rePassShow);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setError("");
    try {
      const res = await ResetPassword({ email, password, uuid }).unwrap();
      console.log(res);

      if (res?.status === 200 || res?.status === 201) {
        localStorage.removeItem("email");
        localStorage.removeItem("uuid");
        handleOpen();
      }
    } catch (err) {
      if (err?.data) {
        setError(err.data);
      } else {
        setError("Bir xəta yarandı");
      }
      console.log(error);
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
                <Link to="/auth/otp">
                  <img src={backArrow} alt="back-arrow" />
                </Link>
                <h1>Şifrəni yenilə</h1>
              </div>
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="password">Yeni şifrə</label>
                  <div className="password-container">
                    <input onChange={ev => setPassword(ev.target.value)} required={true} className="w-100 form-input" type={passShow ? "text" : "password"} placeholder="Ən azı 8 simvol olmalıdır" />
                    <img className="showpassword_icon" onClick={toggleEye} src={passShow ? openEye : closeEye} alt="eye-icon" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Yeni şifrəni təsdiqlə </label>
                  <div className="password-container">
                    <input onChange={ev => setPassword2(ev.target.value)} required={true} className="w-100 form-input" type={rePassShow ? "text" : "password"} placeholder="Şifrəni yenidən yazın" />
                    <img className="showpassword_icon" onClick={toggleEye2} src={rePassShow ? openEye : closeEye} alt="eye-icon" />
                  </div>
                </div>
                <div className="form-group">
                  <button disabled={password == "" && true} className="submit_btn" type="submit">
                    {isLoading ? "Təsdiqlənir..." : "Təsdiqlə"}
                  </button>
                </div>
                {error && <p>{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 600 }}>
          <div className="text-center modal-box-body">
            <img src={doneIcon} alt="doneIcon" className="modal-done__icon" />
            <h2 id="parent-modal-title">Şifrə dəyişdirildi</h2>
            <p id="parent-modal-description">Şifrəniz uğurla dəyişdirildi</p>
            <div>
              <Link to="/auth/login" className="continue-btn text-decoration-none">
                Davam Et
              </Link>
            </div>
          </div>
        </Box>
      </Modal>
      {/* <button onClick={handleOpen} type="button">
        Click ele
      </button> */}
    </>
  );
}
export default ResetPassword;
