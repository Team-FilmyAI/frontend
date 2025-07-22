import React from 'react';
import { Award, CircleCheckBig } from 'lucide-react';
import { getFieldVisibility } from '../../../assets/config/formConfig';

import Dropdown from '../../../components/Dropdown/Dropdown';
import Radio from '../../../components/Radio/Radio';
import {
  emptyDropdown,
  termsAndConditions,
  availabilityDropdown,
} from '../../../assets/data/constants';

interface SkillsConsentFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const SkillsConsentForm: React.FC<SkillsConsentFormProps> = ({
  data,
  updateData,
  userRole,
}) => {
  const handleChange = (field: string, value: any) => {
    updateData('skillsConsent', { [field]: value });
  };

  const handleSkillRating = (skill: string, rating: number) => {
    const currentSkills = data.skillsConsent?.skillRatings || {};
    handleChange('skillRatings', { ...currentSkills, [skill]: rating });
  };

  const isFieldVisible = (field: string) =>
    getFieldVisibility(userRole, 'SkillsConsentForm', field);

  const commonSkills = [
    'Communication',
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
  ];

  const roleSpecificSkills = {
    developer: ['JavaScript', 'React', 'Node.js', 'Database Design', 'API Development'],
    designer: ['UI/UX Design', 'Visual Design', 'Prototyping', 'User Research', 'Color Theory'],
    manager: [
      'Team Leadership',
      'Project Planning',
      'Budget Management',
      'Strategic Thinking',
      'Performance Management',
    ],
    default: [],
  };

  const skills = [
    ...commonSkills,
    ...(roleSpecificSkills[userRole as keyof typeof roleSpecificSkills] ||
      roleSpecificSkills.default),
  ];

  return (
    <div className="form-section">
      <h2 className="form-heading">
        <Award className="award-color" size={20} /> Section 6 - Skills and Capabilities
      </h2>

      <div className="form-grid">
        {isFieldVisible('actingSkills') && (
          <div className="form-grid-full">
            <label className="app-form-label">Acting Skills*</label>
            <Dropdown {...emptyDropdown} placeholder="Select acting skills" />
          </div>
        )}

        {isFieldVisible('otherTalents') && (
          <div className="form-grid-full">
            <label className="app-form-label">Other Talents</label>
            <Dropdown {...emptyDropdown} placeholder="Select other talents" />
          </div>
        )}

        {isFieldVisible('licenseCerts') && (
          <div className="form-grid-full">
            <label className="app-form-label">Licenses/Certifications</label>
          </div>
        )}

        {isFieldVisible('spokenLanguages') && (
          <div className="form-grid-full">
            <label className="app-form-label">Languages for Singing/Voiceover</label>
            <Dropdown {...emptyDropdown} placeholder="Select languages for singing/voiceover" />
          </div>
        )}

        {/* <div className="form-checkbox-group">
          <h3 className="form-subheading">Consent & Agreements</h3>

          <label className="form-checkbox-row">
            <input
              type="checkbox"
              checked={data.skillsConsent?.dataProcessingConsent || false}
              onChange={(e) => handleChange('dataProcessingConsent', e.target.checked)}
              className="form-checkbox"
            />
            <span className="form-checkbox-text">
              I consent to the processing of my personal data for recruitment purposes in accordance
              with the company's privacy policy.
            </span>
          </label>

          <label className="form-checkbox-row">
            <input
              type="checkbox"
              checked={data.skillsConsent?.communicationConsent || false}
              onChange={(e) => handleChange('communicationConsent', e.target.checked)}
              className="form-checkbox"
            />
            <span className="form-checkbox-text">
              I agree to receive communications regarding my application status and potential
              opportunities.
            </span>
          </label>

          <label className="form-checkbox-row">
            <input
              type="checkbox"
              checked={data.skillsConsent?.backgroundCheckConsent || false}
              onChange={(e) => handleChange('backgroundCheckConsent', e.target.checked)}
              className="form-checkbox"
            />
            <span className="form-checkbox-text">
              I consent to background verification checks if required for this position.
            </span>
          </label>

          <label className="form-checkbox-row">
            <input
              type="checkbox"
              checked={data.skillsConsent?.truthfulnessDeclaration || false}
              onChange={(e) => handleChange('truthfulnessDeclaration', e.target.checked)}
              className="form-checkbox"
            />
            <span className="form-checkbox-text">
              I declare that all information provided in this application is true and accurate to
              the best of my knowledge.
            </span>
          </label>
        </div> */}

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

      <Radio radioInfo={termsAndConditions} className="custom-radio-style" />
    </div>
  );
};
