import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbCarouselModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {StatModule} from '../../shared';
import {SharedModule} from '../../shared/modules/shared.module';
import {InProcessComponent} from './in-process/in-process.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RequestsComponent} from './requests/requests.component';
import {ShopComponent} from './shop/shop.component';
import {WalletComponent} from './wallet/wallet.component';
import {Ng5SliderModule} from 'ng5-slider';
import {ProductsComponent} from './shop/products/products.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutHttpInterceptor} from '../../shared/interceptor/layout-http.interceptor';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        SharedModule,
        Ng5SliderModule

    ],
    declarations: [
        DashboardComponent,
        InProcessComponent,
        LandingPageComponent,
        RequestsComponent,
        ShopComponent,
        WalletComponent,
        ProductsComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: LayoutHttpInterceptor, multi: true}
    ],
})
export class DashboardModule {
}
