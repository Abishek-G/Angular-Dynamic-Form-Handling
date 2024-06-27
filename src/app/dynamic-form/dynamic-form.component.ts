import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormField, FormSection } from './form-modal';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {
  @Input() uiLayout: any;
  formData: any = {};

  constructor() {}

  ngOnInit() {
    this.initializeFormData();
  }

  initializeFormData() {
    this.uiLayout.forEach((section:any) => {
      this.formData[section.title] = {};
      section.fields.forEach((field:any) => {
        this.formData[section.title][field.fieldKey] = '';
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
    } else {
      console.log('Form is invalid');
    }
  }

  isValidForm() {
    let valid = true;
    this.uiLayout.forEach((section:FormSection) => {
      section.fields.forEach((field:FormField) => {
        if (field.validations?.required && !this.formData[section.title][field.fieldKey]) {
          valid = false;
        }
        if (field.type === 'email' && !this.isValidEmail(this.formData[section.title][field.fieldKey])) {
          valid = false;
        }
      });
    });
    return valid;
  }

  isValidEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
}
