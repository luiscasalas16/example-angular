import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsComponent } from './commands/commands.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { MasterComponent } from '../shared/components/master/master.component';

const routes: Routes =
[
  { 
    path: '', 
    component: MasterComponent,
    children: 
    [
      { path: 'commands', component: CommandsComponent },
      { path: 'environments', component: EnvironmentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
