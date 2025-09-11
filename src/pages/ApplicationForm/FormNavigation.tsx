import React from 'react';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import './FormNavigation.css';
import Button from '../../components/Buttons/Button';

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
      <Button
        label="Previous"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="form-button form-button-previous"
      />

      <Button label="Save" onClick={onSave} className="form-button form-button-save" />

      <Button
        label={currentStep === totalSteps ? 'Submit' : 'Next'}
        onClick={onNext}
        disabled={currentStep === totalSteps}
        className="form-button form-button-next"
      />
    </div>
  );
};
