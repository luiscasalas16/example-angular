import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, of, combineLatest } from 'rxjs';

import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';
  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private http: HttpClient) { }

  get regions(): string[] {
    return [ ...this._regions ];
  }

  getCountriesByRegion( region: string ): Observable<Country[]> {
    const url: string = `${ this._apiUrl }/region/${ region }?fields=cioc,name`
    return this.http.get<Country[]>( url );
  }

  getCountryByCode( code: string ): Observable<Country> {
    const url = `${ this._apiUrl }/alpha/${ code }?fields=cioc,name`;
    return this.http.get<Country>( url );
  }

  getCountryBordersByCode( code: string ): Observable<Country | null> {
    if ( !code ) return of(null)

    const url = `${ this._apiUrl }/alpha/${ code }?fields=cioc,name,borders`;
    return this.http.get<Country>( url );
  }

  getCountriesByCodes( borders: string[] ): Observable<Country[]> {
    if ( !borders || borders.length == 0 ) return of([]);

    const results: Observable<Country>[] = [];

    borders.forEach( code => {
      results.push( this.getCountryByCode(code) );
    });

    return combineLatest( results );
  }
}
