import '../../shared/variables.css';

const formTextColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--form-text')
  .trim();

const placeholderColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--form-input-placeholder')
  .trim();

const backgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--form-input-background')
  .trim();

const borderColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--form-input-border')
  .trim();

const borderColorFocused = getComputedStyle(document.documentElement)
  .getPropertyValue('--fields-border-focused')
  .trim();

const formOptionFocusedColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--form-option-focused')
  .trim();

const dropdownMultiLabelColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--dropdown-multi-label')
  .trim();

export const formStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? borderColorFocused : borderColor,
    backgroundColor: backgroundColor,
    color: 'white',
    boxShadow: state.isFocused ? '0 0 0 1px borderColorFocused' : 'none',
    '&:hover': { borderColor: borderColorFocused },
    fontFamily: 'Garet',
  }),
  input: (provided) => ({
    ...provided,
    color: formTextColor,
    fontFamily: 'Garet',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: placeholderColor,
    fontFamily: 'Garet',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? formOptionFocusedColor : backgroundColor,
    color: state.isFocused ? 'white' : formTextColor,
    fontFamily: 'Garet',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: formTextColor,
    fontFamily: 'Garet',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    fontFamily: 'Garet',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: dropdownMultiLabelColor,
    fontFamily: 'Garet',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: dropdownMultiLabelColor,
    ':hover': {
      backgroundColor: dropdownMultiLabelColor,
      color: 'white',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: backgroundColor,
  }),
};
