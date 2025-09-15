import React from "react";

// Props for Creating a Label
interface LabelProps {
  text: string;
  fontSize?: string;
  color?: string;
  padding?: string;
  margin?: string;
  className?: string;
  fontWeight?: string | number;
  fontFamily?: string;
}

// Default Label Props and properties
const Label: React.FC<LabelProps> = ({
  text,
  fontSize = "1rem",
  color = "#000",
  padding = "0",
  margin = "0",
  className = "",
  fontWeight = "normal",
  fontFamily = "'Inter', sans-serif", 
}) => {
  const labelStyle: React.CSSProperties = {
    fontSize,
    color,
    padding,
    margin,
    fontWeight,
    fontFamily,
  };

  return (
    <label style={labelStyle} className={className}>
      {text}
    </label>
  );
};

export default Label;
