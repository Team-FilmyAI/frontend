import React, { useRef, useState, useEffect } from 'react';
import './ApplicationForm.css';
import Header from '../../components/Header/Header.tsx';
import { Check, ChevronLeft } from 'lucide-react';
import { StepIndicator } from './StepIndicator';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { FormNavigation } from './FormNavigation';
import { BasicInfoForm } from './forms/BasicInfoForm';
import { PersonalForm } from './forms/PersonalForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { MediaForm } from './forms/MediaForm';
import { RoleQuestionsForm } from './forms/RoleQuestionsForm';
import { SkillsConsentForm } from './forms/SkillsConsentForm';
import { getFormConfig } from '../../assets/config/formConfig';
import { CURRENT_ROLE } from '../../assets/config/roleConfig';
import styled from '@emotion/styled';
import { StepIconProps } from '@mui/material';

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

  // Refs for each step's validation method
  const stepRefs = useRef<Record<number, { validateForm: () => boolean }>>({});

  useEffect(() => {
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
    const validator = stepRefs.current[currentStep]?.validateForm;
    if (validator && !validator()) {
      // Validation failed, stop navigation
      return;
    }

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
    const validator = stepRefs.current[currentStep]?.validateForm;
    if (validator && !validator()) {
      // Validation failed, stop save
      return;
    }

    console.log('Saving form data:', formData);
  };

  const getCurrentStepComponent = () => {
    const currentStepData = availableSteps[currentStep - 1];
    if (!currentStepData) return null;

    const commonProps = {
      data: formData,
      updateData: updateFormData,
      userRole,
      ref: (instance: any) => {
        if (instance) {
          stepRefs.current[currentStep] = instance;
        }
      },
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
          <button className="back-button">
            <ChevronLeft size={20} />
            <span className="back-text">Back to the Job</span>
          </button>

          <h1 className="apply-title">Apply for Role</h1>
          <p className="apply-subtitle">Complete your application step by step.</p>
        </div>

        <Stepper
          activeStep={currentStep - 1}
          alternativeLabel
          sx={{
            '& .MuiStepConnector-line': {
              borderColor: 'var(--stepper-color)', // 🟠 orange connector
              borderWidth: '2px',
              margin: '0 8px',
            },
            '& .MuiStepConnector-root': {
              top: '25%',
              transform: 'translateY(-50%)',
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label.title} sx={{}}>
              <StepLabel
                slots={{ stepIcon: CustomStepIcon }}
                sx={{
                  '& .MuiStepLabel-label': { color: 'var(--stepper-label)', fontFamily: 'Garet' },
                  '& .MuiStepLabel-label.Mui-active': { color: 'var(--stepper-label)' },
                  '& .MuiStepLabel-label.Mui-completed': { color: 'var(--stepper-label)' },
                }}
              >
                {label.title}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className="step-container">{getCurrentStepComponent()}</div>
        <hr className="divider"></hr>
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

// 🔶 Step icon root wrapper
const CustomStepIconRoot = styled('div')<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '2px solid var(--stepper-color)',
  backgroundColor: ownerState.completed ? 'var(--stepper-color)' : 'var(--stepper-bg)',
  color: ownerState.completed ? 'var(--stepper-bg)' : '#5d5d5d',
  fontWeight: 400,
  fontFamily: 'Garet, sans-serif',
  ...(ownerState.active && {
    borderColor: 'var(--stepper-color)',
    backgroundColor: 'var(--stepper-bg)',
    color: 'var(--stepper-color)',
    fontWeight: 500,
  }),
}));

// 🔶 Step icon component
function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  return (
    <CustomStepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? <Check style={{ width: '1.25rem', height: '1.25rem' }} /> : <span>{icon}</span>}
    </CustomStepIconRoot>
  );
}
