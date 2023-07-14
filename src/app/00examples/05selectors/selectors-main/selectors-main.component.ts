import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../interfaces/countries.interface';
import { CountriesService } from '../services/countries.service';
import { tap, switchMap } from 'rxjs';

@Component({
  selector: 'app-selectors-main',
  templateUrl: './selectors-main.component.html',
  styles: [],
})
export class SelectorsMainComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    region: [''],
    country: [''],
    border: [''],
  });

  get regions(): string[] {
    return [...this.countriesService.regions];
  }

  countries: Country[] = [];
  borders: Country[] = [];

  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.myForm.get('country')?.reset('');
          this.loading = true;
        }),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        )
      )
      .subscribe((countries) => {
        this.countries = countries;
        this.loading = false;
      });

    this.myForm
      .get('country')
      ?.valueChanges.pipe(
        tap(() => {
          this.myForm.get('border')?.reset('');
          this.loading = true;
        }),
        switchMap((code) =>
          this.countriesService.getCountryBordersByCode(code)
        ),
        switchMap((country) =>
          this.countriesService.getCountriesByCodes(country?.borders!)
        )
      )
      .subscribe((borders) => {
        this.borders = borders;
        this.loading = false;
      });
  }

  submit() {
    console.log(this.myForm.value);
  }
}
