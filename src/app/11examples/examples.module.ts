import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { ExamplesRoutingModule } from './examples-routing.module';

import { CounterComponent } from './01counter/counter.component';

import { HeroeDetailComponent } from './02heroes/heroe-detail/heroe-detail.component';
import { HeroeListComponent } from './02heroes/heroe-list/heroe-list.component';
import { HeroeMainComponent } from './02heroes/heroe-main/heroe-main.component';
import { HeroeService } from './02heroes/services/heroes.service';

import { GifSearchComponent } from './03gifs/gif-search/gif-search.component';
import { GifResultsComponent } from './03gifs/gif-results/gif-results.component';
import { GifMainComponent } from './03gifs/gif-main/gif-main.component';
import { GifsService } from './03gifs/services/gifs.service';

import { CountryMainComponent } from './04countries/pages/country-main/country-main.component';
import { CountryByNameComponent } from './04countries/pages/country-by-name/country-by-name.component';
import { CountryByCapitalComponent } from './04countries/pages/country-by-capital/country-by-capital.component';
import { CountryDetailComponent } from './04countries/pages/country-detail/country-detail.component';
import { CountrySearchComponent } from './04countries/components/country-search/country-search.component';
import { CountryTableComponent } from './04countries/components/country-table/country-table.component';
import { CountriesService } from './04countries/services/countries.service';

import { SelectorsMainComponent } from './05selectors/selectors-main/selectors-main.component';

import { ChartsMainComponent } from './06charts/charts-main/chats-main.component';
import { ChartBarComponent } from './06charts/components/chart-bar/chart-bar.component';
import { ChartLineComponent } from './06charts/components/chart-line/chart-line.component';

import { MapsMainComponent } from './07maps/maps-main/maps-main.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CounterComponent,
    HeroeDetailComponent,
    HeroeListComponent,
    HeroeMainComponent,
    GifSearchComponent,
    GifResultsComponent,
    GifMainComponent,
    CountryMainComponent,
    CountryByNameComponent,
    CountryByCapitalComponent,
    CountryDetailComponent,
    CountrySearchComponent,
    CountryTableComponent,
    SelectorsMainComponent,
    ChartsMainComponent,
    ChartBarComponent,
    ChartLineComponent,
    MapsMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    ExamplesRoutingModule
  ],
  providers: [
    HeroeService,
    GifsService,
    CountriesService,
    SharedModule
  ]
})
export class ExamplesModule { }
