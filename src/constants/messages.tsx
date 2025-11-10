
// HeroPage Messages
export const heroPageMessages = {
  // Hero Section
  heroTitle: "We work with!",
  typedStrings: [
    "Actors and Artists",
    "Producers and Directors",
    "Screenwriters and Technicians"
  ],
  diamondCount: 25,
  
  // About Section
  aboutSubtitleFirstWord: "What is ",
  aboutSubtitleSecondWord: "FilmyAI?",
  aboutDescription: "Lorem Ipsum is simply dummy text...",
  
  // Demo Section
  demoSubtitleFirstWord: "Need a ",
  demoSubtitleSecondWord: "Demo?",
  firstNamePlaceholder: "First Name",
  lastNamePlaceholder: "Last Name",
  emailPlaceholder: "Email",
  mobileNumberPlaceholder: "Mobile Number",
  submitButtonText: "Get Demo!",
  
  // Blog Section
  blogSubtitleFirstWord: "See What's",
  blogSubtitleSecondWord: "Happening!",
  blogImageAlt: "Blog Image",
  blogPosts: [
    { 
      title: "Blog Title", 
      image: "images/landingPage/lens.png" 
    },
    { 
      title: "Blog Title", 
      image: "images/landingPage/lens.png" 
    },
    { 
      title: "Blog Title", 
      image: "images/landingPage/lens.png" 
    }
  ],
  
  // Chat Section
  chatHeaderTitle: "Have a Question?",
  chatBotMessage: "Hey! I am bot.",
  chatUserMessage: "It's a message.",
  chatInputPlaceholder: "Type here...",
  
  // Footer Section
  footerShapeImage: "images/footer/shape.svg",
  footerLogoImage: "images/footer/FilmyAI_logo.png",
  footerLogoAlt: "logo",
  footerCopyright: "© 2025 FilmyAI, All rights Reserved",
  footerPrivacyPolicy: "Privacy Policy",
  footerTermsOfService: "Terms of Service",
  footerAccessibility: "Accessibility",
  termsOfServiceLink: "documents/Terms.pdf",
  
  // Navigation IDs
  heroSectionId: "hero",
  aboutSectionId: "about",
  demoSectionId: "demo",
  blogSectionId: "blog",
  chatSectionId: "chat",
  
  // Animation Config
  typedConfig: {
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  },
  
  intersectionObserverConfig: {
    threshold: 0.1
  },
  
  // Animation Classes
  animationClasses: {
    slideUp: "slide-up",
    fadeIn: "fade-in",
    slideInRight: "slide-in-right",
    slideInLeft: "slide-in-left",
    collapsed: "collapsed",
    expanded: "expanded"
  }
};

// HeroPageNavBar Messages
export const heroPageNavBarMessages = {
  // Logo
  logoImage: "images/footer/FilmyAI_logo.png",
  logoAlt: "FilmyAI Logo",
  
  // Navigation Links
  navHome: "Home",
  navAbout: "About",
  navDemo: "Demo",
  navBlogs: "Blogs",
  navLogin: "Login",
  navSignUp: "SignUp",
  
  // Navigation Anchors
  heroAnchor: "#hero",
  aboutAnchor: "#about",
  demoAnchor: "#demo",
  blogAnchor: "#blog",
  
  // Routes
  loginRoute: "/Login",
  signUpRoute: "/SignUp",
  
  // Responsive Breakpoint
  mobileBreakpoint: 768
};


