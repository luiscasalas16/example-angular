import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-basic',
  templateUrl: './reactive-basic.component.html',
  styles: [
  ]
})
export class ReactiveBasicComponent {
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
