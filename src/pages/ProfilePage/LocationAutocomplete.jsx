// components/LocationAutocomplete.jsx
import React, { useRef, useEffect } from 'react';

const LocationAutocomplete = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['(cities)'], // Optional: limits to cities
      componentRestrictions: { country: [ ] } // Optional
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      onChange(place.formatted_address || inputRef.current.value);
    });
  }, [onChange]);

  return (
    <input
      type="text"
      ref={inputRef}
      className="profile-input"
      placeholder="Start typing City, Country..."
      value={value}
      onChange={(e) => onChange(e.target.value)} // controlled input
    />
  );
};

export default LocationAutocomplete;
