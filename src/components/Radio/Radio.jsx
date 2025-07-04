import { useState } from 'react';
import './Radio.css';

// Use 'radioInfo' as the prop for parent component
// <Radio radioInfo={} />
export default function Radio(props) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    // Optional: Call a parent handler if you want to lift the state up
    if (props.onChange) props.onChange(event.target.value);
  };

  return (
    <div className={`radio-button ${props.radioInfo.newLine ? '' : 'radio-inline'}`}>
      {props.radioInfo.options.map((option) => (
        <>
          <input
            type="radio"
            id={option}
            name={props.radioInfo.radioName}
            value={option}
            checked={selectedValue === option}
            onChange={handleChange}
          />
          <label htmlFor={option}>{option}</label>
        </>
      ))}
    </div>
  );
}
