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
	  path: 'examples',
	  loadChildren: () => import('./00examples/examples.module').then( m => m.ExamplesModule )
  },
  {
	  path: 'components',
	  loadChildren: () => import('./01components/components.module').then( m => m.ComponentsModule )
  },
  {
	  path: 'templates',
	  loadChildren: () => import('./02templates/templates.module').then( m => m.TemplatesModule )
  },
  {
	  path: 'directives',
	  loadChildren: () => import('./03directives/directives.module').then( m => m.DirectivesModule )
  },
  {
	  path: 'dependency',
	  loadChildren: () => import('./04dependency/dependency.module').then( m => m.DependencyModule )
  },
  {
	  path: 'routes',
	  loadChildren: () => import('./05routes/routes.module').then( m => m.RoutesModule )
  },
  {
	  path: 'frms',
	  loadChildren: () => import('./06frms/frms.module').then( m => m.FrmsModule )
  },
  {
	  path: 'http',
	  loadChildren: () => import('./07http/http.module').then( m => m.HttpModule )
  },
  {
	  path: 'imports',
	  loadChildren: () => import('./08imports/imports.module').then( m => m.ImportsModule )
  },
  {
	  path: 'api',
	  loadChildren: () => import('./09api/api.module').then( m => m.ApiModule )
  },
  {
	  path: 'tools',
	  loadChildren: () => import('./10tools/tools.module').then( m => m.ToolsModule )
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
