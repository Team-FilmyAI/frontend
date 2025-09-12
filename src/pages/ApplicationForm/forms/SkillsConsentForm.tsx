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
import Label from '../../../components/Label/Label';
import Button from '../../../components/Buttons/Button';

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
              <Label
                text="Acting Skills*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
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
              <Label
                text="Other Talents"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
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
              <Label
                text="Licenses/Certifications"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <LicensesCertificationsSection data={data} updateData={updateData} />
            </div>
          )}

          {isFieldVisible('spokenLanguages') && (
            <div className="form-grid-full">
              <Label
                text="Languages for Singing/Voiceover"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
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

        {isFieldVisible('termsConsent') && (
          <div>
            <hr className="text-white" />
            <h2 className="form-heading consent-header">
              <CircleCheckBig className="award-color" size={24} /> Consents and Submissions
            </h2>
            {termsAndConditions.options.map((option, idx) => (
              <div key={idx} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name={termsAndConditions.radioName}
                  value={option}
                  checked={data.skillsConsent?.termsConsent?.includes(option) || false}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    let newValue = data.skillsConsent?.termsConsent || [];
                    if (checked) {
                      newValue = [...newValue, option];
                    } else {
                      newValue = newValue.filter((val) => val !== option);
                    }
                    handleChange('termsConsent', newValue); // stores inside skillsConsent
                  }}
                  className="form-checkbox"
                />
                <span className="form-checkbox-text">{option}</span>
              </div>
            ))}
            {errors.termsConsent && <span className="error-text">{errors.termsConsent}</span>}
          </div>
        )}
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

      <Button label="+ Add License" className="white-form-button" onClick={handleAddLicense} />
    </div>
  );
};