// Landing Page Messages
export const landingPageMessages = {
  // Welcome Section
  welcomeTitle: "Welcome back,",
  welcomeHighlight: "Anu!",
  welcomeDescription: "Ready to land your next big role? We've curated the perfect opportunities based on your profile and experience.",
  rating: "4.8 Rating",
  auditionsThisMonth: "12 Auditions This Month",
  location: "Los Angeles, CA",
  viewOpportunitiesButton: "View New Opportunities",
  
  // KPI Cards
  activeApplicationsLabel: "Active Applications",
  activeApplicationsValue: 8,
  activeApplicationsChange: "+2 this week",
  
  pendingResponsesLabel: "Pending Responses", 
  pendingResponsesValue: 5,
  pendingResponsesChange: "2 Urgent",
  
  profileViewsLabel: "Profile Views",
  profileViewsValue: 142,
  profileViewsChange: "+18% this month",
  
  successRateLabel: "Success Rate",
  successRateValue: "73%",
  successRateChange: "+5% improvement",
  
  // Recommendations Section
  recommendationsTitle: "Recommended for You",
  recommendationsSubtitle: "Curated based on your profile and preferences",
  viewAllRecommendationsButton: "View All Recommendations",
  matchText: "Match",
  requirementsLabel: "Requirements:",
  applyNowButton: "Apply Now",
  
  // Sample Recommendations Data
  recommendationsData: [
    {
      title: "Drive in Manhattan",
      role: "Supporting Male Lead", 
      genre: "Drama/Romance",
      description: "A heartwarming story about second chances in the big city",
      location: "New York, NY",
      duration: "3 months",
      budget: "$5M - $15M",
      match: "95%",
      tags: ["Age 25-35", "Strong drama skills", "NYC local greeted"],
      image: "/frontend/images/landingPage/lens.png"
    },
    {
      title: "The Last Detective",
      role: "Detective Partner",
      genre: "Crime Thriller", 
      description: "A gritty crime thriller set in modern-day Los Angeles.",
      location: "Los Angeles, CA",
      duration: "4 months",
      budget: "$15M - $20M",
      match: "82%",
      tags: ["Age 30-90", "Action experience", "Physical Fitness required"],
      image: "/frontend/images/landingPage/lens.png"
    },
    {
      title: "Summer's End",
      role: "Father Figure",
      genre: "Crime Thriller",
      description: "An indie film about family bonds and growing up.",
      location: "Portland, OR", 
      duration: "6 weeks",
      budget: "$2M - $6M",
      match: "82%",
      tags: ["Age 35-55", "Fatherly personality", "Indie film experience"],
      image: "/frontend/images/landingPage/lens.png"
    }
  ],
  
  // Casting Calls Section
  castingCallsTitle: "Your Casting Calls",
  castingCallsSubtitle: "Invitations and auditions you've received",
  viewAllCastingCallsButton: "View All Casting Calls",
  urgentLabel: "Urgent",
  castingCallsDescription: "Seeking a charismatic actor for a tech-savvy character in action thriller.",
  directorLabel: "Dir:",
  dueLabel: "Due:",
  requiredLabel: "Required:",
  confirmAuditionButton: "Confirm Audition",
  viewDetailsButton: "View Details",
  
  // Sample Casting Calls Data
  castingCallsData: [
    {
      title: "Ocean's Revenge",
      role: "Tech Specialist",
      urgent: true,
      director: "James Whpn",
      date: "Dec 15, 2024",
      time: "2:30PM–3:30PM", 
      due: "Dec 10, 2024",
      required: ["1-min Monologue"],
      description: "Seeking a charismatic actor for a tech-savvy character in action thriller."
    },
    {
      title: "Shadows & Lights",
      role: "Lead Detective",
      urgent: false,
      director: "Ava Moren",
      date: "Jan 5, 2025",
      time: "1:00PM–2:00PM",
      due: "Dec 30, 2024", 
      required: ["Headshot", "Resume"],
      description: "Seeking a charismatic actor for a tech-savvy character in action thriller."
    }
  ],
  
  // Categories Section
  categoriesTitle: "Browse by Categories",
  categoriesSubtitle: "Explore opportunities across different types of productions and genres",
  availableRoles: "available roles",
  browseRolesButton: "Browse Roles",
  viewAllCategoriesButton: "View All Categories",
  
  // Categories Data
  categoriesData: [
    {
      label: "Feature Films",
      roles: 8,
      description: "Major studio and independent feature films"
    },
    {
      label: "TV Series", 
      roles: 24,
      description: "Television series and streaming shows"
    },
    {
      label: "Commercials",
      roles: 45,
      description: "Brand commercials and advertising campaigns"
    },
    {
      label: "Web Series",
      roles: 10,
      description: "Online content and digital series"
    },
    {
      label: "Romance",
      roles: 5,
      description: "Romantic comedies and drama films"
    },
    {
      label: "Action/Thriller",
      roles: 50,
      description: "Action-packed and suspenseful productions"
    },
    {
      label: "Comedy",
      roles: 24,
      description: "Comedy films and lighthearted content"
    },
    {
      label: "Horror/Sci-Fi",
      roles: 12,
      description: "Horror and science fiction productions"
    }
  ]
};

