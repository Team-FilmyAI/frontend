import { Building } from 'lucide-react';
import React from 'react';
import Header from '../../components/Header/Header';
import './ProductionDashboard.css';

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
          <h2>Production Dashboard</h2>
          <p>Manage your projects and casting calls</p>
        </section>

        <section className="projects-section">
          <h3><Building color="#ff7f00" size={20} /> Current Projects</h3>
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
                    <span className="info-label">Applications:</span>
                    <span className="info-value">{proj.applications}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Roles:</span>
                    <span className="info-value">{proj.roles}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Deadline:</span>
                    <span className="info-value">{proj.deadline}</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="edit1-btn">Edit</button>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="applications-section">
          <h3><Building color="#ff7f00" size={20} /> Recent applications</h3>
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
                  <td><button className="review-btn">Review</button></td>
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