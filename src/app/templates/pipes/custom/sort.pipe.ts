import { Pipe, PipeTransform } from '@angular/core';

import { Country } from './country.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform( countries: Country[], orderColumn: string = '' ): Country[] {

    countries = [...countries];

    switch( orderColumn ) {

      case 'name': 
        return countries.sort( (a,b) => ( a.name > b.name ) ? 1 : -1 );
      
      case 'population':
        return countries.sort( (a,b) => ( a.population > b.population ) ? -1 : 1 );

      default:
        return countries;
    }
  }
}
