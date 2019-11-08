import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page.component';
import {AuthGuard} from '../shared/guard';

const routes: Routes = [
    {
        path: '', component: StartPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StartPageRoutingModule {
}
