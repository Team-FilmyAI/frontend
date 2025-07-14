import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Facebook,
  Instagram,
  Linkedin,
  Chrome,
} from "lucide-react";

import "../LoginPage/LoginPage.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) return;

    navigate("/profile");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            {/* Email Field */}
            <label className="input-label" htmlFor="email">Email address or Username</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                type="text"
                placeholder="Email address or Username"
                className={`input-field-with-icon ${emailError ? "input-error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && <p className="error-text">{emailError}</p>}

            {/* Password Field */}
            <label className="input-label" htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`input-field-with-icon ${passwordError ? "input-error" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            {passwordError && <p className="error-text">{passwordError}</p>}

            <div className="forgot-password">
              <Link to="/Forgot">Forgot Password?</Link>
            </div>

            <button className="login-button" type="submit">Log in</button>

            <p className="signup-link">
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </p>

            <div className="divider"><span>OR</span></div>

            <div className="social-icons">
              <Chrome />
              <Facebook />
              <Instagram />
              <Linkedin />
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
