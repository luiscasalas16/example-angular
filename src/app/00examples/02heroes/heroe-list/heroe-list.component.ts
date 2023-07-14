import { Component } from '@angular/core';
import { HeroeService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styles: [],
})
export class HeroeListComponent {
  get heroes() {
    return this.heroeService.heroes;
  }

  constructor(private heroeService: HeroeService) {}
}
