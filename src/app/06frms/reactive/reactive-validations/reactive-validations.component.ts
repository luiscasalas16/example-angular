import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegexCustomValidator, PasswordCustomValidator, UserNameCustomValidator } from './custom-validators';


@Component({
  selector: 'app-reactive-validations',
  templateUrl: './reactive-validations.component.html',
  styles: [
    '.ng-valid:not(form)  { background-color: green; }',
    '.ng-touched .ng-invalid:not(form)  { background-color: red;}'
  ]
})
export class ReactiveValidationsComponent {
  myForm : FormGroup = this.fb.group({
    id: [ , [ Validators.required, RegexCustomValidator(/^\d-\d\d\d\d-\d\d\d\d$/g) ] ],
    password1: [ , [ Validators.required ] ],
    password2: [ , [ Validators.required ] ],
  user: [ , [ Validators.required ],  [ this.userNameCustomValidator ] ]
  }, { validators: PasswordCustomValidator })
  
  constructor
  (
      private fb: FormBuilder,
      private userNameCustomValidator: UserNameCustomValidator
    ) { }

  controlValid( controlName: string ) {
    return this.myForm?.controls[controlName]?.errors && this.myForm?.controls[controlName]?.touched;
  }

  submit() {
    if (this.myForm.invalid)  {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }
}
