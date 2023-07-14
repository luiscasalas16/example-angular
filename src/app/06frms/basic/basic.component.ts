import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent {
  submitWithout(event: any): void {
    event.preventDefault();

    console.log('submitWithout');
  }

  submitWith() {
    console.log('submitWith');
  }
}
