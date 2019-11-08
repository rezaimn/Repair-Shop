import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyCodeRequestComponent } from './verify-code-request.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [
    {
        path: '',
        component: VerifyCodeRequestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VerifyCodeRequestRoutingModule {}
