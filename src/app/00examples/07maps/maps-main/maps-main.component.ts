import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Subject } from 'rxjs';

interface Propiedad {
  title: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-maps-main',
  templateUrl: './maps-main.component.html',
  styleUrls: [ '../../../../../node_modules/mapbox-gl/dist/mapbox-gl.css' ],
  encapsulation: ViewEncapsulation.None
})
export class MapsMainComponent implements OnInit {

  initialPlace: [number, number] = [ -84.079629850278, 9.932810948514314 ];
  goPlace: Subject<[number, number]> = new Subject();

  places: Propiedad[] = [
    {
      title: 'Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      title: 'Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      title: 'Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    }
  ]

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }

  go(event : any, lngLat: [number, number]) {
    event.preventDefault();

    this.goPlace.next(lngLat);
  }
}
