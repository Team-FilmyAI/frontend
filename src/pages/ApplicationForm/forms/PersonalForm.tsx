import React from 'react';
import { getFieldVisibility } from '../../../assets/config/formConfig';
import { Award } from 'lucide-react';
import './form-styles.css';

import NumberInput from '../../../components/NumberInput/NumberInput';
import {
  heightDropdown,
  weightDropdown,
  genderDropdown,
  eyeColorDropdown,
  hairColorDropdown,
  ethnicityDropdown,
} from '../../../assets/data/constants';
import Dropdown from '../../../components/Dropdown/Dropdown';

interface PersonalFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const PersonalForm: React.FC<PersonalFormProps> = ({ data, updateData, userRole }) => {
  const handleChange = (field: string, value: string) => {
    updateData('personal', { [field]: value });
  };

  const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'PersonalForm', field);

  return (
    <div className="form-section">
      <h2 className="form-heading">
        <Award className="award-color" size={20} /> Section 2 - Personal Attributes
      </h2>

      <div className="form-grid">
        {isFieldVisible('dateOfBirth') && (
          <div>
            <label className="app-form-label">Date of Birth</label>
            <input
              type="date"
              value={data.personal?.dateOfBirth || ''}
              onChange={(e) => handleChange('dateOfBirth', e.target.value)}
              className="form-input"
            />
          </div>
        )}

        {isFieldVisible('age') && (
          <div>
            <label className="app-form-label">Age*</label>
            <NumberInput
              value={data.personalInfo?.age || ''}
              onChange={(val) => handleChange('age', val)}
              placeholder="Select Age"
              maxLength={3}
              className="form-input"
            />
          </div>
        )}

        {isFieldVisible('gender') && (
          <div>
            <label className="app-form-label">Gender*</label>
            <Dropdown {...genderDropdown} />
          </div>
        )}

        {isFieldVisible('height') && (
          <div>
            <label className="app-form-label">Height*</label>
            <div className="form-grid-2 form-small-input">
              <Dropdown {...heightDropdown} />
              <NumberInput
                value={data.personalInfo?.height || ''}
                onChange={(val) => handleChange('height', val)}
                placeholder="Height"
                maxLength={3}
                className="form-input"
              />
            </div>
          </div>
        )}

        {isFieldVisible('weight') && (
          <div>
            <label className="app-form-label">Weight*</label>
            <div className="form-grid-2 form-small-input">
              <Dropdown {...weightDropdown} />
              <NumberInput
                value={data.personalInfo?.weight || ''}
                onChange={(val) => handleChange('weight', val)}
                placeholder="Weight"
                maxLength={3}
                className="form-input"
              />
            </div>
          </div>
        )}

        {isFieldVisible('eyeColor') && (
          <div>
            <label className="app-form-label">Eye Color*</label>
            <Dropdown {...eyeColorDropdown} />
          </div>
        )}

        {isFieldVisible('hairColor') && (
          <div>
            <label className="app-form-label">Hair Color*</label>
            <Dropdown {...hairColorDropdown} />
          </div>
        )}

        {isFieldVisible('ethnicity') && (
          <div>
            <label className="app-form-label">Ethnicity*</label>
            <Dropdown {...ethnicityDropdown} />
          </div>
        )}

        {isFieldVisible('nationality') && (
          <div>
            <label className="app-form-label">Nationality</label>
            <input
              type="text"
              value={data.personal?.nationality || ''}
              onChange={(e) => handleChange('nationality', e.target.value)}
              className="form-input"
              placeholder="Enter your nationality"
            />
          </div>
        )}

        {isFieldVisible('address') && (
          <div className="col-span-2">
            <label className="app-form-label">Address</label>
            <textarea
              value={data.personal?.address || ''}
              onChange={(e) => handleChange('address', e.target.value)}
              rows={3}
              className="form-input"
              placeholder="Enter your full address"
            />
          </div>
        )}

        {isFieldVisible('emergencyContactName') && (
          <div>
            <label className="app-form-label">Emergency Contact Name</label>
            <input
              type="text"
              value={data.personal?.emergencyContactName || ''}
              onChange={(e) => handleChange('emergencyContactName', e.target.value)}
              className="form-input"
              placeholder="Emergency contact name"
            />
          </div>
        )}

        {isFieldVisible('emergencyContactPhone') && (
          <div>
            <label className="app-form-label">Emergency Contact Phone</label>
            <input
              type="tel"
              value={data.personal?.emergencyContactPhone || ''}
              onChange={(e) => handleChange('emergencyContactPhone', e.target.value)}
              className="form-input"
              placeholder="Emergency contact phone"
            />
          </div>
        )}
      </div>
    </div>
  );
};
