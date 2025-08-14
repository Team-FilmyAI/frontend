// shared/ui/Checkbox.tsx
import React from 'react';
import '../Checkbox/Checkbox.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
}) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox-input"
      />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;
