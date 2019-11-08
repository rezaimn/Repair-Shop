import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingBasketRoutingModule } from './shopping-basket-routing.module';
import { ShoppingBasketComponent } from './shopping-basket.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared/modules/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../../shared/interceptor/layout-http.interceptor';

@NgModule({
    imports: [
        CommonModule,
        ShoppingBasketRoutingModule,
        PageHeaderModule,
        NgbModule,
        SharedModule,
    ],
    declarations: [ShoppingBasketComponent],
    providers:[
        { provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ],
})
export class ShoppingBasketModule {}
