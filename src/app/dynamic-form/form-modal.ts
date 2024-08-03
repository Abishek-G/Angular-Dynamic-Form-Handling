export interface FormValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface FormOption {
  label: string;
  value: string;
}

export type FormLayout = FormSection[];

export interface FormField {
  fieldKey: string;
  label: string;
  type: string;
  validations?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  options?: { label: string; value: any }[]; // For select fields
}

export interface FormSection {
  title: string;
  fields: FormField[];
}
