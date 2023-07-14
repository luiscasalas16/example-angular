import { Component } from '@angular/core';
import { Country } from './country.interface';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styles: [],
})
export class CustomComponent {
  orderColumn: string = '';

  countries: Country[] = [
    {
      name: 'China',
      population: 1439323776,
    },
    {
      name: 'India',
      population: 1380004385,
    },
    {
      name: 'United States',
      population: 331002651,
    },
    {
      name: 'Indonesia',
      population: 273523615,
    },
    {
      name: 'Pakistan',
      population: 220892340,
    },
    {
      name: 'Brazil',
      population: 212559417,
    },
    {
      name: 'Nigeria',
      population: 206139589,
    },
    {
      name: 'Bangladesh',
      population: 164689383,
    },
  ];

  order(column: string) {
    this.orderColumn = column;
  }
}
