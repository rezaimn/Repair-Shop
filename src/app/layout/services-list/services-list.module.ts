import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ServicesListRoutingModule } from './services-list-routing.module';
import { ServicesListComponent } from './services-list.component';
import { PageHeaderModule } from '../../shared';
import {SharedModule} from '../../shared/modules/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../../shared/interceptor/layout-http.interceptor';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        ServicesListRoutingModule,
        PageHeaderModule,
        SharedModule
    ],
    declarations: [ServicesListComponent],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ],
})
export class ServicesListModule {}
