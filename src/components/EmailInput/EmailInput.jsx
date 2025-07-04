import React, { useState } from "react";
import "./EmailInput.css";

export default function EmailInput({ value, onChange, placeholder = "Enter your email", required = false }) {
  const [email, setEmail] = useState(value || "");
  const [isTouched, setIsTouched] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    onChange?.(val);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const showError = isTouched && !isValidEmail(email) && email !== "";

  return (
    <div className="email-input-wrapper">
      <input
        type="email"
        className={`demo-form-input email-input ${showError ? "invalid" : ""}`}
        placeholder={placeholder}
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />
      {showError && <span className="error-message">Please enter a valid email address.</span>}
    </div>
  );
}
