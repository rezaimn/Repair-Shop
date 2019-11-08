import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {LayoutComponent} from '../layout.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {InProcessComponent} from './in-process/in-process.component';
import {RequestsComponent} from './requests/requests.component';
import {ShopComponent} from './shop/shop.component';
import {WalletComponent} from './wallet/wallet.component';
import {ProductsComponent} from './shop/products/products.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [

    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'landing-page', pathMatch: 'prefix' },
            { path: 'landing-page',component:LandingPageComponent ,canActivate: [AuthGuard]},
            { path: 'in-process',component:InProcessComponent,canActivate: [AuthGuard] },
            { path: 'requests',component:RequestsComponent,canActivate: [AuthGuard] },
            { path: 'shop',component:ShopComponent ,canActivate: [AuthGuard]},
            { path: 'wallet',component:WalletComponent,canActivate: [AuthGuard] },
            { path: 'products/:id',component:ProductsComponent,canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
