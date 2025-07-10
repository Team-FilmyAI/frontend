import React, { useState } from 'react';
import '../TextInput/TextInput.css';

interface SelectInputProps {
  label: string;
  options: string[];
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  icon,
  value,
  onChange,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <div
        className={`inputs-container ${error ? 'input-error' : ''} ${
          isFocused && error ? 'input-focused-error' : ''
        }`}
      >
        <span className="input-icon">{icon}</span>
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-input select-input"
        >
          <option value="">Select Role</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default SelectInput;