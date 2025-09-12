import { useState, useEffect } from 'react';

export default function EmailInput({
  value,
  onChange,
  placeholder = 'Enter your email',
  required = false,
  customClassName = '',
}) {
  const [isTouched, setIsTouched] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    onChange?.(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const showError = isTouched && !isValidEmail(value) && value !== '';

  return (
    <div>
      <input
        type="email"
        className={`demo-form-input ${customClassName || 'email-input'} ${
          showError ? 'invalid' : ''
        }`}
        placeholder={placeholder}
        value={value || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
      />
      {showError && <span className="error-message">Please enter a valid email address.</span>}
    </div>
  );
}
