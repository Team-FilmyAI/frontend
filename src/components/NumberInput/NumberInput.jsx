import React, { useState, useEffect } from "react";
import "./NumberInput.css";
export default function NumberInput({
  value,defaultValue,onChange,min, max, step = 1, placeholder, id, name, disabled = false, required = false, className = "", ariaLabel,
  
}) {
  const [internalValue, setInternalValue] = useState(
    value !== undefined
      ? String(value)
      : defaultValue !== undefined
      ? String(defaultValue)
      : ""
  );

  // Sync with external value if controlled
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(String(value));
    }
  }, [value]);

  const handleChange = (e) => {
    const val = e.target.value;

    // Allow clearing the input
    if (val === "") {
      setInternalValue("");
      if (onChange) onChange(undefined);
      return;
    }

    // Allow only valid numeric inputs (supports decimals and negative numbers)
    const validNumberRegex = /^-?\d*\.?\d*$/;
    if (!validNumberRegex.test(val)) return;

    const parsed = parseFloat(val);
    if (!isNaN(parsed)) {
      if (min !== undefined && parsed < min) return;
      if (max !== undefined && parsed > max) return;
    }

    setInternalValue(val);
    if (onChange) onChange(!isNaN(parsed) ? parsed : undefined);
  };

  const handleBlur = () => {
    if (internalValue === "") return;

    let parsed = parseFloat(internalValue);
    if (isNaN(parsed)) {
      setInternalValue("");
      if (onChange) onChange(undefined);
      return;
    }

    // Clamp to min/max
    if (min !== undefined && parsed < min) parsed = min;
    if (max !== undefined && parsed > max) parsed = max;

    // Format to match step decimal places
    const stepDecimals = step && step % 1 !== 0
      ? step.toString().split(".")[1].length
      : 0;

    const formatted = parsed.toFixed(stepDecimals);
    setInternalValue(formatted);
    if (onChange) onChange(parseFloat(formatted));
  };

  return (
    <input
      type="text"
      id={id}
      name={name}
      value={internalValue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      aria-label={ariaLabel}
      inputMode="decimal"
      className={`number-input ${className}`} 
    />
  );
}
