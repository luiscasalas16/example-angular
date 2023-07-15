import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="row justify-content-center text-center">
      <div class="col-auto">
        <h2>Examples / Counter</h2>

        <hr />

        <h2>{{ tittle }}</h2>

        <h4>
          Base: <strong> {{ base }} </strong>
        </h4>

        <button type="button" class="btn btn-primary" (click)="decrease(base)">
          - {{ base }}
        </button>

        <span> {{ total }} </span>

        <button type="button" class="btn btn-primary" (click)="increase(base)">
          + {{ base }}
        </button>
      </div>
    </div>
  `,
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
