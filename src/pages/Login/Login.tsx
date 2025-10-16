import { Link, useNavigate } from "react-router-dom";
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
    () => "Email address or Username",
    []
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const v = identifier.trim();

    
let valid = true;
   setIdError("");
   setPasswordError("");

   if (!v) {
     setIdError("Email or username is required.");
     valid = false;
   } else if (! (v.includes("@") ? isEmail(v) : isUsername(v)) ) {
     setIdError("Please enter a valid email or username.");
     valid = false;
   }

   if (!password.trim()) {
     setPasswordError("Password is required.");
     valid = false;
   }

   if (!valid) return;

  
    navigate("/profile");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handleLogin} noValidate>

            
            <EmailInput
              value={identifier}
              onChange={(v) => {
                setIdentifier(v);
                if (idError) setIdError("");
              }}
              placeholder={idPlaceholder}
              mode={2}              // 2 = email OR username
              required={false}
              className={idError ? "error" : ""}
            />
            {idError && <div className="error-messageL">{idError}</div>}
            <PasswordInput
              label=""
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              error={passwordError}
            />
            

            <div className="forgot-password">
              <Link to="/Forgot">Forgot Password?</Link>
            </div>

           
            <Button
              type="submit"
              label="Log in"
              variant="primary"
              fullWidth
              styles={{bgColor: "var(--orange)",color: "var(--white)",border: "2px solid var(--orange)",height: "48px",fontSize: "16px",fontWeight: 600,borderRadius: "24px",padding: "0 16px",hoverBgColor: "#e65c00",hoverBorder: "2px solid #e65c00",hoverColor: "var(--white)",transition: "all 0.2s ease",}}
            />
            
            <p className="signup-link">
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </p>
            <div className="divider">
              <span>OR</span>
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
          <h1 className="login-org-name">FilmyAI</h1>
          <p className="login-org-tag-line">Start your journey today!</p>
        </div>
      </div>
    </div>
  );
}



