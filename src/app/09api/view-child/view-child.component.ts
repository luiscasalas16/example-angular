import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styles: [
  ]
})
export class ViewChildComponent {
  @ViewChild('paragraph') paragraphContainer!: ElementRef<HTMLElement>;

  test() {
    let containerElement : HTMLElement = this.paragraphContainer.nativeElement;
    
    containerElement.style.backgroundColor = "red";  
  }
}
