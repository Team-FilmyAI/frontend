import React, { useState } from "react";
import "../styles/TextInputBox.css";

const TextInputBox = ({ label, placeholder, value, onChange, name }) => {
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false); // ⬅️ track if user typed

  const validate = (val) => {
    if (val.length < 2) {
      setError("Name cannot be less than 2 characters");
    } else if (val.length > 40) {
      setError("Name cannot be more than 40 characters");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(e);
    if (!dirty) setDirty(true); // mark as touched once user types
    validate(val);
  };

  return (
    <div className="text-input-box">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {dirty && error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default TextInputBox;
