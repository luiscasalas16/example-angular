import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent {
  constructor(private router: Router) {}

  btn1() {
    this.router.navigate(['/routes/first']);
  }

  btn2() {
    this.router.navigate(['/routes/second']);
  }

  btn3() {
    this.router.navigate(['/routes/route-params', 12345]);
  }

  btn4() {
    this.router.navigate(['/routes/query-params'], {
      queryParams: { page: 2, sort: 'name', order: 'desc' },
    });
  }
}
