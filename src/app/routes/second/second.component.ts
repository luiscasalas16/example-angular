import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent {

  constructor (private router: Router) { }

  btn1() {
    this.router.navigate(['/routes/first']);
  }
}
