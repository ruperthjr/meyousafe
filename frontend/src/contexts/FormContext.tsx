import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface FormQuestion {
  id: string;
  question: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'time';
  required: boolean;
  options?: string[];
  placeholder?: string;
  helperText?: string;
}

export interface FormData {
  [key: string]: any;
}

export interface FormContextType {
  currentStep: number;
  totalSteps: number;
  formData: FormData;
  questions: FormQuestion[];
  reportId: string | null;
  isSubmitting: boolean;
  
  setCurrentStep: (step: number) => void;
  setFormData: (data: FormData) => void;
  updateFormField: (fieldName: string, value: any) => void;
  setQuestions: (questions: FormQuestion[]) => void;
  setReportId: (id: string | null) => void;
  setIsSubmitting: (submitting: boolean) => void;
  
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  resetForm: () => void;
  
  saveProgress: () => void;
  loadProgress: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export interface FormProviderProps {
  children: ReactNode;
  initialQuestions?: FormQuestion[];
  totalSteps?: number;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  initialQuestions = [],
  totalSteps = 3,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [questions, setQuestions] = useState<FormQuestion[]>(initialQuestions);
  const [reportId, setReportId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormField = useCallback((fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, [totalSteps]);

  const previousStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step);
      }
    },
    [totalSteps]
  );

  const resetForm = useCallback(() => {
    setCurrentStep(1);
    setFormData({});
    setReportId(null);
    setIsSubmitting(false);
  }, []);

  const saveProgress = useCallback(() => {
    try {
      const progressData = {
        currentStep,
        formData,
        reportId,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('meyousafe_form_progress', JSON.stringify(progressData));
    } catch (error) {
      console.error('Failed to save form progress:', error);
    }
  }, [currentStep, formData, reportId]);

  const loadProgress = useCallback(() => {
    try {
      const saved = localStorage.getItem('meyousafe_form_progress');
      if (saved) {
        const progressData = JSON.parse(saved);
        setCurrentStep(progressData.currentStep || 1);
        setFormData(progressData.formData || {});
        setReportId(progressData.reportId || null);
      }
    } catch (error) {
      console.error('Failed to load form progress:', error);
    }
  }, []);

  const value: FormContextType = {
    currentStep,
    totalSteps,
    formData,
    questions,
    reportId,
    isSubmitting,
    
    setCurrentStep,
    setFormData,
    updateFormField,
    setQuestions,
    setReportId,
    setIsSubmitting,
    
    nextStep,
    previousStep,
    goToStep,
    resetForm,
    
    saveProgress,
    loadProgress,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export default FormContext;