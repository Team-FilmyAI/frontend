import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/LoginSignUp/Forgot.css";

export default function Forgot() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!input.trim()) {
      setError("Please enter your email or username.");
      setSuccessMessage("");
      return;
    }

    // If input looks like an email, validate it
    if (input.includes("@") && !emailRegex.test(input)) {
      setError("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    // Clear errors and simulate success
    setError("");
    setSuccessMessage("Reset link has been sent to your email.");
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
            <input
              type="text"
              placeholder="Email address or Username"
              className="forget-input-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <p className="forget-back-link">
            Back to <Link to="/Login">Log in</Link>
          </p>

          <button className="forget-send-btn" onClick={handleSend}>
            Send
          </button>

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
