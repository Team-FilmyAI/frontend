import { useState } from 'react';
import Select, { StylesConfig, MultiValue, SingleValue } from 'react-select';

interface DropdownProps {
  value: any;
  onChange?: (value: any) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  isMulti?: boolean;
  styles?: StylesConfig;
  containerStyling?: string;
  name: string;
  error?: string;
}

export default function Dropdown({
  value,
  onChange = () => {},
  options,
  placeholder,
  isMulti = false,
  styles,
  containerStyling,
  name,
  error,
}: DropdownProps) {
  return (
    <div className={containerStyling}>
      <Select
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isClearable={true}
        isMulti={isMulti}
        styles={styles}
        components={{ IndicatorSeparator: () => null }}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}
