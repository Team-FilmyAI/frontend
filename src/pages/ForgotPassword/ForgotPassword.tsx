import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPasswordMessages } from "../../constants/messages";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!input.trim()) {
      setError(forgotPasswordMessages.emptyInputError);
      setSuccessMessage("");
      return;
    }

    // If input looks like an email, validate it
    if (input.includes("@") && !emailRegex.test(input)) {
      setError(forgotPasswordMessages.invalidEmailError);
      setSuccessMessage("");
      return;
    }

    // Clear errors and simulate success
    setError("");
    setSuccessMessage(forgotPasswordMessages.resetLinkSent);
    // TODO: Replace with actual API logic
  };

  return (
    <div className="forgot-body">
      <div className="forget-container">
        <div className="forget-left-section">
          <h2 className="forget-title">{forgotPasswordMessages.title}</h2>

          <div className="forget-input-container">
            {error && <div className="error-message">{error}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <input
              type="text"
              placeholder={forgotPasswordMessages.inputPlaceholder}
              className="forget-input-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <p className="forget-back-link">
            {forgotPasswordMessages.backToLoginText}<Link to="/Login">{forgotPasswordMessages.loginLinkText}</Link>
          </p>

          <button className="forget-send-btn" onClick={handleSend}>
            {forgotPasswordMessages.sendButton}
          </button>

          <div className="divider">
            <span>{forgotPasswordMessages.orDivider}</span>
          </div>

          <div className="forget-social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <div className="forget-right-section">
          <h1 className="forget-org-name">{forgotPasswordMessages.organizationName}</h1>
          <p className="forget-org-tag-line">{forgotPasswordMessages.tagLine}</p>
        </div>
      </div>
    </div>
  );
}
