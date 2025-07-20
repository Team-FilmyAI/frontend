import React from 'react';
import Header from '../../components/Header/Header';
import '../../styles/ViewOpportunities/ViewOpportunities.css';
import { ArrowLeft } from 'lucide-react';
import CastingCards from '../../components/CastingCards/CastingCards';
import { CastingData } from '../types/Casting';


const ViewOpportunities: React.FC = () => {
  const castingData: CastingData[] = [
    {
      title: 'Midnight in Manhattan',
      type: 'Drama/Romance',
      location: 'New York City, NY',
      applyBy: 'January 15, 2025',
      urgent: false,
      characterName: 'Supporting Male Lead',
      character: 'David Chen',
      characterDescription: 'A charming and witty architect who becomes Sarah’s love interest.',
      ageRange: '25-35',
      gender: 'Male',
      compensation: '$50,000 - $75,000',
    },
    {
      title: 'Midnight in Manhattan',
      type: 'Drama/Romance',
      location: 'Manhattan, NY',
      applyBy: 'January 20, 2025',
      urgent: true,
      characterName: "Sarah's Best Friend",
      character: 'Emma Rodriguez',
      characterDescription: 'Loyal friend who helps Sarah navigate her return to the city.',
      ageRange: '28-38',
      gender: 'Female',
      compensation: '$30,000 - $45,000',
    },
    {
      title: 'City Lights',
      type: 'Crime/Thriller',
      location: 'Los Angeles, CA',
      applyBy: 'February 1, 2025',
      urgent: false,
      characterName: 'Lead Detective',
      character: 'Marcus Thompson',
      characterDescription: 'Experienced detective investigating a series of mysterious cases.',
      ageRange: '35-45',
      gender: 'Male',
      compensation: '$80,000 - $120,000',
    },
    {
      title: 'Summer Dreams',
      type: 'Comedy/Drama',
      location: 'San Francisco, CA',
      applyBy: 'January 25, 2025',
      urgent: true,
      characterName: 'Young Entrepreneur',
      character: 'Sophia Kim',
      characterDescription: 'Ambitious young woman starting her own tech company.',
      ageRange: '22-30',
      gender: 'Female',
      compensation: '$45,000 - $65,000',
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />
      <div className="opportunities-container">
        <div className="back-link">
          <ArrowLeft className="back-icon" />
          <span>Back to Movies</span>
        </div>

        <h1 className="main-title">New Opportunities</h1>
        <p className="description">
          Discover the latest casting calls and roles that match your profile. Apply now and
          take the next step in your acting career.
        </p>

        <div className="stat-cards">
          <div className="stat-card">
            <span className="stat-number orange">4</span>
            <span className="stat-label">Total Opportunities</span>
          </div>
          <div className="stat-card">
            <span className="stat-number red">2</span>
            <span className="stat-label">Urgent Casting</span>
          </div>
          <div className="stat-card">
            <span className="stat-number green">4.8</span>
            <span className="stat-label">Your Match Score</span>
          </div>
        </div>

        <div className="card-grid">
          {castingData.map((data, index) => (
            <CastingCards key={index} cardData={data} />
          ))}
        </div>

        <div className="load-more-container">
          <button className="load-more-button">Load More Opportunities</button>
        </div>
      </div>
    </div>
  );
};

export default ViewOpportunities;
