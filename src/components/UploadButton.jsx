import React from "react";
import "../styles/UploadButton.css";

const UploadButton = ({ label, name, onChange }) => {
  return (
    <div className="upload-container">
      {label && <label className="upload-label">{label}</label>}
      <div className="upload-box">
        <input
          type="file"
          name={name}
          onChange={onChange}
          className="file-input"
          id={`file-${name}`}
        />
      </div>
    </div>
  );
};

export default UploadButton;
