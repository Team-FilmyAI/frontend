import React, { useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import "./EditProjectPage.css";
import { Upload, Plus, Edit2, Trash2, ArrowLeft } from "lucide-react";

const genres: string[] = [
  "Action",
  "Adventure",
  "Animation",
  "War",
  "Comedy",
  "Crime",
  "Documentary",
  "Biography",
  "Family",
  "Fantasy",
  "History",
  "Drama",
  "Sport",
  "Thriller",
  "Romance",
  "Sci-Fi",
];

const production: string[] = [
  "Warner Bros",
  "HBO",
  "Sony Pictures",
  "Universal Pictures",
  "Disney",
  "Paramount Pictures",
  "Netflix",
  "20th Century Studios",
];

interface Role {
  roleName: string;
  gender: string;
  ageRange: string;
  compensation: string;
  openings: number;
  deadline: string;
}

const roles = [
  { name: "Batman", gender: "Male", age: "35-40", compensation: "$2,500,000", openings: 1, deadline: "Aug 31, 2024" },
  { name: "Commissioner", gender: "Male", age: "35-40", compensation: "$150,000", openings: 1, deadline: "Aug 31, 2024" },
  { name: "Carrie", gender: "Female", age: "18-25", compensation: "$500,000", openings: 1, deadline: "Aug 31, 2024" },
  { name: "The Joker", gender: "Male", age: "35-40", compensation: "$400,000", openings: 1, deadline: "Aug 31, 2024" },
  { name: "Harvey Dent", gender: "Male", age: "45-55", compensation: "$2,500,000", openings: 1, deadline: "Aug 31, 2024" },
  { name: "Mutant Leader", gender: "Male", age: "35-40", compensation: "$500,000", openings: 1, deadline: "Aug 31, 2024" },
  { name: "Alfred Pennyworth", gender: "Male", age: "35-60-75", compensation: "$400,000", openings: 1, deadline: "Aug 31, 2024" },
  { name: "Clark Kent", gender: "Male", age: "35-40", compensation: "$150,000", openings: 1, deadline: "Aug 31, 2024" },
];

const EditProjectPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/AddRoles');
  };
  const [title, setTitle] = useState<string>("The Dark Knight Returns");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([
    "Action",
    "Adventure",
    "Crime",
    "Documentary",
    "War",
  ]);
  const [selectedProduction, setSelectedProduction] = useState<string[]>([]);
  const [synopsis, setSynopsis] = useState<string>(
    "A gripping tale of justice and redemption in a dark urban setting."
  );
  const [activeStep, setActiveStep] = useState(1);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres((prev: string[]) =>
      prev.includes(genre) ? prev.filter((g: string) => g !== genre) : [...prev, genre]
    );
  };

  const handleProductionChange = (company: string) => {
    setSelectedProduction((prev: string[]) =>
      prev.includes(company) ? prev.filter((c: string) => c !== company) : [...prev, company]
    );
  };

  const EditProjectPage = useRef<HTMLInputElement | null>(null);
  
  const handleUploadClick = () => {
    if (EditProjectPage.current) {
      EditProjectPage.current.click(); // Opens file dialog
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log("Selected file:", file.name); 
    }
  };

  const [showForm, setShowForm] = useState(false);

  const handleAddRoleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="project-dashboard">
      <Header />
      <div className="editproject-container">
        <div className="back-navigation">
          <button className="back1-button">
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>
        </div>

        <div className="project-title-section">
          <div className="title-info">
            <h1 className="main-project-title">Edit Project</h1>
            <div className="project-metadata">
              <div className="meta1-item">{title}</div>
            </div>
          </div>
          <button className="edit2-button">Save Changes</button>
        </div>

        {/* Steps */}
        <div className="steps">
          <span
            className={activeStep === 1 ? "active-step" : ""}
            onClick={() => setActiveStep(1)}
          >
            1. Project Details
          </span>
          <span
            className={activeStep === 2 ? "active-step" : ""}
            onClick={() => setActiveStep(2)}
          >
            2. Edit Roles
          </span>
        </div>

        {/* Step 1 - Project Details */}
        {activeStep === 1 && (
          <div className="project-form">
            <label className="form-label">Project Title *</label>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="form-label">
              Genre* (Multiple selection allowed)
            </label>
            <div className="genre-grid">
              {genres.map((genre) => (
                <label key={genre} className="genre-option">
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                  />
                  <span className="genre-label">{genre}</span>
                </label>
              ))}
            </div>

            <label className="form-label">Synopsis*</label>
            <textarea
              className="form-textarea"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
            />

            <label className="form-label">Project Category *</label>

            <label className="form-label">
              Production Company* (Multiple selection allowed)
            </label>
            <div className="production-grid">
              {production.map((company) => (
                <label key={company} className="genre-option">
                  <input
                    type="checkbox"
                    checked={selectedProduction.includes(company)}
                    onChange={() => handleProductionChange(company)}
                  />
                  <span className="genre-label">{company}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 - Edit Roles */}
        {activeStep === 2 && (
          <div className="roles-dashboard">
      <div className="editroles-container">
        {/* Header */}
        <div className="roles-header">
          <h2 className="roles-title">Manage Roles ({roles.length})</h2>
          <div className="roles-actions">
            <input
              type="file"
              accept=".csv"
              ref={EditProjectPage}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button className="csv-button" onClick={handleUploadClick}>
              <Upload size={16} /> Upload CSV
            </button>
            <button className="addrole-button" onClick={handleAddRoleClick}>
              <Plus size={16} /> Add Role
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="roles-table-container">
          <table className="roles-table">
            <thead>
              <tr>
                <th>Role Name</th>
                <th>Gender</th>
                <th>Age Range</th>
                <th>Compensation</th>
                <th>Openings</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, idx) => (
                <tr key={idx}>
                  <td>{role.name}</td>
                  <td>{role.gender}</td>
                  <td>{role.age}</td>
                  <td>{role.compensation}</td>
                  <td>{role.openings}</td>
                  <td>{role.deadline}</td>
                  <td className="actions">
                    <button className="icon-btn edit" onClick={handleRedirect}>
                      <Edit2 className="icon" />
                    </button>
                    <button className="icon-btn delete">
                      <Trash2 className="icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="update-footer">
          <button className="update-button">Update Project</button>
        </div>
      </div>
    </div>
        )}
      </div>
    </div>
  );
};

export default EditProjectPage;
