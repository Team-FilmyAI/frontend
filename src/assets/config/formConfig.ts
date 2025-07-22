import { SkillsConsentForm } from '../../pages/ApplicationForm/forms/SkillsConsentForm';

interface FormConfig {
  enabledSections: string[];
  requiredFields: Record<string, string[]>;
  customFields: Record<string, any>;
  fieldVisibility: Record<string, Record<string, boolean>>;
}

const roleConfigs: Record<string, FormConfig> = {
  actor: {
    enabledSections: [
      'BasicInfoForm',
      'PersonalForm',
      'ExperienceForm',
      'MediaForm',
      'RoleQuestionsForm',
      'SkillsConsentForm',
    ],
    requiredFields: {
      BasicInfoForm: ['firstName', 'lastName', 'email'],
    },
    customFields: {},
    fieldVisibility: {
      BasicInfoForm: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        linkedin: false,
        // country: true,
        // state: true,
        // city: true,
        locationAvailability: true,
      },
      PersonalForm: {
        dateOfBirth: true,
        nationality: false,
        address: false,
        age: true,
        gender: true,
        height: true,
        weight: true,
        eyeColor: true,
        hairColor: true,
        ethnicity: true,
        emergencyContactName: false,
        emergencyContactPhone: false,
      },
      ExperienceForm: {
        yearsExperience: false,
        yearsActingExperience: true,
        actingEducation: true,
        previousRoles: true,
        notableWorks: true,
        industryExperience: true,
        programmingLanguages: false,
        managementExperience: false,
        teamSize: false,
        previousCompany: false,
        jobDescription: true,
      },
      MediaForm: {
        resume: true,
        headshots: true,
        demoReel: true,
        url: true,
        portfolio: false,
        designSamples: false,
        coverLetter: false,
        additionalDocs: false,
      },
      RoleQuestionsForm: {
        motivation: true,
        codingChallenge: false,
        preferredStack: false,
        designPhilosophy: false,
        preferredTools: false,
        leadershipStyle: false,
        conflictResolution: false,
        travel: true,
        scheduling: true,
        availability: true,
        relevantExperience: true,
        interest: true,
        relate: true,
        salaryExpectations: true,
      },
      SkillsConsentForm: {
        actingSkills: true,
        otherTalents: true,
        licenseCerts: true,
        spokenLanguages: true,
        appSummary: false,
      },
    },
  },
  developer: {
    enabledSections: [
      'BasicInfoForm',
      'PersonalForm',
      'ExperienceForm',
      'MediaForm',
      'RoleQuestionsForm',
      'SkillsConsentForm',
    ],
    requiredFields: {
      BasicInfoForm: ['firstName', 'lastName', 'email'],
      ExperienceForm: ['yearsExperience', 'programmingLanguages'],
      RoleQuestionsForm: ['codingChallenge', 'preferredStack'],
    },
    customFields: {
      programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
    },
    fieldVisibility: {
      BasicInfoForm: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        linkedin: true,
      },
      PersonalForm: {
        dateOfBirth: true,
        nationality: true,
        address: true,
        emergencyContactName: true,
        emergencyContactPhone: true,
      },
      ExperienceForm: {
        yearsExperience: true,
        programmingLanguages: true,
        managementExperience: false,
        teamSize: false,
        previousCompany: true,
        jobDescription: true,
      },
      MediaForm: {
        resume: true,
        portfolio: false,
        designSamples: false,
        coverLetter: true,
        additionalDocs: true,
      },
      RoleQuestionsForm: {
        motivation: true,
        codingChallenge: true,
        preferredStack: true,
        designPhilosophy: false,
        preferredTools: false,
        leadershipStyle: false,
        conflictResolution: false,
        availability: true,
        salaryExpectations: true,
      },
    },
  },
  designer: {
    enabledSections: [
      'BasicInfoForm',
      'PersonalForm',
      'MediaForm',
      'RoleQuestionsForm',
      'SkillsConsentForm',
    ],
    requiredFields: {
      BasicInfoForm: ['firstName', 'lastName', 'email'],
      MediaForm: ['portfolio', 'designSamples'],
      RoleQuestionsForm: ['designPhilosophy', 'preferredTools'],
    },
    customFields: {
      designTools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Canva'],
    },
    fieldVisibility: {
      BasicInfoForm: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        linkedin: true,
      },
      PersonalForm: {
        dateOfBirth: true,
        nationality: true,
        address: true,
        emergencyContactName: true,
        emergencyContactPhone: true,
      },
      ExperienceForm: {
        yearsExperience: true,
        programmingLanguages: false,
        managementExperience: false,
        teamSize: false,
        previousCompany: true,
        jobDescription: true,
      },
      MediaForm: {
        resume: true,
        portfolio: true,
        designSamples: true,
        coverLetter: true,
        additionalDocs: true,
      },
      RoleQuestionsForm: {
        motivation: true,
        codingChallenge: false,
        preferredStack: false,
        designPhilosophy: true,
        preferredTools: true,
        leadershipStyle: false,
        conflictResolution: false,
        availability: true,
        salaryExpectations: true,
      },
    },
  },
  manager: {
    enabledSections: [
      'BasicInfoForm',
      'PersonalForm',
      'ExperienceForm',
      'RoleQuestionsForm',
      'SkillsConsentForm',
    ],
    requiredFields: {
      BasicInfoForm: ['firstName', 'lastName', 'email'],
      ExperienceForm: ['managementExperience', 'teamSize'],
      RoleQuestionsForm: ['leadershipStyle', 'conflictResolution'],
    },
    customFields: {
      managementAreas: ['Team Leadership', 'Project Management', 'Strategic Planning'],
    },
    fieldVisibility: {
      BasicInfoForm: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        linkedin: true,
      },
      PersonalForm: {
        dateOfBirth: true,
        nationality: true,
        address: true,
        emergencyContactName: true,
        emergencyContactPhone: true,
      },
      ExperienceForm: {
        yearsExperience: true,
        programmingLanguages: false,
        managementExperience: true,
        teamSize: true,
        previousCompany: true,
        jobDescription: true,
      },
      MediaForm: {
        resume: true,
        portfolio: false,
        designSamples: false,
        coverLetter: true,
        additionalDocs: true,
      },
      RoleQuestionsForm: {
        motivation: true,
        codingChallenge: false,
        preferredStack: false,
        designPhilosophy: false,
        preferredTools: false,
        leadershipStyle: true,
        conflictResolution: true,
        availability: true,
        salaryExpectations: true,
      },
    },
  },
  default: {
    enabledSections: ['BasicInfoForm', 'PersonalForm', 'SkillsConsentForm'],
    requiredFields: {
      BasicInfoForm: ['firstName', 'lastName', 'email'],
    },
    customFields: {},
    fieldVisibility: {
      BasicInfoForm: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        linkedin: false,
      },
      PersonalForm: {
        dateOfBirth: true,
        nationality: true,
        address: true,
        emergencyContactName: true,
        emergencyContactPhone: true,
      },
      ExperienceForm: {
        yearsExperience: false,
        programmingLanguages: false,
        managementExperience: false,
        teamSize: false,
        previousCompany: false,
        jobDescription: false,
      },
      MediaForm: {
        resume: true,
        portfolio: false,
        designSamples: false,
        coverLetter: false,
        additionalDocs: false,
      },
      RoleQuestionsForm: {
        motivation: true,
        codingChallenge: false,
        preferredStack: false,
        designPhilosophy: false,
        preferredTools: false,
        leadershipStyle: false,
        conflictResolution: false,
        availability: true,
        salaryExpectations: true,
      },
    },
  },
};

export const getFormConfig = (role: string): FormConfig => {
  return roleConfigs[role] || roleConfigs.default;
};

export const getFieldVisibility = (role: string, formSection: string, field: string): boolean => {
  const config = getFormConfig(role);
  return config.fieldVisibility[formSection]?.[field] ?? true;
};
