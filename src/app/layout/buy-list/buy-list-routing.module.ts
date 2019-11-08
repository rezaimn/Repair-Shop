import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyListComponent } from './buy-list.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [
    {
        path: '', component: BuyListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyListRoutingModule {
}
