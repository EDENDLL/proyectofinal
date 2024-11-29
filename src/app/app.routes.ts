import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'auth',
        loadChildren: ()=> import('./auth/features/auth.routes'),
        //
    },

    {
        path: 'home',
        loadChildren: ()=> import('./reds/reds.routes'),
    },

    {
        path: '**',
        redirectTo: '/home',
    },
];
