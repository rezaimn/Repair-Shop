import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';
import {SharedModule} from '../shared/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StartPageRoutingModule,
    SharedModule
  ],
  declarations: [StartPageComponent]
})
export class StartPageModule { }
