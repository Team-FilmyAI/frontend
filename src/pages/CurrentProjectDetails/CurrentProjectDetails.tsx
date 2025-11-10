import { ArrowLeft, Building, Calendar, MapPin } from 'lucide-react';
import * as React from 'react';
import Header from '../../components/Header/Header';
import { currentProjectDetailsMessages } from '../../constants/messages';
import './CurrentProjectDetails.css';
import Button from '../../components/Buttons/Button';
import Label from '../../components/Label/Label';
interface Role {
  id: string;
  title: string;
  gender: string;
  age: string;
  compensation: string;
  applications: number;
  status: 'open' | 'closed';
}

interface Application {
  id: string;
  name: string;
  role: string;
  experience: string;
  appliedDate: string;
  location: string;
  status: 'under-review' | 'shortlisted' | 'interview-scheduled';
}

const CurrentProjectDetails: React.FC = () => {
  const roles: Role[] = [
    {
      id: '1',
      title: 'Lead Actor',
      gender: 'Male',
      age: '20-35',
      compensation: '$50,000',
      applications: 28,
      status: 'open'
    },
    {
      id: '2',
      title: 'Supporting Actress',
      gender: 'Female',
      age: '20-35',
      compensation: '$30,000',
      applications: 56,
      status: 'open'
    },
    {
      id: '3',
      title: 'Villain',
      gender: 'Male, Female',
      age: '30-60',
      compensation: '$30,000',
      applications: 20,
      status: 'open'
    }
  ];

  const applications: Application[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Lead Actor',
      experience: '5 years',
      appliedDate: '2024-07-01',
      location: 'Los Angeles, California',
      status: 'under-review'
    },
    {
      id: '2',
      name: 'Micael Chen',
      role: 'Supporting Actress',
      experience: '5 years',
      appliedDate: '2024-07-01',
      location: 'Los Angeles, California',
      status: 'shortlisted'
    },
    {
      id: '3',
      name: 'Anu Kargaonkar',
      role: 'Lead Actor',
      experience: '5 years',
      appliedDate: '2024-07-01',
      location: 'Los Angeles, California',
      status: 'interview-scheduled'
    }
  ];

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'under-review':
        return 'Under Review';
      case 'shortlisted':
        return 'Shortlisted';
      case 'interview-scheduled':
        return 'Interview Scheduled';
      default:
        return status;
    }
  };

  return (
    <div className="project-dashboard">
        <Header />
      <div className="main-content">
        <div className="back-navigation">
          <button className="back1-button">
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>
        </div>

        <div className="project-title-section">
          <div className="title-info">
            <h1 className="main-project-title">{currentProjectDetailsMessages.projectTitle}</h1>
            <div className="project-metadata">
              <span className="status-badge-active">{currentProjectDetailsMessages.statusActive}</span>
              <div className="meta1-item">
                <MapPin size={16} color="#FF7F00" />
                {currentProjectDetailsMessages.location}
              </div>
              <div className="meta1-item">
                <Calendar size={16} color="#FF7F00" />
                {currentProjectDetailsMessages.deadline}
              </div>
            </div>
          </div>
          <Button
                label={currentProjectDetailsMessages?.editProjectButton|| "Edit Project"}
                variant="secondary"
                styles={{ bgColor: "var(--white)", color: "#562506", width: "104px", height: "30px", padding: "8px 16px", border: "1px solid var(--orange)", borderRadius: "6px", fontSize: "14px",fontWeight: "500", fontFamily:"'Garet', system-ui, sans-serif" }}
                onClick={() => console.log("Edit Project clicked")}
          />
        </div>
        
        <div className="project-details-card">
          <div className="section1-title">
            <Building color="#FF7F00" size={20} />
            <Label
              text={currentProjectDetailsMessages?.projectDetailsTitle||"Project Details"}
              fontSize="20px"
              fontWeight="500"
              color="var(--white)"
              fontFamily="'Garet', system-ui, sans-serif"
              margin="0"
              padding="0"
            />
          </div>

          
          
          <div className="details-content">
            <div className="details-grid">
              <div className="synopsis-section">
                <Label
                  text={currentProjectDetailsMessages.synopsisTitle||"Synopsis"}
                  fontSize="16px"
                  fontWeight="500"
                  color="var(--orange)"
                  fontFamily="'Garet', system-ui, sans-serif"
                  margin="0 0 16px 0"
                />
                <p className="synopsis-text">
                  {currentProjectDetailsMessages.synopsisText}
                </p>
      
                <p className="synopsis-description">
                  {currentProjectDetailsMessages.synopsisDescription}
                </p>
              </div>
              
              <div className="production-section">
                <div className="production-header">
                  <Label
                    text={currentProjectDetailsMessages?.projectDetailsTitle||"Production Details"}
                    fontSize="16px"
                    fontWeight="500"
                    color="var(--orange)"
                    fontFamily="'Garet', system-ui, sans-serif"
                    margin="0 0 16px 0"
                  />

                  
                  <div className="genre-tags">
                    <span className="genre-tag action">{currentProjectDetailsMessages.genreValue}</span>
                    <span className="genre-tag drama">{currentProjectDetailsMessages.genreValue}</span>
                  </div>
                </div>
                <div className="production-info">
                  <div className="production-item">
                    <span className="production-label">{currentProjectDetailsMessages.productionLabel}</span>
                    <span className="production-value">{currentProjectDetailsMessages.productionValue}</span>
                  </div>
                  <div className="production-item">
                    <span className="production-label">{currentProjectDetailsMessages.genreLabel}</span>
                    <span className="production-value">{currentProjectDetailsMessages.genreValue}</span>
                  </div>
                  <div className="production-item">
                    <span className="production-label">{currentProjectDetailsMessages.productionLabel}</span>
                    <span className="production-value">{currentProjectDetailsMessages.productionValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div className="roles-section">
            <div className="section1-title">
              <Building color="#FF7F00" size={20} />
              <Label
                text={ currentProjectDetailsMessages?.rolesTitle || `Roles (${roles.length})`}
                fontSize="20px"
                fontWeight="500"
                color="var(--white)"
                fontFamily="'Garet', system-ui, sans-serif"
              />
            </div>
            
            <div className="roles-list">
              {roles.map((role) => (
                <div key={role.id} className="role-card">
                  <div className="role-status-badge">{currentProjectDetailsMessages.roleStatusOpen}</div>
                  
                  <Label
                    text={role.title}
                    fontSize="16px"
                    fontWeight="500"
                    color="var(--orange)"
                    fontFamily="'Garet', system-ui, sans-serif"
                    margin="0 0 16px 0"
                  />

                  
                  <div className="role-details">
                    <div className="role-detail-item">
                      <span className="detail-label">{currentProjectDetailsMessages.genderLabel}</span>
                      <span className="detail-value">{role.gender}</span>
                    </div>
                    <div className="role-detail-item">
                      <span className="detail-label">{currentProjectDetailsMessages.ageLabel} </span>
                      <span className="detail-value">{role.age}</span>
                    </div>
                    <div className="role-detail-item">
                      <span className="detail-label">{currentProjectDetailsMessages.compensationLabel}</span>
                      <span className="detail-value">{role.compensation}</span>
                    </div>
                    <div className="role-detail-item">
                      <span className="detail-label">{currentProjectDetailsMessages.applicationLabel}</span>
                      <span className="detail1-value">{role.applications}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="applications-section1">
            <div className="section1-title">
              <Building color="#FF7F00" size={20} />
              <Label
                text={currentProjectDetailsMessages?.applicationsTitle || `Applications (${applications.length})`}
                fontSize="20px"
                fontWeight="500"
                color="var(--white)"
                fontFamily="'Garet', system-ui, sans-serif"
              />
            </div>
            
            <div className="applications-list">
              {applications.map((application) => (
                <div key={application.id} className="application-card">
                  <div className="application-header">
                    <div className="applicant-info">
                      <h3 className="applicant-name">{application.name}</h3>
                      <p className="applicant-role">{application.role}</p>
                    </div>
                    <span className={`application-status ${application.status}`}>
                      {getStatusText(application.status)}
                    </span>
                  </div>
                  
                  <div className="application-details">
                    <div className="application-detail-item">
                      <span className="detail-label">{currentProjectDetailsMessages.experienceLabel}</span>
                      <span className="detail-value">{application.experience}</span>
                    </div>
                      <div className="application-bottom-row">
                        <div className="application-detail-item">
                          <span className="detail-label">{currentProjectDetailsMessages.appliedLabel}</span>
                          <span className="detail-value">{application.appliedDate}</span>
                        </div>
                        <div className="application-location">
                          {application.location}
                        </div>
                      </div>
                  </div>
                  <Button
                    label={currentProjectDetailsMessages?.reviewApplicationButton || "Review Application"}
                    variant="secondary"
                    fullWidth={true}
                    styles={{
                      bgColor: "var(--white)",
                      color: "#562506",
                      border: "1px solid var(--orange)",
                      padding: "12px 16px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                    className="review-application"
                  />

                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjectDetails;