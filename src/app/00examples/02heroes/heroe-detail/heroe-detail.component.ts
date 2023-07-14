import { Component } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { HeroeService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styles: [],
})
export class HeroeDetailComponent {
  new: Heroe = {
    heroeName: '',
    realName: '',
  };

  constructor(private heroeService: HeroeService) {}

  insert() {
    if (
      this.new.heroeName.trim().length === 0 ||
      this.new.realName.trim().length === 0
    )
      return;

    this.heroeService.insertHeroe(this.new);

    this.new = {
      heroeName: '',
      realName: '',
    };
  }
}
