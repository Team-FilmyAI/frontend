import React from 'react';
import "./Button.css";

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
    <div>
      <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
        <button
          className={`custom-button primary`}
          onClick={() => console.log('Apply clicked')}
        >
          Apply Now
        </button>
        <button
          className={`custom-button secondary`}
          onClick={() => console.log('Details clicked')}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Button;
