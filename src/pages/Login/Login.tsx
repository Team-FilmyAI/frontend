import { Link, useNavigate } from "react-router-dom";
import { loginMessages } from "../../constants/messages";
import { useState, useMemo } from "react";
import "./Login.css";

import EmailInput from "../../components/EmailInput/EmailInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Button from "../../components/Buttons/Button";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); 
  
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isUsername = (v: string) => /^[a-zA-Z0-9._-]{3,30}$/.test(v);

  const idPlaceholder = useMemo(
    () => loginMessages?.emailPlaceholder || "Email address or Username",
    []
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const v = identifier.trim();

    
let valid = true;
   setIdError("");
   setPasswordError("");

    if (!v) {
      setIdError(loginMessages?.emailRequiredError || "Email or username is required.");
      valid = false;
    } else if (!(v.includes("@") ? isEmail(v) : isUsername(v))) {
      setIdError(loginMessages?.invalidEmailError || "Please enter a valid email or username.");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError(loginMessages?.passwordRequiredError || "Password is required.");
      valid = false;
    }

   if (!valid) return;

    
    navigate(loginMessages?.profileRoute || "/profile");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <h2 className="login-title">{loginMessages?.title || "Login"}</h2>
          <form className="login-form" onSubmit={handleLogin} noValidate>

           <EmailInput
              value={identifier}
              onChange={(v) => {
                setIdentifier(v);
                if (idError) setIdError("");
              }}
              placeholder={idPlaceholder}
              mode={2}
              required={false}
              className={idError ? "error" : ""}
            />
            {idError && <div className="error-messageL">{idError}</div>}
            <PasswordInput
              label=""
              placeholder={loginMessages?.passwordPlaceholder || "Password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              error={passwordError}
            />
            

            <div className="forgot-password">
              <Link to={loginMessages.forgotPasswordRoute}>{loginMessages.forgotPasswordText}</Link>
            </div>

           
            <Button
              type="submit"
              label={loginMessages?.loginButtonText || "Log in"}
              variant="primary"
              fullWidth
              styles={{bgColor: "var(--orange)",color: "var(--white)",border: "2px solid var(--orange)",height: "48px",fontSize: "16px",fontWeight: 600,borderRadius: "24px",padding: "0 16px",hoverBgColor: "#e65c00",hoverBorder: "2px solid #e65c00",hoverColor: "var(--white)",transition: "all 0.2s ease",}}
            />
            
            <p className="signup-link">
              {loginMessages.signupLinkText}<Link to={loginMessages.signupRoute}>{loginMessages.signupLinkText}</Link>
            </p>
            <div className="divider">
              <span>{loginMessages.orDivider}</span>
            </div>
            <div className="social-icons">
              <i className="fab fa-google"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </form>
        </div>
        <div className="login-right">
          <h1 className="login-org-name">{loginMessages.organizationName}</h1>
          <p className="login-org-tag-line">{loginMessages.tagLine}</p>
        </div>
      </div>
    </div>
  );
}



