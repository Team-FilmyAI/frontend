import { useState } from 'react';
import './Radio.css';

// Use 'radioInfo' as the prop for parent component
// <Radio radioInfo={} />
export default function Radio({ radioInfo, value, onChange, className = '' }) {
  const { options, radioName, newLine } = radioInfo;

  const handleChange = (event) => {
    if (onChange) onChange(event.target.value);
  };

  return (
    <div className={`radio-button ${newLine ? 'radio-block' : 'radio-inline'} ${className}`}>
      {options.map((option) => {
        const inputId = `${radioName}-${option}`;
        return (
          <span key={inputId}>
            <input
              type="radio"
              id={inputId}
              name={radioName}
              value={option}
              checked={value === option}
              onChange={handleChange}
            />
            <label htmlFor={inputId}>{option}</label>
          </span>
        );
      })}
    </div>
  );
}
