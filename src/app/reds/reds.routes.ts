import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () =>import('./home/home.component'),
    },

    {
        path: 'perfil',
        loadComponent: () => import('./perfil/perfil.component'),
    },

    {
        path: 'publicaciones',
        loadComponent: () => import('./publicaciones/publicaciones.component'),
    },

    {
        path: 'grupos',
        loadComponent: () => import('./grupos/grupos.component'),
    },

    {
        path: 'eventos',
        loadComponent: () => import('./eventos/eventos.component'),
    },

] as Routes