import React from 'react';
import '../../styles/CastingCards/CastingCards.css';
import { MapPin, Clock, DollarSign } from 'lucide-react';


const CastingCards = ({ cardData }) => {
  const {
    title,
    type, 
    location,
    applyBy,
    characterName, 
    characterDescription,
    ageRange,
    gender,
    compensation,
    urgent 
  } = cardData;

  return (
    <div className="casting-call-card">
      <div className="card-header">
        <h2 className="title">{title}</h2>
        <p className="genre">{type}</p> 
        <div className="location-apply-time">
          <p className="location">
            <MapPin size={16} /> {location}
          </p>
          <p className="apply-time">
            <Clock size={16} /> Apply by: {applyBy}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h3 className="role-title">{characterName}</h3> 
        <p className="character-description">
          {characterDescription}
        </p>
        <div className="details-grid">
          <div className="detail-item">
            <p className="detail-label">Age Range</p>
            <p className="detail-value">{ageRange}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Gender</p>
            <p className="detail-value">{gender}</p>
          </div>
        </div>
        <div className="compensation">
          <p className="compensation-label">
            <DollarSign size={16} /> Compensation
          </p>
          <p className="compensation-value">{compensation}</p>
        </div>
      </div>

      <div className="card-actions">
        <button className="apply-now-button">Apply Now</button>
        <button className="view-details-button">View Details</button>
      </div>
      
      
      {urgent && <span className="urgent-badge">Urgent</span>}
      
    </div>
  );
};

export default CastingCards;