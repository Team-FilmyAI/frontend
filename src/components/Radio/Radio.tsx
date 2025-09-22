import React, { useState } from "react";
import "./Radio.css";

type RadioInfo = {
  options: string[];        // e.g. ["User", "Business"]
  radioName: string;        // e.g. "acctType"
  newLine?: boolean;        // stack vertically when true
};

type RadioProps = {
  radioInfo: RadioInfo;
  /** Controlled value (optional) */
  value?: string;
  /** Uncontrolled initial value (optional) */
  defaultValue?: string;
  /** Fires with the selected option */
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
  // If `value` is provided, treat as controlled; otherwise keep internal state
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
