import { provideRouter } from '@angular/router';

export const AUTH_ROUTES = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then(m => m.RegisterComponent)
  }
];
