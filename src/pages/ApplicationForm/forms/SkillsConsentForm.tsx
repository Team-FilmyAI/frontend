import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Award, CircleCheckBig } from 'lucide-react';
import { getFieldVisibility } from '../../../assets/config/formConfig';

import Dropdown from '../../../components/Dropdown/Dropdown';
import Radio from '../../../components/Radio/Radio';
import {
  termsAndConditions,
  availabilityDropdown,
  spokenLanguages,
  actingSkillsDropdown,
  filmTalentsDropdown,
} from '../../../assets/data/constants';

import { getSelectedOptions } from '../../../assets/utils/selectHelpers';

interface SkillsConsentFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const SkillsConsentForm = forwardRef<unknown, SkillsConsentFormProps>(
  ({ data, updateData, userRole }, ref) => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const isFieldVisible = (field: string) =>
      getFieldVisibility(userRole, 'SkillsConsentForm', field);

    // Controlled change handler
    const handleChange = (field: string, value: any) => {
      updateData('skillsConsent', { [field]: value });

      // Clear error on field update
      setErrors((prev) => {
        if (prev[field]) {
          const copy = { ...prev };
          delete copy[field];
          return copy;
        }
        return prev;
      });
    };

    // Validation logic
    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      const requiredFields = ['actingSkills'];

      requiredFields.forEach((field) => {
        if (isFieldVisible(field)) {
          const val = data.skillsConsent?.[field];
          if (Array.isArray(val)) {
            if (val.length === 0) {
              newErrors[field] = 'Please select at least one option';
            }
          } else if (typeof val === 'string') {
            if (val.trim() === '') {
              newErrors[field] = 'Field cannot be blank';
            }
          } else if (!val) {
            newErrors[field] = 'Field cannot be blank';
          }
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    useImperativeHandle(ref, () => ({
      validateForm,
    }));

    // Prepare selected options for multi-select dropdowns
    const actingSkillsSelected = getSelectedOptions(
      actingSkillsDropdown.options,
      data.skillsConsent?.actingSkills
    );

    const otherTalentsSelected = getSelectedOptions(
      filmTalentsDropdown.options,
      data.skillsConsent?.otherTalents
    );

    const spokenLanguagesSelected = getSelectedOptions(
      spokenLanguages.options,
      data.skillsConsent?.spokenLanguages
    );

    return (
      <div className="form-section">
        <h2 className="form-heading">
          <Award className="award-color" size={20} /> Section 6 - Skills and Capabilities
        </h2>

        <div className="form-grid">
          {isFieldVisible('actingSkills') && (
            <div className="form-grid-full">
              <label className="app-form-label">Acting Skills*</label>
              <Dropdown
                {...actingSkillsDropdown}
                placeholder="Select other talents"
                value={actingSkillsSelected}
                onChange={(val) => handleChange('actingSkills', val ? val.map((v) => v.value) : [])}
                isMulti
                className={errors.actingSkills ? 'input-error' : ''}
              />
              {errors.actingSkills && <span className="error-text">{errors.actingSkills}</span>}
            </div>
          )}

          {isFieldVisible('otherTalents') && (
            <div className="form-grid-full">
              <label className="app-form-label">Other Talents</label>
              <Dropdown
                {...filmTalentsDropdown}
                placeholder="Select other talents"
                value={otherTalentsSelected}
                onChange={(val) => handleChange('otherTalents', val ? val.map((v) => v.value) : [])}
                isMulti
              />
            </div>
          )}

          {isFieldVisible('licenseCerts') && (
            <div className="form-grid-full">
              <LicensesCertificationsSection data={data} updateData={updateData} />
            </div>
          )}

          {isFieldVisible('spokenLanguages') && (
            <div className="form-grid-full">
              <label className="app-form-label">Languages for Singing/Voiceover</label>
              <Dropdown
                {...spokenLanguages}
                placeholder="Select languages for singing/voiceover"
                value={spokenLanguagesSelected}
                onChange={(val) =>
                  handleChange('spokenLanguages', val ? val.map((v) => v.value) : [])
                }
                isMulti
              />
            </div>
          )}

          {isFieldVisible('appSummary') && (
            <div className="form-summary">
              <h4 className="form-summary-heading">Application Summary</h4>
              <p className="form-subtext">
                Once you complete this form, your application will be submitted for review. You will
                receive a confirmation email with your application details.
              </p>
            </div>
          )}
        </div>

        <hr className="text-white" />
        <h2 className="form-heading consent-header">
          <CircleCheckBig className="award-color" size={24} /> Consents and Submissions
        </h2>

        <Radio
          radioInfo={termsAndConditions}
          className="custom-radio-style"
          onChange={(val) => handleChange('consent', val)}
          value={data.skillsConsent?.consent || ''}
        />
      </div>
    );
  }
);

const LicensesCertificationsSection = ({ data, updateData, className }) => {
  const [licenses, setLicenses] = useState(data.personal?.licenses || []);

  const handleAddLicense = () => {
    const updated = [...licenses, { name: '', file: null }];
    setLicenses(updated);
    updateData('personal', { licenses: updated });
  };

  const handleNameChange = (index: number, value: string) => {
    const updated = [...licenses];
    updated[index].name = value;
    setLicenses(updated);
    updateData('personal', { licenses: updated });
  };

  const handleFileChange = (index: number, file: File | null) => {
    const updated = [...licenses];
    updated[index].file = file;
    setLicenses(updated);
    updateData('personal', { licenses: updated });
  };

  const handleDeleteLicense = (index: number) => {
    const updated = licenses.filter((_, i) => i !== index);
    setLicenses(updated);
    updateData('personal', { licenses: updated });
  };

  return (
    <div className={className}>
      <label className="app-form-label">Licenses/Certifications</label>

      {licenses.map((license, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '10px',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="License/Certification Name, DOI, Link, etc."
            value={license.name}
            onChange={(e) => handleNameChange(idx, e.target.value)}
            style={{ flex: 1 }}
            className={'form-input'}
          />
          <input
            type="file"
            onChange={(e) => handleFileChange(idx, e.target.files ? e.target.files[0] : null)}
          />
          <button
            type="button"
            onClick={() => handleDeleteLicense(idx)}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              padding: '6px 10px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddLicense} className="white-form-button">
        + Add License
      </button>
    </div>
  );
};
