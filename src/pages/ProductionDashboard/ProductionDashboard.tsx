import { Building } from 'lucide-react';
import React from 'react';
import Header from '../../components/Header/Header';
import { productionDashboardMessages } from '../../constants/messages';
import './ProductionDashboard.css';
import Button from '../../components/Buttons/Button';

const ProductionDashboard: React.FC = () => {
  const currentProjects = [
    {
      title: 'The Dark Knight returns',
      tags: ['Action', 'Drama'],
      applications: 125,
      roles: 125,
      deadline: '08-15-2024',
      status: 'Open'
    },
    {
      title: 'Summer Romance',
      tags: ['Romance', 'Comedy'],
      applications: 98,
      roles: 50,
      deadline: '09-01-2024',
      status: 'Open'
    },
    {
      title: 'Sci-Fi Adventure',
      tags: ['Sci-Fi', 'Adventure'],
      applications: 75,
      roles: 30,
      deadline: '10-10-2024',
      status: 'Closed'
    }
  ];

  const recentApplications = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Actress',
      project: 'The Dark Knight Returns',
      date: '08-15-2024',
      status: 'Under Review'
    },
    {
      name: 'Michael Chen',
      role: 'Supporting Actor',
      project: 'Summer Romance',
      date: '06-23-2024',
      status: 'Shortlisted'
    },
    {
      name: 'Emma Davis',
      role: 'Villain',
      project: 'The Dark Knight Returns',
      date: '04-11-2024',
      status: 'Interview Scheduled'
    },
    {
      name: 'Anu Kargaonkar',
      role: 'Lead Actress',
      project: 'Summer Romance',
      date: '01-08-2024',
      status: 'Shortlisted'
    }
  ];

  const renderStatusTag = (status: string) => {
    let className = 'status-tag';
    if (status === 'Under Review') className += ' orange';
    if (status === 'Shortlisted') className += ' blue';
    if (status === 'Interview Scheduled') className += ' green';
    return <span className={className}>{status}</span>;
  };

  const renderProjectStatusBadge = (status: string) => {
    const statusClass =
      status === 'Open' ? 'status-badge green' : 'status-badge red';
    return <span className={statusClass}>{status}</span>;
  };

  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard-main">
        <section className="dashboard-header">
          <h2>{productionDashboardMessages.dashboardTitle}</h2>
          <p>{productionDashboardMessages.dashboardSubtitle}</p>
        </section>

        <section className="projects-section">
          <h3><Building color="#ff7f00" size={20} /> {productionDashboardMessages.currentProjectsTitle}</h3>
          <div className="projects-grid">
            {currentProjects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div className="card-header">
                  <h4>{proj.title}</h4>
                  {renderProjectStatusBadge(proj.status)}
                </div>
                <div className="tags">
                  {proj.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="card-info">
                  <div className="info-row">
                    <span className="info-label">{productionDashboardMessages.applicationsLabel}</span>
                    <span className="info-value">{proj.applications}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">{productionDashboardMessages.rolesLabel}</span>
                    <span className="info-value">{proj.roles}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">{productionDashboardMessages.deadlineLabel}</span>
                    <span className="info-value">{proj.deadline}</span>
                  </div>
                </div>
                <div className="card-actions">
                  <Button
                    label={productionDashboardMessages?.editButton ||"Edit"}
                    variant="secondary"
                    styles={{
                      bgColor: "#fff",
                      color: "#8B4513",
                      border: "1px solid #374151",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: 600,
                      padding: "3px 30px",
                    }}
                    onClick={() => console.log("Edit clicked")}
                  />
                  <Button
                    label={productionDashboardMessages?.viewDetailsButton ||"View Details"}
                    variant="secondary"
                    styles={{
                      bgColor: "#fff",
                      color: "#8B4513",
                      border: "1px solid #374151",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: 600,
                      padding: "6px 15px",
                    }}
                  />
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="applications-section">
          <h3><Building color="#ff7f00" size={20} /> {productionDashboardMessages.recentApplicationsTitle}</h3>
          <table className="applications-table">
            <thead>
              <tr>
                <th>Applications</th>
                <th>Role</th>
                <th>Project</th>
                <th>Application Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app, idx) => (
                <tr key={idx}>
                  <td>{app.name}</td>
                  <td>{app.role}</td>
                  <td>{app.project}</td>
                  <td>{app.date}</td>
                  <td>{renderStatusTag(app.status)}</td>
                  <td><Button
                        label={productionDashboardMessages?.reviewButton ||"Review"}
                        variant="secondary"
                        styles={{
                          bgColor: "#fff",
                          color: "#8B4513",
                          border: "2px solid #374151",
                          borderRadius: "6px",
                          fontSize: "14px",
                          fontWeight: 600,
                          padding: "8px 30px",
                        }}
                      />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ProductionDashboard;