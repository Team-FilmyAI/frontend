import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css'

const SearchBar: React.FC<any> = ({ placeholder, onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.currentTarget.elements[0] as HTMLInputElement).value;
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={placeholder} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;