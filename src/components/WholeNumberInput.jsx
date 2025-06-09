import React from "react";
import "../styles/WholeNumberInput.css";

const WholeNumberInput = ({ label, placeholder, value, onChange, name }) => {
  const handleChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      onChange(e);
    }
  };

  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        type="number" // ✅ enables native up/down arrows
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        className="whole-number-box"
        min="0" // ✅ optional constraint
      />
    </div>
  );
};

export default WholeNumberInput;
