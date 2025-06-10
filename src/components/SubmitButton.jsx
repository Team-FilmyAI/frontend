import React from "react";
import "../styles/SubmitButton.css";

const SubmitButton = ({ label = "Submit", onClick, disabled = false }) => {
  return (
    <button className="submit-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default SubmitButton;
