import { Component } from '@angular/core';
import { FormSection } from './dynamic-form/form-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm: FormSection[] = [
    {
      title: 'Personal Information',
      fields: [
        { fieldKey: 'firstName', label: 'First Name', type: 'text', validations: { required: true, minLength: 2, maxLength: 50 } },
        { fieldKey: 'lastName', label: 'Last Name', type: 'text', validations: { required: true, minLength: 2, maxLength: 50 } },
        { fieldKey: 'email', label: 'Email', type: 'email', validations: { required: true } },
        { fieldKey: 'phoneNumber', label: 'Phone Number', type: 'tel', validations: { required: true, pattern: '^\\+?[0-9]{7,15}$' } },
        { fieldKey: 'dateOfBirth', label: 'Date of Birth', type: 'date', validations: { required: true } }
      ]
    },
    {
      title: 'Account Information',
      fields: [
        { fieldKey: 'username', label: 'Username', type: 'text', validations: { required: true, minLength: 5, maxLength: 20 } },
        { fieldKey: 'password', label: 'Password', type: 'password', validations: { required: true, minLength: 8 } },
        { fieldKey: 'confirmPassword', label: 'Confirm Password', type: 'password', validations: { required: true, minLength: 8 } }
      ]
    },
    {
      title: 'Preferences',
      fields: [
        { fieldKey: 'contactMethod', label: 'Preferred Contact Method', type: 'select', validations: { required: true }, options: [{ label: 'Email', value: 'email' }, { label: 'Phone', value: 'phone' }] },
        { fieldKey: 'terms', label: 'Agree to Terms and Conditions', type: 'checkbox', validations: { required: true } }
      ]
    }
  ];
}
