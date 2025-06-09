import React, { useState } from "react";
import "../styles/WebsiteInputBox.css";

const WebsiteInputBox = ({ label, placeholder, value, onChange, name }) => {
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);

  const validateWebsite = (val) => {
    if (val.length < 2) {
      setError("Website must be at least 2 characters.");
    } else if (val.length > 40) {
      setError("Website cannot exceed 40 characters.");
    } else if (/\s/.test(val)) {
      setError("Website cannot contain spaces.");
    } else if (!val.endsWith(".com")) {
      setError("Please enter a valid web address.");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (!dirty) setDirty(true);
    onChange(e); // Pass value to parent
    validateWebsite(val);
  };

  return (
    <div className="website-input-group">
      {label && <label className="website-input-label">{label}</label>}
      <input
        type="url"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        className="website-text-input"
      />
      {dirty && error && <span className="website-error">{error}</span>}
    </div>
  );
};

export default WebsiteInputBox;
