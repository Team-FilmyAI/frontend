import React, { useState } from "react";
import "../styles/DescriptionBox.css";

const DescriptionBox = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  rows = 5,
}) => {
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);

  const validate = (val) => {
    if (val.length < 10) {
      setError("Description must be at least 10 characters.");
    } else if (val.length > 1000) {
      setError("Description cannot exceed 1000 characters.");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(e);
    if (!dirty) setDirty(true);
    validate(val);
  };

  return (
    <div className="description-box-container">
      {label && (
        <label className="description-label" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        className="description-box"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        rows={rows}
        id={name}
      />
      {dirty && error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default DescriptionBox;
