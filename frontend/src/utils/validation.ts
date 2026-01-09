export const validators = {
  required: (value: any): boolean => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value !== null && value !== undefined;
  },

  email: (value: string): boolean => {
    if (!value) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  phone: (value: string): boolean => {
    if (!value) return false;
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    return phoneRegex.test(value);
  },

  minLength: (min: number) => (value: string): boolean => {
    if (!value) return false;
    return value.length >= min;
  },

  maxLength: (max: number) => (value: string): boolean => {
    if (!value) return true;
    return value.length <= max;
  },

  minValue: (min: number) => (value: number): boolean => {
    if (value === null || value === undefined) return false;
    return value >= min;
  },

  maxValue: (max: number) => (value: number): boolean => {
    if (value === null || value === undefined) return true;
    return value <= max;
  },

  pattern: (regex: RegExp) => (value: string): boolean => {
    if (!value) return false;
    return regex.test(value);
  },

  url: (value: string): boolean => {
    if (!value) return false;
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },

  date: (value: string): boolean => {
    if (!value) return false;
    const date = new Date(value);
    return !isNaN(date.getTime());
  },

  pastDate: (value: string): boolean => {
    if (!value) return false;
    const date = new Date(value);
    return date < new Date();
  },

  futureDate: (value: string): boolean => {
    if (!value) return false;
    const date = new Date(value);
    return date > new Date();
  },

  match: (field: string) => (value: string, formValues?: Record<string, any>): boolean => {
    if (!formValues) return false;
    return value === formValues[field];
  },

  kenyaPhoneNumber: (value: string): boolean => {
    if (!value) return false;
    const cleanedValue = value.replace(/[\s-]/g, '');
    const kenyaPhoneRegex = /^(\+254|0)?[17]\d{8}$/;
    return kenyaPhoneRegex.test(cleanedValue);
  },

  safeText: (value: string): boolean => {
    if (!value) return true;
    const dangerousPatterns = /<script|javascript:|on\w+\s*=/i;
    return !dangerousPatterns.test(value);
  },

  alphanumeric: (value: string): boolean => {
    if (!value) return false;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(value);
  },

  noWhitespace: (value: string): boolean => {
    if (!value) return false;
    return !/\s/.test(value);
  },

  strongPassword: (value: string): boolean => {
    if (!value) return false;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isLongEnough = value.length >= 8;
    
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough;
  },
};

export const errorMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be no more than ${max} characters`,
  minValue: (min: number) => `Must be at least ${min}`,
  maxValue: (max: number) => `Must be no more than ${max}`,
  url: 'Please enter a valid URL',
  date: 'Please enter a valid date',
  pastDate: 'Date must be in the past',
  futureDate: 'Date must be in the future',
  match: (field: string) => `Must match ${field}`,
  kenyaPhoneNumber: 'Please enter a valid Kenyan phone number',
  safeText: 'Input contains potentially unsafe content',
  alphanumeric: 'Only letters and numbers are allowed',
  noWhitespace: 'Whitespace is not allowed',
  strongPassword: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
};

export const createValidator = <T = any>(
  validatorFn: (value: T, formValues?: Record<string, any>) => boolean,
  message: string
) => ({
  validate: validatorFn,
  message,
});

export default validators;