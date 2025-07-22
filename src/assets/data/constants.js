import { formStyles } from '../../components/Dropdown/DropdownStyles';

// FilmProjectDetails
export const movieDrive = {
  title: 'Drive in Manhattan',
  posterUrl:
    'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2023/12/19103252/602vevIURmpDfzbnv5Ubi6wIkQm.jpg',
  genres: 'Drama/Romance',
  synopsis:
    "This action drama follows a mysterious man who has multiple jobs as a garage mechanic, a Hollywood stuntman and a getaway driver seems to be trying to escape his shady past as he falls for his neighbor - whose husband is in prison and who's looking after her child alone. Meanwhile, his garage mechanic boss is trying to set up a race team using gangland money, which implicates our driver as he is to be used as the race team's main driver. Our hero gets more than he bargained for when he meets the man who is married to the woman he loves.",
  director: 'Nicolas Winding Refn',
  filmingDates: {
    start: '2010-09-25',
    end: '2010-11-12',
  },
  budget: '$15 million',
  productionTime: '7 weeks',
  productionCompanies: ['Bold Films', 'Marc Platt Productions', 'OddLot Entertainment'],
  filmingLocations: ['Los Angeles, California, USA', 'Downtown LA', 'Echo Park', 'Griffith Park'],
  availableRoles: [
    {
      roleName: 'Supporting Male Lead',
      description: "Charming and witty character who becomes Sarah's love interest.",
      requirements: ['Age 25-35', 'Strong dramatic skills', 'NYC local preferred'],
      payRange: [55000, 75000],
      availability: true,
    },
    {
      roleName: 'Standard',
      description: 'Irene’s husband, recently released from prison.',
      requirements: ['Age: 30-40', 'intense screen presence', 'physical acting'],
      payRange: [35000, 45000],
      availability: false,
    },
    {
      roleName: 'Standard',
      description: 'Irene’s husband, recently released from prison.',
      requirements: ['Age: 30-40', 'intense screen presence', 'physical acting'],
      payRange: [35000, 45000],
      availability: false,
    },
    {
      roleName: 'Standard',
      description: 'Irene’s husband, recently released from prison.',
      requirements: ['Age: 30-40', 'intense screen presence', 'physical acting'],
      payRange: [35000, 45000],
      availability: false,
    },
  ],
};

// Dropdown
export const emptyDropdown = {
  placeholder: '',
  isMulti: false,
  styles: formStyles,
  options: [],
};

export const areaCodeDropdown = {
  placeholder: '',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: 'US/CA', label: '+1' },
    { value: 'GB', label: '+44' },
    { value: 'AU', label: '+61' },
    { value: 'IN', label: '+91' },
    { value: 'DE', label: '+49' },
    { value: 'FR', label: '+33' },
    { value: 'BR', label: '+55' },
    { value: 'CN', label: '+86' },
    { value: 'JP', label: '+81' },
    { value: 'RU', label: '+7' },
    { value: 'ZA', label: '+27' },
    { value: 'MX', label: '+52' },
    { value: 'IT', label: '+39' },
    { value: 'ES', label: '+34' },
  ],
};

export const genderDropdown = {
  placeholder: 'Select Gender (select all that apply)',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'man', label: 'Man' },
    { value: 'woman', label: 'Woman' },
    { value: 'nonBinary', label: 'Non-Binary' },
    { value: 'transgender', label: 'Transgender' },
    { value: 'noAnswer', label: 'I prefer not to say' },
    { value: 'other', label: 'Other' },
  ],
};

export const heightDropdown = {
  placeholder: '',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: 'feet', label: 'ft' },
    { value: 'centimeters', label: 'cm' },
  ],
};

export const weightDropdown = {
  placeholder: '',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: 'pounds', label: 'lbs' },
    { value: 'kilograms', label: 'kg' },
  ],
};
export const eyeColorDropdown = {
  placeholder: '(select all that apply)',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'brown', label: 'Brown' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'hazel', label: 'Hazel' },
    { value: 'amber', label: 'Amber' },
    { value: 'gray', label: 'Gray' },
    { value: 'other', label: 'Other' },
  ],
};
export const hairColorDropdown = {
  placeholder: '',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: 'black', label: 'Black' },
    { value: 'brown', label: 'Brown' },
    { value: 'blonde', label: 'Blonde' },
    { value: 'red', label: 'Red' },
    { value: 'gray', label: 'Gray' },
    { value: 'white', label: 'White' },
    { value: 'dyed', label: 'Dyed/Unnatural' },
    { value: 'bald', label: 'Bald' },
    { value: 'other', label: 'Other' },
  ],
};

export const ethnicityDropdown = {
  placeholder: '(select all that apply)',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'hispanicOrLatino', label: 'Hispanic or Latino' },
    { value: 'white', label: 'White (Not Hispanic or Latino)' },
    {
      value: 'blackOrAfricanAmerican',
      label: 'Black or African American (Not Hispanic or Latino)',
    },
    {
      value: 'nativeHawaiianOrPacificIslander',
      label: 'Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)',
    },
    { value: 'asian', label: 'Asian (Not Hispanic or Latino)' },
    {
      value: 'nativeAmericanOrAlaskaNative',
      label: 'American Indian or Alaska Native (Not Hispanic or Latino)',
    },
    { value: 'twoOrMoreRaces', label: 'Two or More Races (Not Hispanic or Latino)' },
    { value: 'preferNotToSay', label: 'I do not wish to disclose' },
  ],
};

export const experienceDropdown = {
  placeholder: 'Select Experience',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: '0-1', label: '0-1 years' },
    { value: '2-5', label: '2-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '10+', label: '10+ years' },
  ],
};

export const availabilityDropdown = {
  placeholder: '',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: 'immediate', label: 'Immediate' },
    { value: '2-weeks', label: '2 weeks notice' },
    { value: '1-month', label: '1 month notice' },
    { value: 'negotiable', label: 'Negotiable' },
  ],
};

export const testDropdown = {
  placeholder: 'Pick your Hero...',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'spiderMan', label: 'Spider Man' },
    { value: 'ironMan', label: 'Iron Man' },
    { value: 'venom', label: 'Venom' },
  ],
};

// Radio
export const progLangs = {
  radioName: 'languages',
  options: ['HTML', 'CSS', 'Python', 'Java', 'C++'],
  newLine: false,
};

export const yesOrNo = {
  radioName: 'yesNo',
  options: ['Yes', 'No'],
  newLine: true,
};

export const termsAndConditions = {
  radioName: 'termsAndConditions',
  options: [
    'I agree to the Terms and Conditions *',
    'I consent to the use of my data for AI processing and analysis to improve casting decisions *',
  ],
  newLine: true,
};
