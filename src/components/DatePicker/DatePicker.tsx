import React, { useState } from "react";
import "./DatePicker.css";

interface DatePickerProps {
  label?: string;
  value?: string;
  onChange: (date: string) => void;
  minDate?: string;
  maxDate?: string;
  required?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  minDate,
  maxDate,
  required = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="date-picker">
      {label && <label className="date-picker-label">{label}</label>}
      <input
        type="date"
        className="date-picker-input"
        value={selectedDate}
        onChange={handleChange}
        min={minDate}
        max={maxDate}
        required={required}
      />
    </div>
  );
};

export default DatePicker;
