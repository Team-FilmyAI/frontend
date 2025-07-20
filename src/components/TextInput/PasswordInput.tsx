import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import './Textinput.css';

interface PasswordInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <div
        className={`inputs-container ${error ? 'input-error' : ''} ${
          isFocused && error ? 'input-focused-error' : ''
        }`}
      >
        <span className="input-icon">
          <Lock size={18} />
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-input"
        />
        <span
          className="input-icon"
          onClick={() => setShowPassword(!showPassword)}
          style={{ cursor: 'pointer' }}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default PasswordInput;