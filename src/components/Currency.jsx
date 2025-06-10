import React from "react";
import "../styles/Currency.css";

const Currency = ({ value, onChange, name }) => {
  const currencyOptions = ["$", "₹", "€", "£", "¥"];

  return (
    <div className="currency-group">
      <label className="currency-label">Currency</label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        className="currency-select"
      >
        <option value="">Select</option>
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;
