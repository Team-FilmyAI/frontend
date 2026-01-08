import React from 'react';
import './CastingCards.css';
import Button from '../Buttons/Button';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { CastingData } from '../../pages/types/Casting';


interface CastingCardsProps {
  cardData: CastingData;
}

const CastingCards: React.FC<CastingCardsProps> = ({ cardData }) => {
  const {
    title,
    type,
    location,
    applyBy,
    characterName,
    character,
    characterDescription,
    ageRange,
    gender,
    compensation,
    urgent,
  } = cardData;

  return (
    <div className="casting-call-card">
      <div className="castingcard-header">
        <div className="banner">
        <div  className="banner-overlay">
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
      </div>
      </div>

      <div className="card-body">
        <h3 className="role-title">{characterName}</h3>
        <p className="character">Character: {character}</p>
        <p className="character-description">{characterDescription}</p>
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

      <div className="card-actions" style={{ display: 'flex', gap: '1rem' }}>
        <Button label="Apply Now" styles={{ bgColor: "var(--orange)", color: "black", width: "495px" }} variant="primary" />
        <Button label="View Details" styles={{ bgColor: "var(--white)", color: "black", width: "132px" }} variant="secondary" />
      </div>

      {urgent && <span className="urgent-badge">Urgent</span>}
    </div>
  );
};

export default CastingCards;
