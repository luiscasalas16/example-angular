import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [],
})
export class BindingComponent {
  text_capitalize: string = 'text-capitalize';

  fontSizePx: number = 16;

  click(event?: any) {
    console.log('click');
    console.log(event);
  }
}
