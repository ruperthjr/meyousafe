import { BaseEntity, ID } from './common';

export type QuestionType = 'text' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'time' | 'file';

export interface FormQuestion {
  id: string;
  question: string;
  type: QuestionType;
  required: boolean;
  options?: string[];
  placeholder?: string;
  helperText?: string;
  validation?: ValidationRule[];
}

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'phone' | 'custom';
  value?: any;
  message: string;
  validator?: (value: any) => boolean;
}

export interface FormData {
  [key: string]: any;
}

export interface Form extends BaseEntity {
  title: string;
  description?: string;
  questions: FormQuestion[];
  isActive: boolean;
  version?: number;
}

export interface FormSubmission extends BaseEntity {
  formId: ID;
  data: FormData;
  referenceCode: string;
  status: FormSubmissionStatus;
  submittedAt?: string;
  metadata?: FormSubmissionMetadata;
}

export type FormSubmissionStatus = 'draft' | 'submitted' | 'reviewed' | 'closed';

export interface FormSubmissionMetadata {
  ipAddress?: string;
  userAgent?: string;
  location?: string;
  submissionDuration?: number;
}

export interface FormProgress {
  currentStep: number;
  formData: FormData;
  lastSaved: string;
  reportId?: string;
}

export interface FormValidationError {
  field: string;
  message: string;
  type?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: FormValidationError[];
}

export type FormStepStatus = 'incomplete' | 'complete' | 'current';

export interface FormStep {
  id: number;
  label: string;
  status: FormStepStatus;
  questions?: FormQuestion[];
}

export default {
  FormData
};