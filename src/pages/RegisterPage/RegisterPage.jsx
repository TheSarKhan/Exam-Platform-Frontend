import { useEffect, useState } from "react";
import LoginImg from "../../assets/images/login.png";
import "./RegisterPage.css";
import countryCodes from "../../staticDatas/countryCode.json";
import openEye from "../../assets/icons/openEye.png";
import closeEye from "../../assets/icons/closeEye.png";
import googleIcon from "../../assets/icons/google.png";
import { useGetTermsQuery, useRegisterMutation } from "../../redux/services/api";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function Register() {
  const [selectedCode, setSelectedCode] = useState("+994");
  const [passShow, setPassShow] = useState(false);
  const [selected, setSelected] = useState("TEACHER");
  const [isChecked, setIsChecked] = useState(false);
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const { data, isFetching } = useGetTermsQuery();
  const [teacher, setTeacher] = useState(true);
  const [student, setStudent] = useState(false);
  const [studentTerms, setStudentTerms] = useState(null);
  const [teacherTerms, setTeacherTerms] = useState(null);
  const style = {
    position: "absolute",
    top: "50%",
    left: "75%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "1px solid #E9E9E9",
    boxShadow: 24,
    borderRadius: "10px",
    padding: "25px 19px",
    maxWidth: "524px",
    maxHeight: "600px",
    width: "100%",
    height: "100%",
  };

  const toggleEye = () => {
    setPassShow(!passShow);
  };
  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    if (data && data.length > 0) {
      const studentTerm = data.find(term => term.name === "student");
      const teacherTerm = data.find(term => term.name === "teacher");

      if (studentTerm) {
        setStudentTerms(studentTerm.description);
      }

      if (teacherTerm) {
        setTeacherTerms(teacherTerm.description);
      }
    }
  }, [data]);

  const handleSubmit = async ev => {
    ev.preventDefault();
    setError("");
    const user = {
      fullName: fullname,
      email: email,
      password: password,
      phoneNumber: `${selectedCode}${phone}`,
      role: selected,
      isAcceptTerms: isChecked,
    };
    try {
      const res = await register(user).unwrap();
      console.log(res);

      if (res?.status === 200 || res?.status === 201) {
        console.log("girdi"); //ishleyir navigate bidene ishlemir
        navigate("/login");
      }
    } catch (err) {
      if (err?.data) {
        setError(err.data);
      } else {
        setError("Bir xəat yarandı");
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
                <h1>Qeydiyyatdan keç</h1>
              </div>
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Ad və soyad </label>
                  <input onChange={ev => setFullname(ev.target.value)} required={true} className="form-input" type="text" placeholder="Tam halını qeyd edin" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Əlaqə nömrəsi</label>
                  <div className="phone-input">
                    <select value={selectedCode} onChange={e => setSelectedCode(e.target.value)} className="country-code-select">
                      {countryCodes.map((c, index) => (
                        <option key={index} value={c.dial_code}>
                          {c.dial_code}
                        </option>
                      ))}
                    </select>
                    <input maxLength={9} type="tel" id="phone" className="phone-number-input" placeholder="00 - 000 00 00" value={phone} required={true} onChange={e => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail </label>
                  <input onChange={ev => setEmail(ev.target.value)} className="form-input" type="email" placeholder="example@gmail.com" required={true} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Şifrə </label>
                  <div className="password-container">
                    <input onChange={ev => setPassword(ev.target.value)} required={true} className="w-100 form-input" type={passShow ? "text" : "password"} placeholder="Şifrəni yazın" />
                    <img className="showpassword_icon" onClick={toggleEye} src={passShow ? openEye : closeEye} alt="eye-icon" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="roles">
                    <button
                      style={{
                        backgroundColor: selected === "TEACHER" ? "rgba(24, 101, 242, 1)" : "white",
                        color: selected === "TEACHER" ? "white" : "rgba(0, 0, 0, 0.6)",
                        padding: "10px 20px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                        fontWeight: "500",
                        borderRadius: "8px 0 0 8px",
                        width: "50%",
                      }}
                      type="button"
                      onClick={() => setSelected("TEACHER")}
                    >
                      Müəllim
                    </button>

                    <button
                      style={{
                        backgroundColor: selected === "STUDENT" ? "rgba(24, 101, 242, 1)" : "white",
                        color: selected === "STUDENT" ? "white" : "rgba(0, 0, 0, 0.6)",
                        padding: "10px 20px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                        fontWeight: "500",
                        borderRadius: "0 8px 8px 0",
                        width: "50%",
                      }}
                      type="button"
                      onClick={() => setSelected("STUDENT")}
                    >
                      Şagird
                    </button>
                  </div>
                </div>
                <div className="form-group d-flex flex-row align-items-center">
                  <input checked={isChecked} onChange={handleCheckboxChange} className="checkbox form-input" type="checkbox" />
                  <label className="m-0" htmlFor="conditions">
                    <button onClick={handleOpen} className="condition_btn">
                      Şərtlər və qaydaları
                    </button>{" "}
                    oxudum, razıyam.
                  </label>
                </div>
                <div className="form-group">
                  <button className="submit_btn" disabled={!isChecked} type="submit">
                    Hesab yarat
                  </button>
                </div>
              </form>
              {/* <div className="form-group">
                <a className="register_link" href="">
                  Qeydiyyatdan keç
                </a>
              </div> */}
              <div className="form-group">
                <a className="register_google" href="">
                  <img src={googleIcon} alt="" />
                  <span>Google ilə qeydiyyatdan keç</span>
                </a>
              </div>
              <div className="form-group text-center ">
                <p>
                  Hesabın var?
                  <Link to='/auth/login' className="login_link mx-1" href="">
                    Daxil ol
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="register-modal">
            <div className="register-modal__nav">
              <button
                className="register-modal__btn"
                onClick={() => {
                  setTeacher(true);
                  setStudent(false);
                }}
                style={{ borderBottom: teacher && "1px solid #1865F2" }}
                type="button"
              >
                Müəllimlər üçün qaydalar
              </button>
              <button
                className="register-modal__btn"
                onClick={() => {
                  setStudent(true);
                  setTeacher(false);
                }}
                style={{ borderBottom: student ? "1px solid #1865F2" : "none" }}
                type="button"
              >
                Şagirdlər üçün qaydalar
              </button>
            </div>
            <div className="register-modal__content"></div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
export default Register;
