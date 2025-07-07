import { useState } from "react";
import "./TextArea.css";

export default function TextArea({
  label = "Message",
  name = "message",
  rows = 4,
  required = false,
  placeholder = "Enter your message...",
  value,
  onChange,
  validate = true,
}) {
  const [touched, setTouched] = useState(false);

  const isValid = value && value.trim().length > 0;
  const showError = validate && touched && required && !isValid;

  return (
    <div className="textarea-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        rows={rows}
        className={`textarea ${showError ? "error" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={() => setTouched(true)}
        required={required}
      ></textarea>
      {showError && <p className="error-message">This field is required.</p>}
    </div>
  );
}
