import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styles: [
  ]
})
export class InternalComponent {
  
  constructor (private router: Router) { }

  btn1() {
    sessionStorage.removeItem('token');

    this.router.navigate(['/routes/external']);
  }
}
