import React, { useState } from "react";
import "../styles/EmailInputBox.css";

const EmailInputBox = ({ label, placeholder, value, onChange, name }) => {
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);

  const validateEmail = (val) => {
    if (val.length < 2) {
      setError("Email must be at least 2 characters.");
    } else if (val.length > 20) {
      setError("Email cannot exceed 20 characters.");
    } else if (/\s/.test(val)) {
      setError("Email cannot contain spaces.");
    } else if (!val.endsWith("@gmail.com")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (!dirty) setDirty(true);
    onChange(e); // Notify parent
    validateEmail(val);
  };

  return (
    <div className="email-input-group">
      {label && <label className="email-input-label">{label}</label>}
      <input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        className="email-text-input"
        required
      />
      {dirty && error && <span className="email-error">{error}</span>}
    </div>
  );
};

export default EmailInputBox;