// CurrentProfileDetails Page Messages
export const currentProjectDetailsMessages = {
  // Navigation
  backToDashboard: "Back to Dashboard",
  
  // Project Header
  projectTitle: "The Dark Knight Returns",
  statusActive: "Active",
  location: "Los Angeles, California",
  deadline: "Deadline: 2021-08-15",
  editProjectButton: "Edit Project",
  
  // Project Details Section
  projectDetailsTitle: "Project Details",
  synopsisTitle: "Synopsis",
  synopsisText: "A gripping tale of justice and redemption in a dark urban setting.",
  synopsisDescription: "In a corrupt, decaying city, a disgraced detective teams up with a wrongfully accused woman to uncover the truth behind a brutal murder. As they dig deeper, they face a web of lies, betrayal, and moral ambiguity. A gritty tale of justice, redemption, and the cost of doing what's right in a world gone dark.",
  
  // Production Details
  productionDetailsTitle: "Production Details",
  genreTags: ["Action", "Drama"],
  categoryLabel: "Category:",
  categoryValue: "Feature Film",
  genreLabel: "Genre:",
  genreValue: "Action, Drama",
  productionLabel: "Production:",
  productionValue: "Warner Bros, DC Films",
  
  // Roles Section
  rolesTitle: "Roles (3)",
  roleStatusOpen: "Open",
  
  // Role Details Labels
  genderLabel: "Gender: ",
  ageLabel: "Age: ",
  compensationLabel: "Compensation: ",
  applicationLabel: "Application: ",
  
  // Applications Section
  applicationsTitle: "Applications (4)",
  reviewApplicationButton: "Review Application",
  
  // Application Details Labels
  experienceLabel: "Experience: ",
  appliedLabel: "Applied: ",
  
  // Status Text Mappings
  statusUnderReview: "Under Review",
  statusShortlisted: "Shortlisted",
  statusInterviewScheduled: "Interview Scheduled",
  
  // Sample Roles Data
  rolesData: [
    {
      id: "1",
      title: "Lead Actor",
      gender: "Male",
      age: "20-35",
      compensation: "$50,000",
      applications: 28,
      status: "open"
    },
    {
      id: "2", 
      title: "Supporting Actress",
      gender: "Female",
      age: "20-35",
      compensation: "$30,000",
      applications: 56,
      status: "open"
    },
    {
      id: "3",
      title: "Villain",
      gender: "Male, Female",
      age: "30-60",
      compensation: "$30,000",
      applications: 20,
      status: "open"
    }
  ],
  
  // Sample Applications Data
  applicationsData: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Lead Actor",
      experience: "5 years",
      appliedDate: "2024-07-01",
      location: "Los Angeles, California",
      status: "under-review"
    },
    {
      id: "2",
      name: "Micael Chen", 
      role: "Supporting Actress",
      experience: "5 years",
      appliedDate: "2024-07-01",
      location: "Los Angeles, California",
      status: "shortlisted"
    },
    {
      id: "3",
      name: "Anu Kargaonkar",
      role: "Lead Actor", 
      experience: "5 years",
      appliedDate: "2024-07-01",
      location: "Los Angeles, California",
      status: "interview-scheduled"
    }
  ]
};

