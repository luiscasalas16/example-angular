import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styles: [],
})
export class CountrySearchComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  seachText: string = '';

  search() {
    this.onEnter.emit(this.seachText);
  }
}
