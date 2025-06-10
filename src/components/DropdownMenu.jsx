import React, { useState } from "react";
import "../styles/DropdownMenu.css";

const DropdownMenu = ({ options = [], onChange, name, label }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}
      <div
        className="dropdown-selected"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selected || "Select"}
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <ul className="dropdown-options">
          {options.map((opt, idx) => (
            <li key={idx} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