// FilmProjectDetails Page Messages
export const filmProjectDetailsMessages = {
  // Navigation
  backToMovies: "Back to Movies",
  
  // Film Details Labels
  directorLabel: "Director:",
  budgetLabel: "Budget:",
  productionTimeLabel: "production",
  productionCompaniesTitle: "Production Companies",
  filmingLocationsTitle: "Filming Locations",
  
  // Synopsis Section
  synopsisTitle: "Synopsis",
  
  // Available Roles Section
  availableRolesTitle: "Available Roles",
  requirementsTitle: "Requirements:",
  
  // Role Status
  roleFilled: "Filled",
  roleOpen: "Open",
  applyNowButton: "Apply Now",
  
  // Alt Text
  posterAltText: "poster",
  
  // Date Format Options
  dateFormatOptions: {
    year: "numeric",
    month: "long", 
    day: "numeric"
  },
  
  // Sample Movie Data (from constants.js - you may want to keep this in constants)
  movieData: {
    title: "Sample Movie Title",
    genres: "Action, Drama",
    director: "Sample Director",
    budget: "$10,000,000",
    productionTime: "6 months",
    posterUrl: "/path/to/poster.jpg",
    filmingDates: {
      start: "2024-01-15",
      end: "2024-06-30"
    },
    productionCompanies: [
      "Warner Bros",
      "Universal Pictures",
      "Sony Pictures"
    ],
    filmingLocations: [
      "Los Angeles, CA",
      "New York, NY", 
      "Atlanta, GA"
    ],
    synopsis: "A gripping story of courage, determination, and the human spirit. Follow our protagonist as they navigate challenges and discover what it truly means to be a hero.",
    availableRoles: [
      {
        roleName: "Lead Actor",
        description: "The main protagonist of the story",
        requirements: ["5+ years experience", "Action scenes", "Dramatic range"],
        payRange: [50000, 100000],
        availability: true
      },
      {
        roleName: "Supporting Actress",
        description: "Strong supporting character with emotional depth",
        requirements: ["3+ years experience", "Emotional scenes", "Chemistry with lead"],
        payRange: [30000, 60000],
        availability: true
      },
      {
        roleName: "Villain",
        description: "Complex antagonist with compelling motivations",
        requirements: ["Character acting", "Physical presence", "Intimidating voice"],
        payRange: [40000, 80000],
        availability: false
      }
    ]
  }
};

// ForgetPassword Page Messages
export const forgotPasswordMessages = {
  // Page Title
  title: "Forgot Password?",
  
  // Input Field
  inputPlaceholder: "Email address or Username",
  
  // Navigation
  backToLoginText: "Back to",
  loginLinkText: "Log in",
  
  // Buttons
  sendButton: "Send",
  orDivider: "OR",
  
  // Organization Info
  organizationName: "FilmyAI",
  tagLine: "Start your journey today!",
  
  // Error Messages
  emptyInputError: "Please enter your email or username.",
  invalidEmailError: "Please enter a valid email address.",
  
  // Success Messages
  resetLinkSent: "Reset link has been sent to your email.",
  
  // Social Media Icons (classes)
  socialIcons: [
    "fab fa-google",
    "fab fa-facebook-f", 
    "fab fa-instagram",
    "fa-brands fa-linkedin"
  ],
}

// Login Page Messages

export const loginMessages = {
  // Page Title
  title: "Login",
  
  // Form Fields
  emailPlaceholder: "Email address or Username",
  passwordPlaceholder: "Password",
  
  // Links and Navigation
  forgotPasswordText: "Forgot Password?",
  loginButtonText: "Log in",
  signupLinkText: "Don't have an account?",
  signupText: "Sign Up",
  orDivider: "OR",
  
  // Organization Branding
  organizationName: "FilmyAI",
  tagLine: "Start your journey today!",
  
  // Error Messages
  emailRequiredError: "Email is required.",
  invalidEmailError: "Please enter a valid email address.",
  passwordRequiredError: "Password is required.",
  
  // Routes
  forgotPasswordRoute: "/Forgot",
  signupRoute: "/Signup",
  profileRoute: "/profile",
  
 
};

