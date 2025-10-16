import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ApplicationReview.css';
import { Building } from 'lucide-react';
import Button from '../../components/Buttons/Button';
import Label from '../../components/Label/Label';


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
        <Label text = "Portfolio"
                fontSize = "24px"
                color = "var(--white)"
                padding = "0"
                margin = "0 0 1 rem 0"
                fontWeight= "600"
                fontFamily = "'Inter', sans-serif"
        />

        <h4 className="portfolio-label">Headshots</h4>

        <input
          type="file"
          id="headshot1"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => handleFileChange(e, setHeadshot1Name)}
        />
        <Button
          label={headshot1Name}
          variant="primary"
          styles={{
            bgColor: "var(--white)",color: "#562504",fontSize: "14px",padding: "0.5rem 1rem",width: "auto", fontFamily:"'Inter', sans-serif", textAlign: "start",}}
          onClick={() => document.getElementById("headshot1")?.click()}
        />

        <input
          type="file"
          id="headshot2"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => handleFileChange(e, setHeadshot2Name)}
        />
        <Button
          label={headshot2Name}
          variant="primary"
          styles={{
            bgColor: "var(--white)",color: "#562504",fontSize: "14px",padding: "0.5rem 1rem",width: "auto", fontFamily:"'Inter', sans-serif", textAlign: "start",}}
          onClick={() => document.getElementById("headshot2")?.click()}
        />
      </div>

      <div className="portfolio-group">
        <h4 className="portfolio-label">Demo Reel</h4>
        <input type="file" id="demoReel" accept="video/*" style={{ display: 'none' }} />
        <Button
          label="Upload Demo Reel"
          variant="primary"
          styles={{
            bgColor: "var(--white)",color: "#562504",fontSize: "14px",padding: "0.5rem 1rem",width: "auto", fontFamily:"'Inter', sans-serif", textAlign: "start",}}
          onClick={() => document.getElementById("demoReel")?.click()}
        />
      </div>

      <div className="portfolio-group">
        <h4 className="portfolio-label">Resume</h4>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
        />
        <Button
          label="Upload Resume"
          variant="primary"
          styles={{
            bgColor: "var(--white)",color: "#562504",fontSize: "14px",padding: "0.5rem 1rem",width: "auto", fontFamily:"'Inter', sans-serif", textAlign: "start",}}
          onClick={() => document.getElementById("resume")?.click()}
        />
      </div>
    </div>
  );
};


const SkillsLanguages: React.FC<{ skills: string[]; languages: string[]; accents: string[] }> = ({
  skills,
  languages,
  accents,
}) => (
  <>
    
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2rem", marginRight: "1rem" , marginBottom: "1rem"}}>
          <Building size={24} color="var(--orange-light)" />
          <Label 
            text="Skills & Languages"
            fontSize="24px"
            color="var(--gray-light)"
            padding="0"
            margin="0 0 0 0"
            fontWeight="500"
            fontFamily="'Inter', sans-serif"
          />
        </div>
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


const PreviousWork: React.FC<{ workHistory: { title: string; role: string; year: number }[] }> = ({
  workHistory,
}) => (
    <>
  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2rem", marginRight: "1rem" , marginBottom: "1rem"}}>
          <Building size={24} color="var(--orange-light)" />
          <Label 
            text="Previous Work"
            fontSize="24px"
            color="var(--gray-light)"
            padding="0"
            margin="0 0 0 0"
            fontWeight="500"
            fontFamily="'Inter', sans-serif"
          />
        </div>
  
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


const RoleSpecificQuestions: React.FC = () => (
  <>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2rem", marginRight: "1rem" , marginBottom: "1rem"}}>
          <Building size={24} color="var(--orange-light)" />
          <Label 
            text="Role-Specific Questions"
            fontSize="24px"
            color="var(--gray-light)"
            padding="0"
            margin="0 0 0 0"
            fontWeight="500"
            fontFamily="'Inter', sans-serif"
          />
        </div>
    
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


const QuickActions: React.FC = () => (
  <div className="card1 quick-actions-card">
    <Label text = "Quick Actions"
                fontSize = "24px"
                color = "var(--white)"
                padding = "0"
                margin = "0 0 1 rem 0"
                fontWeight= "600"
                fontFamily = "'Inter', sans-serif"
        />
    <Button
      label="Accept Application"
      variant="primary"
      styles={{
        bgColor: "#16A34A",
        color: "var(--white)",
        fontSize: "16px",
        fontFamily: "'Inter', sans-serif",
        borderRadius: "6px",
        padding: "0.6rem 1rem",
        width: "100%",
        margin: "0 0 0.5rem 0",
      }}
      onClick={() => console.log("Accepted!")}
    />
    <Button
      label="Send Message"
      variant="primary"
      styles={{
        bgColor: "var(--white)",
        color: "#60A5FA",
        fontSize: "16px",
        fontFamily: "'Inter', sans-serif",
        borderRadius: "6px",
        padding: "0.6rem 1rem",
        width: "100%",
        margin: "0 0 0.5rem 0",
      }}
      onClick={() => console.log("Message Sent!")}
    />

    <Button
      label="Add Note"
      variant="primary"
      styles={{
        bgColor: "var(--white)",
        color: "#A4A4A4",
        fontSize: "16px",
        fontFamily: "'Inter', sans-serif",
        borderRadius: "6px",
        padding: "0.6rem 1rem",
        width: "100%",
        margin: "0 0 0.5rem 0",
      }}
      onClick={() => console.log("Note Added!")}
    />
  </div>
);


const ApplicationReview: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/LandingPage');

  
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
          <span className="back-link" onClick={handleBack}>
            ← Back to Dashboard
          </span>

          <div className="title-and-actions">
            <div className="title-block">
              <p className="page-title">Application Review</p>
              <h2 className="page-subtitle">Sarah Johnson - Lead Actress</h2>
            </div>

            <div className="button-group">
              <Button
                label="Shortlist"
                variant="primary"
                styles={{ bgColor: "var(--white)", color: "#562504", width: "auto",fontSize: "15px", fontFamily:"'Inter', sans-serif",border:"1px solid var(--orange-dark)" }}
                onClick={() => console.log("Shortlist clicked")}
              />
              <Button
                label="Schedule Interview"
                variant="primary"
                styles={{ bgColor: "var(--white)", color: "#562504", width: "auto",fontSize: "15px", fontFamily:"'Inter', sans-serif",border:"1px solid var(--orange-dark)" }}
                onClick={() => console.log("Schedule Interview clicked")}
              />
              <Button
                label="Reject"
                variant="primary"
                styles={{ bgColor: "var(--white)", color: "#562504", width: "auto",fontSize: "15px", fontFamily:"'Inter', sans-serif",border:"1px solid var(--orange-dark)" }}
                onClick={() => console.log("Reject clicked")}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2rem", marginRight: "1rem" , marginBottom: "1rem"}}>
          <Building size={24} color="var(--orange-light)" />
          <Label 
            text="Basic Information"
            fontSize="24px"
            color="var(--gray-light)"
            padding="0"
            margin="0 0 0 0"
            fontWeight="500"
            fontFamily="'Inter', sans-serif"
          />
        </div>

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
