import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent {
  @Input() uiLayout: any; // Input property to receive form layout from parent component
  formData: any = {}; // Object to hold form data

  constructor() {
    this.initializeFormData();
  }

  initializeFormData() {
    if (this.uiLayout) {
      this.uiLayout.forEach((section:any) => {
        section.fields.forEach((field:any) => {
          if (!this.formData[section.title]) {
            this.formData[section.title] = {};
          }
          this.formData[section.title][field.fieldKey] = ''; // Initialize with empty string or appropriate default value
        });
      });
    }
  }

  onSubmit() {
    console.log('Form Data:', this.formData); // Log form data on submission
  }
}
