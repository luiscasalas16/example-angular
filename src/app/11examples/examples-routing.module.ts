import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './01counter/counter.component';
import { HeroeMainComponent } from './02heroes/heroe-main/heroe-main.component';
import { GifMainComponent } from './03gifs/gif-main/gif-main.component';
import { CountryMainComponent } from './04countries/pages/country-main/country-main.component';
import { CountryByCapitalComponent } from './04countries/pages/country-by-capital/country-by-capital.component';
import { CountryByNameComponent } from './04countries/pages/country-by-name/country-by-name.component';
import { CountryDetailComponent } from './04countries/pages/country-detail/country-detail.component';
import { SelectorsMainComponent } from './05selectors/selectors-main/selectors-main.component';
import { MasterComponent } from '../shared/components/master/master.component';

const routes: Routes = 
[
  { 
    path: '', 
    component: MasterComponent,
    children: 
    [
      { path: 'counter', component: CounterComponent },
      { path: 'heroes', component: HeroeMainComponent },
      { path: 'gifs', component: GifMainComponent },
      { 
        path: 'countries',
        component: CountryMainComponent,
        children: 
        [
          { path: 'countrybycapital', component: CountryByCapitalComponent },
          { path: 'countrybyname', component: CountryByNameComponent },
          { path: 'countrydetail/:id', component: CountryDetailComponent },
        ]
      },
      { path: 'selectors', component: SelectorsMainComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
