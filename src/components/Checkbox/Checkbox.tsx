// shared/ui/Checkbox.tsx
import React from 'react';
import '../Checkbox/Checkbox.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  /** Optional: style the wrapper from parent */
  className?: string;
  style?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  className = '',
  style,
}) => {
  return (
    <label className={`custom-checkbox ${className}`} style={style}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox-input"
      />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;

// ***The following section below which is marked as ignore is to be used when calling checkbox button you can edit as u see fit ***

// import Checkbox from '../../components/Checkbox/Checkbox'; use this in import section

// inside main const add the below line

// const [agree, setAgree] = useState(false);

//   const GENRES = [
//   'Action','Adventure','Animation','War',
//   'Comedy','Crime','Documentary','Biography',
//   'Family','Fantasy','History','Drama',
//   'Sport','Thriller','Romance','Sci-Fi',
// ];

// const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());

// toggle helper
// const toggleGenre = (name: string, checked: boolean) => {
//   setSelectedGenres((prev: Set<string>) => {
//     const next = new Set(prev);
//     if (checked) next.add(name);
//     else next.delete(name);
//     return next;
//   });
// };

//inside the return add wherever u need it

  // <Checkbox
  //   label="Action"
  //   checked={selectedGenres.has('Action')}
  //   onChange={(c) => toggleGenre('Action', c)}
  //   className="genre-checkbox"   // optional hook for extra spacing
  // />