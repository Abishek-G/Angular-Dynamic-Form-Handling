interface FormField {
  fieldKey: string;
  label: string;
  type: string;
  validations?: {
    required?: boolean;
  };
}

interface FormSection {
  title: string;
  fields: FormField[];
}

interface FormLayout {
  [index: number]: FormSection;
}

export {FormField, FormLayout, FormSection}


