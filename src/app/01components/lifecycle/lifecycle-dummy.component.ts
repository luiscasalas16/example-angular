import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-dummy',
  templateUrl: './lifecycle-dummy.component.html',
  styles: [],
})
export class LifecycleDummyComponent implements OnChanges {
  @Input() text!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - Dummy');
  }
}
