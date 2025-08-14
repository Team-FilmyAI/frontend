import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { getSelectedOptions } from '../../../assets/utils/selectHelpers';
import { getFieldVisibility } from '../../../assets/config/formConfig';
import { Award } from 'lucide-react';
import './form-styles.css';
import { formStyles } from '../../../components/Dropdown/DropdownStyles.jsx';

import NumberInput from '../../../components/NumberInput/NumberInput';
import {
  heightDropdown,
  weightDropdown,
  genderDropdown,
  eyeColorDropdown,
  hairColorDropdown,
  ethnicityDropdown,
  spokenLanguages,
  fluencyOptions,
  actorAccents,
} from '../../../assets/data/constants';
import Dropdown from '../../../components/Dropdown/Dropdown';

interface PersonalFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const PersonalForm = forwardRef<unknown, PersonalFormProps>(
  ({ data, updateData, userRole }, ref) => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [fluencies, setFluencies] = useState({});
    const [fluencyLevels, setFluencyLevels] = useState({});
    const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'PersonalForm', field);

    // Example validation for dateOfBirth to ensure it's filled and reasonable
    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      const requiredFields = [
        'dateOfBirth',
        'gender',
        'height',
        'weight',
        'eyeColor',
        'hairColor',
        'ethnicity',
        'spokenLangs',
      ];

      requiredFields.forEach((field) => {
        if (isFieldVisible(field)) {
          const value = data.personal?.[field];
          if (!value || (typeof value === 'string' && value.trim() === '')) {
            newErrors[field] = 'Field cannot be blank';
          }
        }
      });

      if (isFieldVisible('dateOfBirth') && data.personal?.dateOfBirth) {
        const birthDate = new Date(data.personal.dateOfBirth);
        if (birthDate.toString() === 'Invalid Date') {
          newErrors.dateOfBirth = 'Please enter a valid date';
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    useImperativeHandle(ref, () => ({
      validateForm,
    }));

    const handleChange = (field: string, value: string | number) => {
      updateData('personal', { [field]: value });
      // Clear error on change
      setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const handleLanguageChange = (selected) => {
      setSelectedLanguages(selected || []);

      const updatedFluency = { ...fluencyLevels };
      Object.keys(updatedFluency).forEach((lang) => {
        if (!(selected || []).some((s) => s.value === lang)) {
          delete updatedFluency[lang];
        }
      });
      setFluencyLevels(updatedFluency);

      handleChange(
        'spokenLangs',
        (selected || []).map((s) => s.value)
      );
    };

    const handleFluencyChange = (languageValue, fluencyValue) => {
      setFluencyLevels((prev) => ({
        ...prev,
        [languageValue]: fluencyValue.value,
      }));
    };

    const calculateAge = (dob: string | undefined) => {
      if (!dob) return '';
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= 0 ? age : '';
    };

    const previousGendersSelected = getSelectedOptions(
      genderDropdown.options,
      data.personal?.gender
    );

    const previousEtnicitySelected = getSelectedOptions(
      ethnicityDropdown.options,
      data.personal?.ethnicity
    );

    const previousLangsSelected = getSelectedOptions(
      spokenLanguages.options,
      data.personal?.spokenLangs
    );

    const previousAccentsSelected = getSelectedOptions(
      actorAccents.options,
      data.personal?.accents
    );

    return (
      <div className="form-section">
        <h2 className="form-heading">
          <Award className="award-color" size={20} /> Section 2 - Personal Attributes
        </h2>

        <div className="form-grid">
          {isFieldVisible('dateOfBirth') && (
            <div>
              <label className="app-form-label">Date of Birth*</label>
              <input
                type="date"
                value={data.personal?.dateOfBirth || ''}
                onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                className={`form-input ${errors.dateOfBirth ? 'input-error' : ''}`}
              />
              {errors.dateOfBirth && <span className="error-text">{errors.dateOfBirth}</span>}
            </div>
          )}

          {isFieldVisible('age') && (
            <div>
              <label className="app-form-label">Age*</label>
              <input
                type="number"
                value={calculateAge(data.personal?.dateOfBirth)}
                readOnly
                className="form-input"
                placeholder="Select your date of birth"
              />
            </div>
          )}

          {isFieldVisible('gender') && (
            <div>
              <label className="app-form-label">Gender*</label>
              <Dropdown
                {...genderDropdown}
                value={previousGendersSelected}
                onChange={(val) => handleChange('gender', val ? val.map((v) => v.value) : [])}
                className={`form-input ${errors.gender ? 'input-error' : ''}`}
              />
              {errors.gender && <span className="error-text">{errors.gender}</span>}
            </div>
          )}

          {isFieldVisible('height') && (
            <div>
              <label className="app-form-label">Height*</label>
              <div className="form-grid-2 form-small-input">
                <Dropdown
                  {...heightDropdown}
                  value={
                    heightDropdown.options.find((opt) => opt.value === data.personal?.heightUnit) ||
                    heightDropdown.options[0]
                  }
                  onChange={(val) => handleChange('heightUnit', val?.value || '')}
                  className={`form-input ${errors.height ? 'input-error' : ''}`}
                />
                <NumberInput
                  value={data.personal?.height || ''}
                  onChange={(val) => handleChange('height', val)}
                  placeholder="Height"
                  maxLength={3}
                  className={`form-input ${errors.height ? 'input-error' : ''}`}
                />
              </div>
              {errors.height && <span className="error-text">{errors.height}</span>}
            </div>
          )}

          {isFieldVisible('weight') && (
            <div>
              <label className="app-form-label">Weight*</label>
              <div className="form-grid-2 form-small-input">
                <Dropdown
                  {...weightDropdown}
                  value={
                    weightDropdown.options.find((opt) => opt.value === data.personal?.weightUnit) ||
                    weightDropdown.options[0]
                  }
                  onChange={(val) => handleChange('weightUnit', val?.value || '')}
                  className={errors.weight ? 'input-error' : ''}
                />
                <NumberInput
                  value={data.personal?.weight || ''}
                  onChange={(val) => handleChange('weight', val)}
                  placeholder="Weight"
                  maxLength={3}
                  className={`form-input ${errors.weight ? 'input-error' : ''}`}
                />
              </div>
              {errors.weight && <span className="error-text">{errors.weight}</span>}
            </div>
          )}

          {isFieldVisible('eyeColor') && (
            <div>
              <label className="app-form-label">Eye Color*</label>
              <Dropdown
                {...eyeColorDropdown}
                placeholder={'Select eye color'}
                value={eyeColorDropdown.options.find(
                  (opt) => opt.value === data.personal?.eyeColor
                )}
                onChange={(val) => handleChange('eyeColor', val?.value || '')}
                className={errors.eyeColor ? 'input-error' : ''}
              />
              {errors.eyeColor && <span className="error-text">{errors.eyeColor}</span>}
            </div>
          )}

          {isFieldVisible('hairColor') && (
            <div>
              <label className="app-form-label">Hair Color*</label>
              <Dropdown
                {...hairColorDropdown}
                placeholder={'Select hair color'}
                value={hairColorDropdown.options.find(
                  (opt) => opt.value === data.personal?.hairColor
                )}
                onChange={(val) => handleChange('hairColor', val?.value || '')}
                className={errors.hairColor ? 'input-error' : ''}
              />
              {errors.hairColor && <span className="error-text">{errors.hairColor}</span>}
            </div>
          )}

          {isFieldVisible('ethnicity') && (
            <div>
              <label className="app-form-label">Ethnicity*</label>
              <Dropdown
                {...ethnicityDropdown}
                value={previousEtnicitySelected}
                onChange={(val) => handleChange('ethnicity', val ? val.map((v) => v.value) : [])}
                className={errors.ethnicity ? 'input-error' : ''}
              />
              {errors.ethnicity && <span className="error-text">{errors.ethnicity}</span>}
            </div>
          )}

          {isFieldVisible('spokenLangs') && (
            <div>
              <SpokenLanguagesSection
                data={data}
                updateData={updateData}
                className={''}
                languageOptions={spokenLanguages.options}
              />
            </div>
          )}

          {isFieldVisible('accents') && (
            <div>
              <label className="app-form-label">Accents Known</label>
              <Dropdown
                {...actorAccents}
                value={previousAccentsSelected}
                onChange={(val) => handleChange('accents', val ? val.map((v) => v.value) : [])}
                className={errors.accents ? 'input-error' : ''}
              />
              {/* {errors.accents && <span className="error-text">{errors.accents}</span>} */}
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
  }
);

const SpokenLanguagesSection = ({ data, updateData, className, languageOptions }) => {
  const [languages, setLanguages] = useState(data.personal?.spokenLanguages || []);

  const fluencyOptions = [
    { value: 'basic', label: 'Basic' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'fluent', label: 'Fluent' },
    { value: 'native', label: 'Native' },
  ];

  useEffect(() => {
    updateData('personal', { spokenLanguages: languages });
  }, [languages]);

  const handleAddLanguage = () => {
    setLanguages([...languages, { language: null, fluency: null }]);
  };

  const handleLanguageChange = (index, selectedLanguage) => {
    const updated = [...languages];
    updated[index].language = selectedLanguage;
    setLanguages(updated);
  };

  const handleFluencyChange = (index, selectedFluency) => {
    const updated = [...languages];
    updated[index].fluency = selectedFluency;
    setLanguages(updated);
  };

  const handleDeleteLanguage = (index) => {
    const updated = languages.filter((_, i) => i !== index);
    setLanguages(updated);
  };

  return (
    <div className={className}>
      <label className="app-form-label">Languages Spoken</label>

      {languages.map((item, idx) => (
        <div
          key={idx}
          style={{ display: 'flex', gap: '10px', marginTop: '10px', alignItems: 'center' }}
        >
          {/* Language dropdown */}
          <Dropdown
            options={languageOptions}
            value={item.language}
            onChange={(selected) => handleLanguageChange(idx, selected)}
            placeholder="Select Language"
            styles={formStyles}
          />

          {/* Fluency dropdown */}
          <Dropdown
            options={fluencyOptions}
            value={item.fluency}
            onChange={(selected) => handleFluencyChange(idx, selected)}
            placeholder="Select Fluency"
            styles={formStyles}
          />

          {/* Delete button */}
          <button
            type="button"
            onClick={() => handleDeleteLanguage(idx)}
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

      <button type="button" onClick={handleAddLanguage} className="white-form-button">
        + Add Language
      </button>
    </div>
  );
};
