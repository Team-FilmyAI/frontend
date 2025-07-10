import React from 'react';
import '../Button/Button.css';

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  onClick,
  fullWidth = false,
}) => {
  return (
    <button
      className={`custom-button ${variant} ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
