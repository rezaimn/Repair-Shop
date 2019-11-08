import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingBasketComponent } from './shopping-basket.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [
    {
        path: '',
        component: ShoppingBasketComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingBasketRoutingModule {}
