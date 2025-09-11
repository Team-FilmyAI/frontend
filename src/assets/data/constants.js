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
    { value: 'US/CA', label: '🇺🇸🇨🇦 +1' },
    { value: 'GB', label: '🇬🇧 +44' },
    { value: 'AU', label: '🇦🇺 +61' },
    { value: 'IN', label: '🇮🇳 +91' },
    { value: 'DE', label: '🇩🇪 +49' },
    { value: 'FR', label: '🇫🇷 +33' },
    { value: 'BR', label: '🇧🇷 +55' },
    { value: 'CN', label: '🇨🇳 +86' },
    { value: 'JP', label: '🇯🇵 +81' },
    { value: 'RU', label: '🇷🇺 +7' },
    { value: 'ZA', label: '🇿🇦 +27' },
    { value: 'MX', label: '🇲🇽 +52' },
    { value: 'IT', label: '🇮🇹 +39' },
    { value: 'ES', label: '🇪🇸 +34' },
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
  placeholder: '',
  isMulti: false,
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

export const spokenLanguages = {
  placeholder: 'Select languages',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'mandarinChinese', label: 'Mandarin Chinese' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'bengali', label: 'Bengali' },
    { value: 'portuguese', label: 'Portuguese' },
    { value: 'russian', label: 'Russian' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'punjabi', label: 'Punjabi' },
    { value: 'german', label: 'German' },
    { value: 'javanese', label: 'Javanese' },
    { value: 'wuChinese', label: 'Wu Chinese (Shanghainese)' },
    { value: 'korean', label: 'Korean' },
    { value: 'french', label: 'French' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'marathi', label: 'Marathi' },
    { value: 'turkish', label: 'Turkish' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'urdu', label: 'Urdu' },
    { value: 'italian', label: 'Italian' },
    { value: 'thai', label: 'Thai' },
    { value: 'persian', label: 'Persian (Farsi)' },
    { value: 'polish', label: 'Polish' },
    { value: 'vietnamese', label: 'Vietnamese' },
    { value: 'preferNotToSay', label: 'I do not wish to disclose' },
  ],
};

export const actorAccents = {
  placeholder: 'Select accents',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'american_general', label: 'American (General)' },
    { value: 'american_southern', label: 'American (Southern)' },
    { value: 'american_new_york', label: 'American (New York)' },
    { value: 'american_midwest', label: 'American (Midwest)' },
    { value: 'canadian_general', label: 'Canadian (General)' },
    { value: 'canadian_newfoundland', label: 'Canadian (Newfoundland)' },

    // British Isles
    { value: 'british_rp', label: 'British (Received Pronunciation)' },
    { value: 'british_cockney', label: 'British (Cockney)' },
    { value: 'british_scouse', label: 'British (Scouse/Liverpool)' },
    { value: 'british_geordie', label: 'British (Geordie/Newcastle)' },
    { value: 'british_yorkshire', label: 'British (Yorkshire)' },
    { value: 'scottish_highland', label: 'Scottish (Highland)' },
    { value: 'scottish_glaswegian', label: 'Scottish (Glaswegian)' },
    { value: 'welsh', label: 'Welsh' },
    { value: 'irish_dublin', label: 'Irish (Dublin)' },
    { value: 'irish_belfast', label: 'Irish (Belfast)' },
    { value: 'irish_cork', label: 'Irish (Cork)' },

    // Europe
    { value: 'french', label: 'French' },
    { value: 'french_parisian', label: 'French (Parisian)' },
    { value: 'french_quebecois', label: 'French (Québécois)' },
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' },
    { value: 'spanish_castilian', label: 'Spanish (Castilian)' },
    { value: 'spanish_latin_american', label: 'Spanish (Latin American)' },
    { value: 'russian', label: 'Russian' },
    { value: 'swedish', label: 'Swedish' },
    { value: 'dutch', label: 'Dutch' },

    // Africa
    { value: 'south_african', label: 'South African' },
    { value: 'nigerian', label: 'Nigerian' },
    { value: 'kenyan', label: 'Kenyan' },
    { value: 'north_african', label: 'North African (Moroccan/Egyptian)' },

    // Asia
    { value: 'indian', label: 'Indian' },
    { value: 'pakistani', label: 'Pakistani' },
    { value: 'chinese_mandarin', label: 'Chinese (Mandarin)' },
    { value: 'chinese_cantonese', label: 'Chinese (Cantonese)' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' },
    { value: 'thai', label: 'Thai' },

    // Oceania
    { value: 'australian_general', label: 'Australian (General)' },
    { value: 'australian_broad', label: 'Australian (Broad)' },
    { value: 'new_zealand', label: 'New Zealand (Kiwi)' },
  ],
};

export const fluencyOptions = {
  isMulti: false,
  styles: formStyles,
  options: [
    { value: 'basic', label: 'Basic' },
    { value: 'conversational', label: 'Conversational' },
    { value: 'fluent', label: 'Fluent' },
    { value: 'native', label: 'Native / Bilingual' },
  ],
};

export const experienceDropdown = {
  placeholder: 'Select experience',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: '0-1', label: '0-1 years' },
    { value: '2-5', label: '2-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '10+', label: '10+ years' },
  ],
};

