import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApplicationComponent } from './about/pages/application/application.component';
import { DeveloperComponent } from './about/pages/developer/developer.component';
import { NotFoundComponent } from './shared/page/not-found/not-found.component';
import { TemplatesModule } from './templates/templates.module';

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
	  path: 'components',
	  loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule )
  },
  {
	  path: 'templates',
	  loadChildren: () => import('./templates/templates.module').then( m => m.TemplatesModule )
  },
  {
	  path: 'directives',
	  loadChildren: () => import('./directives/directives.module').then( m => m.DirectivesModule )
  },
  {
	  path: 'examples',
	  loadChildren: () => import('./examples/examples.module').then( m => m.ExamplesModule )
  },
  {
	  path: 'frms',
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
