import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Admin } from './pages/admin/admin';
import { AuthGuard } from './core/guards/auth';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login,        
    },
    {
        path: 'admin',
        component: Admin,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFound,
    }
];