export const educationDropdown = {
  placeholder: 'Select education',
  isMulti: false,
  styles: formStyles,
  options: [
    { value: 'noFormalEducation', label: 'No Formal Education' },
    { value: 'someHighSchool', label: 'Some High School' },
    { value: 'highSchoolDiploma', label: 'High School Diploma or Equivalent' },
    { value: 'someCollege', label: 'Some College, No Degree' },
    { value: 'associateDegree', label: "Associate's Degree" },
    { value: 'bachelorDegree', label: "Bachelor's Degree" },
    { value: 'masterDegree', label: "Master's Degree" },
    { value: 'professionalDegree', label: 'Professional Degree (e.g., JD, MD)' },
    { value: 'doctorateDegree', label: 'Doctorate Degree (PhD, EdD, etc.)' },
    { value: 'preferNotToSay', label: 'I do not wish to disclose' },
  ],
};

export const prevActingDropdown = {
  placeholder: 'Select roles',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'leadRole', label: 'Lead Role' },
    { value: 'supportingRole', label: 'Supporting Role' },
    { value: 'featuredRole', label: 'Featured Role' },
    { value: 'guestStar', label: 'Guest Star' },
    { value: 'backgroundExtra', label: 'Background / Extra' },
    { value: 'stuntPerformer', label: 'Stunt Performer' },
    { value: 'voiceOver', label: 'Voice Over' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'theater', label: 'Theater' },
    { value: 'improv', label: 'Improv' },
    { value: 'studentFilm', label: 'Student Film' },
    { value: 'webSeries', label: 'Web Series' },
    { value: 'shortFilm', label: 'Short Film' },
    { value: 'independentFilm', label: 'Independent Film' },
  ],
};

export const industryRolesDropdown = {
  placeholder: 'Select experience',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'construction', label: 'Construction' },
    { value: 'government', label: 'Government' },
    { value: 'mediaAndEntertainment', label: 'Media and Entertainment' },
    { value: 'marketingAndAdvertising', label: 'Marketing and Advertising' },
    { value: 'transportationAndLogistics', label: 'Transportation and Logistics' },
    { value: 'realEstate', label: 'Real Estate' },
    { value: 'legal', label: 'Legal' },
    { value: 'nonProfit', label: 'Non-Profit' },
    { value: 'energyAndUtilities', label: 'Energy and Utilities' },
    { value: 'telecommunications', label: 'Telecommunications' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'scientificResearch', label: 'Scientific Research' },
    { value: 'artsAndCulture', label: 'Arts and Culture' },
    { value: 'preferNotToSay', label: 'I do not wish to disclose' },
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

export const actingSkillsDropdown = {
  placeholder: 'Select acting skills',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'scriptReading', label: 'Script Reading' },
    { value: 'improvisation', label: 'Improvisation' },
    { value: 'voiceActing', label: 'Voice Acting' },
    { value: 'stageCombat', label: 'Stage Combat' },
    { value: 'dialectsAndAccents', label: 'Dialects and Accents' },
    { value: 'methodActing', label: 'Method Acting' },
    { value: 'cameraActing', label: 'Camera Acting' },
    { value: 'physicalTheater', label: 'Physical Theater' },
    { value: 'singing', label: 'Singing' },
    { value: 'dancing', label: 'Dancing' },
    { value: 'mime', label: 'Mime' },
    { value: 'stagePresence', label: 'Stage Presence' },
    { value: 'characterDevelopment', label: 'Character Development' },
    { value: 'coldReading', label: 'Cold Reading' },
    { value: 'auditionTechniques', label: 'Audition Techniques' },
    { value: 'scriptAnalysis', label: 'Script Analysis' },
    { value: 'emotionalRange', label: 'Emotional Range' },
    { value: 'movementAndBlocking', label: 'Movement and Blocking' },
    { value: 'preferNotToSay', label: 'I do not wish to disclose' },
  ],
};

export const filmTalentsDropdown = {
  placeholder: 'Select other talents',
  isMulti: true,
  styles: formStyles,
  options: [
    { value: 'directing', label: 'Directing' },
    { value: 'screenwriting', label: 'Screenwriting' },
    { value: 'producing', label: 'Producing' },
    { value: 'cinematography', label: 'Cinematography' },
    { value: 'editing', label: 'Editing' },
    { value: 'soundDesign', label: 'Sound Design' },
    { value: 'lighting', label: 'Lighting' },
    { value: 'productionDesign', label: 'Production Design' },
    { value: 'costumeDesign', label: 'Costume Design' },
    { value: 'makeupArtistry', label: 'Makeup Artistry' },
    { value: 'visualEffects', label: 'Visual Effects (VFX)' },
    { value: 'animation', label: 'Animation' },
    { value: 'colorGrading', label: 'Color Grading' },
    { value: 'locationScouting', label: 'Location Scouting' },
    { value: 'casting', label: 'Casting' },
    { value: 'filmMarketing', label: 'Film Marketing and Distribution' },
    { value: 'scriptSupervision', label: 'Script Supervision' },
    { value: 'stuntCoordination', label: 'Stunt Coordination' },
    { value: 'productionManagement', label: 'Production Management' },
    { value: 'cameraOperation', label: 'Camera Operation' },
    { value: 'soundMixing', label: 'Sound Mixing' },
    { value: 'gaffing', label: 'Gaffing' },
    { value: 'boomOperation', label: 'Boom Operation' },
    { value: 'filmEditingSoftware', label: 'Film Editing Software (e.g., Premiere, Final Cut)' },
    { value: 'preferNotToSay', label: 'I do not wish to disclose' },
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
    'I consent to the use of my data for AI processing and analysis to improve casting decisions',
  ],
  newLine: true,
};
