import React, { useState } from 'react';
import './Textinput.css';

interface TextInputProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  icon,
  value,
  onChange,
  error,
  type = 'text',
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
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-input"
        />
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default TextInput;