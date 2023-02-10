import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-by-capital',
  templateUrl: './country-by-capital.component.html',
  styles: [
  ]
})
export class CountryByCapitalComponent {

  error: boolean = false;
  searchText : string = '';

  countries  : Country[] = [];

  constructor(private countryServices: CountriesService) { }

  search(searchText : string) {
    
    this.error = false;
    this.searchText  = searchText;

    this.countryServices.searchByCapital(searchText)
      .subscribe({
          next: (countries) => {
            this.error = false;
            this.countries = countries;
          },
          error: (err) => {
            this.error = true;
            this.countries = [];
          }
      });
  }
}
