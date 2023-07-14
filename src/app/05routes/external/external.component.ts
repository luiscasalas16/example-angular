import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styles: [],
})
export class ExternalComponent {
  constructor(private router: Router) {}

  btn1() {
    sessionStorage.setItem('token', '123');

    this.router.navigate(['/routes/internal']);
  }
}
