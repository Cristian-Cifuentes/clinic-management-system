import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dashboard/pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/pages/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/pages/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/pages/register/register').then(m => m.RegisterComponent)
  },
  {
    path: 'doctors',
    loadComponent: () => import('./features/doctors/pages/doctor-list/doctor-list').then(m => m.DoctorListComponent)
  },
  {
    path: 'doctors/form',
    loadComponent: () => import('./features/doctors/pages/doctor-form/doctor-form').then(m => m.DoctorFormComponent)
  },
  {
  path: 'profile',
  loadComponent: () => import('./features/profile/pages/profile').then(m => m.ProfileComponent)
  }

];
