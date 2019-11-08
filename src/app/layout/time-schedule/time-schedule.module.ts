import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeScheduleRoutingModule } from './time-schedule-routing.module';
import { TimeScheduleComponent } from './time-schedule.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../../shared/interceptor/layout-http.interceptor';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
    imports: [CommonModule,SharedModule, TimeScheduleRoutingModule],
    declarations: [TimeScheduleComponent],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ],
})
export class TimeScheduleModule {}
