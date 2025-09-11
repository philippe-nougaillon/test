import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { AuthGuard } from './core/guards/auth';
import { Products } from './products/products';
import { Product } from './pages/product/product/product';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        children: [
            { 
                path: '',
                component: Products,
            },
            {
                path: 'product/:productId',
                component: Product,
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,        
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.routes),
    },
    {
        path: '**',
        component: NotFound,
    }
];
