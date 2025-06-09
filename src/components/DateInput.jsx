import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DateInput.css";
import "../styles/DateInput.css";

const DateInput = ({ label, name, value, onChange }) => {
  return (
    <div className="date-input-container">
      {label && <label className="date-input-label">{label}</label>}
      <DatePicker
        selected={value}
        onChange={(date) => onChange(date)}
        dateFormat="MMMM d, yyyy" // 👈 shows "June 13, 2025"
        className="custom-date-input"
        placeholderText="Select a date"
        name={name}
      />
    </div>
  );
};

export default DateInput;
