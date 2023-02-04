import { Component } from '@angular/core';

@Component({
  selector: 'app-base-directives',
  templateUrl: './base-directives.component.html',
  styles: [
  ]
})
export class BaseDirectivesComponent {
  
  true_field: boolean = true;
  false_field: boolean = false;
  
  currentItem: string = '';

  classes1_field =  
  {
    'text-capitalize fw-bold': true
  };

  classes2_field =  
  {
    'text-capitalize': true, 
    'fw-bold': true
  };

  getClassObject () : any {
    return {
      'text-capitalize': true, 
      'fw-bold': true
    };
  }

  getStylesObject () : any {
    return {
      'text-transform': true ? 'capitalize' : '',
      'font-weight': true ? 'bold' : ''
    };
  }

  getCurrentItem(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
