import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Award } from 'lucide-react';
import { getFormConfig, getFieldVisibility } from '../../../assets/config/formConfig';
import './form-styles.css';

import Dropdown from '../../../components/Dropdown/Dropdown';
import NumberInput from '../../../components/NumberInput/NumberInput';
import { availabilityDropdown } from '../../../assets/data/constants';
import Radio from '../../../components/Radio/Radio';
import { yesOrNo } from '../../../assets/data/constants';
import TextArea from '../../../components/TextArea/TextArea';
import Label from '../../../components/Label/Label';

interface RoleQuestionsFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const RoleQuestionsForm = forwardRef<unknown, RoleQuestionsFormProps>(
  ({ data, updateData, userRole }, ref) => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string, value: string) => {
      updateData('roleQuestions', { [field]: value });
    };

    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      const requiredFields = ['interest', 'relate'];

      requiredFields.forEach((field) => {
        if (isFieldVisible(field)) {
          const val = data.roleQuestions?.[field];

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

    const isFieldVisible = (field: string) =>
      getFieldVisibility(userRole, 'RoleQuestionsForm', field);

    return (
      <div className="form-section">
        <h2 className="form-heading">
          <Award className="award-color" size={20} /> Section 5 - Role-Specific Questions
        </h2>

        <div className="form-grid">
          {isFieldVisible('available') && (
            <div>
              <Label
                text="Are you available on the shoot date?"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <Radio
                radioInfo={{ ...yesOrNo, radioName: 'available' }}
                value={data.roleQuestions?.available}
                onChange={(val) => handleChange('available', val)}
              />
            </div>
          )}
          {isFieldVisible('travel') && (
            <div>
              <Label
                text="Are you willing to travel?"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <Radio
                radioInfo={{ ...yesOrNo, radioName: 'travel' }}
                value={data.roleQuestions?.travel}
                onChange={(val) => handleChange('travel', val)}
              />
            </div>
          )}
          {isFieldVisible('scheduling') && (
            <div>
              <Label
                text="Do you have any scheduling conficts?*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <Radio
                radioInfo={{ ...yesOrNo, radioName: 'scheduling' }}
                value={data.roleQuestions?.scheduling}
                onChange={(val) => handleChange('scheduling', val)}
              />
              {errors.yearsExperience && (
                <span className="error-text">{errors.yearsExperience}</span>
              )}
            </div>
          )}
          {isFieldVisible('relevantExperience') && (
            <div>
              <Label
                text="Do you have relevant experience for this role?"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <Radio
                radioInfo={{ ...yesOrNo, radioName: 'relevantExperience' }}
                value={data.roleQuestions?.relevantExperience}
                onChange={(val) => handleChange('relevantExperience', val)}
              />
            </div>
          )}

          {isFieldVisible('interest') && (
            <div>
              <Label
                text="Why are you interested in this role?*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <TextArea
                value={data.roleQuestions?.interest || ''}
                onChange={(e) => handleChange('interest', e.target.value)}
                placeholder="Explain your interest in this role..."
                className="form-textarea"
                maxLength={500}
              />
              {errors.interest && <span className="error-text">{errors.interest}</span>}
              <div className="char-count">
                {(data.roleQuestions?.interest?.length || 0) + ' / 500 characters'}
              </div>
            </div>
          )}

          {isFieldVisible('relate') && (
            <div>
              <Label
                text="How do you relate to this character?*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <TextArea
                value={data.roleQuestions?.relate || ''}
                onChange={(e) => handleChange('relate', e.target.value)}
                placeholder="Describe how you relate to the character..."
                className="form-textarea"
                maxLength={500}
              />
              {errors.relate && <span className="error-text">{errors.relate}</span>}
              <div className="char-count">
                {(data.roleQuestions?.relate?.length || 0) + ' / 500 characters'}
              </div>
            </div>
          )}
          {isFieldVisible('salaryExpectations') && (
            <div>
              <Label
                text="Salary Expectations"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <NumberInput
                type="text"
                value={data.roleQuestions?.salaryExpectations || ''}
                onChange={(val) => handleChange('salaryExpectations', val)}
                className="form-input"
                placeholder="e.g., $80,000"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);
