export const APP_CONFIG = {
  NAME: 'MeYouSafe',
  TAGLINE: 'Breaking the Silence, Building Safety',
  DESCRIPTION: 'A secure platform for reporting sexual harassment incidents in Kenya',
  VERSION: '1.0.0',
  CONTACT_EMAIL: 'support@meyousafe.org',
  PRIVACY_EMAIL: 'privacy@meyousafe.org',
} as const;

export const STORAGE_KEYS = {
  FORM_PROGRESS: 'meyousafe_form_progress',
  THEME_MODE: 'meyousafe_theme_mode',
  USER_PREFERENCES: 'meyousafe_user_preferences',
  RECENT_SEARCHES: 'meyousafe_recent_searches',
  LANGUAGE: 'meyousafe_language',
} as const;

export const FORM_CONFIG = {
  MAX_UPLOAD_SIZE: 10 * 1024 * 1024,
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  MIN_DESCRIPTION_LENGTH: 50,
  MAX_DESCRIPTION_LENGTH: 5000,
  AUTO_SAVE_INTERVAL: 30000,
} as const;

export const QUESTION_TYPES = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
  DATE: 'date',
  TIME: 'time',
  FILE: 'file',
} as const;

export const INCIDENT_CATEGORIES = {
  VERBAL: 'Verbal Harassment',
  PHYSICAL: 'Physical Harassment',
  VISUAL: 'Visual Harassment',
  DIGITAL: 'Digital/Online Harassment',
  QUID_PRO_QUO: 'Quid Pro Quo',
  HOSTILE_ENVIRONMENT: 'Hostile Work Environment',
  STALKING: 'Stalking',
  ASSAULT: 'Sexual Assault',
  OTHER: 'Other',
} as const;

export const INCIDENT_LOCATIONS = {
  WORKPLACE: 'Workplace',
  SCHOOL: 'School/University',
  PUBLIC_TRANSPORT: 'Public Transport',
  ONLINE: 'Online/Social Media',
  PUBLIC_SPACE: 'Public Space',
  HOME: 'Home',
  OTHER: 'Other',
} as const;

export const RELATIONSHIP_TO_PERPETRATOR = {
  SUPERVISOR: 'Supervisor/Manager',
  COLLEAGUE: 'Colleague',
  SUBORDINATE: 'Subordinate',
  TEACHER: 'Teacher/Instructor',
  CLASSMATE: 'Classmate/Student',
  STRANGER: 'Stranger',
  ACQUAINTANCE: 'Acquaintance',
  FAMILY: 'Family Member',
  PARTNER: 'Romantic Partner',
  OTHER: 'Other',
} as const;

export const PREFERRED_ACTIONS = {
  FORMAL_INVESTIGATION: 'Formal Investigation',
  MEDIATION: 'Mediation',
  COUNSELING: 'Counseling Services',
  LEGAL_ACTION: 'Legal Action',
  AWARENESS: 'Awareness/Education',
  NO_ACTION: 'Just Documenting',
  UNDECIDED: 'Undecided',
} as const;

export const PRIVACY_SETTINGS = {
  ANONYMOUS: 'anonymous',
  CONFIDENTIAL: 'confidential',
  PUBLIC: 'public',
} as const;

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+254|0)?[17]\d{8}$/,
  URL_REGEX: /^https?:\/\/.+/,
  ALPHANUMERIC_REGEX: /^[a-zA-Z0-9]+$/,
  REFERENCE_CODE_REGEX: /^[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/,
} as const;

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1440,
  EXTRA_LARGE: 1920,
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const;

export const DATE_FORMATS = {
  SHORT: 'MMM dd, yyyy',
  LONG: 'MMMM dd, yyyy',
  FULL: 'EEEE, MMMM dd, yyyy',
  TIME: 'HH:mm',
  DATETIME: 'MMM dd, yyyy HH:mm',
} as const;

export const LANGUAGES = {
  EN: { code: 'en', name: 'English', nativeName: 'English' },
  SW: { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
} as const;

export const SUPPORT_RESOURCES = {
  CRISIS_HOTLINES: [
    { name: 'GBVRC Hotline', number: '1195', description: 'Gender-Based Violence Recovery Centre' },
    { name: 'Police Gender Desk', number: '999', description: '24/7 Police Assistance' },
    { name: 'Emergency Services', number: '112', description: 'General Emergency Line' },
  ],
  COUNSELING_SERVICES: [
    { name: 'LVCT Health', contact: '+254 719 120 000', website: 'https://lvcthealth.org' },
    { name: 'The Cradle', contact: '+254 722 315 029', website: 'https://thecradlethechildren.org' },
  ],
  LEGAL_AID: [
    { name: 'FIDA Kenya', contact: '+254 20 3874 110', website: 'https://fidakenya.org' },
    { name: 'COVAW', contact: '+254 20 600 1076', website: 'https://covaw.or.ke' },
  ],
} as const;

export default APP_CONFIG;