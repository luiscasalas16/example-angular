import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styles: [],
})
export class EnvironmentsComponent {
  production: boolean;
  testString: string;
  testInteger: number;
  testBoolean: boolean;

  constructor() {
    this.production = environment.production;
    this.testString = environment.testString;
    this.testInteger = environment.testInteger;
    this.testBoolean = environment.testBoolean;
  }

  type(parameter: any): string {
    return typeof parameter;
  }
}
