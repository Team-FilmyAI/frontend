import { useState } from 'react';
import Select from 'react-select';

// <Dropdown {...[dropdownObject]} containerStyling=[containerClassName] />
export default function Dropdown({ containerStyling, options, placeholder, isMulti, styles }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={containerStyling}>
      <Select
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        placeholder={placeholder}
        isClearable={true}
        isMulti={isMulti}
        styles={styles}
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  );
}
