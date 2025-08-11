// LocationSearch.jsx
import React, { useState, useEffect } from 'react';

const LocationSearch = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchLocations = async (input) => {
    if (!input) return setSuggestions([]);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${input}&format=json`
    );
    const data = await res.json();
    setSuggestions(data);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchLocations(value);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type location..."
        className="profile-input"
      />
      {suggestions.length > 0 && (
        <div className="autocomplete-dropdown-container">
          {suggestions.map((place, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(place.display_name);
                setSuggestions([]); // Clear dropdown after selecting
              }}
              
              className="suggestion-item"
            >
              {place.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
