import React from 'react';
import '../Button/Button.css';

const Button = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  children,
}) => {
  return (
    <button
      className={`custom-button ${variant} ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {icon && <span className="button-icon">{icon}</span>}
          {label || children}
        </>
      )}
    </button>
  );
};

export default Button;
