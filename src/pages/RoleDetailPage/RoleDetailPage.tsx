import { ArrowLeft, Clock, Star, User } from 'lucide-react';
import * as React from 'react';
import Header from '../../components/Header/Header';
import { MessageRoleDetailPage } from '../../constants/messages';
import './RoleDetailPage.css';

const RoleDetailPage: React.FC = () => {
  const handleApplyForRole = () => {
    console.log('Apply for role clicked');
  };

  const handleBackToMovieDetails = () => {
    console.log('Back to movie details clicked');
  };

  return (
    <div className="role-detail-dashboard">
      <Header />
      <main className="role-main-content">
        <div className="role-content-container">
          <div className="role-back-navigation">
            <button className="role-back-button" onClick={handleBackToMovieDetails}>
              <ArrowLeft size={16} />
              {MessageRoleDetailPage.backToMovieDetails}
            </button>
          </div>

          <div className="role-project-header">
            <p className="role-project-title">Midnight in Manhattan - Drama/Romance</p>
            <h1 className="role-title1">Supporting Male Lead</h1>
            <h2 className="role-character-name">David Chen</h2>
            
            <div className="role-meta-info">
              <div className="role-meta-item">
                <User size={16} color="#FF7F00" />
                <span>Director: Sarah Chen</span>
              </div>
              <div className="role-meta-item">
                <Clock size={16} color="#FF7F00" />
                <span>Apply by: January 15, 2025</span>
              </div>
            </div>
          </div>

          <div className="role-content-grid">
            <div className="role-main-section">
              <div className="role-card">
                <h3 className="role-card-title">Character Description</h3>
                <div className="role-card-content role-character-description">
                  A charming and witty architect who becomes Sarah's love interest. David is 
                  confident yet vulnerable, with a sharp sense of humor that masks his own past 
                  disappointments. He's successful in his career but has been unlucky in love until 
                  he meets Sarah. The character requires someone who can balance comedy with 
                  genuine emotional depth.
                </div>
                
                <div className="role-section-divider"></div>
                
                <h3 className="role-card-title">Requirements</h3>
                <div className="role-card-content">
                  <ul className="role-requirements-list">
                    <li>Strong dramatic and comedic acting skills</li>
                    <li>NYC local preferred</li>
                    <li>Previous romantic lead experience</li>
                    <li>Comfortable with intimate scenes</li>
                  </ul>
                </div>

                <div className="role-section-divider"></div>
                
                <h3 className="role-card-title">
                  <Star size={20} color='#ff7f00' className="role-star-icon" />
                  Special Skills Required
                </h3>
                <div className="role-card-content">
                  <div className="role-skills-container">
                    <span className="role-skill-tag">Piano playing</span>
                    <span className="role-skill-tag">Ballroom dancing</span>
                    <span className="role-skill-tag">Rock climbing</span>
                  </div>
                </div>
              </div>

              <div className="role-apply-section">
                <button className="role-apply-button" onClick={handleApplyForRole}>
                  Apply for Role
                </button>
              </div>
            </div>

            <div className="role-sidebar">
              <div className="role-card1">
                <h3 className="role-card-title">Role Information</h3>
                
                <div className="role-info-section">
                  <h4 className="role-info-label">Age Range</h4>
                  <p className="role-info-value">25-35 years</p>
                </div>
                
                <div className="role-info-section">
                  <h4 className="role-info-label">Gender</h4>
                  <p className="role-info-value">Male</p>
                </div>
                
                <div className="role-info-section">
                  <h4 className="role-info-label">Languages Required</h4>
                  <div className="role-language-tags">
                    <span className="role-language-tag">English</span>
                    <span className="role-language-tag">Mandarin</span>
                    <span className="role-language-tag">Mandarin</span>
                    <span className="role-language-tag">Mandarin</span>
                    <span className="role-language-tag">Mandarin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoleDetailPage;