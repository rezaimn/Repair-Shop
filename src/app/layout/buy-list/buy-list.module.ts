import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyListRoutingModule } from './buy-list-routing.module';
import { BuyListComponent } from './buy-list.component';
import { PageHeaderModule } from './../../shared';
import {SharedModule} from '../../shared/modules/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../../shared/interceptor/layout-http.interceptor';

@NgModule({
    imports: [
        CommonModule,
        BuyListRoutingModule,
        PageHeaderModule,
        SharedModule,

    ],
    declarations: [BuyListComponent],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ],
})
export class BuyListModule {}
