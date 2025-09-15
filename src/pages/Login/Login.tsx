import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import "./Login.css";

import EmailInput from "../../components/EmailInput/EmailInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Button from "../../components/Buttons/Button";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); 
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error message state

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isUsername = (v: string) => /^[a-zA-Z0-9._-]{3,30}$/.test(v);

  const idPlaceholder = useMemo(
    () => "Email address or Username",
    []
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const v = identifier.trim();

    if (!v) {
      setError("Email or username is required.");
      return;
    }

    // Validate like EmailInput mode=2: if it has "@", validate as email; otherwise username
    const idValid = v.includes("@") ? isEmail(v) : isUsername(v);
    if (!idValid) {
      setError("Please enter a valid email or username.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    // Clear any previous error and proceed
    setError("");

    // TODO: Replace this with real authentication logic
    navigate("/profile");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handleLogin} noValidate>

            {/* Show validation error */}
            {error && <div className="error-message">{error}</div>}

            <EmailInput
              value={identifier}
              onChange={(v) => {
                setIdentifier(v);
                if (error) setError(""); // clear error as user types
              }}
              placeholder={idPlaceholder}
              mode={2}              // 2 = email OR username
              required={false}
              className={error ? "error" : ""}
            />
            <PasswordInput
              label=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> */}

            <div className="forgot-password">
              <Link to="/Forgot">Forgot Password?</Link>
            </div>

            {/* <button className="login-button" type="submit">Log in</button> */}
            <Button
              type="submit"
              label="Log in"
              variant="primary"
              fullWidth
              styles={{
                bgColor: "#ff7f00",
                color: "#ffffff",
                border: "2px solid #ff7f00",
                height: "48px",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "24px",
                padding: "0 16px",
                // hover
                hoverBgColor: "#e65c00",
                hoverBorder: "2px solid #e65c00",
                hoverColor: "#ffffff",
                transition: "all 0.2s ease",
              }}
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



