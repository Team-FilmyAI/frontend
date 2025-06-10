import React, { useState } from "react";
import "../styles/CheckboxGroup.css";

const CheckboxGroup = ({ options, label, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherValue, setOtherValue] = useState("");
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);

  const handleCheckboxChange = (option) => {
    const updated = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updated);

    // Reset error if "Other" is unchecked
    if (!updated.includes("Other")) {
      setError("");
      setDirty(false);
    }

    onChange(updated, otherValue);
  };

  const validateOther = (val) => {
    if (val.length < 2) {
      setError("Please specify with more than 2 characters.");
    } else if (val.length > 40) {
      setError("Please specify in less than 40 characters.");
    } else {
      setError("");
    }
  };

  const handleOtherChange = (e) => {
    const value = e.target.value;
    setOtherValue(value);
    if (!dirty) setDirty(true);
    validateOther(value);
    onChange(selectedOptions, value);
  };

  return (
    <div className="checkbox-group">
      {label && <p className="checkbox-label">{label}</p>}
      {options.map((option) => (
        <label key={option} className="checkbox-option">
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}

      {selectedOptions.includes("Other") && (
        <>
          <input
            type="text"
            className="other-input"
            placeholder="Please specify"
            value={otherValue}
            onChange={handleOtherChange}
          />
          {dirty && error && <span className="error-text">{error}</span>}
        </>
      )}
    </div>
  );
};

export default CheckboxGroup;
