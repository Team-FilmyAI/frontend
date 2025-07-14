import { useState } from "react";
import "./NumberInput.css";

export default function NumberInput({
  maxLength = 10,
  placeholder = "Enter number",
  value,
  onChange,
}) {
  const [touched, setTouched] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
  const val = e.target.value;

  if (/^\d*$/.test(val)) {
    setInputValue(val);
    if (onChange) onChange(val);
    if (!touched) setTouched(true);
    setIsValid(val.length > 0 && val.length <= maxLength);
  }
};

  const handleBlur = () => {
    setTouched(true);
    setIsValid(inputValue.length > 0 && inputValue.length <= maxLength);
  };

  return (
    <div className="number-input">
      <input
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        className={`number-input ${touched && !isValid ? "input-error" : ""}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && !isValid && (
        <p className="input-error-message">
          Please enter a valid number (max {maxLength} digits).
        </p>
      )}
    </div>
  );
}
