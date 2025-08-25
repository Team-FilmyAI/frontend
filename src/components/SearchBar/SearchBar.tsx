import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar: React.FC<any> = ({ placeholder, onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.currentTarget.elements[0] as HTMLInputElement).value;
    onSearch(input);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-container">
        <Search className="search-icon" />
        <input type="text" placeholder={placeholder} />
      </div>
    </form>
  );
};

export default SearchBar;
