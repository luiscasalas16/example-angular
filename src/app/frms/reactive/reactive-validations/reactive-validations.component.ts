import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validations',
  templateUrl: './reactive-validations.component.html',
  styles: [
  ]
})
export class ReactiveValidationsComponent {
  myForm : FormGroup = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)]],
    price: ['0' , [Validators.required, Validators.min(0)]]
  })
  
  constructor(private fb: FormBuilder) { }

  controlValid( controlName: string ) {
    return this.myForm?.controls[controlName]?.errors && this.myForm?.controls[controlName]?.touched;
  }

  submit() {
    if (this.myForm.invalid)  {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset({
      price : '0'
    });
  }
}
