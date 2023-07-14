import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { CommandsComponent } from './commands/commands.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CommandsComponent, EnvironmentsComponent],
  imports: [CommonModule, ToolsRoutingModule, SharedModule],
})
export class ToolsModule {}
