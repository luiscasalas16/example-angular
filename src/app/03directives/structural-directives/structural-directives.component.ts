import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styles: [],
})
export class StructuralDirectivesComponent {
  numbers: string[] = ['one', 'two', 'three', 'four', 'five'];

  number: string = 'one';
}
