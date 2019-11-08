import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangePasswordComponent} from './change-password.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [
    {
        path: '',
        component: ChangePasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangePasswordRoutingModule {
}
