import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForgetPasswordComponent} from './forget-password.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [
    {
        path: '',
        component: ForgetPasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForgetPasswordRoutingModule {
}
