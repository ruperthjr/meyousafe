export const ROUTES = {
  HOME: '/',
  REPORT: '/report',
  ABOUT: '/about',
  FAQS: '/faqs',
  SUPPORT: '/support',
  REFRESH: '/refresh',
  ERROR_404: '/404',
  ERROR_500: '/500',
} as const;

export const REPORT_STEPS = {
  FORM: 1,
  CONFIRM: 2,
  SUBMIT: 3,
} as const;

export const EXTERNAL_LINKS = {
  FACEBOOK: 'https://facebook.com/meyousafe',
  INSTAGRAM: 'https://instagram.com/meyousafe',
  TWITTER: 'https://twitter.com/meyousafe',
  LINKEDIN: 'https://linkedin.com/company/meyousafe',
  GITHUB: 'https://github.com/meyousafe',
  
  SUPPORT_ORGANIZATIONS: {
    FIDA_KENYA: 'https://fidakenya.org',
    CRADLE: 'https://thecradlethechildren.org',
    COVAW: 'https://covaw.or.ke',
    LVCT_HEALTH: 'https://lvcthealth.org',
  },
  
  LEGAL_RESOURCES: {
    SEXUAL_OFFENCES_ACT: 'http://kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/SexualOffencesAct_No3of2006.pdf',
    EMPLOYMENT_ACT: 'http://www.kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/EmploymentAct_No11of2007.pdf',
    CONSTITUTION: 'http://www.kenyalaw.org:8181/exist/kenyalex/actview.xql?actid=Const2010',
  },
  
  EMERGENCY_SERVICES: {
    POLICE: 'tel:999',
    POLICE_GENDER_DESK: 'tel:999',
    EMERGENCY_HOTLINE: 'tel:112',
    GBVRC: 'tel:1195',
  },
} as const;

export default ROUTES;