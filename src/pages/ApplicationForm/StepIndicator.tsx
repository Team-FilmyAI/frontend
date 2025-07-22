import React from 'react';
import { Check } from 'lucide-react';

import './StepIndicator.css';

interface Step {
  id: number;
  title: string;
  component: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  completedSteps,
  onStepClick,
}) => {
  const getStepStatus = (stepId: number) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const getStepClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'completed';
      case 'current':
        return 'current';
      case 'pending':
      default:
        return 'pending';
    }
  };

  return (
    <div className="step-indicator-container">
      <div className="steps-and-lines">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const stepClasses = getStepClasses(status);
          return (
            <React.Fragment key={step.id}>
              <button onClick={() => onStepClick(step.id)} className={`step-button ${stepClasses}`}>
                {status === 'completed' ? (
                  <Check
                    color="#fff"
                    className="step-icon"
                    style={{ width: '1.25rem', height: '1.25rem' }}
                  />
                ) : (
                  step.id
                )}
              </button>
              {index < steps.length - 1 && <div className="step-line" />}
            </React.Fragment>
          );
        })}
      </div>

      <div className="step-titles">
        {steps.map((step) => (
          <span key={step.id} className="step-title">
            {step.title}
          </span>
        ))}
      </div>
    </div>
  );
};
