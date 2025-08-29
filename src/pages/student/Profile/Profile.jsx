import "./Profile.css";
import React, { useState } from "react";
import examPageIcon from "../../../assets/icons/examPaperIcon.png";
import wallet from "../../../assets/icons/wallet.png";
import settingIcon from "../../../assets/icons/settingsIcon.png";
import logoutIcon from "../../../assets/icons/logout.png";
import ExamCard from "../../../components/ExamCard/ExamCard";
import { examData } from "../../../staticDatas/examData";
import countryCodes from "../../../staticDatas/countryCode.json";
import ProfileEmptyContent from "../../../components/ProfileEmptyContent/ProfileEmptyContent";
import infoIcon from "../../../assets/icons/infoIcon.png";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import openEye from "../../../assets/icons/openEye.png";
import closeEye from "../../../assets/icons/closeEye.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/AuthSlice";

function Profile() {
  const [activeTab, setActiveTab] = useState("examlar");
  const [activeTabExam, setActiveTabExam] = useState("admin");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCode, setSelectedCode] = useState("+994");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passShow, setPassShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const dispatch=useDispatch()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenLogout = () => setOpenLogout(true);
  const handleCloseLogout = () => setOpenLogout(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    border: "1px solid rgba(0, 0, 0, 0.40)",
    boxShadow: 24,
    borderRadius: "14px",
    maxWidth: "584px",
    padding: "55px 122px",
  };
  const toggleEye = () => {
    setPassShow(!passShow);
  };
  const buys = [
    {
      id: 1,
      status: "Tamamlanıb",
      price: "3.00 AZN",
      subject: "Tənliklərin qurulması və həll olunması",
      date: "22.06.21",
    },
    {
      id: 2,
      status: "Tamamlanıb",
      price: "3.00 AZN",
      subject: "Tənliklərin qurulması",
      date: "22.06.21",
    },
    {
      id: 3,
      status: "Tamamlanıb",
      price: "3.00 AZN",
      subject: "Tənliklərin qurulması ilə həll olunması",
      date: "22.06.21",
    },
    {
      id: 4,
      status: "Tamamlanıb",
      price: "3.00 AZN",
      subject: "Tənliklərin qurulması",
      date: "22.06.21",
    },
  ];

  const handleSubmit = async ev => {
    ev.preventDefault();
    setError("");
    const user = {
      fullName: fullname,
      email: email,
      password: password,
      phoneNumber: `${selectedCode}${phone}`,
    };
    try {
      const res = await register(user).unwrap();
      console.log(res);

      if (res?.status === 200 || res?.status === 201) {
        console.log("girdi"); //ishleyir navigate bidene ishlemir
        // navigate("/login");
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
  const handleLogout = async =>{
    dispatch(logout())
  }
  const handlePasswordChange = async ev => {
    ev.preventDefault();
    setError("");
    const user = {
      fullName: fullname,
      email: email,
      password: password,
      phoneNumber: `${selectedCode}${phone}`,
    };
    try {
      const res = await register(user).unwrap();
      console.log(res);

      if (res?.status === 200 || res?.status === 201) {
        console.log("girdi"); //ishleyir navigate bidene ishlemir
        // navigate("/login");
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
  const renderContent = () => {
    switch (activeTab) {
      case "examlar":
        return (
          <div className="main-content">
            <div className="content-header">
              <h2>Bütün imtahanlarım</h2>
              <div className="tabs">
                <span className={`tab-link ${activeTabExam === "admin" ? "active" : ""}`} onClick={() => setActiveTabExam("admin")}>
                  Admindən alınan imtahanlar
                </span>
                <span className={`tab-link ${activeTabExam === "teacher" ? "active" : ""}`} onClick={() => setActiveTabExam("teacher")}>
                  Müəllimin göndərdiyi imtahanlar
                </span>
              </div>
            </div>
            <div className="exam-list">{activeTabExam === "admin" ? examData.map(exam => <ExamCard key={exam.id} {...exam} butttonText={"Nəticəmə bax"} />) : examData.map(exam => <ExamCard key={exam.id} {...exam} butttonText={"Nəticəmə bax"} />)}</div>
          </div>
        );
      case "alis-tarixcesi":
        return (
          <div className="main-content">
            <h3>Alış tarixçəsi</h3>
            <div className="profile-table">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Məbləğ</TableCell>
                      <TableCell align="right">İmtahan adı</TableCell>
                      <TableCell align="right">Tarix</TableCell>
                      {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {buys.map(buy => (
                      <TableRow key={buy.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <circle cx="10" cy="10.2598" r="10" fill="#0AAE28" />
                          </svg>
                          <span className=" px-1">{buy.status}</span>
                        </TableCell>
                        <TableCell align="right">{buy.price}</TableCell>
                        <TableCell align="right">{buy.subject}</TableCell>
                        <TableCell align="right">{buy.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* <div className="">
              <ProfileEmptyContent />
            </div> */}
          </div>
        );
      case "tenzimləmələr":
        return (
          <div className="main-content">
            <h3>Tənzimləmələr</h3>
            <div className="profile-form">
              <form method="post" onSubmit={handleSubmit}>
                <div className="profile-form-top">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="fullname">Ad və soyad </label>
                    <input onChange={ev => setFullname(ev.target.value)} required={true} className="form-input" type="text" placeholder="Tam halını qeyd edin" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail </label>
                    <input onChange={ev => setEmail(ev.target.value)} className="form-input" type="email" placeholder="example@gmail.com" required={true} />
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
                </div>
                <div className="profile-form-bottom">
                  <div className="form-group profile-form-group">
                    <button onClick={handleOpen} className="profile-change-pass" type="button">
                      Şifrəni dəyiş
                    </button>
                    <button className="submit_btn profile-form-submit" type="submit">
                      Təsdiqlə
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="profile-page-container">
        <main className="main-layout">
          <aside className="sidebar">
            {/* <button className="back-button">← Geri qayıt</button> */}
            <div className="profile-info">
              <img src="https://placehold.co/100x100" alt="Profile" className="profile-image" />
              <h2 className="profile-name">Teyran Nağıyeva</h2>
              <p className="profile-role">Şagird</p>
            </div>
            <nav className="sidebar-nav">
              <a href="#" className={`nav-item ${activeTab === "examlar" ? "active" : ""}`} onClick={() => setActiveTab("examlar")}>
                <img src={examPageIcon} alt="" />
                <span>İmtahanlarım</span>
              </a>
              <a href="#" className={`nav-item ${activeTab === "alis-tarixcesi" ? "active" : ""}`} onClick={() => setActiveTab("alis-tarixcesi")}>
                <img src={wallet} alt="" />
                <span>Alış tarixçəsi</span>
              </a>
              <a href="#" className={`nav-item ${activeTab === "tenzimləmələr" ? "active" : ""}`} onClick={() => setActiveTab("tenzimləmələr")}>
                <img src={settingIcon} alt="" />
                <span>Tənzimləmələr</span>
              </a>
            </nav>
            <button onClick={handleOpenLogout} className="nav-item sign-out-btn">
              <img src={logoutIcon} alt="logoutIcon" />
              <span>Hesabdan çıx</span>
            </button>
          </aside>

          <section className="content-section-profile ">{renderContent()}</section>
        </main>
      </div>
      <div className="profile-modal">
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <form onSubmit={handlePasswordChange} action="">
              <div className="form-group">
                <label htmlFor="password">Şifrə </label>
                <div className="password-container">
                  <input min={8} onChange={ev => setPassword(ev.target.value)} required={true} className="w-100 form-input" type={passShow ? "text" : "password"} placeholder="Şifrəni yazın" />
                  <img className="showpassword_icon" onClick={toggleEye} src={passShow ? openEye : closeEye} alt="eye-icon" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Yeni şifrə </label>
                <div className="password-container">
                  <input min={8} onChange={ev => setPassword(ev.target.value)} required={true} className="w-100 form-input" type={passShow ? "text" : "password"} placeholder="Şifrəni yazın" />
                  <img className="showpassword_icon" onClick={toggleEye} src={passShow ? openEye : closeEye} alt="eye-icon" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Yeni şifrəni təsdiqlə </label>
                <div className="password-container">
                  <input min={8} onChange={ev => setPassword(ev.target.value)} required={true} className="w-100 form-input" type={passShow ? "text" : "password"} placeholder="Şifrəni yazın" />
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
                  Təsdiqlə
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="profile-modal-logout">
        <Modal open={openLogout} onClose={handleCloseLogout} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div className="text-center">
              <img src={infoIcon} alt="infoIcon" />
              <h2 className="logout-text">Hesabdan çıxmaq istədiyinizdən əminsiniz mi?</h2>
              <div className="logut-btns">
                <button onClick={handleLogout} type="button" className="yes-btn">Bəli</button>
                <button onClick={handleCloseLogout} type="button" className="no-btn">Xeyr</button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Profile;