// ProductionDashboard Page Messages
export const productionDashboardMessages = {
  // Dashboard Header
  dashboardTitle: "Production Dashboard",
  dashboardSubtitle: "Manage your projects and casting calls",
  
  // Current Projects Section
  currentProjectsTitle: "Current Projects",
  applicationsLabel: "Applications:",
  rolesLabel: "Roles:",
  deadlineLabel: "Deadline:",
  editButton: "Edit",
  viewDetailsButton: "View Details",
  
  // Project Status
  statusOpen: "Open",
  statusClosed: "Closed",
  
  // Recent Applications Section
  recentApplicationsTitle: "Recent applications",
  
  // Table Headers
  applicationTableHeaders: {
    applications: "Applications",
    role: "Role", 
    project: "Project",
    applicationDate: "Application Date",
    status: "Status",
    action: "Action"
  },
  
  // Action Buttons
  reviewButton: "Review",
  
  // Application Status Options
  statusUnderReview: "Under Review",
  statusShortlisted: "Shortlisted", 
  statusInterviewScheduled: "Interview Scheduled",
  
  // Sample Current Projects Data
  currentProjectsData: [
    {
      title: "The Dark Knight returns",
      tags: ["Action", "Drama"],
      applications: 125,
      roles: 125,
      deadline: "08-15-2024",
      status: "Open"
    },
    {
      title: "Summer Romance",
      tags: ["Romance", "Comedy"],
      applications: 98,
      roles: 50,
      deadline: "09-01-2024",
      status: "Open"
    },
    {
      title: "Sci-Fi Adventure",
      tags: ["Sci-Fi", "Adventure"],
      applications: 75,
      roles: 30,
      deadline: "10-10-2024",
      status: "Closed"
    }
  ],
  
  // Sample Recent Applications Data
  recentApplicationsData: [
    {
      name: "Sarah Johnson",
      role: "Lead Actress",
      project: "The Dark Knight Returns",
      date: "08-15-2024",
      status: "Under Review"
    },
    {
      name: "Michael Chen",
      role: "Supporting Actor",
      project: "Summer Romance",
      date: "06-23-2024",
      status: "Shortlisted"
    },
    {
      name: "Emma Davis",
      role: "Villain",
      project: "The Dark Knight Returns",
      date: "04-11-2024",
      status: "Interview Scheduled"
    },
    {
      name: "Anu Kargaonkar",
      role: "Lead Actress",
      project: "Summer Romance",
      date: "01-08-2024",
      status: "Shortlisted"
    }
  ]
};

// RoleDetailPage Messages

export const MessageRoleDetailPage = {
  // Navigation
  backToMovieDetails: "Back to Movie Details",
  
  // Project Header
  projectTitle: "Midnight in Manhattan - Drama/Romance",
  roleTitle: "Supporting Male Lead",
  characterName: "David Chen",
  
  // Meta Information
  director: "Director: Sarah Chen",
  applyBy: "Apply by: January 15, 2025",
  
  // Main Content Sections
  characterDescriptionTitle: "Character Description",
  characterDescription: "A charming and witty architect who becomes Sarah's love interest. David is confident yet vulnerable, with a sharp sense of humor that masks his own past disappointments. He's successful in his career but has been unlucky in love until he meets Sarah. The character requires someone who can balance comedy with genuine emotional depth.",
  
  requirementsTitle: "Requirements",
  requirements: [
    "Strong dramatic and comedic acting skills",
    "NYC local preferred",
    "Previous romantic lead experience",
    "Comfortable with intimate scenes"
  ],
  
  specialSkillsTitle: "Special Skills Required",
  specialSkills: [
    "Piano playing",
    "Ballroom dancing",
    "Rock climbing"
  ],
  
  // Apply Section
  applyButtonText: "Apply for Role",
  
  // Sidebar - Role Information
  roleInformationTitle: "Role Information",
  
  ageRangeLabel: "Age Range",
  ageRangeValue: "25-35 years",
  
  genderLabel: "Gender",
  genderValue: "Male",
  
  languagesLabel: "Languages Required",
  languages: [
    "English",
    "Mandarin",
    "Mandarin", // Note: There are duplicate entries in the original
    "Mandarin",
    "Mandarin"
  ],
  
  // Console log messages (for development)
  consoleMessages: {
    applyForRole: "Apply for role clicked",
    backToMovieDetails: "Back to movie details clicked"
  }
};

