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