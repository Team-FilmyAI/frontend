import React from 'react';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import './FormNavigation.css';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSave: () => void;
}

export const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSave,
}) => {
  return (
    <div className="form-navigation">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="form-button form-button-previous"
      >
        Previous
      </button>

      <button onClick={onSave} className="form-button form-button-save">
        Save
      </button>

      <button
        onClick={onNext}
        disabled={currentStep === totalSteps}
        className="form-button form-button-next"
      >
        {currentStep === totalSteps ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};
