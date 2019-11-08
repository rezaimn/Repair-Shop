import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'services-list', loadChildren: () => import('./services-list/services-list.module').then(m => m.ServicesListModule) },
            { path: 'buy-list', loadChildren: () => import('./buy-list/buy-list.module').then(m => m.BuyListModule) },
            { path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) },
            { path: 'shopping-basket', loadChildren: () => import('./shopping-basket/shopping-basket.module').then(m => m.ShoppingBasketModule) },
            { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
            { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
            { path: 'time-schedule', loadChildren: () => import('./time-schedule/time-schedule.module').then(m => m.TimeScheduleModule) },
            { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
