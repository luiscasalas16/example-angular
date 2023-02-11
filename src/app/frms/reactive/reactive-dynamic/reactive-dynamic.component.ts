import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-dynamic',
  templateUrl: './reactive-dynamic.component.html',
  styles: [
  ]
})
export class ReactiveDynamicComponent {
  myForm: FormGroup = this.fb.group({
    name: [ 'Shepard', [ Validators.required ] ],
    favorites: this.fb.array([
      [ 'Mass Effect', Validators.required ],
    ], Validators.required )
  });

  nameGame : FormControl = this.fb.control('', Validators.required );

  get favorites() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  insert() {
    this.favorites.push(this.fb.control(this.nameGame.value, Validators.required));

    this.nameGame.reset();
  }

  delete(index: number) {
    this.favorites.removeAt(index);
  }

  controlValid( controlName: string ) {
    return this.myForm?.controls[controlName]?.errors && this.myForm?.controls[controlName]?.touched;
  }

  submit() {

  }
}
