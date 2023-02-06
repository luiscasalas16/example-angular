import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable()
export class HeroeService {

  private _heroes: Heroe[] =
  [
    {
      heroeName: 'Iron Man',
      realName: 'Tony Stark'
    },
    {
      heroeName: 'Doctor Strange',
      realName: 'Stephen Strange'
    }
  ];

  get heroes(): Heroe[] {
    return [...this._heroes];
  }

  insertHeroe( heroe: Heroe ) {
    this._heroes.push( heroe );
  }
}