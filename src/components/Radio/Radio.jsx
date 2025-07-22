import { useState } from 'react';
import './Radio.css';

// Use 'radioInfo' as the prop for parent component
// <Radio radioInfo={} />
export default function Radio({ radioInfo, onChange, className = '' }) {
  const { options, radioName, newLine } = radioInfo;
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
              checked={selectedValue === option}
              onChange={handleChange}
            />
            <label htmlFor={inputId}>{option}</label>
          </span>
        );
      })}
    </div>
  );
}
