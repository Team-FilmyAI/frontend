import React, { useState } from "react";
import "../styles/JobPost.css"; // we'll create this in styles folder
import TextInputBox from "../components/TextInputBox";
import CheckboxGroup from "../components/CheckboxGroup";
import DescriptionBox from "../components/DescriptionBox";
import DropdownMenu from "../components/DropdownMenu";
import DateInput from "../components/DateInput";
import WholeNumberInput from "../components/WholeNumberInput";
import Currency from "../components/Currency";
import UploadButton from "../components/UploadButton";
import EmailInputBox from "../components/EmailInputBox";
import WebsiteInputBox from "../components/WebsiteInputBox";
import SubmitButton from "../components/SubmitButton";

const JobPost = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [productionCompany, setProductionCompany] = useState("");
  const projectTypes = [
    "Feature Film",
    "Short Film",
    "Music Video",
    "Web Commercial",
    "Documentary",
    "Reality Show",
    "Branded Content",
    "Other",
  ];
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [customType, setCustomType] = useState("");

  const jobLocations = [
    "Remote",
    "Los Angeles",
    "New York",
    "Atlanta",
    "Miami",
    "Chicago",
    "International",
    "Other",
  ];

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [customLocation, setCustomLocation] = useState("");

  const [projectDescription, setProjectDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const roles = [
    "Actor",
    "Dancer",
    "Director",
    "Cinematographer",
    "Sound Engineer",
    "Lighting Technician",
    "Editor",
    "Makeup Artist",
    "Costume Designer",
    "Production Assistant",
    "Other",
  ];
  const [selectedRole, setSelectedRole] = useState("");

  const experienceLevels = [
    "Entry-level",
    "1–3 years",
    "3–5 years",
    "5+ years",
    "Open to all",
  ];
  const [experienceLevel, setExperienceLevel] = useState("");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [currency, setCurrency] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  const [negotiable, setNegotiable] = useState(false);

  const [applicationDeadline, setApplicationDeadline] = useState(null);

  const [referenceFile, setReferenceFile] = useState(null);

  const [email, setEmail] = useState("");

  const [website, setWebsite] = useState("");

  const handleSubmit = () => {
    // Perform validations, submit logic, or call an API
    console.log("Submitting job post...");
  };

  return (
    <div className="jobpost-container">
      <h1>Create Job Post</h1>
      <div className="input-row">
        <TextInputBox
          label="Project Title"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          name="projectTitle"
        />
        <TextInputBox
          label="Production Company Name"
          placeholder="Production Company Name"
          value={productionCompany}
          onChange={(e) => setProductionCompany(e.target.value)}
          name="productionCompany"
        />
      </div>
      <div className="checkbox-row">
        <CheckboxGroup
          label="Project Type"
          options={projectTypes}
          onChange={(selected, other) => {
            setSelectedTypes(selected);
            setCustomType(other);
          }}
        />
        <CheckboxGroup
          label="Job Location"
          options={jobLocations}
          onChange={(selected, other) => {
            setSelectedLocations(selected);
            setCustomLocation(other);
          }}
        />
      </div>
      <DescriptionBox
        label="Project Description"
        placeholder="Please describe the nature of the project"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        name="projectDescription"
      />
      <DescriptionBox
        label="Responsibilities"
        placeholder="What will the hired person do"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
        name="responsibilities"
      />
      <div className="input-row">
        <DropdownMenu
          label="Role Needed"
          options={roles}
          onChange={(value) => setSelectedRole(value)}
          name="role"
        />
        <DropdownMenu
          label="Experience Level"
          options={experienceLevels}
          onChange={(value) => setExperienceLevel(value)}
          name="experienceLevel"
        />
      </div>
      <div className="input-row">
        <DateInput
          label="Shoot Start Date"
          value={startDate}
          onChange={setStartDate}
          name="startDate"
        />
        <DateInput
          label="Shoot End Date"
          value={endDate}
          onChange={setEndDate}
          name="endDate"
        />
      </div>
      <div className="budget-row">
        <Currency
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          name="currency"
        />
        <WholeNumberInput
          label="Min Budget"
          placeholder="Minimum"
          value={minBudget}
          onChange={(e) => setMinBudget(e.target.value)}
          name="minBudget"
        />
        <WholeNumberInput
          label="Max Budget"
          placeholder="Maximum"
          value={maxBudget}
          onChange={(e) => setMaxBudget(e.target.value)}
          name="maxBudget"
        />
      </div>
      <div className="negotiable-checkbox">
        <label>
          <input
            type="checkbox"
            checked={negotiable}
            onChange={(e) => setNegotiable(e.target.checked)}
          />
          Negotiable
        </label>
      </div>
      <div className="application-deadline">
        <DateInput
          label="Application Deadline"
          value={applicationDeadline}
          onChange={setApplicationDeadline}
          name="applicationDeadline"
        />
      </div>
      <UploadButton
        label="Upload Reference Material (Optional)"
        name="referenceMaterial"
        onChange={(e) => console.log(e.target.files[0])}
      />
      <EmailInputBox
        label="Contact Email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <WebsiteInputBox
        label="Website (Optional)"
        placeholder="https://example.com"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        name="website"
      />
      <SubmitButton label="Post Job" onClick={handleSubmit} />
    </div>
  );
};

export default JobPost;
