import React from 'react';
import '../Text Input/TextInput.css';

const TextInput = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  error = '',
  name,
  id,
}) => {
  return (
    <div className="text-input-wrapper">
      {label && (
        <label htmlFor={id || name} className="text-input-label">
          {label} {required && '*'}
        </label>
      )}
      <input
        className={`text-input-field ${error ? 'input-error' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        id={id || name}
        name={name}
        aria-invalid={!!error}
      />
      {error && <span className="text-input-error">{error}</span>}
    </div>
  );
};

export default TextInput;
