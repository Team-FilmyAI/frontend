import React from 'react';
import { useState } from 'react';
import { getFieldVisibility } from '../../../assets/config/formConfig';
import { Award, Check } from 'lucide-react';
import './form-styles.css';

import NumberInput from '../../../components/NumberInput/NumberInput';

import Dropdown from '../../../components/Dropdown/Dropdown';
import { areaCodeDropdown } from '../../../assets/data/constants';
import Radio from '../../../components/Radio/Radio';
import { yesOrNo } from '../../../assets/data/constants';

interface BasicInfoFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ data, updateData, userRole }) => {
  const handleChange = (field: string, value: string) => {
    updateData('basicInfo', { [field]: value });
  };

  const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'BasicInfoForm', field);

  return (
    <div className="form-section">
      <h2 className="form-heading">
        <Award className="award-color" size={20} /> Section 1 - Basic Profile Information
      </h2>

      <div className="form-grid">
        {isFieldVisible('firstName') && (
          <div>
            <label className="app-form-label">First Name*</label>
            <input
              type="text"
              value={data.basicInfo?.firstName || ''}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="form-input"
              placeholder="Enter your first name"
            />
          </div>
        )}

        {isFieldVisible('lastName') && (
          <div>
            <label className="app-form-label">Last Name*</label>
            <input
              type="text"
              value={data.basicInfo?.lastName || ''}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="form-input"
              placeholder="Enter your last name"
            />
          </div>
        )}

        {isFieldVisible('email') && (
          <div>
            <label className="app-form-label">Email Address*</label>
            <input
              type="email"
              value={data.basicInfo?.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              className="form-input"
              placeholder="Enter your email address"
            />
          </div>
        )}

        {isFieldVisible('phone') && (
          <div>
            <label className="app-form-label">Phone Number</label>
            <div className="form-grid-2 form-small-input">
              <Dropdown {...areaCodeDropdown} />
              <NumberInput
                value={data.basicInfo?.phone || ''}
                onChange={(val) => handleChange('phone', val)}
                placeholder="e.g. 1234567890"
                maxLength={10}
                className="form-input"
              />
            </div>
          </div>
        )}

        {isFieldVisible('linkedin') && (
          <div className="form-grid-full">
            <label className="app-form-label">LinkedIn Profile</label>
            <input
              type="url"
              value={data.basicInfo?.linkedin || ''}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              className="form-input"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        )}

        <div className="form-grid-3 form-grid-full">
          {isFieldVisible('country') && (
            <div>
              <label className="app-form-label">Country*</label>
              <input
                type="text"
                value={data.basicInfo?.country || ''}
                onChange={(e) => handleChange('country', e.target.value)}
                className="form-input"
                placeholder="Select Country"
              />
            </div>
          )}

          {isFieldVisible('state') && (
            <div>
              <label className="app-form-label">State*</label>
              <input
                type="text"
                value={data.basicInfo?.state || ''}
                onChange={(e) => handleChange('state', e.target.value)}
                className="form-input"
                placeholder="Select State"
              />
            </div>
          )}

          {isFieldVisible('city') && (
            <div>
              <label className="app-form-label">City*</label>
              <input
                type="text"
                value={data.basicInfo?.city || ''}
                onChange={(e) => handleChange('city', e.target.value)}
                className="form-input"
                placeholder="Select City"
              />
            </div>
          )}
        </div>

        {isFieldVisible('locationAvailability') && (
          <div>
            <label className="app-form-label">Current Location Availability*</label>
            <Radio
              radioInfo={yesOrNo}
              onChange={(val) => console.log('Selected:', val)}
              className="custom-radio-style"
            />
          </div>
        )}

        {isFieldVisible('languages') && (
          <div className="new-row">
            <label className="app-form-label">Languages</label>
          </div>
        )}
      </div>
    </div>
  );
};
