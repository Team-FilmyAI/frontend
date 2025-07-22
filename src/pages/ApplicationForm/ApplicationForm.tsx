import React, { useState, useEffect } from 'react';

import './ApplicationForm.css';

import Header from '../../components/Header/Header.tsx';
import { ChevronLeft } from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { FormNavigation } from './FormNavigation';
import { BasicInfoForm } from './forms/BasicInfoForm';
import { PersonalForm } from './forms/PersonalForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { MediaForm } from './forms/MediaForm';
import { RoleQuestionsForm } from './forms/RoleQuestionsForm';
import { SkillsConsentForm } from './forms/SkillsConsentForm';
import { getFormConfig } from '../../assets/config/formConfig';
import { CURRENT_ROLE } from '../../assets/config/roleConfig';

interface FormData {
  basicInfo: Record<string, any>;
  personal: Record<string, any>;
  experience: Record<string, any>;
  media: Record<string, any>;
  roleQuestions: Record<string, any>;
  skillsConsent: Record<string, any>;
}

const steps = [
  { id: 1, title: 'Basic Info', component: 'BasicInfoForm' },
  { id: 2, title: 'Personal', component: 'PersonalForm' },
  { id: 3, title: 'Experience', component: 'ExperienceForm' },
  { id: 4, title: 'Media', component: 'MediaForm' },
  { id: 5, title: 'Role Questions', component: 'RoleQuestionsForm' },
  { id: 6, title: 'Skills & Consent', component: 'SkillsConsentForm' },
];

export const ApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>({
    basicInfo: {},
    personal: {},
    experience: {},
    media: {},
    roleQuestions: {},
    skillsConsent: {},
  });
  const [userRole, setUserRole] = useState<string>('');
  const [availableSteps, setAvailableSteps] = useState(steps);

  useEffect(() => {
    // // Decode JWT and get user role
    // const token =
    //   localStorage.getItem('jwt_token') ||
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZGV2ZWxvcGVyIiwidXNlcklkIjoiMTIzIn0.demo'; // Demo token
    // const decoded = decodeJWT(token);
    // const role = getUserRole(decoded);
    const role = CURRENT_ROLE;
    setUserRole(role);

    // Get form configuration based on role
    const config = getFormConfig(role);
    const filteredSteps = steps.filter((step) => config.enabledSections.includes(step.component));
    setAvailableSteps(filteredSteps);
  }, []);

  const updateFormData = (stepKey: keyof FormData, data: Record<string, any>) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: { ...prev[stepKey], ...data },
    }));
  };

  const markStepComplete = (stepId: number) => {
    setCompletedSteps((prev) => (prev.includes(stepId) ? prev : [...prev, stepId]));
  };

  const handleNext = () => {
    markStepComplete(currentStep);
    if (currentStep < availableSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    console.log('Saving form data:', formData);
    // Implement save logic here
  };

  const getCurrentStepComponent = () => {
    const currentStepData = availableSteps[currentStep - 1];
    if (!currentStepData) return null;

    const commonProps = {
      data: formData,
      updateData: updateFormData,
      userRole,
    };

    switch (currentStepData.component) {
      case 'BasicInfoForm':
        return <BasicInfoForm {...commonProps} />;
      case 'PersonalForm':
        return <PersonalForm {...commonProps} />;
      case 'ExperienceForm':
        return <ExperienceForm {...commonProps} />;
      case 'MediaForm':
        return <MediaForm {...commonProps} />;
      case 'RoleQuestionsForm':
        return <RoleQuestionsForm {...commonProps} />;
      case 'SkillsConsentForm':
        return <SkillsConsentForm {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        {/* Header Section */}
        <div className="header-section">
          {/* Back to Job Link */}
          <button className="back-button">
            <ChevronLeft size={20} />
            <span className="back-text">Back to the Job</span>
          </button>

          {/* Title */}
          <h1 className="apply-title">Apply for Role</h1>

          {/* Subtitle */}
          <p className="apply-subtitle">Complete your application step by step.</p>
        </div>

        <StepIndicator
          steps={availableSteps}
          currentStep={currentStep}
          completedSteps={completedSteps}
          onStepClick={setCurrentStep}
        />

        <div className="step-container">{getCurrentStepComponent()}</div>
        <div className=""></div>
        <FormNavigation
          currentStep={currentStep}
          totalSteps={availableSteps.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};
