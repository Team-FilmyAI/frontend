import React, { useState } from 'react';
import './Textinput.css';

interface TextInputProps {
  label?: string;
  placeholder: string;
  icon?: React.ReactNode;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;

  className?: string;            
  wrapperClassName?: string;     
  containerClassName?: string; 
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  icon,
  value,
  name,
  onChange,
  onFocus: onFocusProp,            
  error,
  type = 'text',
  className = '',
  wrapperClassName = '',
  containerClassName = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-wrapper ${wrapperClassName}`}>
      {label && <label className="input-label">{label}</label>}

      <div
        className={`inputs-container ${error ? 'input-error' : ''} ${
          isFocused && error ? 'input-focused-error' : ''
        } ${containerClassName}`}
      >
        {icon && <span className="input-icon">{icon}</span>}

        <input
          name={name} 
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocused(true);
            onFocusProp?.(e);
          }}
          onBlur={() => setIsFocused(false)}
          className={`text-input ${className}`}
        />
      </div>

      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default TextInput;