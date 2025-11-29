import { Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default function Header() {
    const navigate = useNavigate();
  
  const handleAlert = () => {
    alert("Work is in progress");
  };

  
  const handleSearch = (query: string) => {
    alert(`Search submitted: ${query}`);
  };

  
  const goToLogin = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-left" onClick={goToLogin}>
        <img src="images/footer/FilmyAI_logo.png" alt="FilmyAI Logo" className="logo" />
        <span className="brand-name">FilmyAI</span>
      </div>
      <div className="header-center">
        <SearchBar placeholder={"  Search movies, roles, directors..."} onSearch={handleSearch} />
      </div>
      <div className="header-right">
        <Bell className="icon" onClick={handleAlert} />
        <User className="icon" onClick={handleAlert} />
      </div>
    </header>
  );
};
