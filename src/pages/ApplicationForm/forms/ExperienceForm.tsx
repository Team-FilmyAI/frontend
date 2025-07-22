import React from 'react';
import { Award } from 'lucide-react';
import { getFormConfig, getFieldVisibility } from '../../../assets/config/formConfig';
import './form-styles.css';

import Dropdown from '../../../components/Dropdown/Dropdown';
import TextArea from '../../../components/TextArea/TextArea';
import { experienceDropdown, emptyDropdown } from '../../../assets/data/constants';

interface ExperienceFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, updateData, userRole }) => {
  const config = getFormConfig(userRole);

  const handleChange = (field: string, value: string) => {
    updateData('experience', { [field]: value });
  };

  const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'ExperienceForm', field);

  return (
    <div className="form-section">
      <h2 className="form-heading">
        <Award className="award-color" size={20} /> Section 3 - Professional Experience
      </h2>

      <div className="form-grid">
        {isFieldVisible('yearsExperience') && (
          <div>
            <label className="app-form-label">Years of Experience*</label>
            <Dropdown {...experienceDropdown} />
          </div>
        )}
        {isFieldVisible('yearsActingExperience') && (
          <div>
            <label className="app-form-label">Years of Acting Experience*</label>
            <Dropdown {...experienceDropdown} />
          </div>
        )}
        {isFieldVisible('actingEducation') && (
          <div>
            <label className="app-form-label">Acting Education*</label>
            <Dropdown {...emptyDropdown} placeholder="Select Education" />
          </div>
        )}
        {isFieldVisible('previousRoles') && (
          <div className="form-grid-full">
            <label className="app-form-label">Types of Roles Previously Done*</label>
            <Dropdown {...emptyDropdown} placeholder="Select role type" />
          </div>
        )}
        {isFieldVisible('industryExperience') && (
          <div className="form-grid-full">
            <label className="app-form-label">Industry Experience*</label>
            <Dropdown {...emptyDropdown} placeholder="Select Experience" />
          </div>
        )}
        {isFieldVisible('notableWorks') && (
          <div className="form-grid-full">
            <label className="app-form-label">Notable Work/Projects*</label>
            <TextArea
              className="form-textarea"
              placeholder="Describe your notable work and projects..."
            />
          </div>
        )}
      </div>
    </div>
  );
};
