import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  tittle: string = 'Contador App';
  base: number = 5;
  total: number = 10;

  increase(value: number) {
    this.total += value;
  }

  decrease(value: number) {
    this.total -= value;
  }
}
