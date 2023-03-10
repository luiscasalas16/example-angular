import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-map-full',
  templateUrl: './map-full.component.html',
  styles: [
    `
    #mapa {
      height: 350px;
      width: 100%; 
    }
    `
  ]
})
export class MapFullComponent implements OnInit  {

  @Input() initialPlace: [number, number] = [0,0];
  @Input() goPlace: Subject<[number, number]> = new Subject();

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.initialPlace,
      zoom: 15
    });

    this.goPlace.subscribe(lngLat => {
      map.flyTo({
        center: lngLat
      });
    });
  }
}
