import React, { useState } from "react";
import "./Radio.css";

type RadioInfo = {
  options: string[];        
  radioName: string;       
  newLine?: boolean;       
};

type RadioProps = {
  radioInfo: RadioInfo;
  
  value?: string;
  
  defaultValue?: string;
  
  onChange?: (value: string) => void;
  className?: string;
};

const Radio: React.FC<RadioProps> = ({
  radioInfo,
  value,
  defaultValue = "",
  onChange,
  className = "",
}) => {
 
  const [internal, setInternal] = useState<string>(defaultValue);
  const current = value ?? internal;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const next = evt.target.value;
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  return (
    <div
      className={`radio-button ${
        radioInfo.newLine ? "" : "radio-inline"
      } ${className}`}
      role="radiogroup"
      aria-label={radioInfo.radioName}
    >
      {radioInfo.options.map((opt, idx) => {
        const id = `${radioInfo.radioName}-${idx}`;
        return (
          <React.Fragment key={id}>
            <input
              id={id}
              type="radio"
              name={radioInfo.radioName}
              value={opt}
              checked={current === opt}
              onChange={handleChange}
            />
            <label htmlFor={id}>{opt}</label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Radio;
