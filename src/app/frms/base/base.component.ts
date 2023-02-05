import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styles: [
  ]
})
export class BaseComponent {

  submitWithout(event : any) : void {
    event.preventDefault();

    console.log("submitWithout");
  }

  submitWith() {
    console.log("submitWith");
  }
}
