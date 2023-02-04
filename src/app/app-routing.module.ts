import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApplicationComponent } from './about/pages/application/application.component';
import { DeveloperComponent } from './about/pages/developer/developer.component';
import { NotFoundComponent } from './shared/page/not-found/not-found.component';

const routes: Routes = 
[
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent, 
    children: 
    [
      { 
        path: '', 
        redirectTo: 'application', 
        pathMatch: 'full' 
      },
      { 
        path: 'application', 
        component: ApplicationComponent 
      },
      {
        path: 'developer', 
        component: DeveloperComponent 
      }
    ]
  },
  { 
    path: 'notfound', 
    component: NotFoundComponent 
  },
  {
	  path: 'auth',
	  loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '**',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
