import { Link } from "react-router-dom";
import { useState } from "react";
import "./ForgotPassword.css";
import EmailInput from "../../components/EmailInput/EmailInput";
import Button from "../../components/Buttons/Button";
import { forgotPasswordMessages } from "../../constants/messages";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isUsername = (v: string) => /^[a-zA-Z0-9._-]{3,30}$/.test(v);

export default function ForgotPassword() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSend = () => {
    const v = input.trim();

    if (!v) {
      setError(forgotPasswordMessages?.emptyInputError || "Please enter your email or username.");
      setSuccessMessage("");
      return;
    }

    
    const valid = v.includes("@") ? isEmail(v) : isUsername(v);
    if (!valid) {
      setError(forgotPasswordMessages?.invalidEmailError ||"Please enter a valid email or username.");
      setSuccessMessage("");
      return;
    }

    
    setError("");
    setSuccessMessage(forgotPasswordMessages?.resetLinkSent ||"If this account exists, a reset link has been sent.");
    
  };

  return (
    <div className="forgot-body">
      <div className="forget-container">
        <div className="forget-left-section">
          <h2 className="forget-title">{forgotPasswordMessages?.title || "Forgot Password?"}</h2>

          <div className="forget-input-container">
            {error && <div className="error-message">{error}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <EmailInput
              mode={2}                               
              value={input}
              onChange={setInput}
              required
              placeholder={forgotPasswordMessages?.inputPlaceholder || "Email address or Username"}
            />
          </div>

          <p className="forget-back-link">
            {forgotPasswordMessages?.backToLoginText || "Back to "}
            <Link to="/Login">{forgotPasswordMessages?.loginLinkText || "Log in"}</Link>
          </p>

          <Button
            label={forgotPasswordMessages?.sendButton || "Send"}
            variant="primary"
            onClick={handleSend}
            styles={{
              bgColor: "#ff7f00",
              color: "#ffffff",
              border: "2px solid #ff7f00",
              borderRadius: "50px",
              fontSize: "16px",
              padding: "12px 20px",
              margin: "15px 0 0 0",
              fontWeight: 600,
              hoverBgColor: "#e65c00",
              hoverBorder: "2px solid #e65c00",
              hoverColor: "#ffffff",
              transition: "all 0.2s ease",
            }}
          />


         

          <div className="divider">
            <span>{forgotPasswordMessages?.orDivider || "OR"}</span>
          </div>

          <div className="forget-social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <div className="forget-right-section">
          <h1 className="forget-org-name">{forgotPasswordMessages?.organizationName || "FilmyAI"}</h1>
          <p className="forget-org-tag-line">{forgotPasswordMessages?.tagLine || "Start your journey today!"}</p>
        </div>
      </div>
    </div>
  );
}
