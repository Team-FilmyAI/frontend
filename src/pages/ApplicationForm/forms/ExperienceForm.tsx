import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Award } from 'lucide-react';
import { getFormConfig, getFieldVisibility } from '../../../assets/config/formConfig';
import { getSelectedOptions } from '../../../assets/utils/selectHelpers';
import './form-styles.css';

import Dropdown from '../../../components/Dropdown/Dropdown';
import TextArea from '../../../components/TextArea/TextArea';
import {
  experienceDropdown,
  educationDropdown,
  prevActingDropdown,
  industryRolesDropdown,
  emptyDropdown,
} from '../../../assets/data/constants';

interface ExperienceFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const ExperienceForm = forwardRef<unknown, ExperienceFormProps>(
  ({ data, updateData, userRole }, ref) => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string, value: string) => {
      updateData('experience', { [field]: value });

      setErrors((prev) => {
        if (prev[field]) {
          const copy = { ...prev };
          delete copy[field];
          return copy;
        }
        return prev;
      });
    };

    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      const requiredFields = [
        'yearsExperience',
        'yearsActingExperience',
        'actingEducation',
        'previousRoles',
        'industryExperience',
        'notableWorks',
      ];

      requiredFields.forEach((field) => {
        if (isFieldVisible(field)) {
          const val = data.experience?.[field];

          if (Array.isArray(val)) {
            if (val.length === 0) {
              newErrors[field] = 'Please select at least one option';
            }
          } else if (typeof val === 'string') {
            if (val.trim() === '') {
              newErrors[field] = 'Field cannot be blank';
            }
          } else if (!val) {
            // Handles null, undefined, empty etc
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

    const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'ExperienceForm', field);

    const previousRolesSelected = getSelectedOptions(
      prevActingDropdown.options,
      data.experience?.previousRoles
    );

    const previousIndustriesSelected = getSelectedOptions(
      industryRolesDropdown.options,
      data.experience?.industryExperience
    );

    return (
      <div className="form-section">
        <h2 className="form-heading">
          <Award className="award-color" size={20} /> Section 3 - Professional Experience
        </h2>

        <div className="form-grid">
          {isFieldVisible('yearsExperience') && (
            <div>
              <label className="app-form-label">Years of Experience*</label>
              <Dropdown
                options={experienceDropdown.options}
                value={experienceDropdown.options.find(
                  (opt) => opt.value === data.experience?.yearsExperience
                )}
                onChange={(val) => handleChange('yearsExperience', val?.value || '')}
                className={errors.yearsExperience ? 'input-error' : ''}
              />
              {errors.yearsExperience && (
                <span className="error-text">{errors.yearsExperience}</span>
              )}
            </div>
          )}

          {isFieldVisible('yearsActingExperience') && (
            <div>
              <label className="app-form-label">Years of Acting Experience*</label>
              <Dropdown
                options={experienceDropdown.options}
                value={experienceDropdown.options.find(
                  (opt) => opt.value === data.experience?.yearsActingExperience
                )}
                onChange={(val) => handleChange('yearsActingExperience', val?.value || '')}
                styles={emptyDropdown.styles}
                className={errors.yearsActingExperience ? 'input-error' : ''}
              />
              {errors.yearsActingExperience && (
                <span className="error-text">{errors.yearsActingExperience}</span>
              )}
            </div>
          )}

          {isFieldVisible('actingEducation') && (
            <div>
              <label className="app-form-label">Acting Education*</label>
              <Dropdown
                options={educationDropdown.options}
                placeholder="Select Education"
                value={educationDropdown.options.find(
                  (opt) => opt.value === data.experience?.actingEducation
                )}
                onChange={(val) => handleChange('actingEducation', val?.value || '')}
                styles={educationDropdown.styles}
              />
              {errors.actingEducation && (
                <span className="error-text">{errors.actingEducation}</span>
              )}
            </div>
          )}

          {isFieldVisible('previousRoles') && (
            <div className="form-grid-full">
              <label className="app-form-label">Types of Roles Previously Done*</label>
              <Dropdown
                options={prevActingDropdown.options}
                placeholder="Select role type"
                value={previousRolesSelected}
                onChange={(val) =>
                  handleChange('previousRoles', val ? val.map((v) => v.value) : [])
                }
                styles={prevActingDropdown.styles}
                isMulti
              />
              {errors.previousRoles && <span className="error-text">{errors.previousRoles}</span>}
            </div>
          )}

          {isFieldVisible('industryExperience') && (
            <div className="form-grid-full">
              <label className="app-form-label">Industry Experience*</label>
              <Dropdown
                options={industryRolesDropdown.options}
                placeholder="Select Experience"
                value={previousIndustriesSelected}
                onChange={(val) =>
                  handleChange('industryExperience', val ? val.map((v) => v.value) : [])
                }
                styles={industryRolesDropdown.styles}
                isMulti
              />
              {errors.industryExperience && (
                <span className="error-text">{errors.industryExperience}</span>
              )}
            </div>
          )}

          {isFieldVisible('notableWorks') && (
            <div className="form-grid-full">
              <label className="app-form-label">Notable Work/Projects*</label>
              <TextArea
                className={`form-textarea ${errors.notableWorks ? 'input-error' : ''}`}
                placeholder="Describe your notable work and projects..."
                value={data.experience?.notableWorks || ''}
                onChange={(e) => handleChange('notableWorks', e.target.value)}
                required={false}
                maxLength={500}
              />
              {errors.notableWorks && <span className="error-text">{errors.notableWorks}</span>}
              <div className="char-count">
                {(data.experience?.notableWorks?.length || 0) + ' / 500 characters'}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);
