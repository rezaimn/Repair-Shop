import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesListComponent } from './services-list.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [
    {
        path: '',
        component: ServicesListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesListRoutingModule {}
