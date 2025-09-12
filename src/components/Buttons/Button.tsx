import React from 'react';
import './Button.css';

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  styles?: {
    bgColor: string;
    color: string;
    width?: string;
  };
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  styles,
  disabled,
  onClick,
  className = '',
  fullWidth = false,
}) => {
  return (
    <button
      style={
        styles
          ? {
              background: styles.bgColor,
              color: styles.color,
              width: fullWidth ? '100%' : styles.width,
            }
          : undefined
      }
      className={
        className || `custom-button ${variant} ${fullWidth ? 'full-width' : ''} ${className}`
      }
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
