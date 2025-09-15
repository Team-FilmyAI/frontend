import React, { useState } from 'react';
import "./Button.css";

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  fullWidth?: boolean;
  styles: {
    bgColor: string;
    color: string;
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: string | number;
    border?: string;
    padding?: string;
    fontFamily?: string;
    textAlign?: "start" | "center" | "end";
    borderRadius?: string;
    margin?: string;
    lineHeight?: string;

    hoverBgColor?: string;
    hoverColor?: string;
    hoverBorder?: string;
    hoverTransform?: string;

    transition?: string;
  };
  className?: string;
  type?: "button" | "submit" | "reset";
  stickToBottom?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  styles,
  onClick,
  className = '',
  fullWidth = false,
  type = "button",
  stickToBottom = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      style={{
        background: isHovered ? (styles.hoverBgColor ?? styles.bgColor) : styles.bgColor,
        color:      isHovered ? (styles.hoverColor   ?? styles.color)   : styles.color,
        border:     isHovered ? (styles.hoverBorder  ?? styles.border)  : styles.border,

        width:  fullWidth ? '100%' : styles.width,
        height: styles.height,
        padding: styles.padding,

        fontSize:   styles.fontSize,
        fontWeight: styles.fontWeight,
        fontFamily: styles.fontFamily,
        lineHeight: styles.lineHeight,

        borderRadius: styles.borderRadius ?? "4px",
        margin: styles.margin,

        justifyContent:
          styles.textAlign === "start" ? "flex-start" :
          styles.textAlign === "end"   ? "flex-end"   : "center",

        transform:  isHovered ? (styles.hoverTransform ?? "none") : "none",
        transition: styles.transition ?? "all 0.2s ease",
        cursor: "pointer",

        ...(stickToBottom ? { marginTop: "auto" } : {}),
      }}
      className={`custom-button ${variant} ${fullWidth ? 'full-width' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
