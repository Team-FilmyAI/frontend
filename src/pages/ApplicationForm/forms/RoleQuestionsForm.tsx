import React from 'react';
import { Award } from 'lucide-react';
import { getFormConfig, getFieldVisibility } from '../../../assets/config/formConfig';
import './form-styles.css';

import Dropdown from '../../../components/Dropdown/Dropdown';
import { availabilityDropdown } from '../../../assets/data/constants';
import Radio from '../../../components/Radio/Radio';
import { yesOrNo } from '../../../assets/data/constants';
import TextArea from '../../../components/TextArea/TextArea';

interface RoleQuestionsFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const RoleQuestionsForm: React.FC<RoleQuestionsFormProps> = ({
  data,
  updateData,
  userRole,
}) => {
  const config = getFormConfig(userRole);

  const handleChange = (field: string, value: string) => {
    updateData('roleQuestions', { [field]: value });
  };

  const isFieldVisible = (field: string) =>
    getFieldVisibility(userRole, 'RoleQuestionsForm', field);

  const renderDeveloperQuestions = () => (
    <>
      <div>
        <label className="app-form-label">Coding Challenge Response *</label>
        <textarea
          value={data.roleQuestions?.codingChallenge || ''}
          onChange={(e) => handleChange('codingChallenge', e.target.value)}
          rows={6}
          className="form-textarea"
          placeholder="Describe your approach to solving complex coding problems..."
        />
      </div>

      <div>
        <label className="app-form-label">Preferred Technology Stack *</label>
        <textarea
          value={data.roleQuestions?.preferredStack || ''}
          onChange={(e) => handleChange('preferredStack', e.target.value)}
          rows={3}
          className="form-textarea"
          placeholder="What technologies do you prefer to work with and why?"
        />
      </div>
    </>
  );

  const renderDesignerQuestions = () => (
    <>
      <div>
        <label className="app-form-label">Design Philosophy *</label>
        <textarea
          value={data.roleQuestions?.designPhilosophy || ''}
          onChange={(e) => handleChange('designPhilosophy', e.target.value)}
          rows={6}
          className="form-textarea"
          placeholder="Describe your design philosophy and approach..."
        />
      </div>

      <div>
        <label className="app-form-label">Preferred Design Tools *</label>
        <div className="form-checkbox-grid">
          {config.customFields.designTools?.map((tool: string) => (
            <label key={tool} className="form-checkbox-label">
              <input
                type="checkbox"
                checked={data.roleQuestions?.preferredTools?.includes(tool) || false}
                onChange={(e) => {
                  const current = data.roleQuestions?.preferredTools || [];
                  const updated = e.target.checked
                    ? [...current, tool]
                    : current.filter((t: string) => t !== tool);
                  handleChange('preferredTools', updated);
                }}
                className="form-checkbox"
              />
              <span className="form-checkbox-text">{tool}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  const renderManagerQuestions = () => (
    <>
      <div>
        <label className="app-form-label">Leadership Style *</label>
        <textarea
          value={data.roleQuestions?.leadershipStyle || ''}
          onChange={(e) => handleChange('leadershipStyle', e.target.value)}
          rows={6}
          className="form-textarea"
          placeholder="Describe your leadership style and management approach..."
        />
      </div>

      <div>
        <label className="app-form-label">Conflict Resolution *</label>
        <textarea
          value={data.roleQuestions?.conflictResolution || ''}
          onChange={(e) => handleChange('conflictResolution', e.target.value)}
          rows={4}
          className="form-textarea"
          placeholder="How do you handle conflicts within your team?"
        />
      </div>
    </>
  );

  return (
    <div className="form-section">
      <h2 className="form-heading">
        <Award className="award-color" size={20} /> Section 5 - Role-Specific Questions
      </h2>

      <div className="form-grid">
        {isFieldVisible('available') && (
          <div>
            <label className="app-form-label">Are you available on the shoot date?</label>
            <Radio radioInfo={{ ...yesOrNo, radioName: 'available' }} />
          </div>
        )}
        {isFieldVisible('travel') && (
          <div>
            <label className="app-form-label">Are you willing to travel?</label>
            <Radio radioInfo={{ ...yesOrNo, radioName: 'travel' }} />
          </div>
        )}
        {isFieldVisible('scheduling') && (
          <div>
            <label className="app-form-label">Do you have any scheduling conficts?</label>
            <Radio radioInfo={{ ...yesOrNo, radioName: 'scheduling' }} />
          </div>
        )}
        {isFieldVisible('relevantExperience') && (
          <div>
            <label className="app-form-label">Do you have relevant experience for this role?</label>
            <Radio radioInfo={{ ...yesOrNo, radioName: 'relevantExperience' }} />
          </div>
        )}

        {isFieldVisible('interest') && (
          <div>
            <label className="app-form-label">
              Why are you interested in this role? (500 character limit)*
            </label>
            <TextArea
              value={data.roleQuestions?.interest || ''}
              onChange={(e) => handleChange('interest', e.target.value)}
              placeholder="Explain your interest in this role..."
              className="form-textarea"
              maxLength={500}
            />
          </div>
        )}

        {isFieldVisible('relate') && (
          <div>
            <label className="app-form-label">
              How do you relate to this character (500 character limit)*
            </label>
            <TextArea
              value={data.basicInfo?.relate || ''}
              onChange={(e) => updateData('basicInfo', { relate: e.target.value })}
              placeholder="Describe how you relate to the character..."
              className="form-textarea"
              maxLength={500}
            />
          </div>
        )}
        {isFieldVisible('salaryExpectations') && (
          <div>
            <label className="app-form-label">Salary Expectations</label>
            <input
              type="text"
              value={data.roleQuestions?.salaryExpectations || ''}
              onChange={(e) => handleChange('salaryExpectations', e.target.value)}
              className="form-input"
              placeholder="e.g., $80,000 - $100,000 or Negotiable"
            />
          </div>
        )}
      </div>
    </div>
  );
};
