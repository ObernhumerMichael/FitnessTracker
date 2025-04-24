import { Routes } from '@angular/router';
import { HomeComponent } from "./homepage/home/home.component";
import { SkeletonComponent } from './homepage/skeleton/skeleton.component';
import { LoginComponent } from './login/login.component';

const routeConfig: Routes = [
    {
        path: '',
        component: SkeletonComponent,
        title: 'Home page',
        children: [
            { path: '', component: HomeComponent }
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "Login"
    },
    {
        path: '**',
        component: SkeletonComponent,
        title: 'Home page',
        children: [
            { path: '', component: HomeComponent }
        ],
    },
];
export default routeConfig;