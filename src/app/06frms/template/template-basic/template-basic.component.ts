import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-basic',
  templateUrl: './template-basic.component.html',
  styles: [],
})
export class TemplateBasicComponent {
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    name: '',
    price: '0',
  };

  controlValid(controlName: string) {
    return (
      this.myForm?.controls[controlName]?.errors &&
      this.myForm?.controls[controlName]?.touched
    );
  }

  submit() {
    if (this.myForm.invalid) {
      this.myForm.form.markAllAsTouched();
      return;
    }

    this.myForm.form.reset({
      price: '0',
    });
  }
}
