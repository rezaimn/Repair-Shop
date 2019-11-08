import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeScheduleComponent } from './time-schedule.component';
import {AuthGuard} from '../../shared/guard';

const routes: Routes = [
    {
        path: '',
        component: TimeScheduleComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimeScheduleRoutingModule {}
