import React, { useState } from 'react';
import './Textinput.css';
import { max } from 'date-fns';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  maxLength,
  className,
  icon,
  value,
  onChange,
  error,
  type = 'text',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={'input-wrapper'}>
      <label className={label === '' ? '' : 'input-label'}>{label}</label>
      <div
        className={
          className
            ? ''
            : `inputs-container ${error ? 'input-error' : ''} ${
                isFocused && error ? 'input-focused-error' : ''
              }`
        }
      >
        <span className="input-icon">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={className || 'text-input'}
        />
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default TextInput;
