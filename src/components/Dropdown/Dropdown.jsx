import { useState } from 'react';
import Select from 'react-select';

// <Dropdown {...[dropdownObject]} containerStyling=[containerClassName] />
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
}) {
  const [selectedOption, setSelectedOption] = useState(null);

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
