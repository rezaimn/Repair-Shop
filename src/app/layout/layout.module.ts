import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../shared/interceptor/layout-http.interceptor';
import {SharedModule} from '../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule,
        SharedModule

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ],
})
export class LayoutModule {}
