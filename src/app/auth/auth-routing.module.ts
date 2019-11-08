import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'verify-code-request', pathMatch: 'prefix' },
      { path: 'verify-code-request',  loadChildren: () => import('./verify-code-request/verify-code-request.module').then(m => m.VerifyCodeRequestModule)  },
      { path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  },
      { path: 'forget-pass',loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordModule)},
      { path: 'change-pass', loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
