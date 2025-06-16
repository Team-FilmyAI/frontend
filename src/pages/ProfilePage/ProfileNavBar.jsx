import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProfilePage/ProfileNavBar.css';

const ProfileNavBar = ({ homePath = '/' }) => {
  return (
    <nav className="profile-navbar">
      <div className="profile-navbar-container">
        <div className="logo-container">
          <img src="/images/footer/FilmyAI_logo.png" alt="Filmy AI Logo" />
        </div>
        <div className="nav-links">
          <Link to={homePath} className="nav-home-link"> 
          {/* change the link here so when home is clicked it will go to the designated path right now its null */}
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProfileNavBar;
