import { useState } from 'react';
import './TextArea.css';

export default function TextArea({
  placeholder = '',
  value = '',
  onChange = () => {},
  maxLength = 250,
  name = '',
  required = false,
  className = '',
}) {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  const isError = required && touched && !value.trim();

  return (
    <div className={`text-area-wrapper`}>
      <textarea
        className={`${className} ${isError ? 'error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        name={name}
        maxLength={maxLength}
        required={required}
      />
      {isError && <span className="error-message">This field is required.</span>}
    </div>
  );
}
