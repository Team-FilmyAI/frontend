import React, { useState } from 'react';
import '../../styles/ProfilePage/ProfilePage.css';
import Footer from '../LandingPage/Footer';
import ProfileNavBar from './ProfileNavBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import LocationSearch from './LocationSearch';


// Helper to convert "YYYY-MM" to JS Date object
const parseMonthYear = (val) => val ? new Date(val + '-01') : null;

// Helper to format date to "YYYY-MM"
const formatToMonthYear = (date) =>
  date ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}` : '';

const genreOptions = [
    { value: 'Drama', label: 'Drama' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Action', label: 'Action' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
    { value: 'Other', label: 'Other' },
  ];
  
  
const ProfilePage = () => {

    const [errors, setErrors] = useState({});
    // if you add any fields like the firstName add below the formData here
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        preferredFirstName: '', 
        preferredLastName: '',
        profession: '',
        email: '',
        location: '',
        about: '',
        height: '',
        weight: '',
        weightUnit: 'kg',
        ethnicity: '',
        hairColor: '',
        eyeColor: '',
        age: '',
        experiences: [
            {
                poster: null,
                title: '',
                role: '',
                startDate: '',
                endDate: '',
                rolesResponsibility: '',
                genre: [],
                genreOther: ''
            }
          ]
      });
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }// here is the constant for saveing or editing profile picture
  }; 

  

    
    
      const handleChange = (e) => {
        const { name, value } = e.target;

        // Word limit logic for "about" field
            if (name === 'about') {
                const wordCount = value.trim().split(/\s+/).length;
                if (wordCount > 500) return; // Do not update if over 500 words
            }

        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
        if (name === 'about') {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }
        };
    

        const handleExperienceChange = (e, index) => {
            const { name, value, files } = e.target;
            const updatedExperiences = [...formData.experiences];
          
            if (name === 'genre') {
              const selected = Array.from(e.target.options)
                .filter((o) => o.selected)
                .map((o) => o.value);
              updatedExperiences[index][name] = selected;
            } else {
              updatedExperiences[index][name] = files ? files[0] : value;
            }
          
            setFormData((prev) => ({
              ...prev,
              experiences: updatedExperiences
            }));
          };
          


          const removeExperience = (indexToRemove) => {
            setFormData((prev) => {
              if (prev.experiences.length === 1) {
                alert("At least one experience entry is required.");
                return prev; // Don't remove if only one left
              }
              return {
                ...prev,
                experiences: prev.experiences.filter((_, index) => index !== indexToRemove)
              };
            });
          };

          const formatMonthYear = (value) => {
            if (!value) return '';
            const [year, month] = value.split('-');
            return `${new Date(`${year}-${month}-01`).toLocaleString('default', {
              month: 'short',
              year: 'numeric'
            })}`;
          };
          
          
            const [editMode, setEditMode] = useState(true);
            const [editProfileInfo, setEditProfileInfo] = useState(true);
            const [editAboutMe, setEditAboutMe] = useState(true);
            const [editPhysicalInfo, setEditPhysicalInfo] = useState(true);
            const [editExperience, setEditExperience] = useState(true);

            const handleSaveAll = () => {
                const newErrors = {};
              
                // Profile Info validations
                if (!profilePic) newErrors.profilePic = "Profile picture is required.";
                if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
                if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
                if (!formData.profession.trim()) newErrors.profession = "Profession is required.";
              
                // Physical Info validations
                if (!formData.height && !formData.heightFeet) newErrors.height = "Height is required.";
                if (!formData.weight) newErrors.weight = "Weight is required.";
                if (!formData.age) newErrors.age = "Age is required.";
              
                // Experience validations (check only first experience for now)
                
                formData.experiences.forEach((exp, index) => {
                    if (!exp.CompanyName || exp.CompanyName.trim() === '') {
                      newErrors[`experiences.${index}.CompanyName`] = "Company name is required.";
                    }
                    if (!exp.role || exp.role.trim() === '') {
                      newErrors[`experiences.${index}.role`] = "Designation is required.";
                    }
                    // Add more if needed (startDate, genre, etc.)
                  });

                if (Object.keys(newErrors).length > 0) {
                  setErrors(newErrors);
                  return;
                }
              
                setErrors({});
                setEditMode(false);
                setEditProfileInfo(false);
                setEditAboutMe(false);
                setEditPhysicalInfo(false);
                setEditExperience(false);
              };
              
              
              const handleEditAll = () => {
                setEditMode(true);
                setEditProfileInfo(true);
                setEditAboutMe(true);
                setEditPhysicalInfo(true);
                setEditExperience(true);
              };

              const handleSaveProfileInfo = () => {
                const newErrors = {};
              
                if (!profilePic) newErrors.profilePic = "Profile picture is required.";
                if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
                if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
                if (!formData.profession.trim()) newErrors.profession = "Profession is required.";
              
                if (Object.keys(newErrors).length > 0) {
                  setErrors((prev) => ({ ...prev, ...newErrors }));
                  return;
                }
              
                // No errors
                setErrors((prev) => {
                  const updated = { ...prev };
                  delete updated.profilePic;
                  delete updated.firstName;
                  delete updated.lastName;
                  delete updated.profession;
                  return updated;
                });
                setEditProfileInfo(false);
              };

              const handleSavePhysicalInfo = () => {
                const newErrors = {};
                if (!formData.height && !formData.heightFeet) newErrors.height = "Height is required.";
                if (!formData.weight) newErrors.weight = "Weight is required.";
                if (!formData.age) newErrors.age = "Age is required.";
              
                if (Object.keys(newErrors).length > 0) {
                  setErrors((prev) => ({ ...prev, ...newErrors }));
                  return;
                }
              
                setErrors((prev) => {
                  const updated = { ...prev };
                  delete updated.height;
                  delete updated.weight;
                  delete updated.age;
                  return updated;
                });
                setEditPhysicalInfo(false);
              };

              const handleSaveExperience = () => {
                const newErrors = {};
                formData.experiences.forEach((exp, index) => {
                  if (!exp.CompanyName) newErrors[`experiences.${index}.CompanyName`] = "Company name is required.";
                  if (!exp.role) newErrors[`experiences.${index}.role`] = "Designation is required.";
                });
              
                if (Object.keys(newErrors).length > 0) {
                  setErrors((prev) => ({ ...prev, ...newErrors }));
                  return;
                }
              
                // Clear related errors
                const updated = { ...errors };
                formData.experiences.forEach((_, index) => {
                  delete updated[`experiences.${index}.CompanyName`];
                  delete updated[`experiences.${index}.role`];
                });
                setErrors(updated);
                setEditExperience(false);




                // Dummy save logic (to be replaced with real API call)
            // const payload = {
            //     profilePic,
            //     firstName: formData.firstName,
            //     lastName: formData.lastName,
            //     preferredFirstName: formData.preferredFirstName,
            //     preferredLastName: formData.preferredLastName,
            //     profession: formData.profession,
            //     email: formData.email,
            //     location: formData.location,
            //     height: formData.height || formData.heightFeet,
            //     weight: formData.weight,
            //     age: formData.age,
            //     ethnicity: formData.ethnicity,
            //     hairColor: formData.hairColor,
            //     eyeColor: formData.eyeColor,
            //     experiences: formData.experiences,
            // };
            
            // // console.log("Saving to DB:", payload);
            
            // // Example placeholder for actual save operation
            // // fetch('/api/save-profile', {
            // //   method: 'POST',
            // //   headers: {
            // //     'Content-Type': 'application/json'
            // //   },
            // //   body: JSON.stringify(payload)
            // // })
            // //   .then(res => res.json())
            // //   .then(data => console.log("Saved successfully:", data))
            // //   .catch(err => console.error("Save failed:", err));
  
              };
              
              

  return (
    <div className="profile-container">
        <ProfileNavBar homePath="/dashboard" /> {/* will decide which page it should go to later and add it */}


        <div className="profile-wrapper">
            <div className="profile-columns">
                    {/* Left Column */}
                    <div className="profile-left">
                        <div className="frosted-card">
                            <div className="section-header">
                                <h3>Profile Info</h3>
                                {editProfileInfo ? (
                                <i className="fa fa-save edit-icon" onClick={handleSaveProfileInfo}></i>
                                ) : (
                                <i className="fa fa-pen edit-icon" onClick={() => setEditProfileInfo(true)}></i>
                                )}
                            </div>

                            {editProfileInfo ? (
                                <>
                                {/* Upload + Pic */}
                                <div className="form-row">
                                    <label>Upload Profile Picture:<span className="required-asterisk">*</span></label>
                                    <input type="file" onChange={handleProfilePicChange} />
                                    {errors.profilePic && <p className="error-msg">{errors.profilePic}</p>}
                                    {profilePic && (
                                    <img
                                        src={URL.createObjectURL(profilePic)}
                                        alt="Profile Preview"
                                        className="profile-pic-display"
                                    />
                                    )}
                                </div>

                                {/* Full Name */}
                                <div className="double-input-row">
                                    <div className="half-width">
                                        <label>
                                            First Name:<span className="required-asterisk">*</span>
                                        </label>
                                        <input
                                        type="text"
                                        className="profile-input"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                        />{errors.firstName && <p className="error-msg">{errors.firstName}</p>}
                                    </div>
                                    <div className="half-width">
                                        <label>Last Name:<span className="required-asterisk">*</span></label>
                                        <input
                                        type="text"
                                        className="profile-input"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter last name"
                                        />{errors.lastName && <p className="error-msg">{errors.lastName}</p>}
                                    </div>
                                </div>
                                

                                {/* Preferred Name */}
                                <div className="double-input-row">
                                    <div className="half-width">
                                        <label>Preferred First Name:</label>
                                        <input
                                        type="text"
                                        className="profile-input"
                                        name="preferredFirstName"
                                        value={formData.preferredFirstName}
                                        onChange={handleChange}
                                        placeholder="First name"
                                        />
                                    </div>
                                    <div className="half-width">
                                        <label>Preferred Last Name:</label>
                                        <input
                                        type="text"
                                        className="profile-input"
                                        name="preferredLastName"
                                        value={formData.preferredLastName}
                                        onChange={handleChange}
                                        placeholder="Last name"
                                        />
                                    </div>
                                </div>


                                {/* Profession */}
                                <div className="form-row">
                                    <label>Profession:<span className="required-asterisk">*</span></label>
                                    <input
                                    type="text"
                                    className="profile-input"
                                    name="profession"
                                    value={formData.profession}
                                    onChange={handleChange}
                                    placeholder="e.g. Actor | Director"
                                    />
                                    {errors.profession && <p className="error-msg">{errors.profession}</p>}
                                </div>

                                {/* Email */}
                                <div className="form-row">
                                    <label>Email:</label>
                                    <input
                                    type="email"
                                    className="profile-input"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    />
                                </div>

                                {/* Location */}
                                <div className="form-row">
                                    <label>Location:</label>
                                    <LocationSearch
                                        value={formData.location}
                                        onChange={(address) =>
                                            setFormData({ ...formData, location: address })
                                        }
                                    />

                                </div>
                                </>
                            ) : (
                                <div className="profile-info-display-row">
                                <div className="profile-info-left">
                                    <span className="profile-display-inline">
                                    <strong>Full Name:</strong> {formData.firstName} {formData.lastName}
                                    </span>
                                    <span className="profile-display-inline">
                                    <strong>Preferred Name:</strong> {formData.preferredFirstName} {formData.preferredLastName}
                                    </span>
                                    <span className="profile-display-inline">
                                    <strong>Profession:</strong> {formData.profession}
                                    </span>
                                    <span className="profile-display-inline">
                                    <strong>Email:</strong> {formData.email}
                                    </span>
                                    <span className="profile-display-inline">
                                    <strong>Location:</strong> {formData.location}
                                    </span>
                                </div>
                                {profilePic && (
                                    <img
                                    src={URL.createObjectURL(profilePic)}
                                    alt="Profile"
                                    className="profile-pic-display"
                                    />
                                )}
                                </div>
                            )}
                        </div>


                        {/* About Me */}
                        <div className="frosted-card">
                            <div className="section-header">
                                <h3>About Me</h3>
                                {editAboutMe ? (
                                    <i className="fa fa-save edit-icon" onClick={() => setEditAboutMe(false)}></i>
                                ) : (
                                    <i className="fa fa-pen edit-icon" onClick={() => setEditAboutMe(true)}></i>
                                )}
                            </div>

                            <div className="form-row">
                                {editAboutMe ? (
                                <>
                                    <label>Write something about yourself:</label>
                                    <textarea
                                    className="profile-input"
                                    name="about"
                                    value={formData.about}
                                    onChange={handleChange}
                                    placeholder="Describe yourself"
                                    onInput={handleChange}
                                    />
                                    <p style={{ fontSize: '12px', marginTop: '4px' }}>
                                        Word count: {formData.about.trim().split(/\s+/).filter(Boolean).length}/500
                                    </p>
                                </>
                                ) : (
                                <p className="profile-display-text">
                                    <strong>About:</strong> {formData.about}
                                </p>
                                )}
                            </div>
                        </div>

                        { /* Physical Info */}
                        <div className="frosted-card">
                                    <div className="section-header">
                                        <h3>Physical Information</h3>
                                        {editPhysicalInfo ? (
                                            <i className="fa fa-save edit-icon" onClick={handleSavePhysicalInfo}></i>
                                        ) : (
                                            <i className="fa fa-pen edit-icon" onClick={() => setEditPhysicalInfo(true)}></i>
                                        )}
                                    </div>
                
                                    <div className="form-row">
                                        {editPhysicalInfo ? (
                                            <>
                                            <label>Height:</label>
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                <select
                                                className="profile-input"
                                                name="heightUnit"
                                                value={formData.heightUnit || 'cm'}
                                                onChange={(e) => setFormData({ ...formData, heightUnit: e.target.value })}
                                                >
                                                <option value="cm">cm</option>
                                                <option value="feet">feet & inches</option>
                                                </select>

                                                {formData.heightUnit === 'feet' ? (
                                                <>
                                                    <input
                                                    type="number"
                                                    placeholder="Feet"
                                                    className="profile-input"
                                                    value={formData.heightFeet || ''}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, heightFeet: e.target.value })
                                                    }
                                                    min="0"
                                                    style={{ width: '80px' }}
                                                    />
                                                    <input
                                                    type="number"
                                                    placeholder="Inches"
                                                    className="profile-input"
                                                    value={formData.heightInches || ''}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, heightInches: e.target.value })
                                                    }
                                                    min="0"
                                                    max="11"
                                                    style={{ width: '80px' }}
                                                    />
                                                </>
                                                ) : (
                                                <input
                                                    type="number"
                                                    placeholder="Height in cm"
                                                    className="profile-input"
                                                    value={formData.height}
                                                    onChange={handleChange}
                                                    name="height"
                                                />
                                                )}
                                            </div>
                                            </>
                                        ) : (
                                            <span className="profile-display-inline">
                                            <strong>Height:</strong>{' '}
                                            {formData.heightUnit === 'feet'
                                                ? `${formData.heightFeet || '-'}' ${formData.heightInches || '-'}"`
                                                : `${formData.height || '-'} cm`}
                                            </span>
                                        )}
                                    </div>


                                    <div className="double-input-wrapper-container">
                                        {editPhysicalInfo ? (
                                            <div className="double-input-row">
                                                <div className="half-width">
                                                <label>Weight:</label>
                                                <div className="unit-input-wrapper">
                                                    <select
                                                    name="weightUnit"
                                                    className="unit-dropdown"
                                                    value={formData.weightUnit}
                                                    onChange={handleChange}
                                                    >
                                                    <option value="kg">kg</option>
                                                    <option value="lbs">lbs</option>
                                                    </select>
                                                    <input
                                                    type="text"
                                                    name="weight"
                                                    value={formData.weight}
                                                    onChange={handleChange}
                                                    />
                                                </div>
                                                </div>

                                                <div className="half-width">
                                                <label>Age:<span className="required-asterisk">*</span></label>
                                                <div className="unit-input-wrapper">
                                                <input
                                                    type="text"
                                                    name="age"
                                                    className="profile-input"
                                                    value={formData.age}
                                                    onChange={handleChange}
                                                    placeholder="e.g. 25"
                                                />
                                                {errors.age && <p className="error-msg">{errors.age}</p>}
                                                </div></div>
                                            </div>
                                            ) : (
                                                <div className="profile-info-display-row">
                                                <span className="profile-display-inline">
                                                    <strong>Weight:</strong> {formData.weight} {formData.weightUnit}
                                                </span>
                                                <span className="profile-display-inline">
                                                    <strong>Age:</strong> {formData.age}
                                                </span>
                                                </div>
                                            )}
                                    </div>

                                    <div className="form-row">
                                        {editPhysicalInfo ? (
                                            <>
                                            <label>Ethnicity:</label>
                                            <select
                                                className="profile-input"
                                                name="ethnicity"
                                                value={formData.ethnicity}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select your ethnicity</option>
                                                <option value="Asian">Asian</option>
                                                <option value="Black or African American">Black or African American</option>
                                                <option value="Hispanic or Latino">Hispanic or Latino</option>
                                                <option value="Middle Eastern or North African">Middle Eastern or North African</option>
                                                <option value="Native American or Alaska Native">Native American or Alaska Native</option>
                                                <option value="Native Hawaiian or Pacific Islander">Native Hawaiian or Pacific Islander</option>
                                                <option value="Mixed / Multiracial">Mixed / Multiracial</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            </>
                                        ) : (
                                            <span className="profile-display-inline">
                                            <strong>Ethnicity:</strong> {formData.ethnicity || '—'}
                                            </span>
                                        )}
                                    </div>

                                    <div className="form-row">
                                        {editPhysicalInfo ? (
                                                    <>
                                        <label>Hair Color:</label>
                                        <input 
                                            type="text" 
                                            className="profile-input" 
                                            name="hairColor" 
                                            placeholder="e.g. Black, Brown, Blonde" 
                                            value={formData.hairColor} 
                                            onChange={handleChange}
                                        />
                                        </>
                                            ) : (
                                                <span className="profile-display-inline">
                                                    <strong>Hair Color:</strong> {formData.hairColor}
                                                </span>
                                                )}
                                    </div>

                                    <div className="form-row">
                                        {editPhysicalInfo ? (
                                        <>
                                            <label>Eye Color:</label>
                                            <input 
                                                type="text" 
                                                className="profile-input"  
                                                name="eyeColor" 
                                                placeholder="e.g. Brown, Green"  
                                                disabled={!editMode} 
                                                value={formData.eyeColor} 
                                                onChange={handleChange}
                                            />
                                        </>
                                            ) : (
                                                <span className="profile-display-inline">
                                                    <strong>Eye Color:</strong> {formData.eyeColor}
                                                </span>
                                            )}    
                                    </div>

                                    
                        </div>

                    </div>`
            
                {/* Right Column */}
                
                <div className="profile-right">                                                    
                    {formData.experiences.map((exp, index) => (
                                <div className="frosted-card" key={index}>
                                    <div className="section-header">
                                        <h3>Experience #{index + 1}</h3>
                                        {editExperience ? (
                                            <i className="fa fa-save edit-icon" onClick={handleSaveExperience}></i>
                                        ) : (
                                            <i className="fa fa-pen edit-icon" onClick={() => setEditExperience(true)}></i>
                                        )}
                                    </div>

                                    {/* Poster Upload : For Future Use when other profession are used*/}
                                    {/* <div className="form-row">
                                    {editExperience ? (
                                        <>
                                    <label>Poster Image:</label>
                                    <input
                                        type="file"
                                        name="poster"
                                        onChange={(e) => handleExperienceChange(e, index)}
                                        
                                    /> */}
                                    {/* Poster Preview */}
                                        {/* {exp.poster && (
                                            <img
                                            src={URL.createObjectURL(exp.poster)}
                                            alt={`Experience ${index + 1} Poster`}
                                            className="poster-preview"
                                            />
                                        )}
                                        </>
                                            ) : (
                                                exp.poster && (
                                                <img
                                                    src={URL.createObjectURL(exp.poster)}
                                                    alt={`Experience ${index + 1} Poster`}
                                                    className="poster-preview"
                                                />
                                                )
                                            )}
                                    </div> */}

                                    {/* Company Name */}
                                    <div className="form-row">
                                    {editExperience ? (
                                        <>
                                    <label>Company Name: <span className="required-asterisk">*</span></label>
                                    <input
                                        type="text"
                                        className="profile-input"
                                        name="CompanyName"
                                        placeholder="e.g. Star Entertainment"
                                        value={exp.CompanyName}
                                        onChange={(e) => handleExperienceChange(e, index)}
                                        
                                    />
                                    {errors[`experiences.${index}.CompanyName`] && (
                                        <p className="error-msg">{errors[`experiences.${index}.CompanyName`]}</p>
                                        )}

                                    </>
                                    ) : (
                                        <span className="profile-display-inline">
                                        <strong>Company Name:</strong> {exp.CompanyName}
                                        </span>
                                    )}
                                    </div>

                                    {/* Role */}
                                    <div className="form-row">
                                    {editExperience ? (
                                        <>
                                    <label>Designation/Worked As:<span className="required-asterisk">*</span></label>
                                    <input
                                        type="text"
                                        className="profile-input"
                                        name="role"
                                        placeholder="e.g. Lead Actor"
                                        value={exp.role}
                                        onChange={(e) => handleExperienceChange(e, index)}
                                        
                                    />
                                    {errors[`experiences.${index}.role`] && (
  <p className="error-msg">{errors[`experiences.${index}.role`]}</p>
)}

                                    </>
                                        ) : (
                                        <span className="profile-display-inline">
                                            <strong>Role:</strong> {exp.role}
                                        </span>
                                        )}
                                </div>

                                    {/* Date Range */}
                                <div className="form-row">
                                {editExperience ? (
                                    <>
                                    <label>Month & Year: From - To</label>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <DatePicker
                                        selected={parseMonthYear(exp.startDate)}
                                        onChange={(date) =>
                                            handleExperienceChange(
                                            { target: { name: 'startDate', value: formatToMonthYear(date) } },
                                            index
                                            )
                                        }
                                        dateFormat="MM/yyyy"
                                        showMonthYearPicker
                                        showFullMonthYearPicker
                                        className="profile-input"
                                    />

                                    <DatePicker
                                        selected={parseMonthYear(exp.endDate)}
                                        onChange={(date) =>
                                            handleExperienceChange(
                                            { target: { name: 'endDate', value: formatToMonthYear(date) } },
                                            index
                                            )
                                        }
                                        dateFormat="MM/yyyy"
                                        showMonthYearPicker
                                        showFullMonthYearPicker
                                        className="profile-input"
                                    />

                                    </div>
                                    </>
                                ) : (
                                    <span className="profile-display-inline">
                                    <strong>Month & Year:</strong>{' '}
                                    {exp.startDate && exp.endDate
                                        ? `${formatMonthYear(exp.startDate)} to ${formatMonthYear(exp.endDate)}`
                                        : '—'}
                                    </span>
                                )}
                                </div>

                                    
                                    {/* Rules & Responsibility */}
                                    <div className="form-row">
                                    {editExperience ? (
                                        <>
                                    <label>Roles & Responsibility: </label>
                                    <input
                                        type="text"
                                        className="profile-input"
                                        name="rolesResponsibility"
                                        placeholder="e.g. Add what you were Responsible in this work"
                                        value={exp.rolesResponsibility}
                                        onChange={(e) => handleExperienceChange(e, index)}
                                        
                                    />
                                    </>
                                    ) : (
                                        <span className="profile-display-inline">
                                        <strong>Roles & Responsibility</strong> {exp.rolesResponsibility}
                                        </span>
                                    )}
                                    </div>

                                   {/* Genre */}
                                    <div className="form-row">
                                        {editExperience ? (
                                                <>
                                                <label>Genre:</label>
                                                <Select
                                                    isMulti
                                                    name="genre"
                                                    options={genreOptions}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    value={genreOptions.filter(opt => exp.genre.includes(opt.value))}
                                                    onChange={(selected) => {
                                                    const values = selected.map(option => option.value);
                                                    const updatedExperiences = [...formData.experiences];
                                                    updatedExperiences[index].genre = values;
                                                    setFormData({ ...formData, experiences: updatedExperiences });
                                                    }}
                                                />

                                                {exp.genre.includes('Other') && (
                                                    <input
                                                    type="text"
                                                    className="profile-input"
                                                    placeholder="Enter custom genre"
                                                    name="genreOther"
                                                    value={exp.genreOther}
                                                    onChange={(e) => handleExperienceChange(e, index)}
                                                    />
                                                )}
                                                </>
                                            ) : (
                                                <span className="profile-display-inline">
                                                    <strong>Genre:</strong>{' '}
                                                    {exp.genre.length > 0
                                                        ? exp.genre
                                                            .filter(g => g !== 'Other')
                                                            .concat(exp.genre.includes('Other') && exp.genreOther ? [exp.genreOther] : [])
                                                            .join(', ')
                                                        : '—'}
                                                </span>

                                            )}
                                    </div>


                                    {editExperience && (
                                        <button
                                    className="remove-btn"
                                    onClick={() => removeExperience(index)}
                                    >
                                    Remove
                                    </button>
                                    )}
                                    </div>
                                ))
                                
                            }
                                {/* Add Experience Button */}
                                {editExperience && (
                                <button
                                    type="button"
                                    className="add-btn"
                                    onClick={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        experiences: [
                                        ...prev.experiences,
                                        {  poster: null,
                                            CompanyName: '',
                                            role: '',
                                            startDate: '',
                                            endDate: '',
                                            rulesResponsibility: '',
                                            genre: '' }
                                        ]
                                    }))
                                    }
                                >
                                    + Add Experience
                                </button>
                               )} 
                            </div>
                            </div>
                            <div className="form-actions">
                            <button
                                type="button"
                                className="edit-btn"
                                onClick={handleEditAll}
                                disabled={editMode}
                                >
                                Edit
                            </button>

                            <button
                                type="button"
                                className="save-btn"
                                onClick={handleSaveAll}
                                
                                >
                                Save
                            </button>


                <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                    // You can navigate here later using React Router or similar
                    console.log("Go to next page!");
                    }}
                >
                    Next →
                </button>
                </div>


            </div>
        <Footer />

    </div>
  );
};

export default ProfilePage;
