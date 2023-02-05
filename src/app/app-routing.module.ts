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
  //root route example
  //specific style component
  { 
    path: 'home', 
    component: HomeComponent 
  },
  //root and children route example
  //component with the style for child components
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
  //lazy example
  {
	  path: 'auth',
	  loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
	  path: 'base',
	  loadChildren: () => import('./base/base.module').then( m => m.BaseModule )
  },
  {
	  path: 'forms',
	  loadChildren: () => import('./frms/frms.module').then( m => m.FrmsModule )
  },
  //not fount route example
  { 
    path: 'notfound', 
    component: NotFoundComponent 
  },
  //default route redirection
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
