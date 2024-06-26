import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';
  formLayout = [
    {
      title: 'Personal Information',
      fields: [
        { fieldKey: 'firstName', label: 'First Name', type: 'text', validations: { required: true } },
        { fieldKey: 'lastName', label: 'Last Name', type: 'text', validations: { required: true } },
        { fieldKey: 'email', label: 'Email', type: 'email', validations: { required: true } }
      ]
    },
    {
      title: 'Address Information',
      fields: [
        { fieldKey: 'street', label: 'Street', type: 'text' },
        { fieldKey: 'city', label: 'City', type: 'text' },
        { fieldKey: 'state', label: 'State', type: 'text' },
        { fieldKey: 'zip', label: 'Zip', type: 'text' }
      ]
    }
  ];
}
