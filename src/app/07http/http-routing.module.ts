import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { MasterComponent } from '../shared/components/master/master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [{ path: 'basic', component: BasicComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRoutingModule {}
