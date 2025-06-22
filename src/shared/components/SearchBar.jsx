import { useState } from 'react';
import { Search } from 'lucide-react';
import '../../styles/SearchBar/SearchBar.css'

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="search-bar">
      <Search className="search-icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
