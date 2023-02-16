import { Component } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  guid : string = '';

  constructor(){
    this.guid = uuid.v4();
  }
}
