import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpMessages } from "../../constants/messages";
import "./SignUp.css";

export default function Signup() {
  const [formType, setFormType] = useState("user");
  const [popupVisible, setPopupVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  // Input change handler
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation and submit
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formType === "user") {
      if (!formData.firstName || !formData.lastName) {
        setError(signUpMessages.nameRequiredError);
        return;
      }
    } else if (formType === "business") {
      if (!formData.businessName) {
        setError(signUpMessages.businessNameRequiredError);
        return;
      }
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      setError(signUpMessages.emailRequiredError);
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setError(signUpMessages.passwordLengthError);
      return;
    }

    if (!formData.termsAccepted) {
      setError(signUpMessages.termsRequiredError);
      return;
    }

    setError(""); // Clear error
    setPopupVisible(true); // Show popup

    setTimeout(() => {
      navigate("/LandingPage");
    }, 1500);
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="signup-left-section">
          <div className="signup-form-container">
            <h2 className="signup-title">{signUpMessages.title}</h2>

            <div className="signup-toggle">
              <label>
                <input
                  type="radio"
                  name="type"
                  value="user"
                  checked={formType === "user"}
                  onChange={() => setFormType("user")}
                  className="signup-form-radio-input"
                />
                <span>{signUpMessages.userOption}</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="business"
                  checked={formType === "business"}
                  onChange={() => setFormType("business")}
                  className="signup-form-radio-input"
                />
                <span>{signUpMessages.businessOption}</span>
              </label>
            </div>

            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              {/* Error Message */}
              {error && <div className="error-message">{error}</div>}

              {formType === "user" && (
                <div className="signup-user-form">
                  <input
                    type="text"
                    placeholder={signUpMessages.firstNamePlaceholder}
                    className="signup-form-input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder={signUpMessages.lastNamePlaceholder}
                    className="signup-form-input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              )}

              {formType === "business" && (
                <div className="signup-business-form">
                  <input
                    type="text"
                    placeholder={signUpMessages.businessNamePlaceholder}
                    className="signup-form-input"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
              )}

              <input
                type="email"
                placeholder={signUpMessages.emailPlaceholder}
                className="signup-form-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="signup-form-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="signup-terms">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <label htmlFor="terms">
                  {signUpMessages.termsText}{" "}
                  <a
                    href={signUpMessages.termsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {signUpMessages.termsLinkText}
                  </a>
                </label>
              </div>

              <button type="button" className="signup-btn" onClick={handleSubmit}>
                {signUpMessages.signUpButton}
              </button>
            </form>

            <p className="signup-login-prompt">
              {signUpMessages.loginPromptText} <Link to="/Login">{signUpMessages.loginLinkText}</Link> {signUpMessages.loginPromptSuffix}
            </p>
            <div className="divider">
              <span>{signUpMessages.orDivider}</span>
            </div>

            <div className="signup-social-icons">
              <i className="fab fa-google"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>

        <div className="signup-right-section">
          <h1 className="login-org-name">{signUpMessages.organizationName}</h1>
          <p className="login-org-tag-line">{signUpMessages.tagLine}</p>
        </div>

        {popupVisible && (
          <>
            <div
              className="signup-overlay"
              onClick={() => setPopupVisible(false)}
            ></div>
            <div className="signup-popup">
              <p>{signUpMessages.thankYouMessage}</p>
              <button
                onClick={() => setPopupVisible(false)}
                className="signup-close-btn"
              >
                {signUpMessages.closeButton}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
