import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/dashboard/overview/overview.component';
import { PeriodicComponent } from './pages/dashboard/periodic/periodic.component';
import { RealTimeComponent } from './pages/dashboard/real-time/real-time.component';

// import { AuthService } from "./providers/auth-service";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: '',
                component: OverviewComponent
            }
        ]
    }
    /* {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthService],
        children: [
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: '',
                component: OverviewComponent
            },
            {
                path: 'reports',
                component: ReportsComponent
            },
            {
                path: 'boxes',
                component: BoxesComponent
            },
            {
                path: 'users',
                component: UsersComponent
            }
        ]
    } */
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
    DashboardComponent,
    LoginComponent,
    OverviewComponent,
    PeriodicComponent,
    RealTimeComponent
];