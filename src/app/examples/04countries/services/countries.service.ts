import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams () {
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  searchByName(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  searchByCapital(termino: string):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
  
  getCountryByAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url ).pipe(
      tap( console.log )
    );
  }
}
