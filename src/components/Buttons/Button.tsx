import React from 'react';
import "./Button.css";

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  fullWidth?: boolean;
  styles:{
    bgColor: string,
    color: string,
    width?: string,
  }
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  styles,
  onClick,
  className ='',
  fullWidth = false,
}) => {
  return (
        <button
          style={{
        background: styles.bgColor,
        color: styles.color,
        width: fullWidth ? '100%' : styles.width, 
      }}
      className={`custom-button ${variant} ${fullWidth ? 'full-width' : ''} ${className}`}onClick={onClick}
          >
            {label}
        </button>
    
  );
};

export default Button;
