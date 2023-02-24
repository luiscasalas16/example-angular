import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './bindings.component.html',
  styles: [
  ]
})
export class BindingsComponent {

  text_capitalize : string = 'text-capitalize';

  fontSizePx : number = 16;

  click (event? : any) {
    console.log("click");
    console.log(event);
  }
}
