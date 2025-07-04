import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
      setError("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
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
          <form className="login-form" onSubmit={handleLogin}>

            {/* Show validation error */}
            {error && <div className="error-message">{error}</div>}

            <input
              type="text"
              placeholder="Email address or Username"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password">
              <Link to="/Forgot">Forgot Password?</Link>
            </div>
            <button className="login-button" type="submit">Log in</button>
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
