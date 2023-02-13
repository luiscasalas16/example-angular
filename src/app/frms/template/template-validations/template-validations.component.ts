import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-validations',
  templateUrl: './template-validations.component.html',
  styles: [
    '.ng-valid:not(form)  { background-color: green; }',
    '.ng-touched .ng-invalid:not(form)  { background-color: red;}'
  ]
})
export class TemplateValidationsComponent {
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    id: ''
  }

  controlValid( controlName: string ) {
    return this.myForm?.controls[controlName]?.errors && this.myForm?.controls[controlName]?.touched;
  }

  submit() {
    if (this.myForm.invalid)  {
      this.myForm.form.markAllAsTouched();
      return;
    }

    this.myForm.form.reset();
  }
}
