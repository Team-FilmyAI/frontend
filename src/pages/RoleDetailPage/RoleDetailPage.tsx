import { ArrowLeft, Clock, User } from 'lucide-react';
import * as React from 'react';
import './RoleDetailPage.css';

const RoleDetailPage: React.FC = () => {
  const handleApplyForRole = () => {
    // Handle apply for role functionality
    console.log('Apply for role clicked');
  };

  const handleBackToMovieDetails = () => {
    // Handle navigation back to movie details
    console.log('Back to movie details clicked');
  };

  return (
    <div className="role-detail-dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">F</div>
          <span className="logo-text">FilmyAI</span>
        </div>
        
        <div className="search-bar">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search movies, roles, directors..." 
          />
        </div>
        
        <div className="header-actions">
          <div className="header-icon">📊</div>
          <div className="header-icon">👤</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Back Navigation */}
        <div className="back-nav">
          <button className="back-button" onClick={handleBackToMovieDetails}>
            <ArrowLeft size={16} />
            Back to Movie Details
          </button>
        </div>

        {/* Project Header */}
        <div className="project-header">
          <p className="project-title">Midnight in Manhattan - Drama/Romance</p>
          <h1 className="role-title">Supporting Male Lead</h1>
          <h2 className="character-name">David Chen</h2>
          
          <div className="meta-info">
            <div className="meta-item">
              <User size={16} color="#FF7F00" />
              <span>Director: Sarah Chen</span>
            </div>
            <div className="meta-item">
              <Clock size={16} color="#FF7F00" />
              <span>Apply by: January 15, 2025</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          <div className="main-section">
            {/* Character Description */}
            <div className="card">
              <h3 className="card-title">Character Description</h3>
              <div className="card-content character-description">
                A charming and sensitive architect who becomes Sarah's love interest. David is 
                confident yet vulnerable, with a sharp sense of humor that masks his own past 
                disappointments. He's successful in his career but has been unlucky in love until 
                he meets Sarah. The character requires someone who can balance comedy with 
                deep emotional depth.
              </div>
            </div>

            {/* Requirements */}
            <div className="card">
              <h3 className="card-title">Requirements</h3>
              <div className="card-content">
                <ul className="requirements-list">
                  <li>Strong dramatic and comedic acting skills</li>
                  <li>NYC local preferred</li>
                  <li>Previous romantic lead experience</li>
                  <li>Comfortable with intimate scenes</li>
                </ul>
              </div>
            </div>

            {/* Special Skills */}
            <div className="card">
              <h3 className="card-title">
                <span className="star-icon">⭐</span>
                Special Skills Required
              </h3>
              <div className="card-content">
                <div className="skills-container">
                  <span className="skill-tag">Piano playing</span>
                  <span className="skill-tag">Ballroom dancing</span>
                  <span className="skill-tag">Rock climbing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="card">
              <h3 className="card-title">Role Information</h3>
              
              <div className="info-section">
                <h4 className="info-label">Age Range</h4>
                <p className="info-value">25-35 years</p>
              </div>
              
              <div className="info-section">
                <h4 className="info-label">Gender</h4>
                <p className="info-value">Male</p>
              </div>
              
              <div className="info-section">
                <h4 className="info-label">Languages Required</h4>
                <div className="language-tags">
                  <span className="language-tag">English</span>
                  <span className="language-tag">Mandarin</span>
                  <span className="language-tag">Mandarin</span>
                  <span className="language-tag">Mandarin</span>
                  <span className="language-tag">Mandarin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="apply-section">
          <button className="apply-button" onClick={handleApplyForRole}>
            Apply for Role
          </button>
        </div>
      </main>
    </div>
  );
};

export default RoleDetailPage;