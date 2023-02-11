import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person, Game } from '../../interfaces/frms.interface';

@Component({
  selector: 'app-template-dynamic',
  templateUrl: './template-dynamic.component.html',
  styles: [
  ]
})
export class TemplateDynamicComponent {
  @ViewChild('myForm') myForm!: NgForm;

  nameGame : string = '';

  person : Person = {
    name: 'Shepard',
    favorites: [
      { id: 1, name: 'Mass Effect' }
    ]
  }

  insert() {
    const newGame : Game  = {
      id: this.person.favorites.length + 1,
      name: this.nameGame
    }

    this.person.favorites.push(newGame);

    this.nameGame = '';
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

  controlValid( controlName: string ) {
    return this.myForm?.controls[controlName]?.errors && this.myForm?.controls[controlName]?.touched;
  }

  submit() {

  }
}
