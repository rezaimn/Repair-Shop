import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { PageHeaderModule } from './../../shared';
import {SharedModule} from '../../shared/modules/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../../shared/interceptor/layout-http.interceptor';

@NgModule({
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        PageHeaderModule,
        SharedModule
    ],
    declarations: [AboutUsComponent],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ],
})
export class AboutUsModule {}
