import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField, FormSection } from './form-modal';
import { matchPasswordsValidator } from '../validators/matchPassword';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() uiLayout: FormSection[] = [];
  form:FormGroup = this.fb.group({});submitted: boolean|undefined;
 ;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const group: { [key: string]: any } = {};
    this.uiLayout.forEach(section => {
      section.fields.forEach(field => {
        const validators = this.mapValidations(field.validations);
        group[field.fieldKey] = this.fb.control('', validators);
      });
    });
    this.form = this.fb.group(group);
    this.form.setValidators(matchPasswordsValidator('password', 'confirmPassword'));
  }

  mapValidations(validations: any) {
    const validatorArr = [];
    if (validations?.required) validatorArr.push(Validators.required);
    if (validations?.minLength) validatorArr.push(Validators.minLength(validations.minLength));
    if (validations?.maxLength) validatorArr.push(Validators.maxLength(validations.maxLength));
    if (validations?.pattern) validatorArr.push(Validators.pattern(validations.pattern));
    return validatorArr;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      console.log('Form is invalid');
      console.log(this.form.errors); // Log form errors if needed
      return;
    } else {
      // Log valid form data
      console.log('Form is valid');
      console.log(this.form.value);
    }
  }
}
