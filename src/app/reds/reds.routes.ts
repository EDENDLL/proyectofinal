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
        path: 'mostrar-perfil',
        loadComponent: () => import('./perfil/mostrar-perfil/mostrar-perfil.component'),
    },

    {
        path: 'lista-publicaciones',
        loadComponent: () => import('./publicaciones/lista-publicaciones/lista-publicaciones.component'),
    },

   {
        path: 'crear-publicaciones',
        loadComponent: () => import('./publicaciones/crear-publicaciones/crear-publicaciones.component'),
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