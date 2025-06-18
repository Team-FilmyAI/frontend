import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/LoginSignUp/SignUp.css";

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
  const handleChange = (e) => {
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
        setError("First and last name are required.");
        return;
      }
    } else if (formType === "business") {
      if (!formData.businessName) {
        setError("Business name is required.");
        return;
      }
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      setError("A valid email address is required.");
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!formData.termsAccepted) {
      setError("You must accept the Terms & Conditions.");
      return;
    }

    setError(""); // Clear error
    setPopupVisible(true); // Show popup

    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="signup-left-section">
          <div className="signup-form-container">
            <h2 className="signup-title">Sign Up</h2>

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
                <span>User</span>
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
                <span>Business</span>
              </label>
            </div>

            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              {/* Error Message */}
              {error && <div className="error-message">{error}</div>}

              {formType === "user" && (
                <div className="signup-user-form">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="signup-form-input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
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
                    placeholder="Business Name"
                    className="signup-form-input"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
              )}

              <input
                type="email"
                placeholder="Email address"
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
                  I agree to{" "}
                  <a
                    href="/documents/Terms.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <button type="button" className="signup-btn" onClick={handleSubmit}>
                Sign Up
              </button>
            </form>

            <p className="signup-login-prompt">
              Already have an account? <Link to="/Login">Click here</Link> to login
            </p>
            <div className="divider">
              <span>OR</span>
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
          <h1 className="login-org-name">FilmyAI</h1>
          <p className="login-org-tag-line">Start your journey today!</p>
        </div>

        {popupVisible && (
          <>
            <div
              className="signup-overlay"
              onClick={() => setPopupVisible(false)}
            ></div>
            <div className="signup-popup">
              <p>Thank you for signing up!</p>
              <button
                onClick={() => setPopupVisible(false)}
                className="signup-close-btn"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
