
import { useMemo, useState } from "react";
import "./EmailInput.css";

type Mode = 1 | 2 | 3; // 1=email, 2=email|username, 3=email|username|phone dont remove its important

interface EmailInputProps {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  required?: boolean;
  mode?: Mode;             // 👈 choose 1, 2, or 3
  className?: string;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const isUsername = (v: string) => /^[a-zA-Z0-9._-]{3,30}$/.test(v);

const isPhone = (v: string) => {
  const digits = v.replace(/[^\d]/g, "");
  return /^\+?[\d\s\-()]{7,}$/.test(v) && digits.length >= 10 && digits.length <= 15;
};

export default function EmailInput({
  value = "",
  onChange,
  required = false,
  className = "",
  mode = 1, // default: email only
  placeholder,
}: EmailInputProps) {
  const [val, setVal] = useState<string>(value);
  const [touched, setTouched] = useState<boolean>(false);

  const resolvedPlaceholder = useMemo(() => {
    if (placeholder) return placeholder;
    if (mode === 1) return "Enter your email";
    if (mode === 2) return "Email or Username";
    return "Email, Username, or Phone";
  }, [mode, placeholder]);

  const valid = useMemo(() => {
    const v = val.trim();
    if (!v) return false;

    if (mode === 1) {
      return isEmail(v);
    }
    if (mode === 2) {
      
      return v.includes("@") ? isEmail(v) : isUsername(v);
    }
    
    if (v.includes("@")) return isEmail(v);
    
    return isUsername(v) || isPhone(v);
  }, [val, mode]);

  const showError = touched && val !== "" && !valid;

  const message =
    mode === 1
      ? "Please enter a valid email address."
      : mode === 2
      ? "Please enter a valid email or username."
      : "Please enter a valid email, username, or phone number.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setVal(next);
    onChange?.(next);
  };

  return (
    <div className="email-input-wrapper">
      <input
        
        type={mode === 1 ? "email" : "text"}
        className={`email-input ${showError ? "error" : ""} ${className}`}
        placeholder={resolvedPlaceholder}
        value={val}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        required={required}
      />
      {showError && <span className="error-message">{message}</span>}
    </div>
  );
}
