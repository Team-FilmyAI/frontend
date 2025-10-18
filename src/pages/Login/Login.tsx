import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginMessages } from "../../constants/messages";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error message state

  const handleLogin = (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError(loginMessages.emailRequiredError);
      return;
    }

    if (!emailRegex.test(email)) {
      setError(loginMessages.invalidEmailError);
      return;
    }

    if (!password) {
      setError(loginMessages.passwordRequiredError);
      return;
    }

    // Clear any previous error and proceed
    setError("");

    // TODO: Replace this with real authentication logic
    navigate(loginMessages.profileRoute);
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <h2 className="login-title">{loginMessages.title}</h2>
          <form className="login-form" onSubmit={handleLogin}>

            {/* Show validation error */}
            {error && <div className="error-message">{error}</div>}

            <input
              type="text"
              placeholder={loginMessages.emailPlaceholder}
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder={loginMessages.passwordPlaceholder}
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password">
              <Link to={loginMessages.forgotPasswordRoute}>{loginMessages.forgotPasswordText}</Link>
            </div>
            <button className="login-button" type="submit">{loginMessages.loginButtonText}</button>
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


// (this is version 3 code done by somail) import { Link } from "react-router-dom";
// import "./Login.css";

// export default function Login() {
//   return (
//     <div className="login-body">
//       <div className="login-container">
//         <div className="login-left">
//           <h2 className="login-title">Login</h2>
//           <form className="login-form">
//             <input type="text" placeholder="Email address or Username" className="input-field" />
//             <input type="password" placeholder="Password" className="input-field" />
//             <div className="forgot-password">
//               <Link to="/Forgot">Forgot Password?</Link>
//             </div>
//             <button className="login-button">Log in</button>
//             <p className="signup-link">
//               Don't have an account? <Link to="/Signup">Sign Up</Link>
//             </p>
//             <div className="divider">
//               <span>OR</span>
//             </div>

//             <div className="social-icons">
//               <i className="fab fa-google"></i>
//               <i className="fab fa-facebook-f"></i>
//               <i className="fab fa-instagram"></i>
//             </div>
//           </form>
//         </div>
//         <div className="login-right">
//           <h1 className="login-org-name">FilmyAI</h1>
//           <p className="login-org-tag-line">Start your journey today!</p>
//         </div>
//       </div>
//     </div>
//   );
// }
