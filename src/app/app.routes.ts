import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ReportComponent } from './components/report/report.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationComponent } from './components/notification/notification.component';


export const routes: Routes = [

    {
        path:'dashboard', component: DashboardComponent
    },
    {
        path:'header', component: HeaderComponent
    },
    {
        path:'sidebar', component: SidenavComponent
    },
    {
        path:'expense', component: ExpenseComponent
    },
    {
        path:'report', component: ReportComponent
    },
    {
        path:'analytics', component: AnalyticsComponent
    },
    {
        path:'settings', component: SettingsComponent
    },
    {
        path:'notify', component: NotificationComponent
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