// SignUp Page Messages
export const signUpMessages = {
  // Page Title
  title: "Sign Up",
  
  // Form Type Options
  userOption: "User",
  businessOption: "Business",
  
  // Form Field Placeholders
  firstNamePlaceholder: "First Name",
  lastNamePlaceholder: "Last Name",
  businessNamePlaceholder: "Business Name",
  emailPlaceholder: "Email address",
  passwordPlaceholder: "Password",
  
  // Terms & Conditions
  termsText: "I agree to",
  termsLinkText: "Terms & Conditions",
  termsUrl: "/documents/Terms.pdf",
  
  // Buttons
  signUpButton: "Sign Up",
  orDivider: "OR",
  
  // Login Prompt
  loginPromptText: "Already have an account?",
  loginLinkText: "Click here",
  loginPromptSuffix: "to login",
  
  // Organization Branding
  organizationName: "FilmyAI",
  tagLine: "Start your journey today!",
  
  // Error Messages
  nameRequiredError: "First and last name are required.",
  businessNameRequiredError: "Business name is required.",
  emailRequiredError: "A valid email address is required.",
  passwordLengthError: "Password must be at least 6 characters long.",
  termsRequiredError: "You must accept the Terms & Conditions.",
  
  // Success Messages
  thankYouMessage: "Thank you for signing up!",
  closeButton: "Close",
  
  // Social Media Icons
  socialIcons: [
    "fab fa-google",
    "fab fa-facebook-f",
    "fab fa-instagram",
    "fa-brands fa-linkedin"
  ],
  
  // Routes
  loginRoute: "/Login",
  landingPageRoute: "/LandingPage",
  
  // Form Field Names
  formFieldNames: {
    firstName: "firstName",
    lastName: "lastName", 
    businessName: "businessName",
    email: "email",
    password: "password",
    termsAccepted: "termsAccepted",
    type: "type"
  },
  
  // Form Type Values
  formTypes: {
    user: "user",
    business: "business"
  },

}

// ViewOpportunities Page Messages
export const viewOpportunitiesMessages = {
  // Navigation
  backToMovies: "Back to Movies",
  
  // Page Header
  mainTitle: "New Opportunities",
  opportunitiesDescription: "Discover the latest casting calls and roles that match your profile. Apply now and take the next step in your acting career.",
  
  // Stat Cards
  totalOpportunitiesLabel: "Total Opportunities",
  urgentCastingLabel: "Urgent Casting", 
  matchScoreLabel: "Your Match Score",
  totalOpportunitiesValue: 4,
  urgentCastingValue: 2,
  matchScoreValue: 4.8,
  
  // Load More
  loadMoreButton: "Load More Opportunities",
  
  // Sample Casting Data
  castingData: [
    {
      title: "Midnight in Manhattan",
      type: "Drama/Romance",
      location: "New York City, NY",
      applyBy: "January 15, 2025",
      urgent: false,
      characterName: "Supporting Male Lead",
      character: "David Chen", 
      characterDescription: "A charming and witty architect who becomes Sarah's love interest.",
      ageRange: "25-35",
      gender: "Male",
      compensation: "$50,000 - $75,000"
    },
    {
      title: "Midnight in Manhattan",
      type: "Drama/Romance", 
      location: "Manhattan, NY",
      applyBy: "January 20, 2025",
      urgent: true,
      characterName: "Sarah's Best Friend",
      character: "Emma Rodriguez",
      characterDescription: "Loyal friend who helps Sarah navigate her return to the city.",
      ageRange: "28-38",
      gender: "Female",
      compensation: "$30,000 - $45,000"
    },
    {
      title: "City Lights",
      type: "Crime/Thriller",
      location: "Los Angeles, CA", 
      applyBy: "February 1, 2025",
      urgent: false,
      characterName: "Lead Detective",
      character: "Marcus Thompson",
      characterDescription: "Experienced detective investigating a series of mysterious cases.",
      ageRange: "35-45",
      gender: "Male",
      compensation: "$80,000 - $120,000"
    },
    {
      title: "Summer Dreams",
      type: "Comedy/Drama",
      location: "San Francisco, CA",
      applyBy: "January 25, 2025",
      urgent: true,
      characterName: "Young Entrepreneur", 
      character: "Sophia Kim",
      characterDescription: "Ambitious young woman starting her own tech company.",
      ageRange: "22-30",
      gender: "Female",
      compensation: "$45,000 - $65,000"
    }
  ]
};
