import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ApplicationReview.css';
import { Building } from 'lucide-react';

/* ---------------- Portfolio Section ---------------- */
const PortfolioSection: React.FC = () => {
  const [headshot1Name, setHeadshot1Name] = useState('Upload Headshot 1');
  const [headshot2Name, setHeadshot2Name] = useState('Upload Headshot 2');

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFileName: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div className="card1 portfolio-card">
      <div className="portfolio-group">
        <h3 className="section-title-right">Portfolio</h3>
        <h4 className="portfolio-label">Headshots</h4>

        <input
          type="file"
          id="headshot1"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => handleFileChange(e, setHeadshot1Name)}
        />
        <label htmlFor="headshot1" className="custom-upload-button">
          {headshot1Name}
        </label>

        <input
          type="file"
          id="headshot2"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => handleFileChange(e, setHeadshot2Name)}
        />
        <label htmlFor="headshot2" className="custom-upload-button">
          {headshot2Name}
        </label>
      </div>

      <div className="portfolio-group">
        <h4 className="portfolio-label">Demo Reel</h4>
        <input type="file" id="demoReel" accept="video/*" style={{ display: 'none' }} />
        <label htmlFor="demoReel" className="custom-upload-button">
          Upload Demo Reel
        </label>
      </div>

      <div className="portfolio-group">
        <h4 className="portfolio-label">Resume</h4>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
        />
        <label htmlFor="resume" className="custom-upload-button">
          Upload Resume
        </label>
      </div>
    </div>
  );
};

/* ---------------- Skills & Languages ---------------- */
const SkillsLanguages: React.FC<{ skills: string[]; languages: string[]; accents: string[] }> = ({
  skills,
  languages,
  accents,
}) => (
  <>
    {/* Heading OUTSIDE the card */}
    <h3 className="section-title">
      <Building size={24} color="#FB923C" />
      Skills & Languages
    </h3>
    <div className="card1 skills-card">
    <div className="skills-grid">
      <div>
        <h4 className="portfolio-label">Skills</h4>
        <div className="chip-group">
          {skills.map((s, i) => (
            <span className="chip" key={i}>{s}</span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="portfolio-label">Languages</h4>
        <div className="chip-group">
          {languages.map((l, i) => (
            <span className="chip" key={i}>{l}</span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="portfolio-label">Accents</h4>
        <div className="chip-group">
          {accents.map((a, i) => (
            <span className="chip" key={i}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
  </>
);

/* ---------------- Previous Work ---------------- */
const PreviousWork: React.FC<{ workHistory: { title: string; role: string; year: number }[] }> = ({
  workHistory,
}) => (
    <>
  <h3 className="section-title">
      <Building size={24} color="#FB923C" />
      Previous Work
    </h3>
  <div className="card1 previous-work-card">
    
    <div className="work-list">
      {workHistory.map((w, i) => (
        <div className="work-item" key={i}>
          <div>
            <p className="work-title">{w.title}</p>
            <p className="work-role">{w.role}</p>
          </div>
          <span className="work-year">{w.year}</span>
        </div>
      ))}
    </div>
  </div>
  </>
);

/* ---------------- Role-Specific Questions ---------------- */
const RoleSpecificQuestions: React.FC = () => (
  <>
    <h3 className="section-title">
      <Building size={24} color="#FB923C" />
      Role-Specific Questions
    </h3>
    <div className="card1 role-questions-card">
      <div className="question-block">
        <p className="question-label">Why are you interested in this role?</p>
        <p className="question-answer">
          I am deeply passionate about complex characters that challenge societal norms.
          This role represents an opportunity to explore themes of justice and redemption
          that resonate with my artistic vision.
        </p>
      </div>
      <div className="question-block">
        <p className="question-label">Describe your experience with action sequences.</p>
        <p className="question-answer">
          I have extensive training in stage combat and have performed my own stunts in
          three previous films. I maintain a rigorous fitness routine and work regularly
          with a stunt coordinator.
        </p>
      </div>
    </div>
  </>
);

/* ---------------- Quick Actions ---------------- */
const QuickActions: React.FC = () => (
  <div className="card1 quick-actions-card">
    <h3 className="quick-actions-title">Quick Actions</h3>
    <button className="quick-btn accept">Accept Application</button>
    <button className="quick-btn send">Send Message</button>
    <button className="quick-btn note">Add Note</button>
  </div>
);

/* ---------------- Main Application Review ---------------- */
const ApplicationReview: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/dashboard');

  const basicInfo = {
    email: 'sarah.johnson@email.com',
    phone: '+1(555) 123 - 4567',
    location: 'Los Angeles, CA',
    appliedDate: '2025-02-01',
    age: 28,
    gender: 'Female',
    ethnicity: 'Caucasian',
    experience: '5 years',
    status: 'Under Review',
  };

  const skillsData = {
    skills: ['Acting', 'Stunts', 'Horseback Riding', 'Singing'],
    languages: ['English', 'Spanish'],
    accents: ['American', 'British'],
  };

  const workHistory = [
    { title: 'Summer Dreams', role: 'Supporting Actress', year: 2023 },
    { title: 'City Lights', role: 'Lead Actress', year: 2021 },
    { title: 'The Journey', role: 'Supporting', year: 2019 },
  ];

  return (
    <>
      <Header />
      <div className="app-review">
        <div className="application-top-bar">
          <p className="back-link" onClick={handleBack}>
            ← Back to Dashboard
          </p>

          <div className="title-and-actions">
            <div className="title-block">
              <p className="page-title">Application Review</p>
              <h2 className="page-subtitle">Sarah Johnson - Lead Actress</h2>
            </div>

            <div className="button-group">
              <button className="button1">Shortlist</button>
              <button className="button1">Schedule Interview</button>
              <button className="button1">Reject</button>
            </div>
          </div>
        </div>

        <h3 className="section-title">
          <Building size={24} color="#FB923C" />
          Basic Information
        </h3>

        <div className="grid-layout">
          <div className="left-column">
            <div className="card1 basic-info-card">
              <div className="basic-info-container">
                <div className="left-info">
                  <p><span className="label">Email:</span> {basicInfo.email}</p>
                  <p><span className="label">Phone:</span> {basicInfo.phone}</p>
                  <p><span className="label">Address:</span> {basicInfo.location}</p>
                  <p><span className="label">Applied:</span> {basicInfo.appliedDate}</p>
                </div>
                <div className="right-info">
                  <p><span className="label">Age:</span> {basicInfo.age}</p>
                  <p><span className="label">Gender:</span> {basicInfo.gender}</p>
                  <p><span className="label">Ethnicity:</span> {basicInfo.ethnicity}</p>
                  <p><span className="label">Experience:</span> {basicInfo.experience}</p>
                </div>
                <div className="status-badgey">
                  <span className="badgey">{basicInfo.status}</span>
                </div>
              </div>
            </div>

            {/* Skills & Previous Work */}
            <SkillsLanguages {...skillsData} />
            <PreviousWork workHistory={workHistory} />
            <RoleSpecificQuestions />
          </div>

          <div className="right-column">
            <PortfolioSection />
            <QuickActions />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationReview;
