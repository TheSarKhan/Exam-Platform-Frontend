import "./PrivacyExamConfirmPage.css";
import infoIcon from "../../assets/icons/infoIcon.png";
import { useState, useRef } from "react";

function PrivacyExamConfirmPage() {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const handleCopy = async () => {
    const valueToCopy = inputRef.current.value;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(valueToCopy);
      } else {
        inputRef.current.select();
        document.execCommand("copy");
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Kopyalanaml:", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <img src={infoIcon} alt="infoIcon" />
          <h3 className="modal-title">Diqqət!</h3>
        </div>

        <div className="modal-body">
          <p className="modal-text">Gizli imtahan təsdiq edildi. İmtahan şifrəniz aşağıdadır. Aşağıdan kopyalayıb göndərə bilərsiniz</p>
          <div className="password-input-group">
            <input ref={inputRef} type="text" className="password-input" value={password ? password :'2451'} readOnly />
            <button onClick={handleCopy} className="copy-button">
              {copied ? "Kopyalandı ✅" : "Şifrəni kopyala"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyExamConfirmPage;
