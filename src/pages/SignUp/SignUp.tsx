import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpMessages } from "../../constants/messages";
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
            <h2 className="signup-title">{signUpMessages.title}</h2>

            <Radio
              radioInfo={{
                options:  [
                            signUpMessages?.userOption || "User",
                            signUpMessages?.businessOption || "Business",
                          ],
                radioName: "signupType",
                newLine: false, 
              }}
              value={formType === "user" ? (signUpMessages?.userOption || "User") : (signUpMessages?.businessOption || "Business")}
              onChange={(val) => {
               
                const normalized = val.toLowerCase().includes("user") ? "user" : "business";
                setFormType(normalized as "user" | "business");
              }}
              className="signup-toggle" 
            />


            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
             
              {error && <div className="error-message">{error}</div>}

              {formType === "user" && (
                <div className="signup-user-form">
                  <TextInput
                    placeholder={signUpMessages?.firstNamePlaceholder || "First Name"}
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, firstName: e.target.value }))
                    }
                    wrapperClassName="mb-15"
                  />
                  <TextInput
                    placeholder={signUpMessages?.lastNamePlaceholder || "Last Name"}
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
                    placeholder={signUpMessages?.businessNamePlaceholder|| "Business Name"}
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
                placeholder={signUpMessages?.emailPlaceholder || "Email address"}
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
                    {signUpMessages?.termsText || "I agree to"}{" "}
                    <a
                      href={signUpMessages?.termsUrl || "/documents/Terms.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {signUpMessages?.termsLinkText || "Terms & Conditions"}
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
                label={signUpMessages?.signUpButton || "Sign Up"}
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

