import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

import Radio from "../../components/Radio/Radio";
import TextInput from "../../components/TextInput/TextInput";
import EmailInput from "../../components/EmailInput/EmailInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Buttons/Button";

export default function Signup() {
  const [formType, setFormType] = useState<"user" | "business">("user");
  const [popupVisible, setPopupVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


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

    setError(""); 
    setPopupVisible(true); 

    setTimeout(() => {
      navigate("/LandingPage");
    }, 1500);
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className="signup-left-section">
          <div className="signup-form-container">
            <h2 className="signup-title">Sign Up</h2>

            <Radio
              radioInfo={{
                options: ["User", "Business"],
                radioName: "signupType",
                newLine: false, 
              }}
              value={formType === "user" ? "User" : "Business"}
              onChange={(val) => setFormType(val.toLowerCase() as "user" | "business")}
              className="signup-toggle" 
            />


            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
             
              {error && <div className="error-message">{error}</div>}

              {formType === "user" && (
                <div className="signup-user-form">
                  <TextInput
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, firstName: e.target.value }))
                    }
                    wrapperClassName="mb-15"
                  />
                  <TextInput
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, lastName: e.target.value }))
                    }
                    wrapperClassName="mb-15"
                  />
                </div>
              )}

              

              {formType === "business" && (
                <div className="signup-business-form">
                  <TextInput
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, businessName: e.target.value }))
                    }
                  />
                </div>
              )}

              

              <EmailInput
                value={formData.email}
                onChange={(val) => setFormData((p) => ({ ...p, email: val }))}
                placeholder="Email address"
                mode={1}        
                required
                className=""    
              />



              <PasswordInput
                label=""
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
              />

              <Checkbox
                label={
                  <>
                    I agree to{" "}
                    <a href="/documents/Terms.pdf" target="_blank" rel="noopener noreferrer">
                      Terms &amp; Conditions
                    </a>
                  </>
                }
                checked={formData.termsAccepted}
                onChange={(checked) =>
                  setFormData((p) => ({ ...p, termsAccepted: checked }))
                }
                className="signup-terms"
              />

              
              <Button
                type="button"
                label="Sign Up"
                variant="primary"
                fullWidth
                onClick={handleSubmit}
                styles={{
                  bgColor: "#ff7f00",
                  color: "#ffffff",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "20px",
                  padding: "0 16px",
                  hoverBgColor: "#e65c00",
                  transition: "all 0.2s ease",
                }}
              />

              
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

