import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif-results',
  templateUrl: './gif-results.component.html',
  styles: [
  ]
})
export class GifResultsComponent {

  get results() {
    return this.gifsService.results;
  }

  constructor( private gifsService: GifsService ) { }
}
