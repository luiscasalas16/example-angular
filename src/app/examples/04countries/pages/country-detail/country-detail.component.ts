import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [
  ]
})
export class CountryDetailComponent {

  country!: Country;

  constructor
  ( 
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService  
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe
      (
        switchMap(({ id }) => this.countriesService.getCountryByAlpha(id))
      )
      .subscribe( country => this.country = country );

  }
}
