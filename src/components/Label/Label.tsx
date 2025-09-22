import React, { ElementType } from "react";

// Props for Creating a Label
interface LabelProps {
  text: string;
  as?: ElementType;
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
  as: Component = "label", // default to <label>
  fontSize,
  color,
  padding,
  margin,
  className = "",
  fontWeight,
  fontFamily,
}) => {
  // Only set the style properties that were actually passed in
  const labelStyle: React.CSSProperties = {};
  if (fontSize !== undefined) labelStyle.fontSize = fontSize;
  if (color !== undefined) labelStyle.color = color;
  if (padding !== undefined) labelStyle.padding = padding;
  if (margin !== undefined) labelStyle.margin = margin;
  if (fontWeight !== undefined) labelStyle.fontWeight = fontWeight;
  if (fontFamily !== undefined) labelStyle.fontFamily = fontFamily;


  return (
    <Component style={labelStyle} className={className}>
      {text}
    </Component>
  );
};

export default Label;
