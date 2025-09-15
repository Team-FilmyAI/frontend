import { Link } from "react-router-dom";
import { useState } from "react";
import "./ForgotPassword.css";
import EmailInput from "../../components/EmailInput/EmailInput";
import Button from "../../components/Buttons/Button";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isUsername = (v: string) => /^[a-zA-Z0-9._-]{3,30}$/.test(v);

export default function ForgotPassword() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSend = () => {
    const v = input.trim();

    if (!v) {
      setError("Please enter your email or username.");
      setSuccessMessage("");
      return;
    }

    // mode = 2 logic: if it has '@', validate as email; otherwise validate as username
    const valid = v.includes("@") ? isEmail(v) : isUsername(v);
    if (!valid) {
      setError("Please enter a valid email or username.");
      setSuccessMessage("");
      return;
    }

    // Clear errors and simulate success
    setError("");
    setSuccessMessage("If this account exists, a reset link has been sent.");
    // TODO: Replace with actual API logic
  };

  return (
    <div className="forgot-body">
      <div className="forget-container">
        <div className="forget-left-section">
          <h2 className="forget-title">Forgot Password?</h2>

          <div className="forget-input-container">
            {error && <div className="error-message">{error}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <EmailInput
              mode={2}                               // 1=email, 2=email|username, 3=email|username|phone
              value={input}
              onChange={setInput}
              required
              placeholder="Email address or Username"
            />
          </div>

          <p className="forget-back-link">
            Back to <Link to="/Login">Log in</Link>
          </p>

          <Button
            label="Send"
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
            <span>OR</span>
          </div>

          <div className="forget-social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <div className="forget-right-section">
          <h1 className="forget-org-name">FilmyAI</h1>
          <p className="forget-org-tag-line">Start your journey today!</p>
        </div>
      </div>
    </div>
  );
}
