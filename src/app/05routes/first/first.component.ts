import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styles: [],
})
export class FirstComponent {
  constructor(private router: Router) {}

  btn1() {
    this.router.navigate(['/routes/second']);
  }
}
