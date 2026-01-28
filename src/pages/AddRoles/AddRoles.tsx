import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import "./AddRoles.css";
import { ArrowLeft, Upload, Plus, } from "lucide-react";

const AddRoles = () => {
  const AddRolesRef = useRef<HTMLInputElement | null>(null);

  // Dummy title (replace with props or actual data as needed)
  const title = "The Dark Knight Returns";

  // Default active step is "2. Edit Roles"
  const [activeStep] = useState(2);

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
          <span>1. Project Details</span>
          <span className={activeStep === 2 ? "active-step" : ""}>
            2. Edit Roles
          </span>
        </div>
      </div>
      
    </div>
    
  );
};

export default AddRoles;
